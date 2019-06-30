import axios from 'axios'
import { snackbarActions as snackbar } from 'material-ui-snackbar-redux'
import { authHeader } from '../../../helpers/auth-header'
import { userService } from '../../../services/user'
import { history } from '../../../helpers/history'
import { trainingConstants } from './constants'
import { baseUrl } from '../../../helpers/baseUrl'

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

    const options = {
      headers: authHeader()
    }
    return axios.get(`${baseUrl}/api/app/trainings/${id}`, options)
      .then((res) => {
        const training = res.data
        dispatch(getTrainingSuccess(training))
      })
      .catch((error) => {
        userService.handleResponse(error)
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

    const options = {
      headers: authHeader()
    }

    return axios.put(`${baseUrl}/api/app/trainings/${id}`, data,  options)
      .then((res) => {
        const training = res.data
        history.push(`/trainings/${id}`, { new: true })
        dispatch(editTrainingSuccess(training))
        dispatch(snackbar.show({
          message: 'You successfully edited your Training.'
        }))
      })
      .catch((error) => {
        userService.handleResponse(error)
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

    const options = {
      headers: authHeader()
    }

    return axios.delete(`${baseUrl}/api/app/trainings/${id}`, options)
      .then((res) => {
        const training = res.data
        dispatch(removeTrainingSuccess(training))
        history.push('/my-trainings')
        dispatch(snackbar.show({
          message: 'You successfully removed your Training.'
        }))
      })
      .catch((error) => {
        userService.handleResponse(error)
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

    const options = {
      headers: authHeader()
    }

    return axios.put(`${baseUrl}/api/app/trainings/${id}/status`, {}, options)
      .then((res) => {
        const training = res.data
        dispatch(switchTrainingStatusSuccess(training))
      })
      .catch((error) => {
        userService.handleResponse(error)
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

    const options = {
      headers: authHeader()
    }

    return axios.post(`${baseUrl}/api/app/trainings/`, data, options)
      .then((res) => {
        const training = res.data
        history.push(`trainings/${training.id}`, { new: true })
        dispatch(createTrainingSuccess(training))
        dispatch(snackbar.show({
          message: 'You successfully added your Training.'
        }))
      })
      .catch((error) => {
        userService.handleResponse(error)
        dispatch(createTrainingFailure(error))
        dispatch(snackbar.show({
          message: 'Something went wrong!'
        }))
      })
  }
}
