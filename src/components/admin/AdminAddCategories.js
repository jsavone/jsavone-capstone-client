import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCategory } from '../../redux/actions'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  menu: {
    width: 1000,
  },
  select: {
    width: '100%'
  },
  claim: {
    marginTop: 15,
  }
});

class AdminAddCategories extends Component {

  state = {
    open: false,
    ingredientOpen: false,
    category: '',
  }

  handleChange = (event, { newValue }) => {
    this.setState({
      category: newValue,
    });
  };

  handleClickOpenIngredient = () => {
    this.setState({ ingredientOpen: true });
  };

  handleCloseIngredient = () => {
    this.setState({ ingredientOpen: false });
  };

  handleSubmitCategory = (id) => {
    this.setState({ ingredientOpen: false });
    let category = {
                        recipeId: this.props.recipeId,
                        id: id,
                      }

    this.props.addCategory(category)
    this.setState({category: ''})
  };

  render() {
    let categoriesList = []

    this.props.categories.map(category => categoriesList.push({value: category.category, label:category.category}))

    let currCategory = ''

    if (this.state.category !== '') {
      currCategory = {...this.props.categories.filter(category=> category.category === this.state.category)[0]}
    }

    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleClickOpenIngredient} className={classes.claim} variant="contained" color="primary">Add Categories</Button>

        <Dialog
          open={this.state.ingredientOpen}
          onClose={this.handleCloseIngredient}
          aria-labelledby="form-dialog-title"
          className={classes.menu}
        >
          <DialogTitle id="form-dialog-title">Add Categories</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {`Add categories to your existing recipe.`}
            </DialogContentText>

            <TextField
               id="category"
               select
               label="Select a Category"
               className={classes.select}
               value={this.state.category}
               onChange={(e)=>this.setState({category: e.target.value})}
               SelectProps={{
                 MenuProps: {
                   className: classes.menu,
                 },
               }}
               margin="normal"
              >
               {categoriesList.map(option => (
                 <MenuItem key={option.value} value={option.value}>
                   {option.label}
                 </MenuItem>
               ))}
              </TextField>

          </DialogContent>
          <DialogActions>
            <Button onClick={()=>this.handleSubmitCategory(currCategory._id)} variant="contained" color="primary">
              Add Category
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    categories: state.categories
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addCategory
}, dispatch)

const AdminAddCategoriesConnect = connect(mapStateToProps, mapDispatchToProps)(AdminAddCategories)

export default withStyles(styles)(AdminAddCategoriesConnect)
