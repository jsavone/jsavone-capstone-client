import axios from 'axios';

export default function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.baseURL = 'http//localhost:3000'
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}
