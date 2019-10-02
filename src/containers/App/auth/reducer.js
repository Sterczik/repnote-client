import { authConstants } from './constants'

const user = localStorage.getItem('token') && localStorage.getItem('token').length ? JSON.parse(localStorage.getItem('token')) : null

const initialState = user ? {
  loggedIn: true,
  loggingIn: false,
  user,
  userInfo: {}
} : {
  loggedIn: false,
  loggingIn: false,
  user: {},
  userInfo: {},
  registerProcess: false
}

export default (state = initialState, action) => {
  switch (action.type) {
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
      
    case authConstants.LOGIN_IN_PROCESS:
      return {
        loggingIn: true,
        loggedIn: false,
        user: {}
      }
    case authConstants.LOGIN_SUCCESS:
      return {
        loggingIn: false,
        loggedIn: true,
        user: {
          ...action.token,
          ...action.user
        }
      }
    case authConstants.LOGIN_FAILURE:
      return {
        loggingIn: false,
        loggedIn: false,
        user: {}
      }

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
          ...action.token,
          ...action.user
        }
      }
    case authConstants.SOCIAL_LOGIN_FAILURE:
      return {
        loggingIn: false,
        loggedIn: false,
        user: {}
      }

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

    case authConstants.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        user: {}
      }

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

    case authConstants.CHANGE_AVATAR_IN_PROCESS:
      return {
        ...state
      }
    case authConstants.CHANGE_AVATAR_SUCCESS:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          avatar: action.data
        }
      }
    case authConstants.CHANGE_AVATAR_FAILURE:
      return {
        ...state,
        userInfo: {}
      }

    default:
      return state
  }
}
