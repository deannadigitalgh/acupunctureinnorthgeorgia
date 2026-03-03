// @ts-check
/** @type {import('astro').APIRoute} */
export async function POST({ request }) {
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

    // Formspree integration - Replace FORM_ID with your actual Form ID from https://formspree.io/
    const FORMSPREE_FORM_ID = import.meta.env.FORMSPREE_FORM_ID || 'YOUR_FORM_ID';
    const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

    // Send email via Formspree
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        service,
        message,
        source: "acupunctureinnorthgeorgia.com"
      })
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
