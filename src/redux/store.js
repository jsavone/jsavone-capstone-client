import { createStore, applyMiddleware, combineReducers } from 'redux'
import recipes from './recipesReducer'
import user from './usersReducer'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
  recipes,
  user,
})

export default () => createStore(rootReducer, applyMiddleware(thunk))
