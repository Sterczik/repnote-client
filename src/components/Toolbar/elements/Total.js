import React from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'

const Total = (props) => (
  <div>
    <h5 className="display-5 mb-0">{ props.t('components.toolbar.total') } { props.trainings.total }</h5>
  </div>
)

const mapStateToProps = (state) => ({
  trainings: state.trainings
})

export default connect(mapStateToProps)(withTranslation()(Total))
