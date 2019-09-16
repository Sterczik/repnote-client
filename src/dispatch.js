import {
  getTrainingCategories,
  getExerciseCategories,
  getTrainingAdvancementLevels
} from './containers/App/global/actions'

export default (store) => {
  store.dispatch(getTrainingCategories())
  store.dispatch(getExerciseCategories())
  store.dispatch(getTrainingAdvancementLevels())
}