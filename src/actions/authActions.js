import axios from 'axios';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT,
  // ... other action types
} from './types';
import { setMessage, clearMessage } from './notificationActions';
import { ToastAndroid } from 'react-native';
import { API_ADDR } from '../config/keys';


export const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

export const registerFailure = () => ({
  type: REGISTER_FAILURE,
});

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});


export const register = (userData, navigateToLogin) => {
  return async (dispatch) => {
    dispatch(registerRequest());

    try {
      console.log(`${API_ADDR}auth/register`);
      // Make API call to register the user
      const response = await axios.post(`${API_ADDR}auth/register`, userData);
      console.log(response);
      const { data } = response;
      // Dispatch success action
      if (data.success) {
        dispatch(registerSuccess());
        navigateToLogin();
      }

      // Optionally, you can perform additional actions after successful registration
      // For example, you can redirect the user to a different screen or perform a login automatically. natural.spirit0102@gmail.com
    } catch (error) {
      const { data } = error.response;
      console.log(`${error.message}: ${data.message}`);
      // Show a toast notification when registration is successful
      dispatch(setMessage(data.message));
      dispatch(clearMessage());
      // Dispatch failure action with error message
      dispatch(registerFailure());
    }
  };
};

export const login = (userData, navigateToHome) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    
    try {
      console.log(`${API_ADDR}auth/login`);
      
      // Make API call to authenticate user
      const response = await axios.post(`${API_ADDR}auth/login`, userData);
      console.log(response);
      const { data } = response;

      // Dispatch success action
      if (data.success) {
        dispatch(loginSuccess(data.user));
        navigateToHome();
      }
    } catch (error) {
      const { data } = error.response;
      console.log(`${error.message}: ${data.message}`);
      // Show a toast notification when registration is successful
      dispatch(setMessage(data.message));
      dispatch(clearMessage());
      // Dispatch failure action with error message
      dispatch(loginFailure());
    }
  };
};

export const logout = () => {
  return { type: LOGOUT };
};
// ... other action creators