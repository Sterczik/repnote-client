import React from 'react'
import { withTranslation } from 'react-i18next'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

const TrainingShowLoading = ({ t }) => (
  <Container className="training-loading my-5">
    <Row className="justify-content-center text-center">
      <Col lg="8">
        <h2 className="display-3 mt-4">{ t('components.training.loading') }</h2>
      </Col>
    </Row>
  </Container>
)

export default withTranslation()(TrainingShowLoading)