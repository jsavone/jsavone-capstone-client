import { createStore, applyMiddleware, combineReducers } from 'redux'
import recipes from './recipesReducer'
import categories from './categoriesReducer'
import ingredients from './ingredientsReducer'
import user from './userReducer'
import users from './usersReducer'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
  recipes,
  categories,
  ingredients,
  users,
  user,
})

export default () => createStore(rootReducer, applyMiddleware(thunk))
