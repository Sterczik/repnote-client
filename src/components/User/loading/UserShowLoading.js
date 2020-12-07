import React from 'react'
import { withTranslation } from 'react-i18next'
import {
  Row,
  Col
} from 'reactstrap'

const UserShowLoading = ({ t }) => (
  <Row className="justify-content-center text-center">
    <Col lg="8">
      <h2 className="display-3 mt-4">{ t('components.user.loading') }</h2>
    </Col>
  </Row>
)

export default withTranslation()(UserShowLoading)