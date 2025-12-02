const RESEND_ENDPOINT = 'https://api.resend.com/emails';

const sanitize = value => (typeof value === 'string' ? value.trim() : '');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const {
    name = '',
    email = '',
    phone = '',
    service = '',
    timeline = '',
    message = '',
    honeypot = '',
  } = req.body || {};

  if (honeypot) {
    return res.status(400).json({ message: 'Spam detected.' });
  }

  const clean = {
    name: sanitize(name),
    email: sanitize(email),
    phone: sanitize(phone),
    service: sanitize(service),
    timeline: sanitize(timeline),
    message: sanitize(message),
  };

  if (!clean.name || !clean.email || !clean.message) {
    return res.status(400).json({ message: 'Name, email, and project details are required.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || 'adrianmarquezroofingllc@gmail.com';
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || 'Marquez Roofing <notifications@marquezroofs.com>';

  if (!apiKey || !toEmail) {
    return res.status(500).json({ message: 'Contact form email is not configured.' });
  }

  const subject = `Website contact: ${clean.service || 'Roofing inquiry'}`;

  const plainText = `New website inquiry

Name: ${clean.name}
Email: ${clean.email}
Phone: ${clean.phone || 'N/A'}
Service: ${clean.service || 'Not specified'}
Timeline: ${clean.timeline || 'Not specified'}

Message:
${clean.message}`;

  const html = `
    <p><strong>New website inquiry</strong></p>
    <p><strong>Name:</strong> ${clean.name}</p>
    <p><strong>Email:</strong> ${clean.email}</p>
    <p><strong>Phone:</strong> ${clean.phone || 'N/A'}</p>
    <p><strong>Service:</strong> ${clean.service || 'Not specified'}</p>
    <p><strong>Timeline:</strong> ${clean.timeline || 'Not specified'}</p>
    <p><strong>Message:</strong><br>${clean.message.replace(/\n/g, '<br>')}</p>
  `;

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: clean.email,
        subject,
        text: plainText,
        html,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Resend error:', errorText);
      return res.status(500).json({ message: 'Unable to send message at this time.' });
    }

    return res.status(200).json({ message: 'Message sent' });
  } catch (error) {
    console.error('Contact API error:', error);
    return res.status(500).json({ message: 'Unable to send message at this time.' });
  }
}
