import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SignupNavBar from './user/SignupNavBar'
import Forms from './user/Forms'
import RecipeBottom from './recipe/RecipeBottom'

const styles = {
  root: {
    flexGrow: 1,
    paddingBottom: 70,
    background: 'url(https://images.pexels.com/photos/53512/vegetables-food-red-pepper-red-53512.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) no-repeat center center fixed',
    backgroundSize: 'cover',
    height: 950,
  },
  paper: {
    margin: '0 auto',
    marginBottom: 30,
    width: '80%',
    padding: 10,
    textAlign: 'center',
  },
  circles: {
    height: 60,
  },
  headline: {
    color: '#E27776'
  }
};

const Main = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <SignupNavBar />

      <Paper className={classes.paper} elevation={1}>
        <img className={classes.circles} src="../../PreptasticCircles.png" alt="Preptastic Circles"/>
        <Typography variant="headline" className={classes.headline} component="h3">
          SAVE TIME - SAVE MONEY - EAT HEALTHIER
        </Typography>
        <Typography component="p" variant="subheading">
          Sign up now and start organizing your meal prep plan!
        </Typography>
      </Paper>

      <Forms path={props.match.path}/>
      <RecipeBottom />
    </div>
  )
}

export default withStyles(styles)(Main)
