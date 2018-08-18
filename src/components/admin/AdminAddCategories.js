import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux'
import { addCategory } from '../../redux/actions'
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

class AdminAddCategories extends Component {

  state = {
    suggestions: [],
    open: false,
    ingredientOpen: false,
    category: '',
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
  suggestions = []
     this.props.categories.map(category => {
       return suggestions.push({ label: category.category })
     })
  let currCategory = ''
  this.state.category !== '' ? currCategory = {...this.props.categories.filter(category=> category.category === this.state.category)[0]} : null

  const { classes } = this.props;

  return (
    <div>
      <Button onClick={this.handleClickOpenIngredient} className={classes.claim} color="primary">Add Categories</Button>

      <Dialog
        open={this.state.ingredientOpen}
        onClose={this.handleCloseIngredient}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Categories</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Add categories to your existing recipe.`}
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
               placeholder: 'Search Categories by Name',
               value: this.state.category,
               onChange: this.handleChange,
             }}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={()=>this.handleSubmitCategory(currCategory._id)} color="primary">
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
