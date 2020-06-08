import React from 'react'
import { connect } from 'react-redux'
import {
  Button
} from 'reactstrap'

import {
  setListingLayout
} from 'store/layout/actions'

const TrainingVariant = (props) => {
  return (
    <>
      <Button
        className={props.layout === 'tiles' ? 'btn-primary btn-icon ml-1' : 'btn-neutral btn-icon ml-1'}
        color="primary"
        onClick={e => props.setListingLayout('tiles')}
      >
        <i className="fa fa-th" />
      </Button>
      <Button
        className={props.layout === 'row' ? 'btn-primary btn-icon ml-1' : 'btn-neutral btn-icon ml-1'}
        color="primary"
        onClick={e => props.setListingLayout('row')}
      >
        <i className="fa fa-th-list" />
      </Button>
    </>
  )
}

const mapStateToProps = (state) => ({
  layout: state.layout.listingLayout
})

const mapDispatchToProps = (dispatch) => ({
  setListingLayout: (layout) => dispatch(setListingLayout(layout))
})

export default connect(mapStateToProps, mapDispatchToProps)(TrainingVariant)