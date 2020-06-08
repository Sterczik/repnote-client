import Api from 'helpers/api'

function getExerciseCategories() {
  return Api().get('/exerciseCategories')
}

export const ServiceExerciseCategories = {
  getExerciseCategories
}