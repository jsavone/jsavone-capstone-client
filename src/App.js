import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Miss from './components/Miss'
import Main from './components/Main'
import UserLogin from './components/user/UserLogin'
import RecipePicker from './components/recipe/RecipePicker'
import AdminLogin from './components/admin/AdminLogin'
import AdminPanel from './components/admin/AdminPanel'
import AdminEditRecipe from './components/admin/AdminEditRecipe'
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
          <Route exact={true} path='/admin' component={AdminLogin} />
          <Route exact={true} path='/admin/:admin_email' component={AdminPanel} />
          <Route exact={true} path='/admin/:admin_email/recipe/:id' component={AdminEditRecipe} />
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
