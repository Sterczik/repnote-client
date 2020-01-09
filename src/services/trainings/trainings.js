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

function getTrainings({ page, perPage, sort, search }) {
  return Api(true).get(`/trainings?page=${page}&perPage=${perPage}&sort=${sort}&search=${search}`)
}

function likeTraining(id) {
  return Api(true).post(`/trainings/${id}/like`)
}

function unlikeTraining(id) {
  return Api(true).delete(`/trainings/${id}/like`)
}

export const ServiceTrainings = {
  getTraining,
  editTraining,
  removeTraining,
  switchTrainingStatus,
  createTraining,
  getTrainings,
  likeTraining,
  unlikeTraining
}