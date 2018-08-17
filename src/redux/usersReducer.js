import { CREATE_USER, USER_LOGIN } from './actions'

let initialState = {}

export default (state=initialState, action) => {
  const user = {...action.payload}
  switch (action.type) {
    case CREATE_USER:
      return {_id: user._id, email: user.email, firstName: user.firstName, lastName: user.lastName}
    case USER_LOGIN:
      return {_id: user._id, email: user.email, firstName: user.firstName, lastName: user.lastName}
    default:
      return state
  }
}
