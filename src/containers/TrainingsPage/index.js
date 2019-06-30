import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Main } from '../../assets/styles/core/global/mainContainer'
import { Container } from '../../assets/styles/core/global/container'
import TrainingInList from '../../components/TrainingInList/TrainingInList'

import {
  getTrainings
} from '../App/trainings/actions'

export class TrainingsPage extends React.Component {
  componentDidMount() {
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

        <Main>
          <Container>
            {
              this.props.trainings.length === 0 ? (
                <h2>No trainings</h2>
              ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  { this.props.trainings.map((training) => (
                    <TrainingInList key={training.id} training={training} />
                  )) }
                </div>
              )
            }
          </Container>
        </Main>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  trainings: state.trainings
})

const mapDispatchToProps = (dispatch) => ({
  getTrainings: () => dispatch(getTrainings())
})

export default connect(mapStateToProps, mapDispatchToProps)(TrainingsPage)
