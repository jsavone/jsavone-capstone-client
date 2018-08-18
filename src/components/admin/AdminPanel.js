import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../NavBar'
import AdminCreateIngredient from './AdminCreateIngredient'
import AdminCreateCategory from './AdminCreateCategory'
import AdminCreateRecipe from './AdminCreateRecipe'
import AdminRecipeList from './AdminRecipeList'

class AdminPanel extends Component {

render() {

  return (
    <div>
      <NavBar />
      <AdminCreateRecipe />
      <AdminCreateCategory />
      <AdminCreateIngredient />
      <AdminRecipeList />
    </div>
  )
}
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(AdminPanel)
