import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createUser } from '../../redux/actions'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500,
  },
  menu: {
    width: 1000,
  },
});

class UserSignup extends React.Component {
  state = {
    email: '',
    password: '',
    conf_pw: '',
    firstName: '',
    lastName: ''
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            required
            id="email"
            label="Email"
            className={classes.textField}
            type="email"
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
            value={this.state.pw}
            onChange={(e)=>this.setState({password: e.target.value})}
            margin="normal"
          />

          <TextField
            required
            id="conf-password-input"
            label="Confirm Password"
            className={classes.textField}
            type="password"
            value={this.state.conf_pw}
            onChange={(e)=>this.setState({conf_pw: e.target.value})}
            margin="normal"
          />

          {this.state.password !== this.state.conf_pw && this.state.conf_pw !== '' ? <div>Password does not match</div> : null}

          <TextField
            required
            id="first-name"
            label="First Name"
            className={classes.textField}
            value={this.state.firstName}
            onChange={(e)=>this.setState({firstName: e.target.value})}
            margin="normal"
          />

          <TextField
            required
            id="last-name"
            label="Last Name"
            className={classes.textField}
            value={this.state.lastName}
            onChange={(e)=>this.setState({lastName: e.target.value})}
            margin="normal"
          />

        </form>
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={()=>this.props.createUser(this.state)}
        href={"#"}>
          Signup
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createUser
}, dispatch)

const UserSignupConnect = connect(null, mapDispatchToProps)(UserSignup)

export default withStyles(styles)(UserSignupConnect);
