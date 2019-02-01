import { trainingConstants } from './constants';

const trainingReducerDefaultState = {};

export default (state = trainingReducerDefaultState, action) => {
  switch (action.type) {
    // Get Training
    case trainingConstants.GET_TRAINING_IN_PROCESS:
      return {};
    case trainingConstants.GET_TRAINING_SUCCESS:
      return action.training;
    case trainingConstants.GET_TRAINING_FAILURE:
      return {};
    // Remove Training
    case trainingConstants.REMOVE_TRAINING_IN_PROCESS:
      return state;
    case trainingConstants.REMOVE_TRAINING_SUCCESS:
      return {};
    case trainingConstants.REMOVE_TRAINING_FAILURE:
      return state;
    // Switch Training Status
    case trainingConstants.SWITCH_TRAINING_STATUS_IN_PROCESS:
      return state;
    case trainingConstants.SWITCH_TRAINING_STATUS_SUCCESS:
      return {
        ...state,
        private: action.training.private
      }
    case trainingConstants.SWITCH_TRAINING_STATUS_FAILURE:
      return state;
    // Default
    default:
      return state;
  }
};
