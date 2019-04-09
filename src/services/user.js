import axios from 'axios';
import { authHeader } from '../helpers/auth-header';
import { baseUrl } from '../helpers/baseUrl';

function getUrlParameter(name) {
  /* eslint-disable no-useless-escape, indent */
  const names = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  /* eslint-disable prefer-template, indent */
  const regex = new RegExp('[\\?&]' + names + '=([^&#]*)');
  const results = regex.exec(window.location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('id');
}

function handleResponse(response) {
  if (response && response.response && response.response.status === 401) {
    logout();
    window.location.reload(true);
    const error = (response && response.message) || response.statusText;
    return Promise.reject(error);
  }
  return response;
}

function register(email, name, password, passwordConfirm) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email, name, password, passwordConfirm
    })
  };
  return fetch(`${baseUrl}/api/app/users/register`, requestOptions)
    .then(res => res.json())
    .then(data => {
      return data;
    });
}

function login(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  };
  return fetch(`${baseUrl}/api/app/users/login`, requestOptions)
    .then(res => res.json());
}

function changePassword(oldPassword, newPassword, newPasswordConfirm) {
  const body = JSON.stringify({ oldPassword, newPassword, newPasswordConfirm });
  const options = {
    headers: authHeader()
  };
  return axios.put(`${baseUrl}/api/app/users/change-password`, body, options);
}

function forgotPassword(email) {
  return axios.post(`${baseUrl}/api/app/users/forgot-password`, { email });
}

function resetPassword(newPassword, newPasswordConfirm) {
  return axios.post(`${baseUrl}/api/app/users/reset-password?token=${getUrlParameter('token')}`, { newPassword, newPasswordConfirm });
}

function getProfile() {
  const options = {
    headers: authHeader()
  };
  return axios.get(`${baseUrl}/api/app/users/profile`, options);
}

export const userService = {
  register,
  login,
  changePassword,
  logout,
  handleResponse,
  forgotPassword,
  resetPassword,
  getProfile
};
