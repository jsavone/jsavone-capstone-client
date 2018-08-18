import React from 'react'
import NavBar from '../NavBar'
import RecipeList from './RecipeList'
import { connect } from 'react-redux'

const RecipePicker = (props) => {

    console.log(props.user)
      let currUser = {...props.users.filter(user=> user._id === props.match.params.user_id)[0]}
    return (
      <div>
        <NavBar />
        <h1>{currUser.email}</h1>
        <RecipeList />
      </div>
    )
}


const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    users: state.users,
    user: state.user,
  }
}

export default connect(mapStateToProps)(RecipePicker)
