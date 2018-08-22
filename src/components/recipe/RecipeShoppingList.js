import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeMeal } from '../../redux/actions'
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/icons/CheckBoxOutlineBlank';

const styles = theme => ({
icon: {
  marginBottom: -6,
}
});

const RecipeShoppingList = (props) => {

  const { classes } = props;

  let currUser = props.user

  let allIngredients = []
  if (currUser.thursdayBfast) {
    allIngredients = [...allIngredients, ...currUser.thursdayBfast.ingredients]
  }
  if (currUser.thursdayLunch) {
    allIngredients = [...allIngredients, ...currUser.thursdayLunch.ingredients]
  }
  if (currUser.thursdayDinner) {
    allIngredients = [...allIngredients, ...currUser.thursdayDinner.ingredients]
  }
  if (currUser.mondayBfast) {
    allIngredients = [...allIngredients, ...currUser.mondayBfast.ingredients]
  }
  if (currUser.mondayLunch) {
    allIngredients = [...allIngredients, ...currUser.mondayLunch.ingredients]
  }
  if (currUser.mondayDinner) {
    allIngredients = [...allIngredients, ...currUser.mondayDinner.ingredients]
  }
  if (currUser.tuesdayBfast) {
    allIngredients = [...allIngredients, ...currUser.tuesdayBfast.ingredients]
  }
  if (currUser.tuesdayLunch) {
    allIngredients = [...allIngredients, ...currUser.tuesdayLunch.ingredients]
  }
  if (currUser.tuesdayDinner) {
    allIngredients = [...allIngredients, ...currUser.tuesdayDinner.ingredients]
  }
  if (currUser.wednesdayBfast) {
    allIngredients = [...allIngredients, ...currUser.wednesdayBfast.ingredients]
  }
  if (currUser.wednesdayLunch) {
    allIngredients = [...allIngredients, ...currUser.wednesdayLunch.ingredients]
  }
  if (currUser.wednesdayDinner) {
    allIngredients = [...allIngredients, ...currUser.wednesdayDinner.ingredients]
  }
  if (currUser.thursdayBfast) {
    allIngredients = [...allIngredients, ...currUser.thursdayBfast.ingredients]
  }
  if (currUser.thursdayLunch) {
    allIngredients = [...allIngredients, ...currUser.thursdayLunch.ingredients]
  }
  if (currUser.thursdayDinner) {
    allIngredients = [...allIngredients, ...currUser.thursdayDinner.ingredients]
  }
  if (currUser.fridayBfast) {
    allIngredients = [...allIngredients, ...currUser.fridayBfast.ingredients]
  }
  if (currUser.fridayLunch) {
    allIngredients = [...allIngredients, ...currUser.fridayLunch.ingredients]
  }
  if (currUser.fridayDinner) {
    allIngredients = [...allIngredients, ...currUser.fridayDinner.ingredients]
  }
  if (currUser.saturdayBfast) {
    allIngredients = [...allIngredients, ...currUser.saturdayBfast.ingredients]
  }
  if (currUser.saturdayLunch) {
    allIngredients = [...allIngredients, ...currUser.saturdayLunch.ingredients]
  }
  if (currUser.saturdayDinner) {
    allIngredients = [...allIngredients, ...currUser.saturdayDinner.ingredients]
  }

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

  let ingredientsList = ingrArray.map(ingr => <div key={ingr._id}><List>{props.print ? <span><Box className={classes.icon}/>&nbsp;&nbsp;</span> : null}{ingr.amount} {ingr.unit} - {ingr.name}</List><Divider /></div>)

  return(
    <div className={classes.root}>
      {ingredientsList}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  removeMeal
}, dispatch)

const RecipeShoppingListConnect = connect(mapStateToProps, mapDispatchToProps)(RecipeShoppingList)

export default withStyles(styles)(RecipeShoppingListConnect);
