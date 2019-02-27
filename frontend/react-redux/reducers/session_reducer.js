
import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const nullUser = {
  currentUser: null
}

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  console.log(action);
  const currentUser = action.currentUser
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, {currentUser})
    default:
    return state
  }
}

export default sessionReducer;
