import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import NavBar from '../NavBar'
import RecipeList from './RecipeList'
import RecipeBottom from './RecipeBottom'
import { connect } from 'react-redux'

const styles = theme => ({

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "98%",
  },
});

class RecipePicker extends Component {
  state = {
    search: ''
  }


  render () {

    const { classes } = this.props;
        let currUser = {...this.props.users.filter(user=> user.email === this.props.match.params.user_email)[0]}

      return (
        <div>
          <NavBar user={currUser}/>

                <TextField
                  id="search"
                  label="Search recipes by name"
                  type="search"
                  className={classes.textField}
                  margin="normal"
                  onChange={(e)=> this.setState({search: e.target.value})}
                  value={this.state.search}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    ),
                  }}
                />

          <RecipeList search={this.state.search}/>
          <RecipeBottom />
        </div>
      )
  }

}


const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    users: state.users,
    user: state.user,
  }
}

let RecipePickerConnect = connect(mapStateToProps)(RecipePicker)

export default withStyles(styles)(RecipePickerConnect)
