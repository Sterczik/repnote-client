import Api from '../../helpers/api'

function logout() {
  const token = localStorage.getItem('refreshToken')

  localStorage.removeItem('token')
  localStorage.removeItem('refreshToken')

  return Api(true).post('/users/logout', { token })
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

function refreshToken(refreshToken) {
  return Api().post('users/refreshToken', { refreshToken })
}

function socialLogin(response, provider) {
  return Api().post(`/users/authenticated/${provider}`, JSON.stringify({
    response
  }))
}

function changePassword(oldPassword, newPassword, newPasswordConfirm) {
  const body = JSON.stringify({
    oldPassword: oldPassword,
    password: newPassword,
    passwordConfirmation: newPasswordConfirm
  })
  return Api(true).put('/users/change-password', body)
}

function getProfile() {
  return Api(true).get('/users/profile/user')
}

function editProfile(name, description) {
  return Api(true).put('/users/profile', { name, description })
}

function getUserProfile(slug) {
  return Api(true).get(`/users/${slug}`)
}

function changeAvatar(file) {
  const formData = new FormData()
  formData.append('avatar', file)
  return Api(true).post('/users/profile/avatar', formData)
}

function resetAvatar() {
  return Api(true).put('/users/profile/avatar/reset')
}

function followUser(id) {
  return Api(true).post(`/users/${id}/follow`)
}

function unfollowUser(id) {
  return Api(true).delete(`/users/${id}/follow`)
}

export const ServiceUsers = {
  register,
  login,
  socialLogin,
  changePassword,
  logout,
  refreshToken,
  handleResponse,
  getProfile,
  editProfile,
  getUserProfile,
  changeAvatar,
  resetAvatar,
  followUser,
  unfollowUser
}
