import mqtt from 'mqtt'
import * as dotenv from 'dotenv'
import { sendMail } from './util/mailFunctions'
import Mail from 'nodemailer/lib/mailer'
dotenv.config()

const client = mqtt.connect(
  (process.env.MQTT_URI as string) || 'mqtt://localhost:1883'
)

client.on('connect', () => {
  client.subscribe('notifier/#')
})

client.on('message', (topic, message) => {
  switch (topic) {
    case 'notifier/email/user': {
      const request = JSON.parse(message.toString()) as Mail.Options
      sendMail(request)
    }
  }
})
