import axios from 'axios';
import {API_URL} from '../api/api';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const login = user => dispatch => (
  axios.post(`${API_URL}/login`, user)
  .then(response => dispatch(receiveCurrentUser(response.data)))
  .catch(error => {
    console.log(error);
  })
)

export const logout = () => dispatch => (
  axios.post(`${API_URL}/logout`, {})
  .then(response => dispatch(receiveCurrentUser(response.data)))
  .catch(error => {
    console.log(error);
  })
)
