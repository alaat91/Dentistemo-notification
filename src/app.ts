import mqtt from 'mqtt'
import * as dotenv from 'dotenv'
dotenv.config()

const client = mqtt.connect(process.env.MQTT_URI as string)

client.on('connect', () => {
  client.subscribe('notifier', (err) => {
    if (!err) {
      client.publish('notifier', 'Hello mqtt')
    }
  })
})

client.on('message', (topic, message) => {
  switch (topic) {
    case 'notifier':
      // eslint-disable-next-line no-console
      console.log(message.toString())
      client.end()
      break
  }
})
