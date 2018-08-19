import { FETCH_USERS, ADD_MEAL, REMOVE_MEAL } from './actions'

let initialState = []

export default (state=initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return [...action.payload]
    case ADD_MEAL:
      let otherUsersAdd = state.filter(user => user._id !== action.payload._id)
      return [...otherUsersAdd, action.payload]
    case REMOVE_MEAL:
      let otherUsersRemove = state.users.filter(user => user._id !== action.payload._id)
      return [...otherUsersRemove, action.payload]
    default:
      return state
  }
}
