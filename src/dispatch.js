import {
  getTrainingCategories,
  getExerciseCategories
} from './containers/App/global/actions'

export default (store) => {
  store.dispatch(getTrainingCategories())
  store.dispatch(getExerciseCategories())
}