import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withStyles } from '@material-ui/core/styles';
import NavBar from '../NavBar'
import AdminAddIngredients from './AdminAddIngredients'

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  img: {
    maxHeight: 250,
  },
  table: {
  width: '100%',
  },
  directions: {
    whiteSpace: 'pre-line'
  }

});


class AdminEditRecipe extends Component{

  render() {
const { classes } = this.props;

let currIngredients = []
let ingredientsList = ''

let thisRecipe = {...this.props.recipes.filter(recipe=> recipe._id === this.props.match.params.id)[0]}

if (thisRecipe.ingredients !== undefined) {
  currIngredients = [...thisRecipe.ingredients]
  ingredientsList = currIngredients.map(ing => <li key={ing._id}>{ing.amount} {ing.ingredientId.unit} - {ing.ingredientId.name}</li>)
}

console.log("this recipe: ", currIngredients)

    return(
      <div>
        <NavBar />
        <h1>{thisRecipe.title}</h1>
        <img className={classes.img} src={thisRecipe.img} alt={thisRecipe.title} />
        <h3>Current Ingredients</h3>
        {ingredientsList}
        <AdminAddIngredients recipeId={thisRecipe._id}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    categories: state.categories,
    ingredients: state.ingredients,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

const AdminEditRecipeConnect = connect(mapStateToProps, mapDispatchToProps)(AdminEditRecipe)

export default withStyles(styles)(AdminEditRecipeConnect)
