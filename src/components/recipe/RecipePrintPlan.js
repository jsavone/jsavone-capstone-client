import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import RecipeShoppingList from './RecipeShoppingList'
import RecipeFoodList from './RecipeFoodList'


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
  header: {
    textAlign: 'center',
  },

});

const RecipePrintPlan = (props) => {

const { classes } = props;

  const currUser = {...props.user}
  console.log(React.Children)
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Grid container spacing={24}>
          <Grid item xs={5}>
            <h2 className={classes.header}>SHOPPING LIST</h2>
            <Divider />
            <RecipeShoppingList user={currUser} print={true}/>
          </Grid>
          <Grid item xs={7}>
            <h2 className={classes.header}>MEAL PLAN</h2>
            <Divider />
            <RecipeFoodList user={currUser} print={true}/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const RecipePrintPlanConnect = connect(mapStateToProps)(RecipePrintPlan)

export default withStyles(styles)(RecipePrintPlanConnect);
