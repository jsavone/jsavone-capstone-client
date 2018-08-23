import React, { Component } from 'react'
import NavBar from '../NavBar'
import RecipeBottom from './RecipeBottom'
import RecipeComments from './RecipeComments'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addMeal } from '../../redux/actions'
import { Link } from 'react-router-dom'


const styles = theme => ({
  body: {
    paddingTop: 15,
    marginLeft: 5,
  },
  container: {
    marginRight: 7,
    textAlign: 'center',
  },
  textField: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    marginTop: 15,
  },
  heading: {
    marginTop: 0,
  },
  ingredients: {
    fontSize: '1.15em',
  },
  directions: {
    whiteSpace: 'pre-line'
  },
  link: {
    textDecoration: 'none',
  },
  printLink: {
    textDecoration: 'none',
    float: 'right',
    marginRight: 3,
  },
  instructions: {
    marginBottom: 10,
  }
});

const day = [
  {value: 'sunday', label: 'Sunday'},
  {value: 'monday', label: 'Monday'},
  {value: 'tuesday', label: 'Tuesday'},
  {value: 'wednesday',label: 'Wednesday'},
  {value: 'thursday', label: 'Thursday'},
  {value: 'friday', label: 'Friday'},
  {value: 'saturday', label: 'Saturday'}
]

const meal = [
  {value: 'Bfast', label: 'Breakfast'},
  {value: 'Lunch', label: 'Lunch'},
  {value: 'Dinner', label: 'Dinner'},
]

class RecipeDetail extends Component {
  state = {
    day: '',
    meal: ''
  }

  handleChange = name => event => {
     this.setState({
       [name]: event.target.value,
     });
   };

  handleSubmitMeal = (recipe, user, e) => {

    let newMeal = {
                    user_id: user,
                    meal: this.state.day+this.state.meal,
                    recipe_id: recipe,
                  }

    this.props.addMeal(newMeal)
    this.setState({day: '', meal: ''})
  }
  render() {

    const { classes } = this.props;

    const currUser = {...this.props.user}
    const currRecipe = {...this.props.recipes.filter(recipe=> recipe._id === this.props.match.params.id)[0]}

    let ingredientsList = []

    if(currRecipe.ingredients) {
      ingredientsList = currRecipe.ingredients.map(ingr => <div key={ingr._id}><List className={classes.ingredients}>{ingr.amount} {ingr.ingredientId.unit} - {ingr.ingredientId.name}</List><Divider /></div>)
    }

    return(
      <div>
        <NavBar user={currUser}/>
        <div className={classes.body}>
        <Grid container spacing={24} className={classes.instructions}>
          <Grid item xs={6}>
            <Link className={classes.link} to={`/recipes/`}>
              <Button variant="contained" color="primary">Back to Recipe List</Button>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link className={classes.printLink} to={`/recipes/print/${currRecipe._id}`} target="_blank">
              <Button variant="contained" color="primary">PRINT RECIPE</Button>
            </Link>
          </Grid>
        </Grid>

        <h1>{currRecipe.title ? currRecipe.title.toUpperCase(): null}</h1>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={8}>
          {currRecipe.video ? <iframe width="100%" height="315" title={currRecipe.title} src={`https://www.youtube.com/embed/${currRecipe.video}?rel=0&amp;showinfo=0`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          : null }
          </Grid>

          <Grid item xs={12} sm={4}>
            <form className={classes.container} noValidate autoComplete="off">
              <h2 className={classes.heading}>ADD TO YOUR PLAN</h2>
              <TextField
               id="select-day"
               select
               label="Select Day"
               className={classes.textField}
               value={this.state.day}
               onChange={this.handleChange('day')}
               SelectProps={{
                 MenuProps: {
                   className: classes.menu,
                 },
               }}
               margin="dense"
              >
               {day.map(option => (
                 <MenuItem key={option.value} value={option.value}>
                   {option.label}
                 </MenuItem>
               ))}
              </TextField>

               <TextField
                id="select-meal"
                select
                label="Select Meal"
                className={classes.textField}
                value={this.state.meal}
                onChange={this.handleChange('meal')}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                margin="dense"
               >
                {meal.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <Button onClick={(e)=> this.handleSubmitMeal(currRecipe._id, currUser._id)}           variant="contained" color="primary" className={classes.button}>
                Add Meal to Plan
              </Button>
          </form>
          </Grid>
        </Grid>
        <br/>
        <Divider />

        <Grid container spacing={24} className={classes.instructions}>
          <Grid item xs={12} sm={4}>
            <h2>INGREDIENTS</h2>
            {ingredientsList}
          </Grid>
          <Grid item xs={12} sm={8} className={classes.directions}>
            <h2>DIRECTIONS</h2>
            {currRecipe.directions}
          </Grid>
        </Grid>
        </div>
        <RecipeComments user={currUser} recipe={currRecipe} />
        <RecipeBottom />
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

const mapDispatchToProps = dispatch => bindActionCreators({
  addMeal
}, dispatch)

const RecipeDetailConnect = connect(mapStateToProps, mapDispatchToProps)(RecipeDetail)

export default withStyles(styles)(RecipeDetailConnect)
