import Api from '../../helpers/api'

function getTraining(id) {
  return Api(true).get(`/trainings/${id}`)
}

function editTraining(data, id) {
  return Api(true).put(`/trainings/${id}`, data)
}

function removeTraining(id) {
  return Api(true).delete(`/trainings/${id}`)
}

function switchTrainingStatus(id) {
  return Api(true).put(`/trainings/${id}/status`)
}

function createTraining(data) {
  return Api(true).post('/trainings', data)
}

function getTrainings({ page, perPage, sort, search, categoryFilter, advancementLevelFilter }) {
  return Api(true).get(`/trainings?page=${page}&perPage=${perPage}&sort=${sort}&search=${search}&categoryFilter=${categoryFilter}&advancementLevelFilter=${advancementLevelFilter}`)
}

function likeTraining(id) {
  return Api(true).post(`/trainings/${id}/like`)
}

function unlikeTraining(id) {
  return Api(true).delete(`/trainings/${id}/like`)
}

function cloneTraining(id) {
  return Api(true).post(`/trainings/${id}/clone`)
}

export const ServiceTrainings = {
  getTraining,
  editTraining,
  removeTraining,
  switchTrainingStatus,
  createTraining,
  getTrainings,
  likeTraining,
  unlikeTraining,
  cloneTraining
}