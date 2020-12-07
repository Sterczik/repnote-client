import React from 'react'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import {
  Row,
  Col,
  Button
} from 'reactstrap'

const UserShowError = ({ t }) => (
  <Row className="justify-content-center text-center">
    <Col lg="8">
      <h2 className="display-3 mt-4">{ t('components.user.error.headline') }</h2>
      <p className="lead">{ t('components.user.error.text') }</p>
      <Button
        color="primary"
        to={'/trainings'}
        tag={Link}
      >
        { t('global.buttons.trainings') }
      </Button>
    </Col>
  </Row>
)

export default withTranslation()(UserShowError)