import { Document } from "mongoose"

export default interface Notification extends Document{
    to: string
    subject: string
    text: string
}