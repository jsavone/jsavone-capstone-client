import { FETCH_INGREDIENTS, CREATE_INGREDIENT} from '../actions'

let initialState = []

export default (state=initialState, action) => {
  switch (action.type) {
    case FETCH_INGREDIENTS:
      return [...action.payload]
    case CREATE_INGREDIENT:
      return [...action.payload]
    default:
      return state
  }
}
