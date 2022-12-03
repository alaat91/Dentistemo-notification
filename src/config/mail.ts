import nodemailer from 'nodemailer'
import * as dotenv from 'dotenv'
dotenv.config()

export const transporter = nodemailer.createTransport({
  pool: true,
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    ciphers: 'SSLv3',
  },
})

transporter.verify(function (error) {
  if (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  } else {
    // eslint-disable-next-line no-console
    console.log('Server is ready to send messages')
  }
})