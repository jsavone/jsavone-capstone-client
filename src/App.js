import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  BrowserRouter,
  Route,
  Switch,
  /*Link,
  Redirect,
  withRouter,*/

} from "react-router-dom";
import Miss from './components/Miss'
import Main from './components/Main'
import UserLogin from './components/user/UserLogin'
import RecipePicker from './components/recipe/RecipePicker'
import AdminLogin from './components/admin/AdminLogin'
import AdminPanel from './components/admin/AdminPanel'
import AdminEditRecipe from './components/admin/AdminEditRecipe'
import RecipeDetail from './components/recipe/RecipeDetail'
import RecipePrintPlan from './components/recipe/RecipePrintPlan'
import RecipePrint from './components/recipe/RecipePrint'
import requireAuth from './redux/utils/requireAuth'

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Switch>
          <Route exact={true} path='/' component={Main} />
          <Route exact={true} path='/login' component={UserLogin} />
          <Route exact={true} path='/recipes' component={requireAuth(RecipePicker)} />
          <Route exact={true} path='/recipes/:id' component={requireAuth(RecipeDetail)} />
          <Route exact={true} path='/plan/print' component={requireAuth(RecipePrintPlan)} />
          <Route exact={true} path='/recipes/print/:id' component={requireAuth(RecipePrint)} />
          <Route exact={true} path='/admin' component={AdminLogin} />
          <Route exact={true} path='/admin/panel' component={requireAuth(AdminPanel)} />
          <Route exact={true} path='/admin/recipe/:id' component={requireAuth(AdminEditRecipe)} />
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
