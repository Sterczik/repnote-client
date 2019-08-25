import { layoutConstants } from './constants'

export function setListingLayout(layout) {
  localStorage.setItem('listingLayout', layout)

  return {
    type: layoutConstants.SET_LISTING_LAYOUT,
    layout
  }
}
