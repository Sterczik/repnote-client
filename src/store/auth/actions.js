import { snackbarActions as snackbar } from 'material-ui-snackbar-redux'
import { ServiceUsers } from 'services/users/users'
import { history } from 'helpers/history'
import { authConstants } from './constants'

function logout() {
  const logoutInProcess = () => ({
    type: authConstants.LOGOUT_IN_PROGRESS
  })

  const logoutSuccess = () => ({
    type: authConstants.LOGOUT_SUCCESS
  })

  const logoutFailure = () => ({
    type: authConstants.LOGOUT_FAILURE
  })

  return (dispatch) => {
    dispatch(logoutInProcess())

    ServiceUsers.logout()
      .then(() => {
        dispatch(logoutSuccess())
      })
      .catch(() => {
        dispatch(logoutFailure())
      })
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
          history.push('/landing')
        } else {
          dispatch(registerFailure())
        }
      })
      .catch((error) => {
        dispatch(registerFailure(error))
        dispatch(snackbar.show({
          message: 'Something went wrong!'
        }))
      })
  }
}

function login(email, password) {
  const loginInProcess = (user) => ({
    type: authConstants.LOGIN_IN_PROCESS,
    user
  })

  const loginSuccess = (tokens) => ({
    type: authConstants.LOGIN_SUCCESS,
    tokens
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
          if (data.token.token && data.token.refreshToken) {
            localStorage.setItem('token', String(data.token.token))
            localStorage.setItem('refreshToken', data.token.refreshToken)

            dispatch(loginSuccess({
              accessToken: data.token.token,
              refreshToken: data.token.refreshToken
            }))
            history.push('/trainings')
          }
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

function refreshToken(dispatch, refreshToken) {
  const refreshTokenSuccess = (tokens) => {
    localStorage.setItem('token', tokens.accessToken)
    localStorage.setItem('refreshToken', tokens.refreshToken)
    return {
      type: authConstants.SAVE_ACCESS_TOKEN_SUCCESS,
      tokens
    }
  }

  const freshTokenPromise = ServiceUsers.refreshToken(refreshToken)
    .then(response => {
      const { data } = response

      if (data.success) {
        dispatch({
          type: authConstants.REFRESH_TOKEN_SUCCESS
        })
  
        dispatch(refreshTokenSuccess({
          accessToken: data.token.token,
          refreshToken: data.token.refreshToken
        }))
      }

      return data.token.token && data.token.refreshToken
        ? Promise.resolve({
          accessToken: data.token.token,
          refreshToken: data.token.refreshToken
        }) : Promise.reject({
          message: 'Could not refresh token'
        })
    })
    .catch((e) => {
      dispatch({
        type: authConstants.REFRESH_TOKEN_FAILURE
      })
      return Promise.reject(e)
    })

  dispatch({
    type: authConstants.REFRESH_TOKEN_IN_PROCESS,
    freshTokenPromise
  })

  return freshTokenPromise
}

function socialLogin(response, provider) {
  const socialLoginInProcess = () => ({
    type: authConstants.SOCIAL_LOGIN_IN_PROCESS
  })

  const socialLoginSuccess = (tokens) => ({
    type: authConstants.SOCIAL_LOGIN_SUCCESS,
    tokens
  })

  const socialLoginFailure = (error) => ({
    type: authConstants.SOCIAL_LOGIN_FAILURE,
    error
  })

  return (dispatch) => {
    dispatch(socialLoginInProcess())

    const token = response.accessToken

    ServiceUsers.socialLogin(token, provider)
      .then((response) => {
        const { data } = response
        if (data.success) {
          if (data.token.token) {
            localStorage.setItem('token', data.token.token)
            localStorage.setItem('refreshToken', data.token.refreshToken)
          }
          dispatch(socialLoginSuccess({
            accessToken: data.token.token,
            refreshToken: data.token.refreshToken
          }))
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

function getProfile() {
  const getProfileInProcess = () => ({
    type: authConstants.GET_PROFILE_IN_PROCESS
  })

  const getProfileSuccess = (userInfo) => ({
    type: authConstants.GET_PROFILE_SUCCESS,
    userInfo
  })

  const getProfileFailure = () => ({
    type: authConstants.GET_PROFILE_FAILURE
  })

  return (dispatch) => {
    dispatch(getProfileInProcess())

    ServiceUsers.getProfile()
      .then((response) => {
        const { data } = response
        dispatch(getProfileSuccess(data))
      })
      .catch(() => {
        dispatch(getProfileFailure())
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

function resetAvatar() {
  const resetAvatarInProcess = () => ({
    type: authConstants.RESET_AVATAR_IN_PROCESS
  })

  const resetAvatarSuccess = (data) => ({
    type: authConstants.RESET_AVATAR_SUCCESS,
    data
  })

  const resetAvatarFailure = () => ({
    type: authConstants.RESET_PASSWORD_FAILURE
  })

  return (dispatch) => {
    dispatch(resetAvatarInProcess())

    ServiceUsers.resetAvatar()
      .then((response) => {
        const { data } = response
        dispatch(resetAvatarSuccess(data))
      })
      .catch(() => {
        dispatch(resetAvatarFailure())
      })
  }
}

export const authActions = {
  logout,
  register,
  login,
  refreshToken,
  socialLogin,
  changePassword,
  getProfile,
  editProfile,
  changeAvatar,
  resetAvatar
}
