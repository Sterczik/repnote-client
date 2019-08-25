import { snackbarActions as snackbar } from 'material-ui-snackbar-redux'
import { ServiceUsers } from '../../../services/users/users'
import { history } from '../../../helpers/history'
import { trainingConstants } from './constants'
import { ServiceTrainings } from '../../../services/trainings/trainings'

export function getTraining(id) {
  const getTrainingInProcess = () => ({
    type: trainingConstants.GET_TRAINING_IN_PROCESS
  })

  const getTrainingSuccess = (training) => ({
    type: trainingConstants.GET_TRAINING_SUCCESS,
    training
  })

  const getTrainingFailure = (error) => ({
    type: trainingConstants.GET_TRAINING_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(getTrainingInProcess())

    ServiceTrainings.getTraining(id)
      .then((res) => {
        const training = res.data
        dispatch(getTrainingSuccess(training))
      })
      .catch((error) => {
        // ServiceUsers.handleResponse(error)
        dispatch(getTrainingFailure(error))
        dispatch(snackbar.show({
          message: 'Something went wrong!'
        }))
      })
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
        history.push(`/trainings/${id}`, { new: true })
        dispatch(editTrainingSuccess(training))
        dispatch(snackbar.show({
          message: 'You successfully edited your Training.'
        }))
      })
      .catch((error) => {
        ServiceUsers.handleResponse(error)
        dispatch(editTrainingFailure(error))
        dispatch(snackbar.show({
          message: 'Something went wrong!'
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
        history.push('/my-trainings')
        dispatch(snackbar.show({
          message: 'You successfully removed your Training.'
        }))
      })
      .catch((error) => {
        ServiceUsers.handleResponse(error)
        dispatch(removeTrainingFailure(error))
        dispatch(snackbar.show({
          message: 'Something went wrong!'
        }))
      })
  }
}

export function switchTrainingStatus(id) {
  const switchTrainingStatusInProcess = () => ({
    type: trainingConstants.SWITCH_TRAINING_STATUS_IN_PROCESS
  })

  const switchTrainingStatusSuccess = (training) => ({
    type: trainingConstants.SWITCH_TRAINING_STATUS_SUCCESS,
    training
  })

  const switchTrainingStatusFailure = (error) => ({
    type: trainingConstants.SWITCH_TRAINING_STATUS_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(switchTrainingStatusInProcess())

    ServiceTrainings.switchTrainingStatus(id)
      .then((res) => {
        const training = res.data
        dispatch(switchTrainingStatusSuccess(training))
      })
      .catch((error) => {
        ServiceUsers.handleResponse(error)
        dispatch(switchTrainingStatusFailure(error))
        dispatch(snackbar.show({
          message: 'Something went wrong!'
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
        history.push(`trainings/${training.id}`, { new: true })
        dispatch(createTrainingSuccess(training))
        dispatch(snackbar.show({
          message: 'You successfully added your Training.'
        }))
      })
      .catch((error) => {
        ServiceUsers.handleResponse(error)
        dispatch(createTrainingFailure(error))
        dispatch(snackbar.show({
          message: 'Something went wrong!'
        }))
      })
  }
}
