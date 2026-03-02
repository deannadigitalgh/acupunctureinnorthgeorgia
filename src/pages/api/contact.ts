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

    // In production, integrate with your email service (Formspree, EmailJS, etc.)
    // For now, log the submission
    console.log('New contact form submission:', {
      name,
      phone,
      email,
      service,
      message,
      timestamp: new Date().toISOString()
    });

    // TODO: Replace with actual email integration
    // Example using Formspree or similar service:
    /*
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, email, service, message })
    });
    
    if (!response.ok) {
      throw new Error('Failed to send email');
    }
    */

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
