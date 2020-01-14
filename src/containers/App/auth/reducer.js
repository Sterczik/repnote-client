import { authConstants } from './constants'

const accessToken = localStorage.getItem('token') && localStorage.getItem('token').length ? localStorage.getItem('token') : null
const refreshToken = localStorage.getItem('refreshToken') && localStorage.getItem('refreshToken').length ? localStorage.getItem('refreshToken') : null

const initialState = accessToken && refreshToken ? {
  loggedIn: true,
  loggingIn: false,
  user: {
    accessToken: accessToken,
    refreshToken: refreshToken
  },
  userInfo: {},
  freshTokenPromise: null
} : {
  loggedIn: false,
  loggingIn: false,
  user: {},
  userInfo: {},
  registerProcess: false,
  freshTokenPromise: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    // Register
    case authConstants.REGISTER_IN_PROCESS:
      return {
        ...state,
        registerProcess: true
      }
    case authConstants.REGISTER_SUCCESS:
      return {
        ...state,
        registerProcess: false
      }
    case authConstants.REGISTER_FAILURE:
      return {
        ...state,
        registerProcess: false
      }
    // Login
    case authConstants.LOGIN_IN_PROCESS:
      return {
        ...state,
        loggingIn: true,
        loggedIn: false,
        user: {}
      }
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        user: {
          accessToken: action.tokens.accessToken,
          refreshToken: action.tokens.refreshToken
        }
      }
    case authConstants.LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        loggedIn: false,
        user: {}
      }
    // Social Login
    case authConstants.SOCIAL_LOGIN_IN_PROCESS:
      return {
        loggingIn: true,
        loggedIn: false,
        user: {}
      }
    case authConstants.SOCIAL_LOGIN_SUCCESS:
      return {
        loggingIn: false,
        loggedIn: true,
        user: {
          accessToken: action.tokens.accessToken,
          refreshToken: action.tokens.refreshToken
        }
      }
    case authConstants.SOCIAL_LOGIN_FAILURE:
      return {
        loggingIn: false,
        loggedIn: false,
        user: {}
      }
    // Refresh Token
    case authConstants.REFRESH_TOKEN_IN_PROCESS:
      return {
        ...state,
        freshTokenPromise: action.freshTokenPromise
      }
    case authConstants.REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        freshTokenPromise: null
      }
    case authConstants.REFRESH_TOKEN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        loggedIn: false,
        user: {}
      }
    // Save Token
    case authConstants.SAVE_ACCESS_TOKEN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          accessToken: action.tokens.accessToken,
          refreshToken: action.tokens.refreshToken
        },
        freshTokenPromise: null
      }
    // Change Password
    case authConstants.CHANGE_PASSWORD_IN_PROCESS:
      return {
        ...state
      }
    case authConstants.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state
      }
    case authConstants.CHANGE_PASSWORD_FAILURE:
      return {
        ...state
      }
    // Logout
    case authConstants.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        user: {}
      }
    // Get Profile
    case authConstants.GET_PROFILE_IN_PROCESS:
      return {
        ...state
      }
    case authConstants.GET_PROFILE_SUCCESS:
      return {
        ...state,
        userInfo: action.userInfo
      }
    case authConstants.GET_PROFILE_FAILURE:
      return {
        ...state,
        userInfo: {}
      }
    // Edit Profile
    case authConstants.EDIT_PROFILE_IN_PROCESS:
      return {
        ...state
      }
    case authConstants.EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        userInfo: action.userInfo
      }
    case authConstants.EDIT_PROFILE_FAILURE:
      return {
        ...state,
        userInfo: {}
      }
    // Change Avatar
    case authConstants.CHANGE_AVATAR_IN_PROCESS:
      return {
        ...state
      }
    case authConstants.CHANGE_AVATAR_SUCCESS:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          avatar: action.data.avatar
        }
      }
    case authConstants.CHANGE_AVATAR_FAILURE:
      return {
        ...state
      }
    // Default
    default:
      return state
  }
}
