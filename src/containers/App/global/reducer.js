import { globalConstants } from './constants'

const globalReducerDefaultState = {
  trainingCategories: [],
  exerciseCategories: []
}

export default (state = globalReducerDefaultState, action) => {
  switch (action.type) {
    case globalConstants.GET_TRAINING_CATEGORIES_IN_PROCESS:
      return {
        ...state,
        trainingCategories: []
      }
    case globalConstants.GET_TRAINING_CATEGORIES_SUCCESS:
      return {
        ...state,
        trainingCategories: action.trainingCategories
      }
    case globalConstants.GET_TRAINING_CATEGORIES_FAILURE:
      return {
        ...state,
        trainingCategories: []
      }
    
    case globalConstants.GET_EXERCISE_CATEGORIES_IN_PROCESS:
      return {
        ...state,
        exerciseCategories: []
      }
    case globalConstants.GET_EXERCISE_CATEGORIES_SUCCESS:
      return {
        ...state,
        exerciseCategories: action.exerciseCategories
      }
    case globalConstants.GET_EXERCISE_CATEGORIES_FAILURE:
      return {
        ...state,
        exerciseCategories: []
      }

    case globalConstants.GET_USER_PROFILE_IN_PROCESS:
      return {
        ...state,
        userProfile: {}
      }
    case globalConstants.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: action.userProfile
      }
    case globalConstants.GET_USER_PROFILE_FAILURE:
      return {
        ...state,
        userProfile: {}
      }
    // Default
    default:
      return state
  }
}
