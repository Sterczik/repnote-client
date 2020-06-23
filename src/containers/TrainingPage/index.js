import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import TrainingShow from 'components/Training/variants/TrainingShow'
import TrainingShowLoading from 'components/Training/loading/TrainingShowLoading'
import TrainingShowAuthError from 'components/Training/errors/TrainingShowAuthError'
import TrainingShowError from 'components/Training/errors/TrainingShowError'

import {
  Container
} from 'reactstrap'

import {
  getTraining,
  removeTraining,
  switchTrainingStatus,
  likeTraining,
  cloneTraining
} from 'store/training/actions'

class TrainingPage extends Component {
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
        <main className="training-page">

          { !this.props.trainingData.isLoaded ? (
            <TrainingShowLoading />
          ) : this.props.trainingData.isLoaded
            && !this.props.trainingData.isSuccess
            && this.props.trainingData.isAuthorizedError ? (
            <TrainingShowAuthError />
          ) : this.props.trainingData.isLoaded
            && !this.props.trainingData.isSuccess
            && !this.props.trainingData.isAuthorizedError ? (
            <TrainingShowError />
          ) : (
            <section className="section section-shaped section-lg">
              <Container>
                <TrainingShow 
                  trainingData={this.props.trainingData}
                  removeTraining={this.props.removeTraining}
                  switchTrainingStatus={this.props.switchTrainingStatus}
                  likeTraining={this.props.likeTraining}
                  cloneTraining={this.props.cloneTraining}
                />
              </Container>
            </section>
          ) }

        </main>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  trainingData: state.trainingData
})

const mapDispatchToProps = (dispatch) => ({
  getTraining: (id) => dispatch(getTraining(id)),
  removeTraining: (id) => dispatch(removeTraining(id)),
  switchTrainingStatus: (id) => dispatch(switchTrainingStatus(id)),
  likeTraining: (id, like) => dispatch(likeTraining(id, like)),
  cloneTraining: (id) => dispatch(cloneTraining(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TrainingPage)
