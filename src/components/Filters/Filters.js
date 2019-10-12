import React from 'react'
import {
  Row,
  Col
} from 'reactstrap'

import AdvancementLevels from './elements/AdvancementLevels'
import Categories from './elements/Categories'

const Filters = () => (
  <Row>
    <Col sm="6" lg="4">
      <Categories />
    </Col>
    <Col sm="6" lg="4">
      <AdvancementLevels />
    </Col>
  </Row>
)

export default Filters
