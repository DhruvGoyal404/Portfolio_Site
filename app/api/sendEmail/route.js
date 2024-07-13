import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { firstname, lastname, email, phone, service, message } = await req.json();

    if (!firstname || !lastname || !email || !phone || !service || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    // Configure Nodemailer with your SMTP settings from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER, // Your email address
        pass: process.env.SMTP_PASSWORD, // Your app-specific password
      },
    });

    // Define email content
    const mailOptions = {
      from: email, // Sender address
      to: process.env.SMTP_USER, // Recipient address
      subject: 'New Message from Contact Form',
      html: `
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Message sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
