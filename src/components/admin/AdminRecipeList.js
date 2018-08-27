import React, { Component } from 'react'
import { connect } from 'react-redux'
import AdminRecipeDetail from './AdminRecipeDetail'
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    marginTop: 7,
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "75%",
  },
  container: {
    textAlign: 'center',
    marginBottom: 10,
  }
});

class AdminRecipeList extends Component {
  state = {
    search: ''
  }

  render() {

    const { classes } = this.props;

      let recipes = this.props.recipes.filter(recipe=> recipe.title.toLowerCase().includes(this.state.search.toLowerCase())).map(recipe => <AdminRecipeDetail key={recipe._id} recipe={recipe} admin={this.props.admin}/>)

      return(
        <div className={classes.root}>
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
            </form>
          <Grid container spacing={24}>
            {recipes}
          </Grid>
        </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

const AdminRecipeListConnect = connect(mapStateToProps)(AdminRecipeList)

export default withStyles(styles)(AdminRecipeListConnect)
