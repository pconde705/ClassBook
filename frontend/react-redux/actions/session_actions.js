import axios from 'axios';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const fetchCurrentUser = 
