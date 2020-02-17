import { trainingConstants } from './constants'

const trainingReducerDefaultState = {
  training: {},
  isLoaded: false,
  isAuthorizedError: false,
  isSuccess: false
}

export default (state = trainingReducerDefaultState, action) => {
  switch (action.type) {
    // Get Training
    case trainingConstants.GET_TRAINING_IN_PROCESS:
      return {
        training: {},
        isLoaded: false,
        isAuthorizedError: false,
        isSuccess: false
      }
    case trainingConstants.GET_TRAINING_SUCCESS:
      return {
        training: {
          ...action.training,
          likesLength: action.training.likes.length
        },
        isLoaded: true,
        isAuthorizedError: false,
        isSuccess: true
      }
    case trainingConstants.GET_TRAINING_AUTH_FAILURE:
      return {
        training: {},
        isLoaded: true,
        isAuthorizedError: true,
        isSuccess: false
      }
    case trainingConstants.GET_TRAINING_FAILURE:
      return {
        training: {},
        isLoaded: true,
        isAuthorizedError: false,
        isSuccess: false
      }
    // Remove Training
    case trainingConstants.REMOVE_TRAINING_IN_PROCESS:
      return state
    case trainingConstants.REMOVE_TRAINING_SUCCESS:
      return {}
    case trainingConstants.REMOVE_TRAINING_FAILURE:
      return state
    // Switch Training Status
    case trainingConstants.SWITCH_TRAINING_STATUS_IN_PROCESS:
      return state
    case trainingConstants.SWITCH_TRAINING_STATUS_SUCCESS:
      return {
        ...state,
        private: action.training.private
      }
    case trainingConstants.SWITCH_TRAINING_STATUS_FAILURE:
      return state
    // Create Training
    case trainingConstants.CREATE_TRAINING_IN_PROCESS:
      return state
    case trainingConstants.CREATE_TRAINING_SUCCESS:
      return {...action.training}
    case trainingConstants.CREATE_TRAINING_FAILURE:
      return {}
    // Edit Training
    case trainingConstants.EDIT_TRAINING_IN_PROCESS:
      return state
    case trainingConstants.EDIT_TRAINING_SUCCESS:
      return {...action.training}
    case trainingConstants.EDIT_TRAINING_FAILURE:
      return state
    // Like Training
    case trainingConstants.LIKE_TRAINING_IN_PROCESS:
      return state
    case trainingConstants.LIKE_TRAINING_SUCCESS:
      return {
        ...state,
        likesLength: action.like ? state.likesLength + 1 : state.likesLength - 1,
        liked: action.like
      }
    case trainingConstants.LIKE_TRAINING_FAILURE:
      return state
    // Default
    default:
      return state
  }
}
