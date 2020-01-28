import { trainingsConstants } from './constants'

const defaults = {
  page: 1,
  perPage: 12,
  lastPage: 1,
  search: '',
  sort: 1,
  categoryFilter: 0,
  advancementLevelFilter: 0
}

const trainingsReducerDefaultState = {
  total: '0',
  page: localStorage.getItem('listing_page')
    ? localStorage.getItem('listing_page')
    : defaults.page,
  perPage: localStorage.getItem('listing_perPage')
    ? localStorage.getItem('listing_perPage')
    : defaults.perPage,
  lastPage: defaults.lastPage,
  search: localStorage.getItem('listing_search')
    ? localStorage.getItem('listing_search')
    : defaults.search,
  sort: localStorage.getItem('listing_sort')
    ? localStorage.getItem('sort')
    : defaults.sort,
  activeTrainingCategoryFilter: localStorage.getItem('listing_categoryFilter')
    ? localStorage.getItem('listing_categoryFilter')
    : defaults.categoryFilter,
  activeTrainingAdvancementLevelFilter: localStorage.getItem('listing_advancementLevelFilter')
    ? localStorage.getItem('listing_advancementLevelFilter')
    : defaults.advancementLevelFilter
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
        lastPage: action.trainingsData.lastPage,
        data: action.trainingsData.data
      }
    case trainingsConstants.GET_TRAININGS_FAILURE:
      return state
    // Set Search
    case trainingsConstants.SET_SEARCH:
      return {
        ...state,
        search: action.value
      }
    // Set Sort
    case trainingsConstants.SET_SORT:
      return {
        ...state,
        sort: action.value
      }
    // Set Category Filter
    case trainingsConstants.SET_TRAINING_CATEGORY_FILTER:
      return {
        ...state,
        activeTrainingCategoryFilter: action.value
      }
    // Set Advancement Level Filter
    case trainingsConstants.SET_TRAINING_ADVANCEMENT_LEVEL_FILTER:
      return {
        ...state,
        activeTrainingAdvancementLevelFilter: action.value
      }
    // Set Page
    case trainingsConstants.SET_PAGE:
      return {
        ...state,
        page: action.value
      }
    // Default
    default:
      return state
  }
}
