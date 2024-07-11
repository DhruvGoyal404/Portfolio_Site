// import nodemailer from 'nodemailer';

// export async function POST(req) {
//   try {
//     const { firstname, lastname, email, phone, service, message } = await req.json();

//     if (!firstname || !lastname || !email || !phone || !service || !message) {
//       return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
//     }

//     // Validate phone number (example: simple length check)
//     if (phone.length !== 10) {
//       return new Response(JSON.stringify({ error: 'Invalid phone number' }), { status: 400 });
//     }

//     // Configure Nodemailer with your SMTP settings
//     const transporter = nodemailer.createTransport({
//       host: 'smtp.gmail.com',
//       port: 587,
//       secure: false,
//       auth: {
//         user: "dhruv621999goyal@gmail.com", // Your email address
//         pass: "pjpa wdcw wvdf nuoh", // Your app-specific password
//       },
//     });

//     // Define email content
//     const mailOptions = {
//       from: 'dhruv621999goyal@gmail.com', // Sender address (your email)
//       replyTo: email, // Sender's email address
//       to: 'dhruv621999goyal@gmail.com', // Recipient address
//       subject: 'New Message from Contact Form',
//       html: `
//         <p><strong>Name:</strong> ${firstname} ${lastname}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Service:</strong> ${service}</p>
//         <p><strong>Message:</strong><br/>${message}</p>
//       `,
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     return new Response(JSON.stringify({ message: 'Message sent successfully' }), { status: 200 });
//   } catch (error) {
//     console.error('Error processing request:', error);
//     return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
//   }
// }

// app/api/sendEmail/route.js

import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { firstname, lastname, email, phone, service, message } = await req.json();

    if (!firstname || !lastname || !email || !phone || !service || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    // Configure Nodemailer with your SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: "dhruv621999goyal@gmail.com", // Your email address
        pass: "pjpa wdcw wvdf nuoh", // Your app-specific password
      },
    });

    // Define email content
    const mailOptions = {
      from: email, // Sender address
      to: 'dhruv621999goyal@gmail.com', // Recipient address
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
