import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import TrainingList from '../../components/Trainings/TrainingList'

import {
  getMyTrainings
} from '../App/trainings/actions'

export class MyTrainingsPage extends React.Component {
  componentDidMount() {
    this.props.getMyTrainings()
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
            <Row className="justify-content-center">
            {
              this.props.trainings.length === 0 ? (
                <h2 className="display-2">No trainings</h2>
              ) : (
                <Col lg="12">
                  <Row className="row-grid">
                    { this.props.trainings.map((training) => (
                      <Col lg="4" className="mb-5">
                        <TrainingList training={training} />
                      </Col>
                    )) }
                  </Row>
                </Col> 
              )
            }
            </Row>
          </Container>
        </section>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  trainings: state.trainings
})

const mapDispatchToProps = (dispatch) => ({
  getMyTrainings: () => dispatch(getMyTrainings())
})

export default connect(mapStateToProps, mapDispatchToProps)(MyTrainingsPage)
