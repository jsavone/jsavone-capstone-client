import React from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '90%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  }
});

const RecipeList = (props) => {
  const { classes } = props;

  let catFilter = [...props.recipes]

  if (props.category !== '') {
    catFilter = [...props.recipes.filter(r=> r.categories.filter(c=> c.category === props.category).length > 0)]
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Top Recipes</ListSubheader>
        </GridListTile>
        {catFilter.filter(recipe=>recipe.title.toLowerCase().includes(props.search.toLowerCase())).map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={<a href={'/recipes/'+tile._id} className={classes.link}>{tile.title}</a>}
              subtitle={<span><a href={tile._id} className={classes.link}>Cook time: {tile.cookTime}</a></span>}
              actionIcon={
                <IconButton className={classes.icon} href={'/recipes/'+tile._id}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

const RecipeListConnect = connect(mapStateToProps)(RecipeList)

export default withStyles(styles)(RecipeListConnect)
