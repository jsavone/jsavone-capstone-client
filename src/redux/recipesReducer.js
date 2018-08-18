import { FETCH_RECIPES, CREATE_RECIPE, ADD_INGREDIENT, ADD_CATEGORY } from './actions'

let initialState = []

export default (state=initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return [...action.payload]
    case CREATE_RECIPE:
      return [...action.payload]
    case ADD_INGREDIENT:
      return [...action.payload]
    case ADD_CATEGORY:
      return [...action.payload]
    default:
      return state
  }
}
