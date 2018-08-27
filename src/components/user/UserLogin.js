import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from '../../redux/authActions'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'in-line',
    marginLeft: 0,
  },
  textField: {
    width: '100%',
  },
  button: {
    marginTop: 15,
  },
  heading: {
    fontSize: 24,
  }
});

class UserLogin extends React.Component {

  state = {
    email: 'annasavone@gmail.com',
    password: 'pw',
  };

  render() {

    const { classes } = this.props;

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
          onClick={()=>this.props.login(this.state)
            .then(
            (res) => window.location = `/recipes`,
            (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
          )}>
            Login
          </Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  login
}, dispatch)

const UserLoginConnect = connect(null, mapDispatchToProps)(UserLogin)

export default withStyles(styles)(UserLoginConnect);
