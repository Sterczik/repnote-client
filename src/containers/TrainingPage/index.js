import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import TrainingShow from '../../components/Training/variants/TrainingShow'

import {
  Container
} from 'reactstrap'

import {
  getTraining,
  removeTraining,
  switchTrainingStatus,
  likeTraining
} from '../App/training/actions'

export class TrainingPage extends React.Component {
  componentDidMount() {
    if (!this.props.location.state) {
      this.props.getTraining(this.props.match.params.id)
    }
  }

  render() {
    return (
      <>
        <Helmet
          titleTemplate="Training"
          defaultTitle="Training"
        >
          <meta name="description" content="Training" />
        </Helmet>
        <main class="training-page">
          <section className="section section-shaped section-lg">
            <Container>
              { this.props.training.id ? (
                <TrainingShow 
                  training={this.props.training}
                  removeTraining={this.props.removeTraining}
                  switchTrainingStatus={this.props.switchTrainingStatus}
                  likeTraining={this.props.likeTraining}
                />
                ) : (
                  <div>Loading</div>
                ) 
              }
            </Container>
          </section>
        </main>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  training: state.training
})

const mapDispatchToProps = (dispatch) => ({
  getTraining: (id) => dispatch(getTraining(id)),
  removeTraining: (id) => dispatch(removeTraining(id)),
  switchTrainingStatus: (id) => dispatch(switchTrainingStatus(id)),
  likeTraining: (id) => dispatch(likeTraining(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TrainingPage)
