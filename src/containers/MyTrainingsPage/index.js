import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Main } from '../../assets/styles/core/global/mainContainer'
import { Container } from '../../assets/styles/core/global/container'

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

        <Main>
          <Container>
            {
              this.props.trainings.length === 0 ? (
                <h2>No trainings</h2>
              ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  { this.props.trainings.map((training) => (
                    <>
                      { training.name }
                      { training.user.name }
                      <Link to={'/trainings/' + training.id}>Go to training</Link>
                    </>
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
  getMyTrainings: () => dispatch(getMyTrainings())
})

export default connect(mapStateToProps, mapDispatchToProps)(MyTrainingsPage)
