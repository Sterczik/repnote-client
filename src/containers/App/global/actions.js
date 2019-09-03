import { snackbarActions as snackbar } from 'material-ui-snackbar-redux'
import { globalConstants } from './constants'
import { ServiceTrainingCategories } from '../../../services/trainingCategories/trainingCategories'
import { ServiceExerciseCategories } from '../../../services/exerciseCategories/exerciseCategories'
import { ServiceUsers } from '../../../services/users/users'
import { ServiceContact } from '../../../services/contact/contact'

export function getTrainingCategories() {
  const getTrainingCategoriesInProcess = () => ({
    type: globalConstants.GET_TRAINING_CATEGORIES_IN_PROCESS
  })

  const getTrainingCategoriesSuccess = (trainingCategories) => ({
    type: globalConstants.GET_TRAINING_CATEGORIES_SUCCESS,
    trainingCategories
  })

  const getTrainingCategoriesFailure = (error) => ({
    type: globalConstants.GET_TRAINING_CATEGORIES_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(getTrainingCategoriesInProcess())

    ServiceTrainingCategories.getTrainingCategories()
      .then((res) => {
        const trainingCategories = res.data
        dispatch(getTrainingCategoriesSuccess(trainingCategories))
      })
      .catch((error) => {
        dispatch(getTrainingCategoriesFailure(error))
      })
  }
}

export function getExerciseCategories() {
  const getExerciseCategoriesInProcess = () => ({
    type: globalConstants.GET_EXERCISE_CATEGORIES_IN_PROCESS
  })

  const getExerciseCategoriesSuccess = (exerciseCategories) => ({
    type: globalConstants.GET_EXERCISE_CATEGORIES_SUCCESS,
    exerciseCategories
  })

  const getExerciseCategoriesFailure = (error) => ({
    type: globalConstants.GET_EXERCISE_CATEGORIES_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(getExerciseCategoriesInProcess())

    ServiceExerciseCategories.getExerciseCategories()
      .then((res) => {
        const exerciseCategories = res.data
        dispatch(getExerciseCategoriesSuccess(exerciseCategories))
      })
      .catch((error) => {
        dispatch(getExerciseCategoriesFailure(error))
      })
  }
}

export function getUserProfile(slug) {
  const getUserProfileInProcess = () => ({
    type: globalConstants.GET_USER_PROFILE_IN_PROCESS
  })

  const getUserProfileSuccess = (userProfile) => ({
    type: globalConstants.GET_USER_PROFILE_SUCCESS,
    userProfile
  })

  const getUserProfileFailure = (error) => ({
    type: globalConstants.GET_USER_PROFILE_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(getUserProfileInProcess())

    ServiceUsers.getUserProfile(slug)
      .then((res) => {
        const userProfile = res.data
        dispatch(getUserProfileSuccess(userProfile))
      })
      .catch((error) => {
        dispatch(getUserProfileFailure(error))
        dispatch(snackbar.show({
          message: 'Something went wrong!'
        }))
      })
  }
}

export function sendContactMessage(message) {
  const sendContactMessageInProcess = () => ({
    type: globalConstants.SEND_CONTACT_MESSAGE_IN_PROCESS
  })

  const sendContactMessageSuccess = (userProfile) => ({
    type: globalConstants.SEND_CONTACT_MESSAGE_SUCCESS,
    userProfile
  })

  const sendContactMessageFailure = (error) => ({
    type: globalConstants.SEND_CONTACT_MESSAGE_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(sendContactMessageInProcess())

    const messageData = JSON.stringify({
      ...message
    })

    ServiceContact.sendContactMessage(messageData)
      .then((res) => {
        const data = res.data
        dispatch(sendContactMessageSuccess(data))
      })
      .catch((error) => {
        dispatch(sendContactMessageFailure(error))
        dispatch(snackbar.show({
          message: 'Something went wrong!'
        }))
      })
  }
}