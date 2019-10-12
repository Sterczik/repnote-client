import { snackbarActions as snackbar } from 'material-ui-snackbar-redux'
import { ServiceUsers } from '../../../services/users/users'
import { trainingsConstants } from './constants'
import { ServiceTrainings } from '../../../services/trainings/trainings'

export function getTrainings (
    page = localStorage.getItem('page') ? localStorage.getItem('page') : '1',
    perPage = localStorage.getItem('perPage') ? localStorage.getItem('perPage') : '24',
    sort = localStorage.getItem('sort') ? localStorage.getItem('sort') : '1',
    search = localStorage.getItem('search') ? localStorage.getItem('search') : ''
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
    
    ServiceTrainings.getTrainings({ page, perPage, sort, search })
      .then((res) => {
        const trainingsData = res.data
        dispatch(getTrainingsSuccess(trainingsData))
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

export function setSearch(value) {
  localStorage.setItem('search', value)

  return {
    type: trainingsConstants.SET_SEARCH,
    value
  }
}

export function setTrainingCategoryFilter(value) {
  localStorage.setItem('activeTrainingCategoryFilter', value)

  return {
    type: trainingsConstants.SET_TRAINING_CATEGORY_FILTER,
    value
  }
}

export function setTrainingAdvancementLevelFilter(value) {
  localStorage.setItem('activeTrainingAdvancementLevelFilter', value)

  return {
    type: trainingsConstants.SET_TRAINING_ADVANCEMENT_LEVEL_FILTER,
    value
  }
}
