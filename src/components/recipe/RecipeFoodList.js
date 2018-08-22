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

  const handleRemove = (recipe_id, meal) => {
    let removeMeal = {user_id: props.user._id, meal, recipe_id}
    props.removeMeal(removeMeal)
  }

  const { classes } = props;

  let user = props.user

  return (
    <div>
      <Paper className={classes.root}>
        <div className={classes.head}>
          <h5 className={classes.day}>Sunday</h5>
        </div>
        <Table className={classes.table}>
          <TableBody>
            <TableRow className={classes.row} >
              <CustomTableCell component="th" scope="row">
                Breakfast
              </CustomTableCell>
              <CustomTableCell numeric>
              { user.sundayBfast !== undefined ?
                <div>
                  <Link className={classes.link} to={`/${props.user.email}/recipes/${user.sundayBfast._id}`}>{user.sundayBfast.title}</Link>{props.print ? null :<span>  -
                  <Delete className={classes.icon} onClick={()=>handleRemove(user.sundayBfast._id, 'sundayBfast')} /></span>}
                </div> : 'Empty'

              }
              </CustomTableCell>
            </TableRow>
            <TableRow className={classes.row} >
              <CustomTableCell component="th" scope="row">
                Lunch
              </CustomTableCell>
              <CustomTableCell numeric>
                { user.sundayLunch !== undefined ?
                  <div>
                    <Link className={classes.link} to={`/${props.user.email}/recipes/${user.sundayLunch._id}`}>{user.sundayLunch.title}</Link>{props.print ? null :<span>  -
                    <Delete className={classes.icon} onClick={()=>handleRemove(user.sundayLunch._id, 'sundayLunch')} /></span>}
                  </div> : 'Empty'
                }
              </CustomTableCell>
            </TableRow>
            <TableRow className={classes.row} >
              <CustomTableCell component="th" scope="row">
                Dinner
              </CustomTableCell>
              <CustomTableCell numeric>
              { user.sundayDinner !== undefined ?
                <div>
                  <Link className={classes.link} to={`/${props.user.email}/recipes/${user.sundayDinner._id}`}>{user.sundayDinner.title}</Link>{props.print ? null :<span>  -
                  <Delete className={classes.icon} onClick={()=>handleRemove(user.sundayDinner._id, 'sundayDinner')} /></span>}
                </div> : 'Empty'
              }
              </CustomTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>

      <Paper className={classes.root}>
        <div className={classes.head}>
          <h5 className={classes.day}>Monday</h5>
        </div>
        <Table className={classes.table}>
          <TableBody>
            <TableRow className={classes.row} >
              <CustomTableCell component="th" scope="row">
                Breakfast
              </CustomTableCell>
              <CustomTableCell numeric>
              { user.mondayBfast !== undefined ?
                <div>
                  <Link className={classes.link} to={`/${props.user.email}/recipes/${user.mondayBfast._id}`}>{user.mondayBfast.title}</Link>{props.print ? null :<span>  -
                  <Delete className={classes.icon} onClick={()=>handleRemove(user.mondayBfast._id, 'mondayBfast')} /></span>}
                </div> : 'Empty'
              }
              </CustomTableCell>
            </TableRow>
            <TableRow className={classes.row} >
              <CustomTableCell component="th" scope="row">
                Lunch
              </CustomTableCell>
              <CustomTableCell numeric>
                { user.mondayLunch !== undefined ?
                  <div>
                    <Link className={classes.link} to={`/${props.user.email}/recipes/${user.mondayLunch._id}`}>{user.mondayLunch.title}</Link>{props.print ? null :<span>  -
                    <Delete className={classes.icon} onClick={()=>handleRemove(user.mondayLunch._id, 'mondayLunch')} /></span>}
                  </div> : 'Empty'
                }
              </CustomTableCell>
            </TableRow>
            <TableRow className={classes.row} >
              <CustomTableCell component="th" scope="row">
                Dinner
              </CustomTableCell>
              <CustomTableCell numeric>
              { user.mondayDinner !== undefined ?
                <div>
                  <Link className={classes.link} to={`/${props.user.email}/recipes/${user.mondayDinner._id}`}>{user.mondayDinner.title}</Link>{props.print ? null :<span>  -
                  <Delete className={classes.icon} onClick={()=>handleRemove(user.mondayDinner._id, 'mondayDinner')} /></span>}
                </div> : 'Empty'
              }
              </CustomTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>

      <Paper className={classes.root}>
        <div className={classes.head}>
          <h5 className={classes.day}>Tuesday</h5>
        </div>
        <Table className={classes.table}>
          <TableBody>
            <TableRow className={classes.row} >
              <CustomTableCell component="th" scope="row">
                Breakfast
              </CustomTableCell>
              <CustomTableCell numeric>
              { user.tuesdayBfast !== undefined ?
                <div>
                  <Link className={classes.link} to={`/${props.user.email}/recipes/${user.tuesdayBfast._id}`}>{user.tuesdayBfast.title}</Link>{props.print ? null :<span>  -
                  <Delete className={classes.icon} onClick={()=>handleRemove(user.tuesdayBfast._id, 'tuesdayBfast')} /></span>}
                </div> : 'Empty'
              }
              </CustomTableCell>
            </TableRow>
            <TableRow className={classes.row} >
              <CustomTableCell component="th" scope="row">
                Lunch
              </CustomTableCell>
              <CustomTableCell numeric>
                { user.tuesdayLunch !== undefined ?
                  <div>
                    <Link className={classes.link} to={`/${props.user.email}/recipes/${user.tuesdayLunch._id}`}>{user.tuesdayLunch.title}</Link>{props.print ? null :<span>  -
                    <Delete className={classes.icon} onClick={()=>handleRemove(user.tuesdayLunch._id, 'tuesdayLunch')} /></span>}
                  </div> : 'Empty'
                }
              </CustomTableCell>
            </TableRow>
            <TableRow className={classes.row} >
              <CustomTableCell component="th" scope="row">
                Dinner
              </CustomTableCell>
              <CustomTableCell numeric>
              { user.tuesdayDinner !== undefined ?
                <div>
                  <Link className={classes.link} to={`/${props.user.email}/recipes/${user.tuesdayDinner._id}`}>{user.tuesdayDinner.title}</Link>{props.print ? null :<span>  -
                  <Delete className={classes.icon} onClick={()=>handleRemove(user.tuesdayDinner._id, 'tuesdayDinner')} /></span>}
                </div> : 'Empty'
              }
              </CustomTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>

      <Paper className={classes.root}>
        <div className={classes.head}>
          <h5 className={classes.day}>Wednesday</h5>
        </div>
        <Table className={classes.table}>
          <TableBody>
            <TableRow className={classes.row} >
              <CustomTableCell component="th" scope="row">
                Breakfast
              </CustomTableCell>
              <CustomTableCell numeric>
              { user.wednesdayBfast !== undefined ?
                <div>
                  <Link className={classes.link} to={`/${props.user.email}/recipes/${user.wednesdayBfast._id}`}>{user.wednesdayBfast.title}</Link>{props.print ? null :<span>  -
                  <Delete className={classes.icon} onClick={()=>handleRemove(user.wednesdayBfast._id, 'wednesdayBfast')} /></span>}
                </div> : 'Empty'
              }
              </CustomTableCell>
            </TableRow>
            <TableRow className={classes.row} >
              <CustomTableCell component="th" scope="row">
                Lunch
              </CustomTableCell>
              <CustomTableCell numeric>
                { user.wednesdayLunch !== undefined ?
                  <div>
                    <Link className={classes.link} to={`/${props.user.email}/recipes/${user.wednesdayLunch._id}`}>{user.wednesdayLunch.title}</Link>{props.print ? null :<span>  -
                    <Delete className={classes.icon} onClick={()=>handleRemove(user.wednesdayLunch._id, 'wednesdayLunch')} /></span>}
                  </div> : 'Empty'
                }
              </CustomTableCell>
            </TableRow>
            <TableRow className={classes.row} >
              <CustomTableCell component="th" scope="row">
                Dinner
              </CustomTableCell>
              <CustomTableCell numeric>
              { user.wednesdayDinner !== undefined ?
                <div>
                  <Link className={classes.link} to={`/${props.user.email}/recipes/${user.wednesdayDinner._id}`}>{user.wednesdayDinner.title}</Link>{props.print ? null :<span>  -
                  <Delete className={classes.icon} onClick={()=>handleRemove(user.wednesdayDinner._id, 'wednesdayDinner')} /></span>}
                </div> : 'Empty'
              }
              </CustomTableCell>
            </TableRow>
          </TableBody>
        </Table>

      </Paper>
      <Paper className={classes.root}>
        <div className={classes.head}>
          <h5 className={classes.day}>Thursday</h5>
        </div>
        <Table className={classes.table}>
          <TableBody>
            <TableRow className={classes.row} >
              <CustomTableCell component="th" scope="row">
                Breakfast
              </CustomTableCell>
              <CustomTableCell numeric>
              { user.thursdayBfast !== undefined ?
                <div>
                  <Link className={classes.link} to={`/${props.user.email}/recipes/${user.thursdayBfast._id}`}>{user.thursdayBfast.title}</Link>{props.print ? null :<span>  -
                  <Delete className={classes.icon} onClick={()=>handleRemove(user.thursdayBfast._id, 'thursdayBfast')} /></span>}
                </div> : 'Empty'
              }
              </CustomTableCell>
            </TableRow>
            <TableRow className={classes.row} >
              <CustomTableCell component="th" scope="row">
                Lunch
              </CustomTableCell>
              <CustomTableCell numeric>
                { user.thursdayLunch !== undefined ?
                  <div>
                    <Link className={classes.link} to={`/${props.user.email}/recipes/${user.thursdayLunch._id}`}>{user.thursdayLunch.title}</Link>{props.print ? null :<span>  -
                    <Delete className={classes.icon} onClick={()=>handleRemove(user.thursdayLunch._id, 'thursdayLunch')} /></span>}
                  </div> : 'Empty'
                }
              </CustomTableCell>
            </TableRow>
            <TableRow className={classes.row} >
              <CustomTableCell component="th" scope="row">
                Dinner
              </CustomTableCell>
              <CustomTableCell numeric>
              { user.thursdayDinner !== undefined ?
                <div>
                  <Link className={classes.link} to={`/${props.user.email}/recipes/${user.thursdayDinner._id}`}>{user.thursdayDinner.title}</Link>{props.print ? null :<span>  -
                  <Delete className={classes.icon} onClick={()=>handleRemove(user.thursdayDinner._id, 'thursdayDinner')} /></span>}
                </div> : 'Empty'
              }
              </CustomTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>

      <Paper className={classes.root}>
        <div className={classes.head}>
          <h5 className={classes.day}>Friday</h5>
        </div>
        <Table className={classes.table}>
          <TableBody>
            <TableRow className={classes.row} >
              <CustomTableCell component="th" scope="row">
                Breakfast
              </CustomTableCell>
              <CustomTableCell numeric>
              { user.fridayBfast !== undefined ?
                <div>
                  <Link className={classes.link} to={`/${props.user.email}/recipes/${user.fridayBfast._id}`}>{user.fridayBfast.title}</Link>{props.print ? null :<span>  -
                  <Delete className={classes.icon} onClick={()=>handleRemove(user.fridayBfast._id, 'fridayBfast')} /></span>}
                </div> : 'Empty'
              }
              </CustomTableCell>
            </TableRow>
            <TableRow className={classes.row} >
              <CustomTableCell component="th" scope="row">
                Lunch
              </CustomTableCell>
              <CustomTableCell numeric>
                { user.fridayLunch !== undefined ?
                  <div>
                    <Link className={classes.link} to={`/${props.user.email}/recipes/${user.fridayLunch._id}`}>{user.fridayLunch.title}</Link>{props.print ? null :<span>  -
                    <Delete className={classes.icon} onClick={()=>handleRemove(user.fridayLunch._id, 'fridayLunch')} /></span>}
                  </div> : 'Empty'
                }
              </CustomTableCell>
            </TableRow>
            <TableRow className={classes.row} >
              <CustomTableCell component="th" scope="row">
                Dinner
              </CustomTableCell>
              <CustomTableCell numeric>
              { user.fridayDinner !== undefined ?
                <div>
                  <Link className={classes.link} to={`/${props.user.email}/recipes/${user.fridayDinner._id}`}>{user.fridayDinner.title}</Link>{props.print ? null :<span>  -
                  <Delete className={classes.icon} onClick={()=>handleRemove(user.fridayDinner._id, 'fridayDinner')} /></span>}
                </div> : 'Empty'
              }
              </CustomTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>

      <Paper className={classes.root}>
        <div className={classes.head}>
          <h5 className={classes.day}>Saturday</h5>
        </div>
        <Table className={classes.table}>
          <TableBody>
            <TableRow className={classes.row} >
              <CustomTableCell component="th" scope="row">
                Breakfast
              </CustomTableCell>
              <CustomTableCell numeric>
              { user.saturdayBfast !== undefined ?
                <div>
                  <Link className={classes.link} to={`/${props.user.email}/recipes/${user.saturdayBfast._id}`}>{user.saturdayBfast.title}</Link>{props.print ? null :<span>  -
                  <Delete className={classes.icon} onClick={()=>handleRemove(user.saturdayBfast._id, 'saturdayBfast')} /></span>}
                </div> : 'Empty'
              }
              </CustomTableCell>
            </TableRow>
            <TableRow className={classes.row} >
              <CustomTableCell component="th" scope="row">
                Lunch
              </CustomTableCell>
              <CustomTableCell numeric>
                { user.saturdayLunch !== undefined ?
                  <div>
                    <Link className={classes.link} to={`/${props.user.email}/recipes/${user.saturdayLunch._id}`}>{user.saturdayLunch.title}</Link>{props.print ? null :<span>  -
                    <Delete className={classes.icon} onClick={()=>handleRemove(user.saturdayLunch._id, 'saturdayLunch')} /></span>}
                  </div> : 'Empty'
                }
              </CustomTableCell>
            </TableRow>
            <TableRow className={classes.row} >
              <CustomTableCell component="th" scope="row">
                Dinner
              </CustomTableCell>
              <CustomTableCell numeric>
              { user.saturdayDinner !== undefined ?
                <div>
                  <Link className={classes.link} to={`/${props.user.email}/recipes/${user.saturdayDinner._id}`}>{user.saturdayDinner.title}</Link>{props.print ? null :<span>  -
                  <Delete className={classes.icon} onClick={()=>handleRemove(user.saturdayDinner._id, 'saturdayDinner')} /></span>}
                </div> : 'Empty'
              }
              </CustomTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>

    </div>
  );
}

  const mapDispatchToProps = dispatch => bindActionCreators({
    removeMeal
  }, dispatch)

const RecipeFoodListConnect = connect(null, mapDispatchToProps)(RecipeFoodList)

export default withStyles(styles)(RecipeFoodListConnect);
