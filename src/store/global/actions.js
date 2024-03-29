import i18n from 'i18next'
import { snackbarActions as snackbar } from 'material-ui-snackbar-redux'
import { globalConstants } from './constants'
import { ServiceTrainingCategories } from 'services/trainingCategories/trainingCategories'
import { ServiceExerciseCategories } from 'services/exerciseCategories/exerciseCategories'
import { ServiceTrainingAdvancementLevels } from 'services/trainingAdvancementLevels/trainingAdvancementLevels'
import { ServiceUsers } from 'services/users/users'
import { ServiceContact } from 'services/contact/contact'

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

export function getTrainingAdvancementLevels() {
  const getTrainingAdvancementLevelsInProcess = () => ({
    type: globalConstants.GET_TRAINING_ADVANCEMENT_LEVELS_IN_PROCESS
  })

  const getTrainingAdvancementLevelsSuccess = (advancementLevels) => ({
    type: globalConstants.GET_TRAINING_ADVANCEMENT_LEVELS_SUCCESS,
    advancementLevels
  })

  const getTrainingAdvancementLevelsFailure = (error) => ({
    type: globalConstants.GET_TRAINING_ADVANCEMENT_LEVELS_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(getTrainingAdvancementLevelsInProcess())

    ServiceTrainingAdvancementLevels.getTrainingAdvancementLevels()
      .then((res) => {
        const trainingAdvancementLevels = res.data
        dispatch(getTrainingAdvancementLevelsSuccess(trainingAdvancementLevels))
      })
      .catch((error) => {
        dispatch(getTrainingAdvancementLevelsFailure(error))
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

  const getUserProfileFailure = () => ({
    type: globalConstants.GET_USER_PROFILE_FAILURE
  })

  return (dispatch) => {
    dispatch(getUserProfileInProcess())

    ServiceUsers.getUserProfile(slug)
      .then((res) => {
        const userProfile = res.data
        dispatch(getUserProfileSuccess(userProfile))
      })
      .catch(() => {
        dispatch(getUserProfileFailure())
        dispatch(snackbar.show({
          message: i18n.getResource(i18n.language, 'translation', 'global.errors.internalServerError')
        }))
      })
  }
}

export function followUser(id, follow) {
  const followUserInProcess = () => ({
    type: globalConstants.FOLLOW_USER_IN_PROGRESS
  })

  const followUserSuccess = (follow) => ({
    type: globalConstants.FOLLOW_USER_SUCCESS,
    follow
  })

  const followUserFailure = (error) => ({
    type: globalConstants.FOLLOW_USER_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(followUserInProcess())

    const followQuery = follow ? ServiceUsers.followUser(id) : ServiceUsers.unfollowUser(id)
    followQuery
      .then(() => {
        dispatch(followUserSuccess(follow))
      })
      .catch((error) => {
        ServiceUsers.handleResponse(error)
        dispatch(followUserFailure(error))
        dispatch(snackbar.show({
          message: i18n.getResource(i18n.language, 'translation', 'global.errors.internalServerError')
        }))
      })
  }
}

export function sendContactMessage(message) {
  const sendContactMessageInProcess = () => ({
    type: globalConstants.SEND_CONTACT_MESSAGE_IN_PROCESS
  })

  const sendContactMessageSuccess = (response) => ({
    type: globalConstants.SEND_CONTACT_MESSAGE_SUCCESS,
    response
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
        dispatch(snackbar.show({
          message: i18n.getResource(i18n.language, 'translation', 'components.forms.contact.success')
        }))
      })
      .catch((error) => {
        dispatch(sendContactMessageFailure(error))
        dispatch(snackbar.show({
          message: i18n.getResource(i18n.language, 'translation', 'global.errors.internalServerError')
        }))
      })
  }
}