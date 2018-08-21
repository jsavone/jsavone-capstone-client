import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux'
import { createCategory } from '../../redux/actions'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  img: {
    maxHeight: 250,
  },
  table: {
  width: '100%',
  },
  claim: {
    marginTop: 20,
  },
});

class AdminCreateCategory extends Component {

  state = {
  open: false,
  categoryOpen: false,
  category: ''
};

handleClickOpenCategory = () => {
  this.setState({ categoryOpen: true });
};

handleCloseCategory = () => {
  this.setState({ categoryOpen: false });
};

handleSubmitCategory = (prod, guest) => {
  this.setState({ categoryOpen: false });
  let newCategory = {category: this.state.category}

  this.props.createCategory(newCategory)
  this.setState({ category: ''})
};

render() {
  const { classes } = this.props;

  return (
    <div>
      <Button onClick={this.handleClickOpenCategory} className={classes.claim} variant="contained" color="primary">Create New Category</Button>

      <Dialog
        open={this.state.categoryOpen}
        onClose={this.handleCloseCategory}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create New Category</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Create a new category that can be attached to existing recipes.`}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label={"Category Name"}
            type="text"
            color="default"
            onChange={(e)=>this.setState({category: e.target.value})}
            value={this.state.category}
            fullWidth
          />
        </DialogContent>
        <DialogActions>

          <Button onClick={()=>this.handleSubmitCategory()} color="primary">
            Add Category
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}
}


const mapDispatchToProps = dispatch => bindActionCreators({
  createCategory
}, dispatch)

const AdminCreateCategoryConnect = connect(null, mapDispatchToProps)(AdminCreateCategory)

export default withStyles(styles)(AdminCreateCategoryConnect)
