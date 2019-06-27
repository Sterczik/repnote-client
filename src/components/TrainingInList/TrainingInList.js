import React from 'react'
import { Link } from 'react-router-dom'

const TrainingInList = ({ training }) => (
  <>
    { training.name }
    { training.user.name }
    <Link to={'/trainings/' + training.id}>Go to training</Link>
  </>
)

export default TrainingInList
