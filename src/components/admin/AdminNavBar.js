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
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const AdminNavBar = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Preptastic | ADMIN PANEL
          </Typography>
          <Button color="inherit" onClick={()=> props.logout()}>Logout</Button>
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
