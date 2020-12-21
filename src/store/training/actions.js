import i18n from 'i18next'
import { snackbarActions as snackbar } from 'material-ui-snackbar-redux'
import { history } from 'helpers/history'
import { trainingConstants } from './constants'
import { ServiceTrainings } from 'services/trainings/trainings'

export function getTraining(id) {
  const getTrainingInProcess = () => ({
    type: trainingConstants.GET_TRAINING_IN_PROCESS
  })

  const getTrainingSuccess = (training) => ({
    type: trainingConstants.GET_TRAINING_SUCCESS,
    training
  })

  const getTrainingAuthFailure = () => ({
    type: trainingConstants.GET_TRAINING_AUTH_FAILURE
  })

  const getTrainingFailure = () => ({
    type: trainingConstants.GET_TRAINING_FAILURE
  })

  return (dispatch) => {
    dispatch(getTrainingInProcess())

    const response = ServiceTrainings.getTraining(id)
      .then((res) => {
        const training = res.data
        dispatch(getTrainingSuccess(training))
        return true
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          dispatch(getTrainingAuthFailure())
        } else {
          dispatch(getTrainingFailure())
          dispatch(snackbar.show({
            message: i18n.getResource(i18n.language, 'translation', 'global.errors.internalServerError')
          }))
        }
        return false
      })

    return response
  }
}

export function editTraining(trainingData, id) {
  const editTrainingInProcess = () => ({
    type: trainingConstants.EDIT_TRAINING_IN_PROCESS
  })

  const editTrainingSuccess = (training) => ({
    type: trainingConstants.EDIT_TRAINING_SUCCESS,
    training
  })

  const editTrainingFailure = (error) => ({
    type: trainingConstants.EDIT_TRAINING_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(editTrainingInProcess())

    const data = JSON.stringify({
      ...trainingData
    })

    ServiceTrainings.editTraining(data, id)
      .then((res) => {
        const training = res.data
        dispatch(editTrainingSuccess(training))
        history.push('/landing')
        history.push(`/trainings/${id}`)
      })
      .catch((error) => {
        dispatch(editTrainingFailure(error))
        dispatch(snackbar.show({
          message: i18n.getResource(i18n.language, 'translation', 'global.errors.internalServerError')
        }))
      })
  }
}

export function removeTraining(id) {
  const removeTrainingInProcess = () => ({
    type: trainingConstants.REMOVE_TRAINING_IN_PROCESS
  })

  const removeTrainingSuccess = (training) => ({
    type: trainingConstants.REMOVE_TRAINING_SUCCESS,
    id: training.id
  })

  const removeTrainingFailure = (error) => ({
    type: trainingConstants.REMOVE_TRAINING_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(removeTrainingInProcess())

    ServiceTrainings.removeTraining(id)
      .then((res) => {
        const training = res.data
        dispatch(removeTrainingSuccess(training))
        history.push('/account')
        dispatch(snackbar.show({
          message: i18n.getResource(i18n.language, 'translation', 'global.messages.removeTraining')
        }))
      })
      .catch((error) => {
        dispatch(removeTrainingFailure(error))
        dispatch(snackbar.show({
          message: i18n.getResource(i18n.language, 'translation', 'global.errors.internalServerError')
        }))
      })
  }
}

export function switchTrainingStatus(id) {
  const switchTrainingStatusInProcess = () => ({
    type: trainingConstants.SWITCH_TRAINING_STATUS_IN_PROCESS
  })

  const switchTrainingStatusSuccess = (status) => ({
    type: trainingConstants.SWITCH_TRAINING_STATUS_SUCCESS,
    private: status.private
  })

  const switchTrainingStatusFailure = (error) => ({
    type: trainingConstants.SWITCH_TRAINING_STATUS_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(switchTrainingStatusInProcess())

    ServiceTrainings.switchTrainingStatus(id)
      .then((res) => {
        const status = res.data
        dispatch(switchTrainingStatusSuccess(status))
      })
      .catch((error) => {
        dispatch(switchTrainingStatusFailure(error))
        dispatch(snackbar.show({
          message: i18n.getResource(i18n.language, 'translation', 'global.errors.internalServerError')
        }))
      })
  }
}

export function createTraining(trainingData) {
  const createTrainingInProcess = () => ({
    type: trainingConstants.CREATE_TRAINING_IN_PROCESS
  })

  const createTrainingSuccess = (training) => ({
    type: trainingConstants.CREATE_TRAINING_SUCCESS,
    training
  })

  const createTrainingFailure = (error) => ({
    type: trainingConstants.CREATE_TRAINING_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(createTrainingInProcess())

    const data = JSON.stringify({
      ...trainingData
    })

    ServiceTrainings.createTraining(data)
      .then((res) => {
        const training = res.data
        dispatch(createTrainingSuccess(training))
        history.push('/landing')
        history.push(`/trainings/${training.id}`)
      })
      .catch((error) => {
        dispatch(createTrainingFailure(error))
        dispatch(snackbar.show({
          message: i18n.getResource(i18n.language, 'translation', 'global.errors.internalServerError')
        }))
      })
  }
}

export function likeTraining(id, like) {
  const likeTrainingInProcess = () => ({
    type: trainingConstants.LIKE_TRAINING_IN_PROCESS
  })

  const likeTrainingSuccess = (like) => ({
    type: trainingConstants.LIKE_TRAINING_SUCCESS,
    like
  })

  const likeTrainingFailure = (error) => ({
    type: trainingConstants.LIKE_TRAINING_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(likeTrainingInProcess())

    const likeQuery = like ? ServiceTrainings.likeTraining(id) : ServiceTrainings.unlikeTraining(id)
    likeQuery
      .then(() => {
        dispatch(likeTrainingSuccess(like))
      })
      .catch((error) => {
        dispatch(likeTrainingFailure(error))
        dispatch(snackbar.show({
          message: i18n.getResource(i18n.language, 'translation', 'global.errors.internalServerError')
        }))
      })
  }
}

export function cloneTraining(id) {
  const cloneTrainingInProcess = () => ({
    type: trainingConstants.CLONE_TRAINING_IN_PROCESS
  })

  const cloneTrainingSuccess = (training) => ({
    type: trainingConstants.CLONE_TRAINING_SUCCESS,
    training
  })

  const cloneTrainingFailure = (error) => ({
    type: trainingConstants.CLONE_TRAINING_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(cloneTrainingInProcess())

    ServiceTrainings.cloneTraining(id)
      .then((res) => {
        const training = res.data
        dispatch(cloneTrainingSuccess(training))
        history.push('/landing')
        history.push(`/trainings/${training.id}`)
      })
      .catch((error) => {
        dispatch(cloneTrainingFailure(error))
        dispatch(snackbar.show({
          message: i18n.getResource(i18n.language, 'translation', 'global.errors.internalServerError')
        }))
      })
  }
}