import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import lightGreen from '@material-ui/core/colors/lightGreen';

const theme = createMuiTheme({
  palette: {
    primary: lightGreen,
  },
});

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

class AdminRecipeDetail extends Component {

  render() {
    const { classes } = this.props;

    let thisRecipe = {...this.props.recipe}
    return (
          <Grid item xs={12} sm={6}>
          <MuiThemeProvider theme={theme} >
            <Paper className={classes.paper}>
            <p><img className={classes.img} src={thisRecipe.img} alt={thisRecipe.title} /></p>
            <Typography variant="subheading" gutterBottom>
                {thisRecipe.title}
            </Typography>
            <Button
             variant="contained"
             color="primary"
             className={classes.button}
             href={`/admin/${this.props.admin}/recipe/${thisRecipe._id}`}>
               Edit Recipe
            </Button>
            </Paper>
            </MuiThemeProvider >
          </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

const AdminRecipeDetailConnect = connect(mapStateToProps, mapDispatchToProps)(AdminRecipeDetail)

export default withStyles(styles)(AdminRecipeDetailConnect)
