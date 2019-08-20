import axios from 'axios'
import { baseUrl } from './baseUrl'

export default () => {
  return axios.create({
    baseURL: `${baseUrl}/api/app`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
