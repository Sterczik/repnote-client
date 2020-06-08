import Api from 'helpers/api'

function getTrainingAdvancementLevels() {
  return Api().get('/trainingAdvancementLevels')
}

export const ServiceTrainingAdvancementLevels = {
  getTrainingAdvancementLevels
}