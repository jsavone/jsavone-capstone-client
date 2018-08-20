import React, { Component } from 'react'
import NavBar from '../NavBar'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addMeal } from '../../redux/actions'
import { Link } from 'react-router-dom'

const styles = theme => ({
  img: {
    width:  400,
    height: 300,
    backgroundPosition:'50% 50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  textField: {
    width: '40%',
    marginRight: 5,
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

  handleSubmitMeal = (recipe, user) => {
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

    const currUser = {...this.props.users.filter(user=> user.email === this.props.match.params.user_email)[0]}

    const currRecipe = {...this.props.recipes.filter(recipe=> recipe._id === this.props.match.params.id)[0]}

    return(
      <div>
        <NavBar user={currUser}/>
        <br />
        <Link className={classes.link} to={`/${currUser.email}/recipes/`}>Back to Recipe List</Link>
        <h2>{currRecipe.title}</h2>
        <iframe width="560" height="315" title={currRecipe.title} src={`https://www.youtube.com/embed/${currRecipe.video}?rel=0&amp;showinfo=0`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>

          <form className={classes.container} noValidate autoComplete="off">
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
            <Button onClick={()=>this.handleSubmitMeal(currRecipe._id, currUser._id)}           color="primary">
              Add Meal to Plan
            </Button>
        </form>

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

const mapDispatchToProps = dispatch => bindActionCreators({
  addMeal
}, dispatch)

const RecipeDetailConnect = connect(mapStateToProps, mapDispatchToProps)(RecipeDetail)

export default withStyles(styles)(RecipeDetailConnect)
