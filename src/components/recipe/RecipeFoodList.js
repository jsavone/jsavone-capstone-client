import React from 'react';
import { withStyles } from '@material-ui/core/styles';
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
});

let id = 0;
function createData(meal, recipe) {
  id += 1;
  return { id, meal, recipe };
}

const rows = [
  createData('Breafast', "Lasagna"),
  createData('Lunch', "Mac n Cheese"),
  createData('Dinner', "Baby Back Ribs"),
];

const RecipeFoodList = (props) => {

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
              {user.sundayBfast !== undefined ? user.sundayBfast.title : 'Empty'}
              </CustomTableCell>
            </TableRow>
            <TableRow className={classes.row} >
              <CustomTableCell component="th" scope="row">
                Lunch
              </CustomTableCell>
              <CustomTableCell numeric>
              {user.sundayLunch !== undefined ? user.sundayLunch.title : 'Empty'}
              </CustomTableCell>
            </TableRow>
            <TableRow className={classes.row} >
              <CustomTableCell component="th" scope="row">
                Dinner
              </CustomTableCell>
              <CustomTableCell numeric>
              {user.sundayDinner !== undefined ? user.sundayDinner.title : 'Empty'}
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
            {rows.map(row => {
              return (
                <TableRow className={classes.row} key={row.id}>
                  <CustomTableCell component="th" scope="row">
                    {row.meal}
                  </CustomTableCell>
                  <CustomTableCell numeric>{row.recipe}</CustomTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>

      <Paper className={classes.root}>
        <div className={classes.head}>
          <h5 className={classes.day}>Tuesday</h5>
        </div>
        <Table className={classes.table}>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow className={classes.row} key={row.id}>
                  <CustomTableCell component="th" scope="row">
                    {row.meal}
                  </CustomTableCell>
                  <CustomTableCell numeric>{row.recipe}</CustomTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>

      <Paper className={classes.root}>
        <div className={classes.head}>
          <h5 className={classes.day}>Wednesday</h5>
        </div>
        <Table className={classes.table}>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow className={classes.row} key={row.id}>
                  <CustomTableCell component="th" scope="row">
                    {row.meal}
                  </CustomTableCell>
                  <CustomTableCell numeric>{row.recipe}</CustomTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>

      <Paper className={classes.root}>
        <div className={classes.head}>
          <h5 className={classes.day}>Thursday</h5>
        </div>
        <Table className={classes.table}>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow className={classes.row} key={row.id}>
                  <CustomTableCell component="th" scope="row">
                    {row.meal}
                  </CustomTableCell>
                  <CustomTableCell numeric>{row.recipe}</CustomTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>

      <Paper className={classes.root}>
        <div className={classes.head}>
          <h5 className={classes.day}>Friday</h5>
        </div>
        <Table className={classes.table}>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow className={classes.row} key={row.id}>
                  <CustomTableCell component="th" scope="row">
                    {row.meal}
                  </CustomTableCell>
                  <CustomTableCell numeric>{row.recipe}</CustomTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>

      <Paper className={classes.root}>
        <div className={classes.head}>
          <h5 className={classes.day}>Saturday</h5>
        </div>
        <Table className={classes.table}>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow className={classes.row} key={row.id}>
                  <CustomTableCell component="th" scope="row">
                    {row.meal}
                  </CustomTableCell>
                  <CustomTableCell numeric>{row.recipe}</CustomTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>

    </div>
  );
}


export default withStyles(styles)(RecipeFoodList);
