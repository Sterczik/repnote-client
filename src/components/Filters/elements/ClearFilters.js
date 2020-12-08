import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Button
} from 'reactstrap'

import {
  getTrainings,
  clearFilters
} from 'store/trainings/actions'

class ClearFilters extends Component {

  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.clearFilters()
    this.props.getTrainings()
  }

  render() {
    return (
      <Button
        className="btn-neutral btn-icon ml-1"
        color="default"
        onClick={this.handleClick}
      >
        <i className="fa fa-close" />
      </Button>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getTrainings: () => dispatch(getTrainings()),
  clearFilters: () => dispatch(clearFilters())
})

export default connect(undefined, mapDispatchToProps)(ClearFilters)
