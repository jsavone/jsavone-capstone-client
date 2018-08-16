import axios from 'axios'

export const FETCH_RECIPES = 'FETCH_RECIPES'

export const fetchRecipes = () => {
  return( dispatch) => {
    axios.get('http://localhost:8000/recipes')
    .then((response) => {
      dispatch({
        type: FETCH_RECIPES,
        payload: response.data
      })
    })
  }
}
