import React, { Component } from 'react'
import { connect } from 'react-redux'
import AdminNavBar from './AdminNavBar'
import AdminCreateBar from './AdminCreateBar'
import AdminRecipeList from './AdminRecipeList'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  body: {
    margin: '0 auto',
    width: '98%',
  },
});


class AdminPanel extends Component {

render() {

  const { classes } = this.props;

  if (this.props.user.email) {
    if (!this.props.user.admin) {
      this.props.history.push('/login')
    }
  }

  return (
    <div>
      <AdminNavBar />
      <AdminCreateBar />
      <div className={classes.body}>
        <AdminRecipeList admin={this.props.user}/>
      </div>
    </div>
  )
}
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const AdminPanelConnect = connect(mapStateToProps)(AdminPanel)

export default withStyles(styles)(AdminPanelConnect)
