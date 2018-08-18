import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../NavBar'
import AdminCreateBar from './AdminCreateBar'
import AdminRecipeList from './AdminRecipeList'

class AdminPanel extends Component {

render() {

  return (
    <div>
      <NavBar />
      <AdminCreateBar />
      <AdminRecipeList admin={this.props.match.params.admin_email}/>
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
