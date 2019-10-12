import React from 'react'

import {
  Row,
  Col
} from 'reactstrap'

import Sort from './elements/Sort'
import Search from './elements/Search'
import ListLimit from './elements/ListLimit'
import Total from './elements/Total'
import TrainingVariant from './elements/TrainingVariant'

const Toolbar = (props) => (
  <>
    <Row>
      <Col lg="6" className="mb-3 d-flex align-items-center">
        <Total />
      </Col>
      <Col lg="6" className="mb-3 d-flex justify-content-end">
        <TrainingVariant />
      </Col>
    </Row>
    <Row>
      <Col sm="6" lg="4">
        <Sort />
      </Col>
      <Col sm="6" lg="4">
        <ListLimit />
      </Col>
      <Col sm="6" lg="4">
        <Search />
      </Col>
    </Row>
  </>
)

export default Toolbar