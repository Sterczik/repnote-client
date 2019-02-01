import axios from 'axios';
import { snackbarActions as snackbar } from 'material-ui-snackbar-redux';
import { authHeader } from '../../../helpers/auth-header';
import { userService } from '../../../services/user';
import { history } from '../../../helpers/history';
import { trainingsConstants } from './constants';
import { baseUrl } from '../../../helpers/baseUrl';

export function getTrainings() {
  const getTrainingsInProcess = () => ({
    type: trainingsConstants.GET_TRAININGS_IN_PROCESS
  });

  const getTrainingsSuccess = (trainings) => ({
    type: trainingsConstants.GET_TRAININGS_SUCCESS,
    trainings
  });

  const getTrainingsFailure = (error) => ({
    type: trainingsConstants.GET_TRAININGS_FAILURE,
    error
  });

  return (dispatch) => {
    dispatch(getTrainingsInProcess());

    const options = {
      headers: authHeader()
    };
    return axios.get(`${baseUrl}/api/trainings/`, options)
      .then((res) => {
        const trainings = res.data;
        dispatch(getTrainingsSuccess(trainings));
        dispatch(snackbar.show({
          message: 'You successfully fetched Trainings.'
        }));
      })
      .catch((error) => {
        userService.handleResponse(error);
        dispatch(getTrainingsFailure(error));
        dispatch(snackbar.show({
          message: 'Something went wrong!'
        }));
      });
  };
}

export function getMyTrainings() {
  const getTrainingsInProcess = () => ({
    type: trainingsConstants.GET_TRAININGS_IN_PROCESS
  });

  const getTrainingsSuccess = (trainings) => ({
    type: trainingsConstants.GET_TRAININGS_SUCCESS,
    trainings
  });

  const getTrainingsFailure = (error) => ({
    type: trainingsConstants.GET_TRAININGS_FAILURE,
    error
  });

  return (dispatch) => {
    dispatch(getTrainingsInProcess());

    const options = {
      headers: authHeader()
    };
    return axios.get(`${baseUrl}/api/trainings/my`, options)
      .then((res) => {
        const trainings = res.data;
        dispatch(getTrainingsSuccess(trainings));
        dispatch(snackbar.show({
          message: 'You successfully fetched your Trainings.'
        }));
      })
      .catch((error) => {
        userService.handleResponse(error);
        dispatch(getTrainingsFailure(error));
        dispatch(snackbar.show({
          message: 'Something went wrong!'
        }));
      });
  };
}

export function createTraining(trainingData) {
  const createTrainingInProcess = () => ({
    type: trainingsConstants.CREATE_TRAINING_IN_PROCESS
  });

  const createTrainingSuccess = (training) => ({
    type: trainingsConstants.CREATE_TRAINING_SUCCESS,
    training
  });

  const createTrainingFailure = (error) => ({
    type: trainingsConstants.CREATE_TRAINING_FAILURE,
    error
  });

  return (dispatch) => {
    dispatch(createTrainingInProcess());

    const data = JSON.stringify({
      ...trainingData
    });

    const options = {
      headers: authHeader()
    };

    return axios.post(`${baseUrl}/api/trainings/`, data, options)
      .then((res) => {
        const training = res.data;
        dispatch(createTrainingSuccess(training));
        history.push('/my-trainings');
        dispatch(snackbar.show({
          message: 'You successfully added your Training.'
        }));
      })
      .catch((error) => {
        userService.handleResponse(error);
        dispatch(createTrainingFailure(error));
        dispatch(snackbar.show({
          message: 'Something went wrong!'
        }));
      });
  };
}

export function editTraining(id, updates) {
  const editTrainingInProcess = () => ({
    type: trainingsConstants.EDIT_TRAINING_IN_PROCESS
  });

  const editTrainingSuccess = (trainingId, trainingUpdates) => ({
    type: trainingsConstants.EDIT_TRAINING_SUCCESS,
    id: trainingId,
    updates: trainingUpdates
  });

  const editTrainingFailure = (error) => ({
    type: trainingsConstants.EDIT_TRAINING_FAILURE,
    error
  });

  return (dispatch) => {
    dispatch(editTrainingInProcess());

    const options = {
      headers: authHeader()
    };

    return axios.put(`${baseUrl}/api/trainings/${id}`, { ...updates }, options)
      .then(() => {
        dispatch(editTrainingSuccess(id, updates));
        dispatch(snackbar.show({
          message: 'You successfully updated your Training.'
        }));
      })
      .catch((error) => {
        userService.handleResponse(error);
        dispatch(editTrainingFailure(error));
        dispatch(snackbar.show({
          message: 'Something went wrong!'
        }));
      });
  };
}
