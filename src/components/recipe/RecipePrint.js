import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Timer from '@material-ui/icons/TimerRounded';
import Box from '@material-ui/icons/CheckBoxOutlineBlank';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    border: '1px dashed black',
    margin: '0 auto',
    padding: 0,
    width: 670, /* width: 7in; */
    height: 900, /* or height: 9.5in; */
    clear: 'both',
    pageBreakAfter: 'always',
    whiteSpace: 'pre-line',
  },
  content: {
    width: '99%',
    marginTop: 0,
    marginLeft: 8,
  },
  recipeTitle: {
    marginTop: 8,
  },
  icon: {
    marginBottom: -5,
    fontSize: 22,
  },
  img: {
    marginTop: 12,
    marginLeft: -10,
    maxWidth: 259,
    width: '98%',
  },
  header: {
    marginTop: 10,
  }

});

const RecipePrint = (props) => {

const { classes } = props;

  const currRecipe = {...props.recipes.filter(recipe=> recipe._id === props.match.params.id)[0]}
  let ingredientsList = []

  if (currRecipe.ingredients) {
    ingredientsList = currRecipe.ingredients.map(ingr => {
      return <div key={ingr._id}><Box className={classes.icon} />&nbsp;&nbsp;{ingr.amount} {ingr.ingredientId.unit} - {ingr.ingredientId.name}</div>
    })
  }

  return (
    <div className={classes.root}>
      {currRecipe.title ? window.print() : null}
      <div className={classes.content}>
        <Grid container spacing={24}>
          <Grid item xs={7}>
            <h1 className={classes.recipeTitle}>{currRecipe.title}</h1>
            <Divider />
            <p><Timer className={classes.icon} /> Cook Time: {currRecipe.cookTime}</p>
            <Divider />
            <h3 className={classes.header}>Ingredients</h3>
              {ingredientsList}
              <br/>
          </Grid>
          <Grid item xs={5}>
            <img src={currRecipe.img} alt={currRecipe.title} className={classes.img}/>
          </Grid>
        </Grid>
          <Divider />
          <h3 className={classes.header}>Directions</h3>
          <p>{currRecipe.directions}</p>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

const RecipePrintConnect = connect(mapStateToProps)(RecipePrint)

export default withStyles(styles)(RecipePrintConnect);
