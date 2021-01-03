import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import TrainingTiles from 'components/Training/variants/TrainingTiles'
import TrainingRow from 'components/Training/variants/TrainingRow'
import Toolbar from 'components/Toolbar/Toolbar'
import Filters from 'components/Filters/Filters'
import PaginationList from 'components/Pagination/PaginationList'

import {
  getTrainings
} from 'store/trainings/actions'

class TrainingsPage extends Component {
  componentDidMount() {
    this.props.getTrainings()
  }

  render() {
    const { t } = this.props
    const helmetContent = t('views.trainingspage.helmet.text')
    return (
      <>
        <Helmet
          title={ helmetContent }
          meta={[
            {
              name: 'description',
              content: helmetContent,
            },
          ]}
        />
        <section className="section pb-4 pt-5">
          <Container>
            <Toolbar />
            <Filters />
            <Row className="justify-content-center">
            {
              this.props.trainings && this.props.trainings.data && this.props.trainings.data.length === 0 ? (
                <h2 className="display-2">{ t('views.trainingspage.noTrainings') }</h2>
              ) : (
                <Col lg="12">
                  <Row className="row-grid">
                    { this.props.listingLayout === 'row' ? (
                      this.props.trainings && this.props.trainings.data && this.props.trainings.data.map((training) => (
                        <TrainingRow training={training} />
                      ))
                    ) : (
                      this.props.trainings && this.props.trainings.data && this.props.trainings.data.map((training) => (
                        <TrainingTiles training={training} />
                      ))
                    ) }
                  </Row>
                </Col>
              )
            }
            </Row>
            <Row className="justify-content-center">
              <PaginationList />
            </Row>
          </Container>
        </section>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  trainings: state.trainings,
  listingLayout: state.layout.listingLayout
})

const mapDispatchToProps = (dispatch) => ({
  getTrainings: () => dispatch(getTrainings())
})

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(TrainingsPage))
