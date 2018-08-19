import React, { Component } from 'react'
import NavBar from '../NavBar'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const styles = theme => ({
  img: {
    width:  400,
    height: 300,
    backgroundPosition:'50% 50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
});

class RecipeDetail extends Component {

  render() {

    const { classes } = this.props;

    const currUser = {...this.props.users.filter(user=> user.email === this.props.match.params.user_email)[0]}

    const currRecipe = {...this.props.recipes.filter(recipe=> recipe._id === this.props.match.params.id)[0]}

    return(
      <div>
        <NavBar />
        <br />
        <Link className={classes.link} to={`/${currUser.email}/recipes/`}>Back to Recipe List</Link>
        <h2>{currRecipe.title}</h2>
        <iframe width="560" height="315" title={currRecipe.title} src={`https://www.youtube.com/embed/${currRecipe.video}?rel=0&amp;showinfo=0`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    users: state.users,
    user: state.user,
  }
}

const RecipeDetailConnect = connect(mapStateToProps, null)(RecipeDetail)

export default withStyles(styles)(RecipeDetailConnect)
