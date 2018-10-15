import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER } from './types';

// Login - Get User Token
export const loginUser = userData => dispatch => {
  console.log("userData",userData);
  axios
  .post('/users/login', userData)
  .then(res => {
    console.log("res",res);
      const { authorization } = res.headers;
      console.log(authorization);
      localStorage.setItem('jwtToken', authorization);

      setAuthToken(authorization);
      const decoded = jwt_decode(authorization);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
}