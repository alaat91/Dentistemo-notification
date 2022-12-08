import mongoose from 'mongoose'
import Notification from '../types/Notification'

const NotificationSchema = new mongoose.Schema(
  {
    to: String,
    subject: String,
    text: String,
  },
  { timestamps: true }
)

export default mongoose.model<Notification>('Notification', NotificationSchema)