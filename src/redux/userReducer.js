import { FETCH_USER, CREATE_USER, ADD_MEAL, REMOVE_MEAL } from './actions'

let initialState = {}

export default (state=initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return [...{_id: action.payload.user._id, email: action.payload.user.email, firstName: action.payload.user.firstName, lastName: action.payload.user.lastName}]
    case FETCH_USER:
      return {...action.payload}
    case ADD_MEAL:
      return {...action.payload}
    case REMOVE_MEAL:
    return action.payload
    default:
      return state
  }
}
