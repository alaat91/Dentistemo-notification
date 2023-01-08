import { format } from 'date-fns'

const newBooking = (
  name: string,
  dentist: string,
  time: number,
  address: string
) => {
  const date = new Date(time)
  return `Hi ${name},\n\nYou have a new booking with ${dentist} on the ${format(
    date,
    "do 'of' MMMM, y"
  )} at ${format(
    date,
    'kk:mm'
  )}.\nThe clinic is located at ${address}. We hope to see you soon!\n\nBest regards,\nTeam Dentistimo
    `
}

export default { newBooking }
