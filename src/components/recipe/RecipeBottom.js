import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    textAlign: 'center',
    height: 0,
  },
};

class RecipeBottom extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <h5>Preptastic | &copy; 2018 John Savone</h5>
      </div>
    );
  }
}


export default withStyles(styles)(RecipeBottom);
