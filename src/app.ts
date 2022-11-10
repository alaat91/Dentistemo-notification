import mqtt from 'mqtt'
import * as dotenv from 'dotenv'
dotenv.config()

const client = mqtt.connect(process.env.MQTT_URI as string)

client.on('connect', () => {
  client.subscribe('test', (err) => {
    if (!err) {
      client.publish('test', 'Hello mqtt')
    }
  })
})

client.on('message', (topic, message) => {
  switch (topic) {
    case 'test':
      // eslint-disable-next-line no-console
      console.log(message.toString())
      client.end()
      break
  }
})
