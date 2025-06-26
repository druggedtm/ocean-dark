import nodemailer from "nodemailer"

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function sendContactNotification({
  name,
  email,
  message,
}: {
  name: string
  email: string
  message: string
}) {
  const mailOptions = {
    from: `"Contact Form" <${process.env.SMTP_USER}>`,
    to: "contact@oceanic-advisors.com",
    // to: "vrushali.patil@alphalake.ai",
    subject: "New Contact Message",
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log("✅ Email sent:", info)
  } catch (err) {
    console.error("❌ Email sending failed:", err)
    throw err
  }
}
