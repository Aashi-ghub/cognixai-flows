// Email notification utility using Resend REST API
// Direct API calls from browser - CORS handled by Resend or proxy

const RESEND_API_KEY = "re_RnFnXaeX_4AzUUcoVhVj2i19whbJV2tXa"
const RESEND_API_URL = "https://api.resend.com/emails"
const FROM_EMAIL = "onboarding@resend.dev"
const NOTIFICATION_EMAIL = "gaurav.singh345@gmail.com"

interface ContactSubmissionEmail {
  name: string
  email: string
  company?: string
  message: string
}

interface ConsultationSubmissionEmail {
  name: string
  email?: string
  phone?: string
  company?: string
  goal: string
  industry?: string
  teamSize?: string
  challenge?: string
  wantsCall?: boolean
  companyWebsite?: string
  automationRequirements?: string
}

export async function sendContactSubmissionEmail(data: ContactSubmissionEmail) {
  try {
    console.log('📧 Attempting to send contact submission email to:', NOTIFICATION_EMAIL);
    console.log('📧 Email data:', { name: data.name, email: data.email, company: data.company });
    
    const response = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [NOTIFICATION_EMAIL],
        subject: `New Contact Form Submission from ${data.name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>New Contact Submission</title>
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #18e2a5 0%, #0d9488 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 24px;">📧 New Contact Form Submission</h1>
              </div>
              <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
                <h2 style="color: #111827; margin-top: 0;">Contact Details</h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 10px; font-weight: bold; width: 150px;">Name:</td>
                    <td style="padding: 10px;">${data.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; font-weight: bold;">Email:</td>
                    <td style="padding: 10px;"><a href="mailto:${data.email}" style="color: #18e2a5;">${data.email}</a></td>
                  </tr>
                  ${data.company ? `
                  <tr>
                    <td style="padding: 10px; font-weight: bold;">Company:</td>
                    <td style="padding: 10px;">${data.company}</td>
                  </tr>
                  ` : ''}
                  <tr>
                    <td style="padding: 10px; font-weight: bold; vertical-align: top;">Message:</td>
                    <td style="padding: 10px; white-space: pre-wrap;">${data.message}</td>
                  </tr>
                </table>
                <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
                  <a href="mailto:${data.email}" style="display: inline-block; background: #18e2a5; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin-right: 10px;">Reply to ${data.name}</a>
                </div>
              </div>
              <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
                <p>This is an automated notification from CognixAI Labs</p>
              </div>
            </body>
          </html>
        `,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Unknown error' }))
      console.error("❌ Email sending error:", errorData)
      console.error("❌ Response status:", response.status, response.statusText)
      return { success: false, error: errorData }
    }

    const result = await response.json()
    console.log("✅ Email sent successfully! Email ID:", result.id)
    console.log("✅ Email sent to:", NOTIFICATION_EMAIL)
    return { success: true, data: result }
  } catch (error: any) {
    console.error("❌ Failed to send email:", error)
    return { success: false, error: error.message }
  }
}

