import React, { Component } from 'react'
import RecipeNavBar from './RecipeNavBar'
import RecipeBottom from './RecipeBottom'
import RecipeComments from './RecipeComments'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addMeal } from '../../redux/actions'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import CalendarIcon from '@material-ui/icons/CalendarTodayRounded';

const styles = theme => ({
  body: {
    paddingTop: 15,
    marginLeft: 7,
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
    color: 'black',
  },
  heading: {
    marginTop: 0,
    color: '#E27776',
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
    marginRight: 8,
  },
  instructions: {
    marginBottom: 10,
  },
  title: {
    color: '#424242'
  },
  popup: {
    textAlign: 'center'
  },
  check: {
    fontSize: 50,
    marginBottom: 7,
  },
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
    meal: '',
    open: false,
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false, day: '', meal: '' });
  };

  handleChange = name => event => {
     this.setState({
       [name]: event.target.value,
     });
   };

  handleSubmitMeal = (recipe, user) => {
    this.handleClickOpen()

    if (!this.state.day && !this.state.meal) {
      return
    }

    let newMeal = {
                    user_id: user,
                    meal: this.state.day+this.state.meal,
                    recipe_id: recipe,
                  }

    this.props.addMeal(newMeal)
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
        <RecipeNavBar user={currUser}/>
        <div className={classes.body}>
        <Grid container spacing={24} className={classes.instructions}>
          <Grid item xs={6}>
            <Link className={classes.link} to={`/recipes/`}>
              <Button className={classes.button} variant="contained" color="primary">Back to Recipe List</Button>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link className={classes.printLink} to={`/recipes/print/${currRecipe._id}`} target="_blank">
              <Button className={classes.button} variant="contained" color="primary">PRINT RECIPE</Button>
            </Link>
          </Grid>
        </Grid>

        <h1 className={classes.title}>{currRecipe.title ? currRecipe.title.toUpperCase(): null}</h1>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={8}>
          {currRecipe.video ? <iframe width="98%" height="315" title={currRecipe.title} src={`https://www.youtube.com/embed/${currRecipe.video}?rel=0&amp;showinfo=0`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
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
              <Button onClick={()=> this.handleSubmitMeal(currRecipe._id, currUser._id)}           variant="contained" color="primary" className={classes.button}>
                Add Meal to Plan
              </Button>
          </form>
          </Grid>
        </Grid>
        <br/>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle className={classes.popup} id="alert-dialog-title">
            <div><CalendarIcon className={classes.check} color="primary" /></div>
            { this.state.day && this.state.meal ? `${currRecipe.title} has been added to ${this.state.day.charAt(0).toUpperCase()+this.state.day.substr(1)} ${this.state.meal === 'Bfast' ? 'Breakfast' : this.state.meal}` : "You must select a day and meal" }
            </DialogTitle>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary" variant="contained" autoFocus>
                OK
              </Button>
            </DialogActions>
          </Dialog>
        <Divider />

        <Grid container spacing={24} className={classes.instructions}>
          <Grid item xs={12} sm={4}>
            <h2 className={classes.title}>INGREDIENTS</h2>
            {ingredientsList}
          </Grid>
          <Grid item xs={12} sm={8} className={classes.directions}>
            <h2 className={classes.title}>DIRECTIONS</h2>
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
