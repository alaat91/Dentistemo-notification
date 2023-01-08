import Mail from 'nodemailer/lib/mailer'
import Notification from '../models/Notification'
import { Booking } from '../types/Booking'
import { Dentist } from '../types/Dentist'
import { User } from '../types/User'
import emailFormats from '../util/emailFormats'
import { getMQTTResponse } from '../util/getMQTTResponse'
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


export const sendNewBookingEmail = async (booking: Booking) => {
  const user = await getMQTTResponse('auth/user/return', 'notifier/user/return', {user_id: booking.user_id}) as User
  const dentist = await getMQTTResponse('clinics/dentists/get', 'notifier/dentists/get', {id: booking.dentist_id}) as Dentist
  const mailOptions = {
    to: user.email,
    subject: 'New Booking',
    text: emailFormats.newBooking(`${user.firstName} ${user.lastName}`, dentist.clinic.name, booking.date, dentist.clinic.address)
  }
  return await sendGeneralEmail(mailOptions)
}
