import axios from 'axios'
import { baseUrl } from './baseUrl'

const token = localStorage.getItem('token') && localStorage.getItem('token').length ? JSON.parse(localStorage.getItem('token')) : null

export default (auth = false) => {
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
