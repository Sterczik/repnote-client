import { trainingsConstants } from './constants';

const trainingsReducerDefaultState = [];

export default (state = trainingsReducerDefaultState, action) => {
  switch (action.type) {
    // Get Trainings
    case trainingsConstants.GET_TRAININGS_IN_PROCESS:
      return [];
    case trainingsConstants.GET_TRAININGS_SUCCESS:
      return action.trainings;
    case trainingsConstants.GET_TRAININGS_FAILURE:
      return [];
    // Create Training
    case trainingsConstants.CREATE_TRAINING_IN_PROCESS:
      return state;
    case trainingsConstants.CREATE_TRAINING_SUCCESS:
      return [...state, action.training];
    case trainingsConstants.CREATE_TRAINING_FAILURE:
      return state;
    // Edit Training
    case trainingsConstants.EDIT_TRAINING_IN_PROCESS:
      return state;
    case trainingsConstants.EDIT_TRAINING_SUCCESS:
      return state.map((training) => {
        if (training.id === action.id) {
          return {
            ...training,
            ...action.updates
          };
        }
        return training;
      });
    case trainingsConstants.EDIT_TRAINING_FAILURE:
      return state;
    // Remove Training
    case trainingsConstants.REMOVE_TRAINING_IN_PROCESS:
      return state;
    case trainingsConstants.REMOVE_TRAINING_SUCCESS:
      return state.filter(({ id }) => id !== action.id);
    case trainingsConstants.REMOVE_TRAINING_FAILURE:
      return state;
    // Switch Training Status
    case trainingsConstants.SWITCH_TRAINING_STATUS_IN_PROCESS:
      return state;
    case trainingsConstants.SWITCH_TRAINING_STATUS_SUCCESS:
      return state.map(training => {
        if (training.id === action.training.id) {
          return {
            ...training,
            private: !training.private
          };
        }
        return training;
      });
    case trainingsConstants.SWITCH_TRAINING_STATUS_FAILURE:
      return state;
    // Default
    default:
      return state;
  }
};
