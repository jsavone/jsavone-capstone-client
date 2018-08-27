import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../../redux/authActions'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  navBar: {
    backgroundColor: '#EEEEEE',
    height: 66
  },
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  navButton: {
    color: '#67B55F'
  },
  logo: {
    marginTop: 0,
    height: 55,
    marginLeft: -10,
  },
};

const AdminNavBar = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.navBar} position="static">
        <Toolbar>
        <img src="../../PreptasticLogoNavBar.png" className={classes.logo} alt="Preptastic Logo"/>
          <Typography variant="title" className={classes.flex}>
           &nbsp;&nbsp;| ADMIN PANNEL
          </Typography>
          <Button className={classes.navButton} color="primary" variant="outlined" onClick={()=> props.logout()}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapDispatchToProps = dispatch => bindActionCreators({
  logout
}, dispatch)

const AdminNavBarConnect = connect(null, mapDispatchToProps)(AdminNavBar)

export default withStyles(styles)(AdminNavBarConnect);
