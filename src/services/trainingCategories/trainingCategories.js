import axios from 'axios'
import { baseUrl } from '../../helpers/baseUrl'

function getTrainingCategories() {
  return axios.get(`${baseUrl}/api/app/trainingCategories`)
}

export const ServiceTrainingCategories = {
  getTrainingCategories
}