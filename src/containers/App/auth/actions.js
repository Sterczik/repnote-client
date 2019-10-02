import { snackbarActions as snackbar } from 'material-ui-snackbar-redux'
import { ServiceUsers } from '../../../services/users/users'
import { history } from '../../../helpers/history'
import { authConstants } from './constants'

function logout() {
  ServiceUsers.logout()

  return {
    type: authConstants.LOGOUT
  }
}

function register(email, name, password, passwordConfirm) {
  const registerInProcess = (user) => ({
    type: authConstants.REGISTER_IN_PROCESS,
    user
  })

  const registerSuccess = (message) => ({
    type: authConstants.REGISTER_SUCCESS,
    message
  })

  const registerFailure = (error) => ({
    type: authConstants.REGISTER_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(registerInProcess({ email }))

    ServiceUsers.register(email, name, password, passwordConfirm)
      .then((response) => {
        const { data } = response
        if (data.success) {
          dispatch(registerSuccess())
          dispatch(snackbar.show({
            message: data.message
          }))
          history.push('/register-confirm')
        } else {
          dispatch(registerFailure())
        }
      })
      .catch((error) => {
        dispatch(registerFailure(error))
        dispatch(snackbar.show({
          message: 'Something went wrong!'
        }))
        history.push('/register-failure')
      })
  }
}

function login(email, password) {
  const loginInProcess = (user) => ({
    type: authConstants.LOGIN_IN_PROCESS,
    user
  })

  const loginSuccess = (user) => ({
    type: authConstants.LOGIN_SUCCESS,
    user
  })

  const loginFailure = (error) => ({
    type: authConstants.LOGIN_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(loginInProcess({ email }))

    ServiceUsers.login(email, password)
      .then((response) => {
        const { data } = response
        if (data.success) {
          if (data.token.token) {
            localStorage.setItem('token', data.token.token)
            localStorage.setItem('refreshToken', data.token.refreshToken)
          }
          dispatch(loginSuccess(data))
          history.push('/trainings')
        } else {
          dispatch(loginFailure())
          dispatch(snackbar.show({
            message: data.errors.message
          }))
        }
      })
      .catch((error) => {
        dispatch(loginFailure(error))
        dispatch(snackbar.show({
          message: 'Something went wrong'
        }))
      })
  }
}

function socialLogin(response, provider) {
  const socialLoginInProcess = () => ({
    type: authConstants.SOCIAL_LOGIN_IN_PROCESS
  })

  const socialLoginSuccess = (user) => ({
    type: authConstants.SOCIAL_LOGIN_SUCCESS,
    user
  })

  const socialLoginFailure = (error) => ({
    type: authConstants.SOCIAL_LOGIN_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(socialLoginInProcess())

    let token = ''

    if (provider === 'facebook') {
      token = response.accessToken
    }
    if (provider === 'google') {
      token = response.Zi.access_token
    }

    ServiceUsers.socialLogin(token, provider)
      .then((response) => {
        const { data } = response
        if (data.success) {
          if (data.token.token) {
            localStorage.setItem('token', JSON.stringify(data.token.token))
            localStorage.setItem('refreshToken', 'dummy')
          }
          dispatch(socialLoginSuccess(data))
          history.push('/trainings')
        } else {
          dispatch(socialLoginFailure())
          dispatch(snackbar.show({
            message: data.errors.message
          }))
        }
      })
      .catch((error) => {
        dispatch(socialLoginFailure(error))
        dispatch(snackbar.show({
          message: 'Something went wrong'
        }))
      })
  }
}

function changePassword(oldPassword, newPassword, newPasswordConfirm) {
  const changePasswordInProcess = () => ({
    type: authConstants.CHANGE_PASSWORD_IN_PROCESS
  })

  const changePasswordSuccess = () => ({
    type: authConstants.CHANGE_PASSWORD_SUCCESS
  })

  const changePasswordFailure = () => ({
    type: authConstants.CHANGE_PASSWORD_FAILURE
  })

  return (dispatch) => {
    dispatch(changePasswordInProcess())

    ServiceUsers.changePassword(oldPassword, newPassword, newPasswordConfirm)
      .then((response) => {
        const { data } = response
        if (data.success) {
          dispatch(changePasswordSuccess())
          history.push('/account')
          dispatch(snackbar.show({
            message: data.message
          }))
        } else {
          dispatch(changePasswordFailure())
          dispatch(snackbar.show({
            message: data.errors.message
          }))
        }
      })
      .catch((error) => {
        dispatch(changePasswordFailure(error))
        dispatch(snackbar.show({
          message: 'Something went wrong!'
        }))
      })
  }
}

function forgotPassword(email) {
  const forgotPasswordInProcess = () => ({
    type: authConstants.FORGOT_PASSWORD_IN_PROCESS
  })

  const forgotPasswordSuccess = () => ({
    type: authConstants.FORGOT_PASSWORD_SUCCESS
  })

  const forgotPasswordFailure = (error) => ({
    type: authConstants.FORGOT_PASSWORD_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(forgotPasswordInProcess())

    ServiceUsers.forgotPassword(email)
      .then((res) => {
        const data = res.data
        if (data.success) {
          dispatch(forgotPasswordSuccess())
          history.push('/check-email')
        } else {
          dispatch(forgotPasswordFailure())
          dispatch(snackbar.show({
            message: data.errors.message
          }))
        }
      })
      .catch((error) => {
        dispatch(forgotPasswordFailure(error))
        dispatch(snackbar.show({
          message: 'Something went wrong!'
        }))
      })
  }
}

function resetPassword(newPassword, newPasswordConfirm) {
  const resetPasswordInProcess = () => ({
    type: authConstants.RESET_PASSWORD_IN_PROCESS
  })

  const resetPasswordSuccess = () => ({
    type: authConstants.RESET_PASSWORD_SUCCESS
  })

  const resetPasswordFailure = (error) => ({
    type: authConstants.RESET_PASSWORD_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(resetPasswordInProcess())

    ServiceUsers.resetPassword(newPassword, newPasswordConfirm)
      .then((res) => {
        const data = res.data
        if (data.success) {
          dispatch(resetPasswordSuccess())
          history.push('/login')
          dispatch(snackbar.show({
            message: data.message
          }))
        } else {
          dispatch(resetPasswordFailure())
          dispatch(snackbar.show({
            message: data.errors.message
          }))
        }
      })
      .catch((error) => {
        dispatch(resetPasswordFailure(error))
        dispatch(snackbar.show({
          message: 'Something went wrong!'
        }))
      })
  }
}

function getProfile() {
  const getProfileInProcess = () => ({
    type: authConstants.GET_PROFILE_IN_PROCESS
  })

  const getProfileSuccess = (userInfo) => ({
    type: authConstants.GET_PROFILE_SUCCESS,
    userInfo
  })

  const getProfileFailure = (error) => ({
    type: authConstants.GET_PROFILE_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(getProfileInProcess())

    ServiceUsers.getProfile()
      .then((response) => {
        const { data } = response
        dispatch(getProfileSuccess(data))
      })
      .catch((error) => {
        dispatch(getProfileFailure(error))
        dispatch(snackbar.show({
          message: 'Something went wrong!'
        }))
      })
  }
}

function editProfile(name, description) {
  const editProfileInProcess = () => ({
    type: authConstants.EDIT_PROFILE_IN_PROCESS
  })

  const editProfileSuccess = (userInfo) => ({
    type: authConstants.EDIT_PROFILE_SUCCESS,
    userInfo
  })

  const editProfileFailure = (error) => ({
    type: authConstants.EDIT_PROFILE_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(editProfileInProcess())

    ServiceUsers.editProfile(name, description)
      .then((response) => {
        const { data } = response
        dispatch(editProfileSuccess(data))
      })
      .catch((error) => {
        dispatch(editProfileFailure(error))
      })
  }
}

function changeAvatar(file) {
  const changeAvatarInProcess = () => ({
    type: authConstants.CHANGE_AVATAR_IN_PROCESS
  })

  const changeAvatarSuccess = (data) => ({
    type: authConstants.CHANGE_AVATAR_SUCCESS,
    data
  })

  const changeAvatarFailure = (error) => ({
    type: authConstants.CHANGE_AVATAR_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(changeAvatarInProcess())

    ServiceUsers.changeAvatar(file)
      .then((response) => {
        const { data } = response
        dispatch(changeAvatarSuccess(data))
      })
      .catch((error) => {
        dispatch(changeAvatarFailure(error))
      })
  }
}

export const authActions = {
  logout,
  register,
  login,
  socialLogin,
  changePassword,
  forgotPassword,
  resetPassword,
  getProfile,
  editProfile,
  changeAvatar
}
