import { globalConstants } from './constants'
import { ServiceTrainingCategories } from '../../../services/trainingCategories/trainingCategories'
import { ServiceExerciseCategories } from '../../../services/exerciseCategories/exerciseCategories'

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
