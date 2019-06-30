import { trainingConstants } from './constants'

const trainingReducerDefaultState = {}

export default (state = trainingReducerDefaultState, action) => {
  switch (action.type) {
    // Get Training
    case trainingConstants.GET_TRAINING_IN_PROCESS:
      return state
    case trainingConstants.GET_TRAINING_SUCCESS:
      return action.training
    case trainingConstants.GET_TRAINING_FAILURE:
      return state
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
    // Default
    default:
      return state
  }
}
