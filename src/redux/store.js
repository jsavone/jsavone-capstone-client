import { createStore, applyMiddleware, combineReducers } from 'redux'
import recipes from './reducers/recipesReducer'
import categories from './reducers/categoriesReducer'
import ingredients from './reducers/ingredientsReducer'
import comments from './reducers/commentsReducer'
import auth from './reducers/authReducer';
import user from './reducers/userReducer'
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
