import React from 'react'
import { connect } from 'react-redux'
import {
  Button
} from 'reactstrap'

import {
  setListingLayout
} from '../../../containers/App/layout/actions'

const TrainingVariant = (props) => {

  return (
    <>
      <Button
        onClick={e => props.setListingLayout('tiles')}
        className=""
        color="primary"
      >
        Tiles
      </Button>
      <Button
        onClick={e => props.setListingLayout('row')}
        className=""
        color="primary"
      >
        Row
      </Button>
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setListingLayout: (layout) => dispatch(setListingLayout(layout))
})

export default connect(undefined, mapDispatchToProps)(TrainingVariant)