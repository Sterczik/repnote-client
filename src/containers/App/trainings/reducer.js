import { trainingsConstants } from './constants'

const trainingsReducerDefaultState = {}

export default (state = trainingsReducerDefaultState, action) => {
  switch (action.type) {
    // Get Trainings
    case trainingsConstants.GET_TRAININGS_IN_PROCESS:
      return {}
    case trainingsConstants.GET_TRAININGS_SUCCESS:
      return action.trainingsData
    case trainingsConstants.GET_TRAININGS_FAILURE:
      return {}
    // Default
    default:
      return state
  }
}
