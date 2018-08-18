import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withStyles } from '@material-ui/core/styles';
import NavBar from '../NavBar'
import AdminAddIngredients from './AdminAddIngredients'
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

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


class AdminEditRecipe extends Component{

  render() {
const { classes } = this.props;

let thisRecipe = {...this.props.recipes.filter(recipe=> recipe._id === this.props.match.params.id)[0]}

let currIngredients = []

console.log(thisRecipe)

    return(
      <div>
        <NavBar />
        <h1>{thisRecipe.title}</h1>
        <img className={classes.img} src={thisRecipe.img} alt={thisRecipe.title} />
        <h3>Current Ingredients</h3>
        <AdminAddIngredients />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    categories: state.categories,
    ingredients: state.ingredients,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

const AdminEditRecipeConnect = connect(mapStateToProps, mapDispatchToProps)(AdminEditRecipe)

export default withStyles(styles)(AdminEditRecipeConnect)
