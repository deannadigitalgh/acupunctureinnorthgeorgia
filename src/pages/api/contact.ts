// @ts-check
/** @type {import('astro').APIRoute} */
export async function POST({ request }) {
  console.log('[Contact API] Received POST request');
  try {
    const formData = await request.formData();
    
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const service = formData.get('service');
    const message = formData.get('message') || '';

    // Validate required fields
    if (!name || !phone || !email) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Formspree integration
    // Use env variable in production, or fallback to local testing mode
    const FORMSPREE_FORM_ID = import.meta.env.FORMSPREE_FORM_ID || 'YOUR_FORM_ID';
    const isProduction = process.env.NODE_ENV === 'production';
    
    if (!isProduction && FORMSPREE_FORM_ID === 'YOUR_FORM_ID') {
      console.warn('⚠️  Formspree not configured for local testing. Set FORMSPREE_FORM_ID in .env.local or use your actual Form ID.');
      // For local testing, return success without actually sending
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Thank you! (Local test mode - no email sent)',
          data: { name, phone, email, service, message }
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

    // Build form data for Formspree (expects multipart/form-data)
    const formDataToSend = new FormData();
    formDataToSend.append('name', name);
    formDataToSend.append('phone', phone);
    formDataToSend.append('email', email);
    if (service) formDataToSend.append('service', service);
    if (message) formDataToSend.append('message', message);
    formDataToSend.append('_subject', 'New appointment request from acupunctureinnorthgeorgia.com');

    // Send email via Formspree
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: formDataToSend,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to send email');
    }

    // Log submission for debugging (remove in production or use proper logging service)
    console.log('New contact form submission:', {
      name,
      phone,
      email,
      service,
      message,
      timestamp: new Date().toISOString()
    });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Thank you! We will call you within minutes.' 
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Form submission error:', error);
    
    return new Response(
      JSON.stringify({ error: 'Failed to submit form. Please call us directly.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
