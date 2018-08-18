import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux'
import { createRecipe } from '../../redux/actions'
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

class AdminCreateRecipe extends Component {

  state = {
  open: false,
  recipeOpen: false,
  title: '',
  directions: '',
  img: '',
  video: '',
  cookTime: '',
  servingSize: 1,
};

handleClickOpenRecipe = () => {
  this.setState({ recipeOpen: true });
};

handleCloseRecipe = () => {
  this.setState({ recipeOpen: false });
};

handleSubmitRecipe = (prod, guest) => {
  this.setState({ recipeOpen: false });
  let newRecipe = {
                    title: this.state.title,
                    directions: this.state.directions,
                    img: this.state.img,
                    video: this.state.video,
                    cookTime: this.state.cookTime,
                    servingSize: this.state.servingSize
                  }

  this.props.createRecipe(newRecipe)
  this.setState({
                    title: '',
                    directions: '',
                    img: '',
                    video: '',
                    cookTime: '',
                    servingSize: 1
                  })
};

render() {
  const { classes } = this.props;

  return (
    <div>
      <Button onClick={this.handleClickOpenRecipe} className={classes.claim} color="primary">Create New Recipe</Button>

      <Dialog
        open={this.state.recipeOpen}
        onClose={this.handleCloseRecipe}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create New Recipe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Create a new recipe that users can add to their meal plans.`}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label={"Recipe Title"}
            type="text"
            color="default"
            onChange={(e)=>this.setState({title: e.target.value})}
            value={this.state.title}
            fullWidth
          />
          <TextField
            margin="dense"
            id="directions"
            label={"Directions"}
            multiline
            rows="4"
            color="default"
            onChange={(e)=>this.setState({directions: e.target.value})}
            value={this.state.directions}
            fullWidth
          />
          <TextField
            margin="dense"
            id="img"
            label={"Image URL"}
            type="text"
            color="default"
            onChange={(e)=>this.setState({img: e.target.value})}
            value={this.state.img}
            fullWidth
          />
          <TextField
            margin="dense"
            id="video"
            label={"Video URL"}
            type="text"
            color="default"
            onChange={(e)=>this.setState({video: e.target.value})}
            value={this.state.video}
            fullWidth
          />
          <TextField
            margin="dense"
            id="cookTime"
            label={"Cook Time"}
            type="text"
            color="default"
            onChange={(e)=>this.setState({cookTime: e.target.value})}
            value={this.state.cookTime}
            fullWidth
          />
          <TextField
            margin="dense"
            id="servingSize"
            label={"Serving Size"}
            type="number"
            color="default"
            onChange={(e)=>this.setState({servingSize: e.target.value})}
            value={this.state.servingSize}
            fullWidth
          />
        </DialogContent>
        <DialogActions>

          <Button onClick={()=>this.handleSubmitRecipe()} color="primary">
            Add Recipe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createRecipe
}, dispatch)

const AdminCreateRecipeConnect = connect(null, mapDispatchToProps)(AdminCreateRecipe)

export default withStyles(styles)(AdminCreateRecipeConnect)
