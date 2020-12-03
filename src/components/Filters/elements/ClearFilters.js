import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'

import {
  setTrainingCategoryFilter
} from 'store/trainings/actions'

class ClearFilters extends Component {
  render() {
    const { t } = this.props
    return (
      <button>X</button>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setTrainingCategoryFilter: (value) => dispatch(setTrainingCategoryFilter(value))
})

export default connect(undefined, mapDispatchToProps)(withTranslation()(ClearFilters))
