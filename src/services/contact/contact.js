import Api from 'helpers/api'

function sendContactMessage(messageData) {
  return Api().post('/contactMessages', messageData)
}

export const ServiceContact = {
  sendContactMessage
}