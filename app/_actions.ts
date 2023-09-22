'use server'

import { z } from 'zod'
import { ContactFormSchema } from '@/lib/schema'
import { Resend } from 'resend'
import ContactFormEmail from '@/app/_emails/ContactFormEmail'

type ContactFormInputs = z.infer<typeof ContactFormSchema>
const resend = new Resend(process.env.RESEND_API_KEY)

export async function addEntry(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)

  if (result.success) {
    return { success: true, data: result.data }
  }

  if (result.error) {
    return { success: false, error: result.error.format() }
  }
}

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)

  if (result.success) {
    const { name, organization, email, service, message } = result.data
    try {
      const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: 'alvaradovallejo.juan@gmail.com',
        reply_to: email,
        subject: 'Contact form submission',
        text: `Name: ${name}\nEmail: ${email}\nOrganization: ${organization}\nService: ${service}\nMessage: ${message}`,
        react: ContactFormEmail({ name, organization, email, service, message })
      })
      return { success: true, data }
    } catch (error) {
      return { success: false, error }
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() }
  }
}