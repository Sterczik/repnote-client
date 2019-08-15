import React from 'react'

import {
  Row
} from 'reactstrap'

import Sort from './elements/Sort'
import Search from './elements/Search'
import ListLimit from './elements/ListLimit'
import Total from './elements/Total'
import TrainingVariant from './elements/TrainingVariant'

const Toolbar = (props) => (
  <Row>
    <Total />
    <Sort />
    <Search />
    <ListLimit />
    <TrainingVariant />
  </Row>
)

export default Toolbar