import { z } from 'zod'

export const ContactFormSchema = z.object({
  name: z.string().nonempty('Name is required.'),
  organization: z.string(),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .nonempty('Email is required.')
    .min(6, { message: 'Email must be at least 6 characters.' }),
  service: z
    .string()
    .nonempty('Service is required.')
    .min(6, { message: 'Service must be at least 6 characters.' }),
  message: z
    .string()
    .nonempty('Message is required.')
    .min(6, { message: 'Message must be at least 6 characters.' })
})