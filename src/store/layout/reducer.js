import { layoutConstants } from './constants'

const layoutReducerDefaultState = {
  listingLayout: localStorage.getItem('listingLayout') ? localStorage.getItem('listingLayout') : 'tiles'
}

export default (state = layoutReducerDefaultState, action) => {
  switch (action.type) {
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
