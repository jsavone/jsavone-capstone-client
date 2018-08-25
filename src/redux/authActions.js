import axios from 'axios';
import setAuthorizationToken from './utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';

export const SET_CURRENT_USER = 'SET_CURRENT_USER'


export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export const logout = () => {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export const login = (user) => {
  return dispatch => {
    return axios.post('http://localhost:8000/users/login', user).then((res, err) => {
      console.log(err)
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    });
  }
}
