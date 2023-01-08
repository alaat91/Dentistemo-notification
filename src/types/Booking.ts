import { MQTTResponse } from './MQTTResponse'

export interface Booking extends MQTTResponse {
  dentist_id: string
  date: number
}
