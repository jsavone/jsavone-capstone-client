import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from '../../redux/authActions'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'in-line',
    width: '60%',
    margin: '0 auto',
    marginTop: 30,
    padding: 20,
  },
  form: {
    width: '100%',
  },
  textField: {
    width: '100%',
  },
  button: {
    marginTop: 17,
  },
});


class AdminLoginForm extends React.Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.container}>
        <form className={classes.form} noValidate autoComplete="off">
          <Typography variant="display1" className={classes.heading} gutterBottom>
           ADMIN LOGIN
          </Typography>
          <TextField
            required
            id="email"
            label="Email"
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
          <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={()=>this.props.login(this.state)
            .then(
            (res) => window.location = `/admin/panel`,
            (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
          )}>
            Login
          </Button>
        </form>
      </Paper>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  login
}, dispatch)

const AdminLoginFormConnect = connect(null, mapDispatchToProps)(AdminLoginForm)

export default withStyles(styles)(AdminLoginFormConnect);
