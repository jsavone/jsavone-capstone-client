import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeIngredient, removeCategory } from '../../redux/actions'
import { withStyles } from '@material-ui/core/styles';
import NavBar from '../NavBar'
import AdminEditRecipeDetails from './AdminEditRecipeDetails'
import AdminAddIngredients from './AdminAddIngredients'
import AdminAddCategories from './AdminAddCategories'
import AdminCreateBar from './AdminCreateBar'
import { Link } from 'react-router-dom'
import Divider from '@material-ui/core/Divider';

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
  },
    remove: {
      cursor: 'pointer'
  },

});


class AdminEditRecipe extends Component{

  render() {
const { classes } = this.props;

let currIngredients = []
let currCategories = []
let currComments = []

let thisRecipe = {...this.props.recipes.filter(recipe=> recipe._id === this.props.match.params.id)[0]}

if (thisRecipe.ingredients !== undefined) {
  currIngredients = [...thisRecipe.ingredients].map(ing => <li key={ing._id}>{ing.amount} {ing.ingredientId.unit} - {ing.ingredientId.name} - <span className={classes.remove} onClick={()=>this.props.removeIngredient({recipeId: thisRecipe._id, id: ing._id})}>remove</span></li>)
}

if (thisRecipe.categories !== undefined) {
  currCategories = [...thisRecipe.categories].map(cat=> <li key={cat._id}>{cat.category} - <span className={classes.remove} onClick={()=>this.props.removeCategory({recipeId: thisRecipe._id, id: cat._id})}>remove</span></li>)
}

if (thisRecipe.comments) {
  currComments = [...thisRecipe.comments].map(com=> {
    let user = {...this.props.users.filter(user=> user._id === com.user)[0]}
    return <div key={com._id}><p>{com.comment}</p><p>by {user.firstName} {user.lastName} - <span className={classes.remove} onClick={()=>this.props.removeCategory({recipeId: thisRecipe._id, id: com._id})}>remove</span></p><Divider /></div>
  })
}
    return(
      <div>
        <NavBar />
        <AdminCreateBar />
        <Link to={`/admin/${this.props.match.params.admin_email}`}>Back to Recipe List</Link>
        <h1>{thisRecipe.title}</h1>
        <img className={classes.img} src={thisRecipe.img} alt={thisRecipe.title} />
        <AdminEditRecipeDetails recipe={thisRecipe} />
        <h3>Current Ingredients</h3>
        {currIngredients}
        <AdminAddIngredients recipeId={thisRecipe._id}/>

        <h3>Current Categories</h3>
        {currCategories}
        <AdminAddCategories recipeId={thisRecipe._id}/>

        <h3>Current Comments</h3>
        {currComments}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    categories: state.categories,
    ingredients: state.ingredients,
    users: state.users,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  removeIngredient,
  removeCategory
}, dispatch)

const AdminEditRecipeConnect = connect(mapStateToProps, mapDispatchToProps)(AdminEditRecipe)

export default withStyles(styles)(AdminEditRecipeConnect)
