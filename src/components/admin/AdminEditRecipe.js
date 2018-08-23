import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeIngredient, removeCategory, removeComment } from '../../redux/actions'
import { withStyles } from '@material-ui/core/styles';
import AdminNavBar from './AdminNavBar'
import AdminEditRecipeDetails from './AdminEditRecipeDetails'
import AdminAddIngredients from './AdminAddIngredients'
import AdminAddCategories from './AdminAddCategories'
import AdminCreateBar from './AdminCreateBar'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Delete from '@material-ui/icons/DeleteRounded';

const styles = theme => ({
  root: {
    whiteSpace: 'pre-line'
  },
  img: {
    width: '90%',
  },
  table: {
  width: '100%',
  },
  directions: {
    marginTop: 7,
  },
  remove: {
    cursor: 'pointer'
  },
  link: {
    marginTop: 10,
  },
  delete: {
    marginBottom: -5,
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
  currIngredients = [...thisRecipe.ingredients].map(ing => <div key={ing._id}><List>{ing.amount} {ing.ingredientId.unit} - {ing.ingredientId.name} - <span className={classes.remove} onClick={()=>this.props.removeIngredient({recipeId: thisRecipe._id, id: ing._id})}><Delete className={classes.delete}/></span></List><Divider /></div>)
}

if (thisRecipe.categories !== undefined) {
  currCategories = [...thisRecipe.categories].map(cat=> <div key={cat._id}><List>{cat.category} - <span className={classes.remove} onClick={()=>this.props.removeCategory({recipeId: thisRecipe._id, id: cat._id})}><Delete className={classes.delete}/></span></List><Divider /></div>)
}

if (thisRecipe.comments) {
  currComments = [...thisRecipe.comments].map(com=> {
    let user = this.props.user
    return <div key={com._id}><p>{com.comment}</p><p>by {user.firstName} {user.lastName} - <span className={classes.remove} onClick={()=>this.props.removeComment({recipe: thisRecipe._id, comment: com._id})}><Delete className={classes.delete}/></span></p><Divider /></div>
  })
}
    return(
      <div className={classes.root}>
        <AdminNavBar />
        <AdminCreateBar />
        <Link to={`/admin/panel`}>
          <Button className={classes.link} variant="contained" color="primary">Back to Recipe List</Button>
        </Link>
        <div>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <h1>{thisRecipe.title ? thisRecipe.title.toUpperCase() : null}</h1>
              <img className={classes.img} src={thisRecipe.img} alt={thisRecipe.title} />
              <AdminEditRecipeDetails recipe={thisRecipe} />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.directions}>
              <h2>DIRECTIONS</h2>
              {thisRecipe.directions}
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6} className={classes.ingr}>
              <h3>CURRENT INGREDIENTS</h3>
              {currIngredients}
              <AdminAddIngredients recipeId={thisRecipe._id}/>
            </Grid>


            <Grid item xs={12} sm={6} className={classes.cat}>
              <h3>CURRENT CATEGORIES</h3>
              {currCategories}
              <AdminAddCategories recipeId={thisRecipe._id}/>
            </Grid>
          </Grid>
        </div>

        <h3>CURRENT COMMENTS</h3>
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
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  removeIngredient,
  removeCategory,
  removeComment
}, dispatch)

const AdminEditRecipeConnect = connect(mapStateToProps, mapDispatchToProps)(AdminEditRecipe)

export default withStyles(styles)(AdminEditRecipeConnect)
