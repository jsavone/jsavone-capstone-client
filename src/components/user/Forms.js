import React from 'react';
import PropTypes from 'prop-types';
import { login } from '../../redux/authActions'
import { createUser } from '../../redux/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Grow from '@material-ui/core/Grow';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    margin: '0 auto',
    marginBottom: 30,
    width: '60%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    marginLeft: 0,
    paddingLeft: 0,
  },
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
  },
  error: {
    minHeight: 30,
    backgroundColor: '#E27776',
    width: '100%',
    color: 'white',
    textAlign: 'center',
    borderRadius: 5,
    paddingTop:10,
    marginBottom: 10,
    fontWeight: 500,
  },
  success: {
    minHeight: 30,
    backgroundColor: 'green',
    width: '100%',
    color: 'white',
    textAlign: 'center',
    borderRadius: 5,
    paddingTop:10,
    marginBottom: 10,
    fontWeight: 500,
    opacity: .75,
  }
});

class Forms extends React.Component {

  state = {
    value: this.props.path === '/login' ? 1 : 0,
    email: 'annasavone@gmail.com',
    password: 'pw',
    conf_pw: '',
    firstName: '',
    lastName: '',
    success: '',
    error: '',
    checked: false,
  };

  handleChange = (event, value) => {
    this.setState({ value, error: '', success: '' });
  };

  handleLogin = (e) => {
    if(this.state.email === '' || this.state.password === '') {
      return this.setState({error: 'PLEASE ENTER A USERNAME AND PASSWORD', checked: true})
    }
    this.props.login(this.state)
      .then(
      (res) => window.location = `/recipes`,
      (err) => this.setState({ error: "INCORRECT USERNAME OR PASSWORD", checked: true})
    )
  }

  handleSignup = (e) => {
    if(this.state.password !== this.state.conf_pw) {
      return this.setState({error: 'CONFIRMATION PASSWORD DOES NOT MATCH', checked: true})
    }
    if(this.state.password.length < 6) {
      return this.setState({error: 'PASSWORD MUST BE AT LEAST 6 CHARACTERS IN LENGTH', checked: true})
    }

    this.props.createUser(this.state)
    this.setState({success: 'USER CREATED - PLEASE LOG IN'})
    this.setState({value: 1})
  }

  render() {
    const { classes } = this.props;
    const { checked } = this.state;
    const { value } = this.state;

    let message = ''
    if (this.props.user.success) {
      message = <div className={classes.success}>{this.props.user.success}</div>
    }
    if(this.props.user.error) {
      message = <div className={classes.error}>{this.props.user.error}</div>
    }
    return (
      <div className={classes.root}>
        <AppBar position="static" >
          <Tabs value={value} onChange={this.handleChange}>
            <Tab className={classes.tab} icon={<PersonAddIcon />} label="SIGNUP" />
            <Tab icon={<PersonIcon />} label="ALREADY A USER?" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>
          <div>
            {this.state.error ==='' ? null : <Grow in={checked}
            style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 1000 } : {})}><div className={classes.error}>{this.state.error}</div></Grow>}
            <Typography variant="display1" className={classes.heading} gutterBottom>
             CREATE AN ACCOUNT
            </Typography>

            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                required
                id="email"
                label="Email"
                className={classes.textField}
                type="email"
                value={this.state.email}
                onChange={(e)=>this.setState({email: e.target.value, error: ''})}
                margin="normal"
              />

              <TextField
                required
                id="password-input"
                label="Password"
                className={classes.textField}
                type="password"
                value={this.state.pw}
                onChange={(e)=>this.setState({password: e.target.value, error: '', checked: false})}
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
            onClick={()=> this.handleSignup()} >
              Signup
            </Button>
          </div>

          </TabContainer>}
        {value === 1 && <TabContainer>
          <div>
            {this.state.error ==='' ? null : <Grow in={checked}
            style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 1000 } : {})}><div className={classes.error}>{this.state.error}</div></Grow>}
              {message}
              <Typography variant="display1" className={classes.heading} gutterBottom>
               USER LOGIN
              </Typography>

              <form className={classes.container} noValidate autoComplete="off">
                <TextField
                  required
                  id="email"
                  label="Email"
                  type="email"
                  className={classes.textField}
                  value={this.state.email}
                  onChange={(e)=>this.setState({email: e.target.value, error: '', checked: false})}
                  margin="normal"
                />

                <TextField
                  required
                  id="password-input"
                  label="Password"
                  className={classes.textField}
                  type="password"
                  value={this.state.password}
                  onChange={(e)=>this.setState({password: e.target.value, error: '', checked: false})}
                  margin="normal"
                />
              </form>
              <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={()=>this.handleLogin()}>
                Login
              </Button>
          </div>

          </TabContainer>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  login,
  createUser,
}, dispatch)

const FormsConnect = connect(mapStateToProps, mapDispatchToProps)(Forms)

export default withStyles(styles)(FormsConnect);
