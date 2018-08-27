import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: 50,
  },
  flex: {
    flexGrow: 1,
  },
  logo: {
    marginTop: 6,
    height: 55,
    marginLeft: -10,
  },
  signup: {
    marginRight: 10,
  }
};

const SignupNavBar = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Toolbar>
        <Typography variant="title" color="primary" className={classes.flex}>
          <img src="../../../PreptasticLogoNavBar.png" className={classes.logo} alt="Preptastic Logo"/>
        </Typography>
        <Button color="primary" className={classes.signup} variant="contained" href="/">SIGNUP</Button>
        <Button color="primary" variant="contained" href="/login">LOGIN</Button>
      </Toolbar>
    </div>
  );
}

export default withStyles(styles)(SignupNavBar);
