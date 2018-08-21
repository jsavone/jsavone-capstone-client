import { FETCH_RECIPES, CREATE_RECIPE, ADD_INGREDIENT, ADD_CATEGORY, EDIT_RECIPE, REMOVE_INGREDIENT, REMOVE_CATEGORY, ADD_COMMENT, REMOVE_COMMENT } from './actions'

let initialState = []

export default (state=initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return [...action.payload]
    case CREATE_RECIPE:
      return [...action.payload]
    case ADD_INGREDIENT:
      return [...action.payload]
    case REMOVE_INGREDIENT:
      return [...action.payload]
    case REMOVE_CATEGORY:
      return [...action.payload]
    case ADD_CATEGORY:
      return [...action.payload]
    case EDIT_RECIPE:
      return [...action.payload]
    case ADD_COMMENT:
      return [...action.payload]
    case REMOVE_COMMENT:
      return [...action.payload]      
    default:
      return state
  }
}
