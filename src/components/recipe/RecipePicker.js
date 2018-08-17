import React, { Component } from 'react'
import NavBar from '../NavBar'
import RecipeList from './RecipeList'
import { connect } from 'react-redux'

class RecipePicker extends Component{

  render() {
    console.log(this.props.match.params.user_id)
    return (
      <div>
        <NavBar />
        <RecipeList />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    user: state.user,
  }
}

export default connect(mapStateToProps)(RecipePicker)
