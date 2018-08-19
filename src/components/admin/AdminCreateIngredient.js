import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux'
import { createIngredient } from '../../redux/actions'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MenuItem from '@material-ui/core/MenuItem';
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

const unit = [
  {
    value: 'tsp',
    label: 'tsp',
  },
  {
    value: 'tbsp',
    label: 'tbsp',
  },
  {
    value: 'oz',
    label: 'oz',
  },
  {
    value: 'fl oz',
    label: 'fl oz',
  },
];

class AdminCreateIngredient extends Component {

  state = {
  open: false,
  ingredientOpen: false,
  name: '',
  unit: ''
};

handleChange = name => event => {
   this.setState({
     [name]: event.target.value,
   });
 };

handleClickOpenIngredient = () => {
  this.setState({ ingredientOpen: true });
};

handleCloseIngredient = () => {
  this.setState({ ingredientOpen: false });
};

handleSubmitIngredient = (prod, guest) => {
  this.setState({ ingredientOpen: false });
  let newIngredient = {
                        name: this.state.name,
                        unit: this.state.unit,
                      }

  this.props.createIngredient(newIngredient)
  this.setState({name: '', unit: ''})
};

render() {
  const { classes } = this.props;

  return (
    <div>
      <Button onClick={this.handleClickOpenIngredient} className={classes.claim} color="primary">Create New Ingredient</Button>

      <Dialog
        open={this.state.ingredientOpen}
        onClose={this.handleCloseIngredient}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create New Ingredient</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Create a new ingredient that can be used with existing recipes.`}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={"Ingredient Name"}
            type="text"
            color="default"
            onChange={(e)=>this.setState({name: e.target.value})}
            value={this.state.name}
            fullWidth
          />

        <TextField
         id="select-unit"
         select
         label="Unit of Measurement"
         className={classes.textField}
         value={this.state.unit}
         onChange={this.handleChange('unit')}
         SelectProps={{
           MenuProps: {
             className: classes.menu,
           },
         }}
         margin="dense"
         fullWidth
        >
         {unit.map(option => (
           <MenuItem key={option.value} value={option.value}>
             {option.label}
           </MenuItem>
         ))}
       </TextField>

        </DialogContent>
        <DialogActions>

          <Button onClick={()=>this.handleSubmitIngredient()} color="primary">
            Add Ingredient
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}
}


const mapDispatchToProps = dispatch => bindActionCreators({
  createIngredient
}, dispatch)

const AdminCreateIngredientConnect = connect(null, mapDispatchToProps)(AdminCreateIngredient)

export default withStyles(styles)(AdminCreateIngredientConnect)
