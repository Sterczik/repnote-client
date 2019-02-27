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
    // Default
    default:
      return state;
  }
};
