import axios from 'axios'
import { baseUrl } from './baseUrl'

export default (auth = false) => {
  const token = localStorage.getItem('token')
  if (auth) {
    return axios.create({
      baseURL: `${baseUrl}/api/app`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  } else {
    return axios.create({
      baseURL: `${baseUrl}/api/app`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
}
