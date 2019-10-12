import { trainingsConstants } from './constants'

const trainingsReducerDefaultState = {
  total: '0',
  page: localStorage.getItem('page') ? localStorage.getItem('page') : 1,
  perPage: localStorage.getItem('perPage') ? localStorage.getItem('perPage') : 12,
  search: localStorage.getItem('search') ? localStorage.getItem('search') : '',
  activeTrainingCategoryFilter: 0,
  activeTrainingAdvancementLevelFilter: 0
}

export default (state = trainingsReducerDefaultState, action) => {
  switch (action.type) {
    // Get Trainings
    case trainingsConstants.GET_TRAININGS_IN_PROCESS:
      return state
    case trainingsConstants.GET_TRAININGS_SUCCESS:
      return {
        ...state,
        total: action.trainingsData.total,
        page: action.trainingsData.page,
        perPage: action.trainingsData.perPage,
        data: action.trainingsData.data
      }
    case trainingsConstants.GET_TRAININGS_FAILURE:
      return state
    case trainingsConstants.SET_SEARCH:
      return {
        ...state,
        search: action.search
      }
    case trainingsConstants.SET_TRAINING_CATEGORY_FILTER:
      return {
        ...state,
        activeTrainingCategoryFilter: action.value
      }
    case trainingsConstants.SET_TRAINING_ADVANCEMENT_LEVEL_FILTER:
      return {
        ...state,
        activeTrainingAdvancementLevelFilter: action.value
      }
    // Default
    default:
      return state
  }
}
