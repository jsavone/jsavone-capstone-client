import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux'
import { editRecipe } from '../../redux/actions'
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

class AdminEditRecipeDetails extends Component {

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
  let editedRecipe = {
                    _id: this.props.recipe._id,
                    title: this.state.title,
                    directions: this.state.directions,
                    img: this.state.img,
                    video: this.state.video,
                    cookTime: this.state.cookTime,
                    servingSize: this.state.servingSize
                  }

  this.props.editRecipe(editedRecipe)
};

render() {
  const { classes } = this.props;

  return (
    <div>
      <Button onClick={this.handleClickOpenRecipe} className={classes.claim} color="primary">Edit Recipe Details</Button>

      <Dialog
        open={this.state.recipeOpen}
        onClose={this.handleCloseRecipe}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Recipe Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Edit the details for the recipe that will be displayed to users.`}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label={"Recipe Title"}
            type="text"
            color="default"
            onChange={(e)=>this.setState({title: e.target.value})}
            onBlur={(e)=>this.setState({title: e.target.value})}
            defaultValue={this.props.recipe.title}
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
            onBlur={(e)=>this.setState({directions: e.target.value})}
            defaultValue={this.props.recipe.directions}
            fullWidth
          />
          <TextField
            margin="dense"
            id="img"
            label={"Image URL"}
            type="text"
            color="default"
            onChange={(e)=>this.setState({img: e.target.value})}
            onBlur={(e)=>this.setState({img: e.target.value})}
            defaultValue={this.props.recipe.img}
            fullWidth
          />
          <TextField
            margin="dense"
            id="video"
            label={"Video URL"}
            type="text"
            color="default"
            onChange={(e)=>this.setState({video: e.target.value})}
            onBlur={(e)=>this.setState({video: e.target.value})}
            defaultValue={this.props.recipe.video}
            fullWidth
          />
          <TextField
            margin="dense"
            id="cookTime"
            label={"Cook Time"}
            type="text"
            color="default"
            onChange={(e)=>this.setState({cookTime: e.target.value})}
            onBlur={(e)=>this.setState({cookTime: e.target.value})}
            defaultValue={this.props.recipe.cookTime}
            fullWidth
          />
          <TextField
            margin="dense"
            id="servingSize"
            label={"Serving Size"}
            type="number"
            color="default"
            onChange={(e)=>this.setState({servingSize: e.target.value})}
            onBlur={(e)=>this.setState({servingSize: e.target.value})}
            defaultValue={this.props.recipe.servingSize}
            fullWidth
          />
        </DialogContent>
        <DialogActions>

          <Button onClick={()=>this.handleSubmitRecipe()} color="primary">
            Edit Recipe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
}

const mapDispatchToProps = dispatch => bindActionCreators({
  editRecipe
}, dispatch)

const AdminEditRecipeDetailsConnect = connect(null, mapDispatchToProps)(AdminEditRecipeDetails)

export default withStyles(styles)(AdminEditRecipeDetailsConnect)
