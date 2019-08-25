import { trainingsConstants } from './constants'

const trainingsReducerDefaultState = {
  total: '0',
  page: localStorage.getItem('page') ? localStorage.getItem('page') : 1,
  perPage: localStorage.getItem('perPage') ? localStorage.getItem('perPage') : 12,
  search: localStorage.getItem('search') ? localStorage.getItem('search') : ''
}

export default (state = trainingsReducerDefaultState, action) => {
  switch (action.type) {
    // Get Trainings
    case trainingsConstants.GET_TRAININGS_IN_PROCESS:
      return {}
    case trainingsConstants.GET_TRAININGS_SUCCESS:
      return action.trainingsData
    case trainingsConstants.GET_TRAININGS_FAILURE:
      return {}
    case trainingsConstants.SET_SEARCH:
      return {
        ...state,
        search: action.search
      }
    // Default
    default:
      return state
  }
}
