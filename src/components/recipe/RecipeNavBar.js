import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logout } from '../../redux/authActions'
import RecipeFoodList from '../recipe/RecipeFoodList'
import RecipeShoppingList from '../recipe/RecipeShoppingList'
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
  navBar: {
    backgroundColor: '#EEEEEE',
  },
  logo: {
    marginTop: 5,
    height: 55,
    marginLeft: -10,
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
  panelTitle: {
    marginTop: 8,
    marginBottom: 5,
  },
  rightList: {
    marginLeft: 7,
    width: 400,
  },
  print: {
    marginTop: 5,
    marginBottom: 5,
  },
  leftLink: {
    textDecoration: 'none',
  },
  icon: {
    color: "#60B258",
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
        <Typography className={classes.panelTitle} variant="title">FOOD PLAN</Typography>
        <Divider />
        <RecipeFoodList user={this.props.user}/>
      </div>
    );

    const leftSideList = (
      <div className={classes.leftList}>
        <Typography variant="title" className={classes.panelTitle}>SHOPPING LIST</Typography>
        <Divider />
        <Link className={classes.leftLink}to={`/plan/print/`} target="_blank">
          <Button variant="contained" color="primary" className={classes.print}>PRINT PLAN</Button>
        </Link>
        <Divider />
        <RecipeShoppingList />
      </div>
    );

    return (
      <div className={classes.root}>

        <AppBar position="static" className={classes.navBar}>
          <Toolbar>
            <Typography variant="title" className={classes.flex}>
              <a href="/recipes" className={classes.navLink}><img src="../../PreptasticLogoNavBar.png" className={classes.logo} alt="Preptastic Logo"/></a>
            </Typography>

            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle className={classes.icon}/>
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
                  <MenuItem onClick={()=>this.props.logout()}>Logout</MenuItem>
                </Menu>
                <IconButton onClick={this.toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
                  <ShoppingCart className={classes.icon} />
                </IconButton>
                <IconButton onClick={this.toggleDrawer('right', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
                  <CalendarIcon className={classes.icon}/>
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


const mapDispatchToProps = dispatch => bindActionCreators({
  logout
}, dispatch)

const NavBarConnect = connect(null, mapDispatchToProps)(NavBar)

export default withStyles(styles)(NavBarConnect);