export async function sendConsultationSubmissionEmail(data: ConsultationSubmissionEmail) {
  try {
    const isWorkflowAudit = !!(data.industry && data.teamSize && data.challenge)
    const subject = isWorkflowAudit 
      ? `🚀 New AI Workflow Audit Request from ${data.name}`
      : `📞 New Consultation Request from ${data.name}`
    
    console.log('📧 Attempting to send consultation email to:', NOTIFICATION_EMAIL);
    console.log('📧 Email type:', isWorkflowAudit ? 'Workflow Audit' : 'Consultation');
    console.log('📧 Email data:', { name: data.name, email: data.email, phone: data.phone, company: data.company });

    const response = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [NOTIFICATION_EMAIL],
        subject,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>New Consultation Request</title>
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #18e2a5 0%, #0d9488 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 24px;">${isWorkflowAudit ? '🚀 New AI Workflow Audit Request' : '📞 New Consultation Request'}</h1>
              </div>
              <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
                <h2 style="color: #111827; margin-top: 0;">Contact Information</h2>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                  <tr>
                    <td style="padding: 10px; font-weight: bold; width: 150px;">Name:</td>
                    <td style="padding: 10px;">${data.name}</td>
                  </tr>
                  ${data.email ? `
                  <tr>
                    <td style="padding: 10px; font-weight: bold;">Email:</td>
                    <td style="padding: 10px;"><a href="mailto:${data.email}" style="color: #18e2a5;">${data.email}</a></td>
                  </tr>
                  ` : ''}
                  ${data.phone ? `
                  <tr>
                    <td style="padding: 10px; font-weight: bold;">Phone:</td>
                    <td style="padding: 10px;"><a href="tel:${data.phone}" style="color: #18e2a5;">${data.phone}</a></td>
                  </tr>
                  ` : ''}
                  ${data.company ? `
                  <tr>
                    <td style="padding: 10px; font-weight: bold;">Company:</td>
                    <td style="padding: 10px;">${data.company}</td>
                  </tr>
                  ` : ''}
                  ${data.companyWebsite ? `
                  <tr>
                    <td style="padding: 10px; font-weight: bold;">Website:</td>
                    <td style="padding: 10px;"><a href="${data.companyWebsite}" target="_blank" style="color: #18e2a5;">${data.companyWebsite}</a></td>
                  </tr>
                  ` : ''}
                </table>

                ${isWorkflowAudit ? `
                <h2 style="color: #111827; margin-top: 30px;">AI Workflow Audit Details</h2>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                  <tr>
                    <td style="padding: 10px; font-weight: bold; width: 150px;">Industry:</td>
                    <td style="padding: 10px;">${data.industry}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; font-weight: bold;">Team Size:</td>
                    <td style="padding: 10px;">${data.teamSize}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; font-weight: bold; vertical-align: top;">Challenge:</td>
                    <td style="padding: 10px; white-space: pre-wrap;">${data.challenge}</td>
                  </tr>
                  ${data.automationRequirements ? `
                  <tr>
                    <td style="padding: 10px; font-weight: bold; vertical-align: top;">Automation Requirements:</td>
                    <td style="padding: 10px; white-space: pre-wrap;">${data.automationRequirements}</td>
                  </tr>
                  ` : ''}
                  <tr>
                    <td style="padding: 10px; font-weight: bold;">Wants Strategy Call:</td>
                    <td style="padding: 10px;">
                      ${data.wantsCall ? '<span style="background: #18e2a5; color: #000; padding: 4px 12px; border-radius: 4px; font-weight: bold;">✅ Yes</span>' : '<span style="background: #e5e7eb; color: #6b7280; padding: 4px 12px; border-radius: 4px;">No</span>'}
                    </td>
                  </tr>
                </table>
                ` : ''}

                <h2 style="color: #111827; margin-top: 30px;">Goal/Request</h2>
                <div style="background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #18e2a5; margin-bottom: 20px;">
                  <p style="margin: 0; white-space: pre-wrap;">${data.goal}</p>
                </div>

                <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
                  ${data.email ? `
                  <a href="mailto:${data.email}" style="display: inline-block; background: #18e2a5; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin-right: 10px;">Reply to ${data.name}</a>
                  ` : ''}
                  ${data.phone ? `
                  <a href="tel:${data.phone}" style="display: inline-block; background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin-right: 10px;">📞 Call ${data.name}</a>
                  ` : ''}
                </div>
              </div>
              <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
                <p>This is an automated notification from CognixAI Labs</p>
              </div>
            </body>
          </html>
        `,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Unknown error' }))
      console.error("❌ Email sending error:", errorData)
      console.error("❌ Response status:", response.status, response.statusText)
      return { success: false, error: errorData }
    }

    const result = await response.json()
    console.log("✅ Email sent successfully! Email ID:", result.id)
    console.log("✅ Email sent to:", NOTIFICATION_EMAIL)
    return { success: true, data: result }
  } catch (error: any) {
    console.error("❌ Failed to send email:", error)
    return { success: false, error: error.message }
  }
}
