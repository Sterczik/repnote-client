import { layoutConstants } from './constants'

export function getListingLayout() {
  const layout = localStorage.getItem('listingLayout') ? localStorage.getItem('listingLayout') : 'tiles'

  return {
    type: layoutConstants.GET_LISTING_LAYOUT,
    layout
  }
}

export function setListingLayout(layout) {
  localStorage.setItem('listingLayout', layout)

  return {
    type: layoutConstants.SET_LISTING_LAYOUT,
    layout
  }
}
