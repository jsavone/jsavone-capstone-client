import axios from 'axios'

export const FETCH_RECIPES = 'FETCH_RECIPES'
export const CREATE_USER = 'CREATE_USER'
export const USER_LOGIN = 'USER_LOGIN'

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

export const createUser = (user) => {
  return( dispatch) => {
    axios.post('http://localhost:8000/users/signup', user)
    .then((response) => {
      dispatch({
        type: CREATE_USER,
        payload: response.data
      })
    })
  }
}

export const userLogin = (user) => {
  return( dispatch) => {
    axios.post('http://localhost:8000/users/login', user)
    .then((response) => {
      dispatch({
        type: USER_LOGIN,
        payload: response.data
      })
    })
  }
}
