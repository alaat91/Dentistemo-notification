export interface MQTTResponse {
  user_id: string
  error?: {
    code: number
    message: string
  }
}
