import React, { Component } from 'react'
import RecipeNavBar from './RecipeNavBar'
import RecipeList from './RecipeList'
import RecipeBottom from './RecipeBottom'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Search from '@material-ui/icons/Search';

const styles = theme => ({
  container: {
    marginTop: 5,
    display: 'flex',
    flexWrap: 'wrap',
   },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "75%",
  },
  select: {
    width: "23%"
  },
});

class RecipePicker extends Component {
  state = {
    category: '',
    search: ''
  }

  render () {

    const { classes } = this.props;
    let categoriesList = [{value: '', label: 'None'}]
    this.props.categories.map(category => categoriesList.push({value: category.category, label:category.category}))

      return (
        <div>
          <RecipeNavBar />
            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="search"
                label="Search recipes by name"
                type="search"
                className={classes.textField}
                margin="normal"
                onChange={(e)=> this.setState({search: e.target.value})}
                value={this.state.search}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                 id="category"
                 select
                 label="Search by Category"
                 className={classes.select}
                 value={this.state.category}
                 onChange={(e)=>this.setState({category: e.target.value})}
                 SelectProps={{
                   MenuProps: {
                     className: classes.menu,
                   },
                 }}
                 margin="normal"
                >
                 {categoriesList.map(option => (
                   <MenuItem key={option.value} value={option.value}>
                     {option.label}
                   </MenuItem>
                 ))}
                </TextField>
              </form>

          <RecipeList search={this.state.search} category={this.state.category}/>
          <RecipeBottom />
        </div>
      )
  }

}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    categories: state.categories,
    user: state.user,
    auth: state.auth
  }
}

let RecipePickerConnect = connect(mapStateToProps)(RecipePicker)

export default withStyles(styles)(RecipePickerConnect)
