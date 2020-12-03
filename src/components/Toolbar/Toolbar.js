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

const Toolbar = () => (
  <>
    <Row>
      <Col xs="6" className="mb-3 d-flex align-items-center">
        <Total />
      </Col>
      <Col xs="6" className="mb-3 d-none d-lg-flex justify-content-end">
        <TrainingVariant />
      </Col>
    </Row>
    <Row>
      <Col xs="6" md="4">
        <ListLimit />
      </Col>
      <Col xs="6" md="4">
        <Sort />
      </Col>
      <Col xs="12" md="4">
        <Search />
      </Col>
    </Row>
  </>
)

export default Toolbar