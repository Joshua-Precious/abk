import { Resend } from 'resend';

// Placeholder API key
export const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789');

export const sendRegistrationEmail = async (email: string, fullName: string, teamName: string) => {
  try {
    const data = await resend.emails.send({
      from: 'Registration <noreply@yourdomain.com>',
      to: email,
      subject: 'Registration Confirmed',
      html: `
        <h1>Welcome, ${fullName}!</h1>
        <p>Your team <strong>${teamName}</strong> has been successfully registered.</p>
        <p>Thank you for joining!</p>
      `,
    });
    console.log('Email sent successfully:', data);
    return data;
  } catch (error) {
    console.error('Error sending email:', error);
    // Continue execution even if email fails, it's just a notification
    return null;
  }
};
