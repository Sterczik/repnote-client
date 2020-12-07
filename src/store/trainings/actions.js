import i18n from 'i18next'
import { snackbarActions as snackbar } from 'material-ui-snackbar-redux'
import { ServiceUsers } from 'services/users/users'
import { trainingsConstants } from './constants'
import { ServiceTrainings } from 'services/trainings/trainings'

export function getTrainings (
    page = localStorage.getItem('listing_page') ? localStorage.getItem('listing_page') : '1',
    perPage = localStorage.getItem('listing_perPage') ? localStorage.getItem('listing_perPage') : '24',
    sort = localStorage.getItem('listing_sort') ? localStorage.getItem('listing_sort') : '1',
    search = localStorage.getItem('listing_search') ? localStorage.getItem('listing_search') : '',
    categoryFilter = localStorage.getItem('listing_categoryFilter') ? localStorage.getItem('listing_categoryFilter') : '0',
    advancementLevelFilter = localStorage.getItem('listing_advancementLevelFilter') ? localStorage.getItem('listing_advancementLevelFilter') : '0'
  ) {
  const getTrainingsInProcess = () => ({
    type: trainingsConstants.GET_TRAININGS_IN_PROCESS
  })

  const getTrainingsSuccess = (trainingsData, sort) => ({
    type: trainingsConstants.GET_TRAININGS_SUCCESS,
    trainingsData,
    sort
  })

  const getTrainingsFailure = (error) => ({
    type: trainingsConstants.GET_TRAININGS_FAILURE,
    error
  })

  page = parseInt(page)
  perPage = parseInt(perPage)
  sort = parseInt(sort)
  categoryFilter = parseInt(categoryFilter)
  advancementLevelFilter = parseInt(advancementLevelFilter)

  localStorage.setItem('listing_page', page)
  localStorage.setItem('listing_perPage', perPage)
  localStorage.setItem('listing_sort', sort)
  localStorage.setItem('listing_categoryFilter', categoryFilter)
  localStorage.setItem('listing_advancementLevelFilter', advancementLevelFilter)

  return (dispatch) => {
    dispatch(getTrainingsInProcess())
    
    ServiceTrainings.getTrainings({ page, perPage, sort, search, categoryFilter, advancementLevelFilter })
      .then((res) => {
        const trainingsData = res.data
        dispatch(getTrainingsSuccess(trainingsData, sort))
      })
      .catch((error) => {
        ServiceUsers.handleResponse(error)
        dispatch(getTrainingsFailure(error))
        dispatch(snackbar.show({
          message: i18n.getResource(i18n.language, 'translation', 'global.errors.internalServerError')
        }))
      })
  }
}

export function setSearch(value) {
  localStorage.setItem('listing_search', value)

  return {
    type: trainingsConstants.SET_SEARCH,
    value
  }
}

export function setSort(value) {
  localStorage.setItem('listing_sort', value)

  return {
    type: trainingsConstants.SET_SORT,
    value
  }
}

export function setTrainingCategoryFilter(value) {
  localStorage.setItem('listing_categoryFilter', value)

  return {
    type: trainingsConstants.SET_TRAINING_CATEGORY_FILTER,
    value
  }
}

export function setTrainingAdvancementLevelFilter(value) {
  localStorage.setItem('listing_advancementLevelFilter', value)

  return {
    type: trainingsConstants.SET_TRAINING_ADVANCEMENT_LEVEL_FILTER,
    value
  }
}

export function setPage(value) {
  localStorage.setItem('listing_page', value)

  return {
    type: trainingsConstants.SET_PAGE,
    value
  }
}
