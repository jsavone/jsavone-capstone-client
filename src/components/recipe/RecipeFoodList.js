import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeMeal } from '../../redux/actions'
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Delete from '@material-ui/icons/DeleteRounded';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 12,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '98%',
    marginTop: theme.spacing.unit * 1,
    overflowX: 'auto',
  },
  table: {
    width: '100%',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
    height: 20,
  },
  head: {
    width: '100%',
    margin: 0,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    height: 25,
  },
  day: {
    margin: 0,
    paddingTop: 5,
  },
  icon: {
    fontSize: 14,
    marginBottom: -3,
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 500,
  }
});

const RecipeFoodList = (props) => {

  const mealLabels = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']

  const handleRemove = (recipe_id, meal) => {
    console.log('recipe: ', recipe_id)
    console.log('meal: ', meal)
    let removeMeal = {user_id: props.user._id, meal, recipe_id}
    props.removeMeal(removeMeal)
  }
  const { classes } = props;

  let user = props.user

  const planList = mealLabels.map((day, index) => {
    return (
      <Paper className={classes.root} key={index} >
        <div className={classes.head}>
          <h5 className={classes.day}>{day.charAt(0).toUpperCase() + day.substr(1)}</h5>
        </div>
        <Table className={classes.table}>
          <TableBody>
            <TableRow className={classes.row} >
              <CustomTableCell component="th" scope="row">
                Breakfast
              </CustomTableCell>
              <CustomTableCell numeric>
              { user[day+'Bfast'] !== undefined ?
                <div>
                  <Link className={classes.link} to={`/recipes/${user[day+'Bfast']._id}`}>{user[day+'Bfast'].title}</Link>{props.print ? null :<span>  -
                  <Delete className={classes.icon} onClick={()=>handleRemove(user[day+'Bfast']._id, day+"Bfast")} /></span>}
                </div> : 'Empty'

              }
              </CustomTableCell>
            </TableRow>
            <TableRow className={classes.row} >
              <CustomTableCell component="th" scope="row">
                Lunch
              </CustomTableCell>
              <CustomTableCell numeric>
                { user[day+"Lunch"] !== undefined ?
                  <div>
                    <Link className={classes.link} to={`/recipes/${user[day+"Lunch"]._id}`}>{user[day+"Lunch"].title}</Link>{props.print ? null :<span>  -
                    <Delete className={classes.icon} onClick={()=>handleRemove(user[day+"Lunch"]._id, day+"Lunch")} /></span>}
                  </div> : 'Empty'
                }
              </CustomTableCell>
            </TableRow>
            <TableRow className={classes.row} >
              <CustomTableCell component="th" scope="row">
                Dinner
              </CustomTableCell>
              <CustomTableCell numeric>
              { user[day+"Dinner"] !== undefined ?
                <div>
                  <Link className={classes.link} to={`/recipes/${user[day+"Dinner"]._id}`}>{user[day+"Dinner"].title}</Link>{props.print ? null :<span>  -
                  <Delete className={classes.icon} onClick={()=>handleRemove(user[day+"Dinner"]._id, day+"Dinner")} /></span>}
                </div> : 'Empty'
              }
              </CustomTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    )
  })


  return (
    <div>
    {planList}
    </div>
  );
}

  const mapStateToProps = state => {
    return {
      user: state.user,
    }
  }

  const mapDispatchToProps = dispatch => bindActionCreators({
    removeMeal
  }, dispatch)

const RecipeFoodListConnect = connect(mapStateToProps, mapDispatchToProps)(RecipeFoodList)

export default withStyles(styles)(RecipeFoodListConnect);
