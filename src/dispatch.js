import {
  getTrainingCategories,
  getExerciseCategories,
  getTrainingAdvancementLevels
} from 'store/global/actions'

export default (store) => {
  store.dispatch(getTrainingCategories())
  store.dispatch(getExerciseCategories())
  store.dispatch(getTrainingAdvancementLevels())
}