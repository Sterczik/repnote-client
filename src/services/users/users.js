import Api from '../../helpers/api'
import getUrlParameter from '../../helpers/getUrlParameter'

function logout() {
  localStorage.removeItem('token')
  localStorage.removeItem('refreshToken')
}

function handleResponse(response) {
  if (response && response.response && response.response.status === 401) {
    logout()
    window.location.reload(true)
    const error = (response && response.message) || response.statusText
    return Promise.reject(error)
  }
  return response
}

function register(email, name, password, password_confirmation) {
  return Api().post('/users/register', JSON.stringify({
    email, name, password, password_confirmation
  }))
}

function login(email, password) {
  return Api().post('/users/login', JSON.stringify({
    email,
    password
  }))
}

function socialLogin(response, provider) {
  return Api().post(`/users/authenticated/${provider}`, JSON.stringify({
    response
  }))
}

function changePassword(oldPassword, newPassword, newPasswordConfirm) {
  const body = JSON.stringify({ oldPassword, newPassword, newPasswordConfirm })
  return Api(true).put('/users/change-password', body)
}

function forgotPassword(email) {
  return Api().post('/users/forgot-password', { email })
}

function resetPassword(newPassword, newPasswordConfirm) {
  return Api().post(`/users/reset-password?token=${getUrlParameter('token')}`, { newPassword, newPasswordConfirm })
}

function getProfile() {
  return Api(true).get('/users/profile')
}

function getUserProfile(slug) {
  return Api().get(`/users/${slug}`)
}

export const ServiceUsers = {
  register,
  login,
  socialLogin,
  changePassword,
  logout,
  handleResponse,
  forgotPassword,
  resetPassword,
  getProfile,
  getUserProfile
}
