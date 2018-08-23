import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/store'
import { Provider } from 'react-redux'
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './redux/authActions';
import setAuthorizationToken from './redux/utils/setAuthorizationToken';
import App from './App';
import {
        fetchRecipes,
        fetchUser,
        fetchCategories,
        fetchIngredients,
        fetchComments,
       } from './redux/actions'


let newStore = store()

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  newStore.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
  newStore.dispatch(fetchRecipes())
  newStore.dispatch(fetchCategories())
  newStore.dispatch(fetchIngredients())
  newStore.dispatch(fetchComments())
  newStore.dispatch(fetchUser(jwtDecode(localStorage.jwtToken)))
}

ReactDOM.render(
  <Provider store={newStore}>
  <App />
  </Provider>

  , document.getElementById('root'));
