import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/store'
import { Provider } from 'react-redux'
import App from './App';
import {
        fetchRecipes,
        fetchUsers,
        fetchCategories,
        fetchIngredients,
       } from './redux/actions'


let newStore = store()
newStore.dispatch(fetchRecipes())
newStore.dispatch(fetchUsers())
newStore.dispatch(fetchCategories())
newStore.dispatch(fetchIngredients())

ReactDOM.render(
  <Provider store={newStore}>
  <App />
  </Provider>

  , document.getElementById('root'));
