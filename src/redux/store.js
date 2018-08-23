import { createStore, applyMiddleware, combineReducers } from 'redux'
import recipes from './recipesReducer'
import categories from './categoriesReducer'
import ingredients from './ingredientsReducer'
import comments from './commentsReducer'
import auth from './authReducer';
import user from './userReducer'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
  recipes,
  categories,
  ingredients,
  comments,
  user,
  auth,
})

export default () => createStore(rootReducer, applyMiddleware(thunk))
