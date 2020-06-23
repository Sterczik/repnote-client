import { globalConstants } from './constants'

const globalReducerDefaultState = {
  trainingCategories: [],
  exerciseCategories: [],
  advancementLevels: [],
  userProfile: {},
  userProfileState: {
    isLoaded: false,
    isSuccess: false
  }
}

export default (state = globalReducerDefaultState, action) => {
  switch (action.type) {
    // Get Trainings Categories
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
    // Get Exercise Categories
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
    // Get Training Advancement Levels
    case globalConstants.GET_TRAINING_ADVANCEMENT_LEVELS_IN_PROCESS:
      return {
        ...state,
        advancementLevels: []
      }
    case globalConstants.GET_TRAINING_ADVANCEMENT_LEVELS_SUCCESS:
      return {
        ...state,
        advancementLevels: action.advancementLevels
      }
    case globalConstants.GET_TRAINING_ADVANCEMENT_LEVELS_FAILURE:
      return {
        ...state,
        advancementLevels: []
      }
    // Get User Profile
    case globalConstants.GET_USER_PROFILE_IN_PROCESS:
      return {
        ...state,
        userProfile: {},
        userProfileState: {
          isLoaded: false,
          isSuccess: false
        }
      }
    case globalConstants.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: {
          ...action.userProfile,
          followersLength: action.userProfile.followers.length
        },
        userProfileState: {
          isLoaded: true,
          isSuccess: true
        }
      }
    case globalConstants.GET_USER_PROFILE_FAILURE:
      return {
        ...state,
        userProfile: {},
        userProfileState: {
          isLoaded: true,
          isSuccess: false
        }
      }
    // Follow User
    case globalConstants.FOLLOW_USER_IN_PROGRESS:
      return {
        ...state
      }
    case globalConstants.FOLLOW_USER_SUCCESS:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          followersLength: action.follow
            ? state.userProfile.followersLength + 1
            : state.userProfile.followersLength - 1,
          followed: action.follow
        }
      }
    case globalConstants.FOLLOW_USER_FAILURE:
      return {
        ...state
      }
    // Default
    default:
      return state
  }
}
