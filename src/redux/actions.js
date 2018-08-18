import axios from 'axios'

export const FETCH_INGREDIENTS = 'FETCH_INGREDIENTS'
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_RECIPES = 'FETCH_RECIPES'
export const FETCH_USERS = 'FETCH_USERS'
export const CREATE_USER = 'CREATE_USER'
export const USER_LOGIN = 'USER_LOGIN'
export const CREATE_RECIPE = 'CREATE_RECIPE'
export const CREATE_CATEGORY = 'CREATE_CATEGORY'
export const CREATE_INGREDIENT = 'CREATE_INGREDIENT'
export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const ADD_CATEGORY = 'ADD_CATEGORY'

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

export const fetchUsers = () => {
  return( dispatch) => {
    axios.get('http://localhost:8000/users')
    .then((response) => {
      dispatch({
        type: FETCH_USERS,
        payload: response.data
      })
    })
  }
}

export const fetchCategories = () => {
  return( dispatch) => {
    axios.get('http://localhost:8000/categories')
    .then((response) => {
      dispatch({
        type: FETCH_CATEGORIES,
        payload: response.data
      })
    })
  }
}

export const fetchIngredients = () => {
  return( dispatch) => {
    axios.get('http://localhost:8000/ingredients')
    .then((response) => {
      dispatch({
        type: FETCH_INGREDIENTS,
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

export const createRecipe = (recipe) => {
  return( dispatch) => {
    axios.post('http://localhost:8000/recipes', recipe)
    .then((response) => {
      dispatch({
        type: CREATE_RECIPE,
        payload: response.data
      })
    })
  }
}

export const createCategory = (category) => {
  return( dispatch) => {
    axios.post('http://localhost:8000/categories', category)
    .then((response) => {
      dispatch({
        type: CREATE_CATEGORY,
        payload: response.data
      })
    })
  }
}

export const createIngredient = (ingredient) => {
  return( dispatch) => {
    axios.post('http://localhost:8000/ingredients', ingredient)
    .then((response) => {
      dispatch({
        type: CREATE_INGREDIENT,
        payload: response.data
      })
    })
  }
}

export const addIngredient = (ingredient) => {
  return( dispatch) => {
    axios.patch(`http://localhost:8000/recipes/ingredient/${ingredient.recipeId}/${ingredient.id}/${ingredient.amount}`)
    .then((response) => {
      dispatch({
        type: ADD_INGREDIENT,
        payload: response.data
      })
    })
  }
}

export const addCategory = (category) => {
  return( dispatch) => {
    axios.patch(`http://localhost:8000/recipes/categories/${category.recipeId}/${category.id}`)
    .then((response) => {
      dispatch({
        type: ADD_CATEGORY,
        payload: response.data
      })
    })
  }
}
