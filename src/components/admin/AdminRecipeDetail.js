import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    minWidth: 360,
    textAlign: 'center',
  },
  imgDiv: {
    backgroundPosition:'50% 50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginBottom: 5,
  },
  img: {
    width:  350,
    height: 250,
  },
  table: {
    width: '100%',
  },
  directions: {
    whiteSpace: 'pre-line'
  }

});

class AdminRecipeDetail extends Component {

  render() {
    const { classes } = this.props;

    let thisRecipe = {...this.props.recipe}
    return (
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
        <Typography variant="headline" gutterBottom>
            {thisRecipe.title ? thisRecipe.title.toUpperCase() : null}
        </Typography>
        <div className={classes.imgDiv}>
          <img className={classes.img} src={thisRecipe.img} alt={thisRecipe.title} />
        </div>
        <Button
         variant="contained"
         color="primary"
         className={classes.button}
         href={`/admin/recipe/${thisRecipe._id}`}>
           Edit Recipe
        </Button>
        </Paper>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
  }
}

const AdminRecipeDetailConnect = connect(mapStateToProps)(AdminRecipeDetail)

export default withStyles(styles)(AdminRecipeDetailConnect)
