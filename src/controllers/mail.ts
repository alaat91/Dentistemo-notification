import Mail from 'nodemailer/lib/mailer'
import Notification from '../models/Notification'
import { sendMail } from '../util/mailFunctions'

export const sendGeneralEmail = async (mailOptions: Mail.Options) => {
  try {
    await sendMail(mailOptions)
    const { to, subject, text } = mailOptions
    const notification = new Notification({ to, subject, text })
    return await notification.save()
  } catch (error) {
    return error
  }
}

export const getUserNotifications = async (email: string) => {
  try {
    const notifications = await Notification.find({ to: email })
    return notifications
  } catch (error) {
    return error
  }
}
