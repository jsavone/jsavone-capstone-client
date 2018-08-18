import React from 'react'
import { connect } from 'react-redux'
import AdminRecipeDetail from './AdminRecipeDetail'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const AdminRecipeList = (props) => {

const { classes } = props;
console.log(props.recipes)
  let recipes = props.recipes.map(recipe => <AdminRecipeDetail key={recipe._id} recipe={recipe} />)
  return(
    <div className={classes.root}>
      <Grid container spacing={24}>
        {recipes}
      </Grid>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

const AdminRecipeListConnect = connect(mapStateToProps)(AdminRecipeList)

export default withStyles(styles)(AdminRecipeListConnect)
