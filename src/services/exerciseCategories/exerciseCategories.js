import axios from 'axios'
import { baseUrl } from '../../helpers/baseUrl'

function getExerciseCategories() {
  return axios.get(`${baseUrl}/api/app/exerciseCategories`)
}

export const ServiceExerciseCategories = {
  getExerciseCategories
}