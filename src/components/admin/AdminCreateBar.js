import React from 'react'
import AdminCreateIngredient from './AdminCreateIngredient'
import AdminCreateCategory from './AdminCreateCategory'
import AdminCreateRecipe from './AdminCreateRecipe'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    textAlign: 'center',
    flexGrow: 1,
  },
  button: {
    marginTop: -20,
    marginBottom: 0,
    textAlign: 'center',
  },
});

const AdminCreateBar = (props) => {

const { classes } = props;

  return(
    <div className={classes.root}>
      <Grid container spacing={24} className={classes.button}>
        <Grid item xs>
          <AdminCreateRecipe />
        </Grid>
        <Grid item xs>
          <AdminCreateCategory />
        </Grid>
        <Grid item xs>
          <AdminCreateIngredient />
        </Grid>
      </Grid>
      <Divider />
    </div>
  )
}

export default withStyles(styles)(AdminCreateBar)
