import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux'
import { addIngredient } from '../../redux/actions'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MenuItem from '@material-ui/core/MenuItem';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import Paper from '@material-ui/core/Paper';

let suggestions = []

function renderInput(inputProps) {
  const { classes, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: ref,
        classes: {
          input: classes.input,
        },
        ...other,
      }}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

function getSuggestions(value) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

const styles = theme => ({
  container: {
    marginTop: 20,
    marginBottom: 20,
    display: 'flex',
    flexWrap: 'wrap',
    width: 1000
  },

  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 1000,
  },
  menu: {
    width: 1000,
  },
});

class AdminAddIngredients extends Component {

  state = {
    suggestions: [],
    open: false,
    ingredientOpen: false,
    name: '',
    amount: 1
  }

  handleSuggestionsFetchRequested = ({ value }) => {
     this.setState({
       suggestions: getSuggestions(value),
     });
   };

   handleSuggestionsClearRequested = () => {
     this.setState({
       suggestions: [],
     });
   };

  handleChange = (event, { newValue }) => {
    this.setState({
      name: newValue,
    });
  };

handleClickOpenIngredient = () => {
  this.setState({ ingredientOpen: true });
};

handleCloseIngredient = () => {
  this.setState({ ingredientOpen: false });
};

handleSubmitIngredient = (id) => {
  this.setState({ ingredientOpen: false });
  let ingredient = {
                      recipeId: this.props.recipeId,
                      id: id,
                      amount: this.state.amount
                    }

  this.props.addIngredient(ingredient)
  this.setState({name: '', amount: ''})
};

render() {
  suggestions = []
     this.props.ingredients.map(ingredient => {
       return suggestions.push({ label: ingredient.name })
     })

  let currIngredient = ''
  if (this.state.name !== '') {
    currIngredient = {...this.props.ingredients.filter(ingredient=> ingredient.name === this.state.name)[0]}
  }

  const { classes } = this.props;

  return (
    <div>
      <Button onClick={this.handleClickOpenIngredient} className={classes.claim} color="primary">Add Ingredient</Button>

      <Dialog
        open={this.state.ingredientOpen}
        onClose={this.handleCloseIngredient}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Ingredient</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Add ingredient to the existing recipe listing.`}
          </DialogContentText>

          <Autosuggest
             theme={{
               container: classes.container,
               suggestionsContainerOpen: classes.suggestionsContainerOpen,
               suggestionsList: classes.suggestionsList,
               suggestion: classes.suggestion,
             }}
             renderInputComponent={renderInput}
             suggestions={this.state.suggestions}
             onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
             onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
             renderSuggestionsContainer={renderSuggestionsContainer}
             getSuggestionValue={getSuggestionValue}
             renderSuggestion={renderSuggestion}
             inputProps={{
               classes,
               placeholder: 'Search Ingredients by Name',
               value: this.state.name,
               onChange: this.handleChange,
             }}
          />

          {currIngredient !== '' ? <h3>per {currIngredient.unit}</h3> : null}

          <TextField
            margin="dense"
            id="name"
            label={"Amount"}
            type="number"
            color="default"
            onChange={(e)=>this.setState({amount: e.target.value})}
            value={this.state.amount}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>this.handleSubmitIngredient(currIngredient._id)} color="primary">
            Add Ingredient
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}
}

const mapStateToProps = state => {
  return{
    ingredients: state.ingredients
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addIngredient
}, dispatch)

const AdminAddIngredientsConnect = connect(mapStateToProps, mapDispatchToProps)(AdminAddIngredients)

export default withStyles(styles)(AdminAddIngredientsConnect)
