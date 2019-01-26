import axios from 'axios';
import { snackbarActions as snackbar } from 'material-ui-snackbar-redux';
import { authHeader } from '../../../helpers/auth-header';
import { userService } from '../../../services/user';
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

export function createTraining(name) {
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
      name
    });

    const options = {
      headers: authHeader(),
      body: {
        name
      }
    };

    return axios.post(`${baseUrl}/api/trainings/`, data, options)
      .then((res) => {
        const training = res.data;
        dispatch(createTrainingSuccess(training));
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

export function removeTraining(id) {
  const removeTrainingInProcess = () => ({
    type: trainingsConstants.REMOVE_TRAINING_IN_PROCESS
  });

  const removeTrainingSuccess = (training) => ({
    type: trainingsConstants.REMOVE_TRAINING_SUCCESS,
    id: training.id
  });

  const removeTrainingFailure = (error) => ({
    type: trainingsConstants.REMOVE_TRAINING_FAILURE,
    error
  });

  return (dispatch) => {
    dispatch(removeTrainingInProcess());

    const options = {
      headers: authHeader()
    };

    return axios.delete(`${baseUrl}/api/trainings/${id}`, options)
      .then((res) => {
        const training = res.data;
        dispatch(removeTrainingSuccess(training));
        dispatch(snackbar.show({
          message: 'You successfully removed your Training.'
        }));
      })
      .catch((error) => {
        userService.handleResponse(error);
        dispatch(removeTrainingFailure(error));
        dispatch(snackbar.show({
          message: 'Something went wrong!'
        }));
      });
  };
}

export function switchTrainingStatus(id) {
  const switchTrainingStatusInProcess = () => ({
    type: trainingsConstants.SWITCH_TRAINING_STATUS_IN_PROCESS
  });

  const switchTrainingStatusSuccess = (training) => ({
    type: trainingsConstants.SWITCH_TRAINING_STATUS_SUCCESS,
    training
  });

  const switchTrainingStatusFailure = (error) => ({
    type: trainingsConstants.SWITCH_TRAINING_STATUS_FAILURE,
    error
  });

  return (dispatch) => {
    dispatch(switchTrainingStatusInProcess());

    const options = {
      headers: authHeader()
    };

    return axios.put(`${baseUrl}/api/trainings/${id}/private-status`, {}, options)
      .then((res) => {
        const training = res.data;
        dispatch(switchTrainingStatusSuccess(training));
      })
      .catch((error) => {
        userService.handleResponse(error);
        dispatch(switchTrainingStatusFailure(error));
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
