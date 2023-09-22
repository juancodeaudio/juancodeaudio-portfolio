interface ContactFormEmailProps {
  name: string
  organization: string
  email: string
  service: string
  message: string
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  organization,
  email,
  service,
  message
}) => (
  <div>
    <h1>Contact form submission</h1>
    <p>
      From <strong>{name}</strong> at {email}
    </p>
    <h2>Organization:</h2>
    <p>{organization}</p>
    <h2>Service:</h2>
    <p>{service}</p>
    <h2>Message:</h2>
    <p>{message}</p>
  </div>
)

export default ContactFormEmail