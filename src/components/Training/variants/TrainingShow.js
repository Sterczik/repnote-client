import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import {
  Badge,
  Card,
  Row,
  Col,
  Button
} from 'reactstrap'
import RemoveTrainingModal from 'components/Modals/RemoveTrainingModal/RemoveTrainingModal'

class TrainingShow extends Component {
  state = {
    removeTrainingModal: false
  }
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state]
    })
  }
  render() {
    const { t } = this.props
    return (
      <>
        <Row className="justify-content-center">
          <Col lg="12">
            <Card className="bg-secondary shadow border-0">
              <div className="px-4">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-training-image">
                      <img
                        alt="Avatar"
                        className="rounded-circle"
                        src={this.props.trainingData.training.user.avatar}
                      />
                    </div>
                  </Col>
                  <Col
                    className="order-lg-3 text-lg-right align-self-lg-center"
                    lg="4"
                  >
                    <div className="card-training-actions py-4 mt-lg-0 d-none d-md-block">
                      { !this.props.trainingData.training.isOwner && this.props.isAuthenticated
                        ? (
                          <>
                            <Button
                              color="default"
                              size="sm"
                              onClick={() => this.props.cloneTraining(this.props.trainingData.training.id)}
                            >
                              { t('components.training.clone') }
                            </Button>
                            { !this.props.trainingData.training.liked ? (
                              <Button
                                type="button"
                                onClick={() => this.props.likeTraining(this.props.trainingData.training.id, true)}
                                color="primary"
                                size="sm"
                              >
                                { t('components.training.like') } <i className="fa fa-heart" />
                              </Button>
                            ) : (
                              <Button
                                type="button"
                                onClick={() => this.props.likeTraining(this.props.trainingData.training.id, false)}
                                color="danger"
                                size="sm"
                              >
                                { t('components.training.unlike') } <i className="fa fa-heart" />
                              </Button>
                            ) }
                          </>
                        )
                        : null }
                      { this.props.trainingData.training.isOwner ? (
                        <>
                          <Button
                            color="default"
                            size="sm"
                            onClick={() => this.toggleModal("removeTrainingModal")}
                          >
                            { t('components.training.delete') }
                          </Button>
                          <Button
                            color="default"
                            size="sm"
                            onClick={() => this.props.cloneTraining(this.props.trainingData.training.id)}
                          >
                            { t('components.training.clone') }
                          </Button>
                          <Button
                            className="float-right"
                            color="default"
                            size="sm"
                            to={'/trainings/' + this.props.trainingData.training.id + '/edit'}
                            tag={Link}
                          >
                            { t('components.training.edit') }
                          </Button>
                        </>
                      ) : null }
                    </div>
                  </Col>
                  <Col className="order-lg-1" lg="4">
                    <div className="card-training-stats d-flex justify-content-center">
                      { true && <div>
                        <span className="heading">{ this.props.trainingData.training.likesLength }</span>
                        <span className="description">{ t('components.training.likes') }</span>
                      </div> }
                      { this.props.trainingData.training.isOwner && <div>
                        <span className="heading">
                          { this.props.trainingData.training.private
                          ? t('components.training.private')
                          : t('components.training.public') }
                        </span>
                        <span className="description">Status</span>
                      </div> }
                    </div>
                    { this.props.trainingData.training.isOwner && <div className="d-flex d-lg-none justify-content-center pb-3 mt--1">
                      <Button
                        color="default"
                        size="sm"
                        onClick={() => this.props.switchTrainingStatus(this.props.trainingData.training.id)}
                      >
                        { t('components.training.changeStatus') }
                      </Button>
                    </div> }
                  </Col>
                </Row>
                <div className="text-center mt-0 mt-lg-4">
                  <h5 className="display-5">
                    <Link
                      to={'/users/' + this.props.trainingData.training.user.slug}
                      className="h5"
                    >
                      { this.props.trainingData.training.user.name }
                    </Link>
                  </h5>
                </div>
                <div className="py-3 text-center">
                  <Row className="mb-2 text-center">
                    <Col lg="12">
                      <h4>{ this.props.trainingData.training.name }</h4>
                    </Col>
                  </Row>
                  <Row className="mb-4 d-flex justify-content-center align-items-center">
                    <Badge color="info" pill className="mr-1 mt-1">
                      { this.props.trainingData.training.category.name }
                    </Badge>
                    <Badge color="danger" pill className="mt-1">
                      { this.props.trainingData.training.advancementLevel.name }
                    </Badge>
                  </Row>
                  <Row className="mb-2 text-center">
                    <Col lg="12">
                      <h5>{this.props.trainingData.training.goal}</h5>
                    </Col>
                  </Row>
                  <Row className="text-center">
                    <Col lg="12">
                      <p>{ this.props.trainingData.training.description }</p>
                    </Col>
                  </Row>
                </div>
                <div className="py-4 border-top text-center">
                  { this.props.trainingData.training.subtrainings.map((subtraining) => (
                    <div key={subtraining.id}>
                      <Row className="mb-2 text-center">
                        <Col lg="12">
                          <h4>{ subtraining.name }</h4>
                        </Col>
                      </Row>
                      <Row className="mb-2 text-center">
                        <Col lg="12">
                          <h5 className="heading">{ t('components.training.exercises') }:</h5>
                        </Col>
                      </Row>
                      { subtraining.exercises.map((exercise) => (
                        <Row className="mb-3 text-center" key={exercise.id}>
                          <Col xs="12" lg="6" className="d-flex flex-column justify-content-center">
                            <h5>{ exercise.name }</h5>
                            <div>
                              <Badge color="primary" pill className="mr-1 mb-3">
                                { exercise.category.name }
                              </Badge>
                              <Badge color="primary" pill className="mb-3">
                                { t('components.training.rounds') }: { exercise.rounds.length }
                              </Badge>
                            </div>
                          </Col>
                          <Col xs="12" lg="6">
                            <table className="table table-sm table-borderless table-center table-300">
                              <thead>
                                <tr>
                                  <th>{ t('components.training.weight') }</th>
                                  <th>{ t('components.training.reps') }</th>
                                </tr>
                              </thead>
                              <tbody>
                                { exercise.rounds.map((round) => (
                                  <>
                                    <tr>
                                      <td>{round.weight} kg</td>
                                      <td>{round.reps}</td>
                                    </tr>
                                  </>
                                )) }
                              </tbody>
                            </table>
                          </Col>
                        </Row>
                      )) }
                    </div>
                  )) }
                </div>
                <div className="pb-4 d-flex justify-content-center d-md-none">
                  { !this.props.trainingData.training.isOwner && this.props.isAuthenticated
                    ? (
                      <>
                        <Button
                          color="default"
                          size="sm"
                          onClick={() => this.props.cloneTraining(this.props.trainingData.training.id)}
                        >
                          { t('components.training.clone') }
                        </Button>
                        { !this.props.trainingData.training.liked ? (
                          <Button
                            type="button"
                            onClick={() => this.props.likeTraining(this.props.trainingData.training.id, true)}
                            color="primary"
                            size="sm"
                          >
                            { t('components.training.like') } <i className="fa fa-heart" />
                          </Button>
                        ) : (
                          <Button
                            type="button"
                            onClick={() => this.props.likeTraining(this.props.trainingData.training.id, false)}
                            color="danger"
                            size="sm"
                          >
                            { t('components.training.unlike') } <i className="fa fa-heart" />
                          </Button>
                        ) }
                      </>
                    )
                    : null }
                  { this.props.trainingData.training.isOwner ? (
                    <>
                      <Button
                        color="default"
                        size="sm"
                        onClick={() => this.toggleModal("removeTrainingModal")}
                      >
                        { t('components.training.delete') }
                      </Button>
                      <Button
                        color="default"
                        size="sm"
                        onClick={() => this.props.cloneTraining(this.props.trainingData.training.id)}
                      >
                        { t('components.training.clone') }
                      </Button>
                      <Button
                        className="float-right"
                        color="default"
                        size="sm"
                        to={'/trainings/' + this.props.trainingData.training.id + '/edit'}
                        tag={Link}
                      >
                        { t('components.training.edit') }
                      </Button>
                    </>
                  ) : null }
                </div>
              </div>
            </Card>
          </Col>
          <RemoveTrainingModal
            id={this.props.trainingData.training.id}
            removeTrainingModal={this.state.removeTrainingModal}
            toggleModal={this.toggleModal}
            removeTraining={this.props.removeTraining}
          />
        </Row>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.loggedIn
})

export default connect(mapStateToProps)(withTranslation()(TrainingShow))
