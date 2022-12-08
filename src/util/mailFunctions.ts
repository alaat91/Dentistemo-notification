import Mail from 'nodemailer/lib/mailer'
import { transporter } from '../config/mail'

export const sendMail = async (mailOptions: Mail.Options) => {
  const options = {
    ...mailOptions,
    from: 'dentistimo@hotmail.com',
    subject: 'Dentistimo Bot - ' + mailOptions.subject ?? 'Notification',
  }
  const sendEmail = new Promise((resolve, reject) => {
    transporter.sendMail(options, (err, info) => {
      if (err) {
        reject(err)
      } else {
        resolve(info)
      }
    })
  })
  return sendEmail
}
