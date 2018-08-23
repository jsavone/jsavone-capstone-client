import React, { Component } from 'react'
import { connect } from 'react-redux'
import AdminNavBar from './AdminNavBar'
import AdminCreateBar from './AdminCreateBar'
import AdminRecipeList from './AdminRecipeList'

class AdminPanel extends Component {

render() {

  if (this.props.user.email) {
    if (!this.props.user.admin) {
      this.props.history.push('/login')
    }
  }

  return (
    <div>
      <AdminNavBar />
      <AdminCreateBar />
      <AdminRecipeList admin={this.props.user}/>
    </div>
  )
}
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(AdminPanel)
