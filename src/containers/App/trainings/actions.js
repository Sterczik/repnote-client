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
    return axios.get(`${baseUrl}/api/app/trainings/`, options)
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
    return axios.get(`${baseUrl}/api/app/trainings/my`, options)
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
