import axios from 'axios'

export const FETCH_INGREDIENTS = 'FETCH_INGREDIENTS'
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_RECIPES = 'FETCH_RECIPES'
export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const FETCH_USER = 'FETCH_USER'
export const CREATE_USER = 'CREATE_USER'
export const USER_LOGIN = 'USER_LOGIN'
export const CREATE_RECIPE = 'CREATE_RECIPE'
export const CREATE_CATEGORY = 'CREATE_CATEGORY'
export const CREATE_INGREDIENT = 'CREATE_INGREDIENT'
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT'
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY'
export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const ADD_CATEGORY = 'ADD_CATEGORY'
export const EDIT_RECIPE = 'EDIT_RECIPE'
export const ADD_MEAL = 'ADD_MEAL'
export const REMOVE_MEAL = 'REMOVE_MEAL'
export const ADD_COMMENT = 'ADD_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

let axiosInstance = axios.create({
  baseURL: 'http//localhost:3000',
  headers: { Authorization: `Bearer ${localStorage.getItem('jwtToken')}` },
})

export default axiosInstance;

export const fetchRecipes = () => {
  axiosInstance = axios.create({
    baseURL: 'http//localhost:3000',
    headers: { Authorization: `Bearer ${localStorage.getItem('jwtToken')}` },
  })
  return( dispatch) => {
    axiosInstance({ method: 'get', url: 'http://localhost:8000/recipes'})
    /*axios.get('http://localhost:8000/recipes')*/
    .then((response) => {
      dispatch({
        type: FETCH_RECIPES,
        payload: response.data
      })
    }).then()
  }
}

export const fetchUser = (user) => {

  axiosInstance = axios.create({
    baseURL: 'http//localhost:3000',
    headers: { Authorization: `Bearer ${localStorage.getItem('jwtToken')}` },
  })

  return( dispatch) => {
    axiosInstance({ method: 'get', url: 'http://localhost:8000/users/'+user._id})
    /*axios.get('http://localhost:8000/users/'+user._id)*/
    .then((response) => {
      dispatch({
        type: FETCH_USER,
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

export const fetchComments = () => {
  return( dispatch) => {
    axios.get('http://localhost:8000/comments')
    .then((response) => {
      dispatch({
        type: FETCH_COMMENTS,
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

export const removeIngredient = (ingredient) => {
  return( dispatch) => {
    axios.patch(`http://localhost:8000/recipes/ingredient/remove/${ingredient.recipeId}/${ingredient.id}`)
    .then((response) => {
      dispatch({
        type: REMOVE_INGREDIENT,
        payload: response.data
      })
    })
  }
}

export const removeCategory = (category) => {
  return( dispatch) => {
    axios.patch(`http://localhost:8000/recipes/categories/remove/${category.recipeId}/${category.id}`)
    .then((response) => {
      dispatch({
        type: REMOVE_CATEGORY,
        payload: response.data
      })
    })
  }
}

export const editRecipe = (recipe) => {
  return( dispatch) => {
    axios.patch('http://localhost:8000/recipes', recipe)
    .then((response) => {
      dispatch({
        type: EDIT_RECIPE,
        payload: response.data
      })
    })
  }
}

export const addMeal = (recipe) => {
  return( dispatch) => {
    axios.patch(`http://localhost:8000/users/add/${recipe.user_id}/${recipe.meal}/${recipe.recipe_id}`)
    .then((response) => {
      response.data.meal = recipe.meal
      dispatch({
        type: ADD_MEAL,
        payload: response.data
      })
    })
  }
}

export const removeMeal = (recipe) => {
  return( dispatch) => {
    axios.patch(`http://localhost:8000/users/remove/${recipe.user_id}/${recipe.meal}/${recipe.recipe_id}`)
    .then((response) => {
      response.data.meal = recipe.meal
      dispatch({
        type: REMOVE_MEAL,
        payload: response.data
      })
    })
  }
}

export const addComment = (comment) => {
  return( dispatch) => {
    axios.post('http://localhost:8000/comments', comment)
    .then((response) => {
      dispatch({
        type: ADD_COMMENT,
        payload: response.data
      })
    })
  }
}

export const removeComment = (comment) => {
  return( dispatch) => {
    axios.delete(`http://localhost:8000/comments/remove/${comment.recipe}/${comment.comment}`)
    .then((response) => {
      dispatch({
        type: REMOVE_COMMENT,
        payload: response.data
      })
    })
  }
}
