import Api from '../../helpers/api'

function getTrainingCategories() {
  return Api().get('/trainingCategories')
}

export const ServiceTrainingCategories = {
  getTrainingCategories
}