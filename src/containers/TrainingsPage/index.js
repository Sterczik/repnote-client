import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import TrainingTiles from '../../components/Training/variants/TrainingTiles'
import TrainingRow from '../../components/Training/variants/TrainingRow'
import Toolbar from '../../components/Toolbar/Toolbar'
import Filters from '../../components/Filters/Filters'
import PaginationList from '../../components/Pagination/PaginationList'

import {
  getTrainings
} from '../App/trainings/actions'

import {
  getListingLayout
} from '../App/layout/actions'

export class TrainingsPage extends React.Component {
  componentDidMount() {
    this.props.getListingLayout()
    this.props.getTrainings()
  }

  render() {
    return (
      <>
        <Helmet
          titleTemplate="All trainings"
          defaultTitle="All trainings"
        >
          <meta name="description" content="All trainings" />
        </Helmet>
        <section className="section section-lg pt-lg-0 mt-5">
          <Container>
            <Row>
              <Toolbar />
            </Row>
            <Row>
              <Filters />
            </Row>
            <Row className="justify-content-center">
            {
              this.props.trainings && this.props.trainings.data && this.props.trainings.data.length === 0 ? (
                <h2 className="display-2">No trainings</h2>
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
            <Row>
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
  getTrainings: () => dispatch(getTrainings()),
  getListingLayout: () => dispatch(getListingLayout())
})

export default connect(mapStateToProps, mapDispatchToProps)(TrainingsPage)
