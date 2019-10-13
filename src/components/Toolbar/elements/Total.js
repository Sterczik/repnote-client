import React from 'react'
import { connect } from 'react-redux'

const Total = (props) => (
  <div>
    <h5 className="display-5 mb-0">Trainings: { props.trainings.total }</h5>
  </div>
)

const mapStateToProps = (state) => ({
  trainings: state.trainings
})

export default connect(mapStateToProps)(Total)
