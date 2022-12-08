import Mail from 'nodemailer/lib/mailer'
import { transporter } from '../config/mail'

export const sendMail = async (mailOptions: Mail.Options) => {
  const options = {
    ...mailOptions,
    from: 'dentistimo@hotmail.com',
    subject: 'Dentistimo Bot - ' + mailOptions.subject ?? 'Notification',
  }
  transporter.sendMail(options, (err, info) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log('Error occurred. ' + err.message)
      return process.exit(1)
    }
  })
}
