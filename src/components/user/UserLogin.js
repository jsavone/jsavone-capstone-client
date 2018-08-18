import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { userLogin } from '../../redux/actions'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


const styles = theme => ({
  container: {
    display: 'in-line',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  menu: {
    width: 1000,
  },
  button: {
    marginTop: 15,
  },
  heading: {
    marginTop: 15,
  },
});


class UserLogin extends React.Component {
  state = {
    email: 'annasavone@gmail.com',
    password: 'pw',
  };

  render() {
    const { classes } = this.props;
    console.log(this.props)
    return (
      <div>

          <Typography variant="display1" className={classes.heading} gutterBottom>
           User Login
          </Typography>

          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              required
              id="email"
              label="email"
              type="email"
              className={classes.textField}
              value={this.state.email}
              onChange={(e)=>this.setState({email: e.target.value})}
              margin="normal"
            />

            <TextField
              required
              id="password-input"
              label="Password"
              className={classes.textField}
              type="password"
              value={this.state.password}
              onChange={(e)=>this.setState({password: e.target.value})}
              margin="normal"
            />
          </form>
          <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={()=>this.props.userLogin(this.state)}
          href={"/recipes/"+this.state.email}>
            Login
          </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    users: state.users,
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  userLogin
}, dispatch)

const UserLoginConnect = connect(mapStateToProps, mapDispatchToProps)(UserLogin)

export default withStyles(styles)(UserLoginConnect);
