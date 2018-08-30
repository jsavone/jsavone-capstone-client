import React from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/icons/CheckBoxOutlineBlank';

const styles = theme => ({
icon: {
  marginBottom: -6,
},
root: {
  color: '#424242',
}
});

const conversion = (obj) => {
  let pounds = 0
  let ounces = 0
  if (obj.amount >=16 && obj.unit === 'oz') {
    pounds = Math.floor(obj.amount / 16)
    ounces = obj.amount % 16

      let numPound = pounds === 1 ? 'lb' : 'lbs'
      let result = pounds+numPound+(ounces!== 0 ? " "+ounces+'oz': '')
      return result
  }
  if (obj.unit === 'each') {
    return obj.amount
  }
  return obj.amount+" "+obj.unit
}

const RecipeShoppingList = (props) => {

  const { classes } = props;

  let currUser = props.user

  const day = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']

  let allIngredients = []

  day.forEach(day => {
    if (currUser[day+'Bfast']) {
      allIngredients = [...allIngredients, ...currUser[day+'Bfast'].ingredients]
    }
    if (currUser[day+'Lunch']) {
      allIngredients = [...allIngredients, ...currUser[day+'Lunch'].ingredients]
    }
    if (currUser[day+'Dinner']) {
      allIngredients = [...allIngredients, ...currUser[day+'Dinner'].ingredients]
    }
  })

  let ingredientsObj = {}
  allIngredients.forEach(ing => {
    return ingredientsObj[ing.ingredientId] = (ingredientsObj[ing.ingredientId] || 0)+ing.amount
  })

  let ingrArray = []

  props.ingredients.forEach(ing => {
    if (ingredientsObj[ing._id]) {
      ingrArray.push({name: ing.name, amount: ingredientsObj[ing._id], unit: ing.unit, _id: ing._id})
    }
  })

  let ingredientsList = ingrArray.map(ingr => <div key={ingr._id}><List>{props.print ? <span><Box className={classes.icon}/>&nbsp;&nbsp;</span> : null}{conversion(ingr)} - {ingr.name}</List><Divider /></div>)

  return(
    <div className={classes.root}>
      {ingredientsList.length > 0 ? ingredientsList : <h2>Add meals to your calendar to build a shopping list!</h2>}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    user: state.user,
  }
}

const RecipeShoppingListConnect = connect(mapStateToProps, null)(RecipeShoppingList)

export default withStyles(styles)(RecipeShoppingListConnect);
