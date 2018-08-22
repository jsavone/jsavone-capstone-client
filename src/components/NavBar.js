import React from 'react';
import RecipeFoodList from './recipe/RecipeFoodList'
import RecipeShoppingList from './recipe/RecipeShoppingList'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CalendarIcon from '@material-ui/icons/CalendarTodayRounded';
import ShoppingCart from '@material-ui/icons/ShoppingCartRounded';
import AccountCircle from '@material-ui/icons/AccountCircleRounded';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
    marginBottom:10,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 0,
  },
  leftList: {
    marginLeft: 7,
    width: 250,
  },
  rightList: {
    marginLeft: 7,
    width: 360,
  },
  rightHeading: {
    marginTop: 8,
    marginBottom:8,
  },
  print: {
    marginTop: 3,
    marginBottom: 3,
  },
  leftLink: {
    textDecoration: 'none',
  }
};

class NavBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    right: false,
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const rightSideList = (
      <div className={classes.rightList}>
        <h3 className={classes.rightHeading}>Food Plan</h3>
        <Divider />
        <RecipeFoodList user={this.props.user}/>
      </div>
    );

    const leftSideList = (
      <div className={classes.leftList}>
        <h3>Shopping List</h3>
        <Divider />
        <Link className={classes.leftLink}to={`/${this.props.user.email}/plan/print/`} target="_blank">
          <Button variant="contained" color="primary" className={classes.print}>PRINT PLAN</Button>
        </Link>
        <Divider />
        <RecipeShoppingList user={this.props.user} />
      </div>
    );

    return (
      <div className={classes.root}>

        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Preptastic
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
                <IconButton onClick={this.toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
                  <ShoppingCart />
                </IconButton>
                <IconButton onClick={this.toggleDrawer('right', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
                  <CalendarIcon />
                </IconButton>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {rightSideList}
          </div>
        </Drawer>

        <Drawer anchor="left" open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {leftSideList}
          </div>
        </Drawer>

      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
