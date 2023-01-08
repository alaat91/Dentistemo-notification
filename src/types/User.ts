import { MQTTResponse } from "./MQTTResponse"

export interface User extends MQTTResponse {
  _id: string
  firstName: string
  lastName: string
  email: string
}
