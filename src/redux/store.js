import { createStore, applyMiddleware, combineReducers } from 'redux'
import recipes from './recipesReducer.js'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  recipes
})

export default () => createStore(rootReducer, applyMiddleware(thunk))
