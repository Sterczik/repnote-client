import React from 'react'
import { connect } from 'react-redux'

const Total = (props) => (
  <div>
    Items: { props.trainings.total }
  </div>
)

const mapStateToProps = (state) => ({
  trainings: state.trainings
})

export default connect(mapStateToProps)(Total)
