import { FETCH_CATEGORIES, CREATE_CATEGORY} from '../actions'

let initialState = []

export default (state=initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return [...action.payload]
    case CREATE_CATEGORY:
      return [...action.payload]
    default:
      return state
  }
}
