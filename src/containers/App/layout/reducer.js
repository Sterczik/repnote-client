import { layoutConstants } from './constants'

const layoutReducerDefaultState = {
  listingLayout: 'tiles'
}

export default (state = layoutReducerDefaultState, action) => {
  switch (action.type) {
    case layoutConstants.GET_LISTING_LAYOUT:
      return {
        ...state,
        listingLayout: action.layout
      }
    case layoutConstants.SET_LISTING_LAYOUT:
      return {
        ...state,
        listingLayout: action.layout
      }
    // Default
    default:
      return state
  }
}
