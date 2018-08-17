import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Miss from './components/Miss'
import Main from './components/Main'
import UserLogin from './components/user/UserLogin'
import RecipePicker from './components/recipe/RecipePicker'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Switch>
          <Route exact={true} path='/' component={Main} />
          <Route exact={true} path='/login' component={UserLogin} />
          <Route exact={true} path='/recipes/:user_id' component={RecipePicker} />
          <Route path='*' component={Miss} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    user: state.user,
  }
}

export default connect(mapStateToProps)(App);
