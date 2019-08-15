import axios from 'axios'
import { snackbarActions as snackbar } from 'material-ui-snackbar-redux'
import { authHeader } from '../../../helpers/auth-header'
import { ServiceUsers } from '../../../services/users/users'
import { trainingsConstants } from './constants'
import { baseUrl } from '../../../helpers/baseUrl'

export function getTrainings (
    page = localStorage.getItem('page') ? localStorage.getItem('page') : '1',
    perPage = localStorage.getItem('perPage') ? localStorage.getItem('perPage') : '24',
    sort = localStorage.getItem('sort') ? localStorage.getItem('sort') : '1'
  ) {
  const getTrainingsInProcess = () => ({
    type: trainingsConstants.GET_TRAININGS_IN_PROCESS
  })

  const getTrainingsSuccess = (trainingsData) => ({
    type: trainingsConstants.GET_TRAININGS_SUCCESS,
    trainingsData
  })

  const getTrainingsFailure = (error) => ({
    type: trainingsConstants.GET_TRAININGS_FAILURE,
    error
  })

  page = parseInt(page)
  perPage = parseInt(perPage)
  sort = parseInt(sort)

  localStorage.setItem('page', page)
  localStorage.setItem('perPage', perPage)
  localStorage.setItem('sort', sort)

  return (dispatch) => {
    dispatch(getTrainingsInProcess())

    const options = {
      headers: authHeader()
    }
    return axios.get(`${baseUrl}/api/app/trainings?page=${page}&perPage=${perPage}&sort=${sort}`, options)
      .then((res) => {
        const trainingsData = res.data
        dispatch(getTrainingsSuccess(trainingsData))
        dispatch(snackbar.show({
          message: 'You successfully fetched Trainings.'
        }))
      })
      .catch((error) => {
        ServiceUsers.handleResponse(error)
        dispatch(getTrainingsFailure(error))
        dispatch(snackbar.show({
          message: 'Something went wrong!'
        }))
      })
  }
}

export function getMyTrainings() {
  const getTrainingsInProcess = () => ({
    type: trainingsConstants.GET_TRAININGS_IN_PROCESS
  })

  const getTrainingsSuccess = (trainings) => ({
    type: trainingsConstants.GET_TRAININGS_SUCCESS,
    trainings
  })

  const getTrainingsFailure = (error) => ({
    type: trainingsConstants.GET_TRAININGS_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(getTrainingsInProcess())

    const options = {
      headers: authHeader()
    }
    return axios.get(`${baseUrl}/api/app/trainings/my`, options)
      .then((res) => {
        const trainings = res.data
        dispatch(getTrainingsSuccess(trainings))
        dispatch(snackbar.show({
          message: 'You successfully fetched your Trainings.'
        }))
      })
      .catch((error) => {
        ServiceUsers.handleResponse(error)
        dispatch(getTrainingsFailure(error))
        dispatch(snackbar.show({
          message: 'Something went wrong!'
        }))
      })
  }
}
