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
  userInfoState: {
    isLoaded: false,
    isSuccess: false
  },
  freshTokenPromise: null
} : {
  loggedIn: false,
  loggingIn: false,
  user: {},
  userInfo: {},
  userInfoState: {
    isLoaded: false,
    isSuccess: false
  },
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
        ...state,
        loggingIn: true,
        loggedIn: false,
        user: {}
      }
    case authConstants.SOCIAL_LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        user: {
          accessToken: action.tokens.accessToken,
          refreshToken: action.tokens.refreshToken
        }
      }
    case authConstants.SOCIAL_LOGIN_FAILURE:
      return {
        ...state,
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
    case authConstants.LOGOUT_IN_PROGRESS:
      return {
        ...state
      }
    case authConstants.LOGOUT_SUCCESS:
      return {
        ...state,
        loggedIn: false,
        user: {}
      }
    case authConstants.LOGOUT_FAILURE:
      return {
        ...state,
        loggedIn: false,
        user: {}
      }
    // Get Profile
    case authConstants.GET_PROFILE_IN_PROCESS:
      return {
        ...state,
        userInfo: {},
        userInfoState: {
          isLoaded: false,
          isSuccess: false
        }
      }
    case authConstants.GET_PROFILE_SUCCESS:
      return {
        ...state,
        userInfo: {
          ...action.userInfo,
          followersLength: action.userInfo.followers.length
        },
        userInfoState: {
          isLoaded: true,
          isSuccess: true
        }
      }
    case authConstants.GET_PROFILE_FAILURE:
      return {
        ...state,
        userInfo: {},
        userInfoState: {
          isLoaded: true,
          isSuccess: false
        }
      }
    // Edit Profile
    case authConstants.EDIT_PROFILE_IN_PROCESS:
      return {
        ...state
      }
    case authConstants.EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        userInfo: {
          ...action.userInfo,
          followersLength: action.userInfo.followers.length
        }
      }
    case authConstants.EDIT_PROFILE_FAILURE:
      return {
        ...state
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
    // Reset Avatar
    case authConstants.RESET_AVATAR_IN_PROCESS:
      return {
        ...state
      }
    case authConstants.RESET_AVATAR_SUCCESS:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          avatar: action.data.avatar
        }
      }
    case authConstants.RESET_AVATAR_FAILURE:
      return {
        ...state
      }
    // Default
    default:
      return state
  }
}
