import React from 'react'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap'

const TrainingShowError = ({ t }) => (
  <Container className="training-error my-5">
    <Row className="justify-content-center text-center">
      <Col lg="8">
        <i className="fa fa-ambulance" />
        <h2 className="display-3 mt-4">{ t('components.training.errors.global.headline') }</h2>
        <p className="lead text-muted">{ t('components.training.errors.global.text') }</p>
        <Button
          color="primary"
          to={'/trainings'}
          tag={Link}
        >
          { t('global.buttons.trainings') }
        </Button>
      </Col>
    </Row>
  </Container>
)

export default withTranslation()(TrainingShowError)