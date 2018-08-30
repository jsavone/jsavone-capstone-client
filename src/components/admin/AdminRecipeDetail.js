import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: '98%',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  media: {
    objectFit: 'cover',
    minWidth: '100%',
    paddingBottom: 0,
  },
  title: {
    fontSize: 20,
    marginBottom: -20,
    color: '#424242',
  },
  button: {
    margin: '0 auto',
    marginBottom: 5,
    textAlign: 'center',
  },
  link: {
    fontSize: '1em',
    textDecoration: 'none',
  }
};

class AdminRecipeDetail extends Component {

  render() {
    const { classes } = this.props;

    let thisRecipe = {...this.props.recipe}
    return (
      <Grid item xs={12} sm={6}>
        <Card className={classes.card}>
          <CardActionArea>
            <a href={`/admin/recipe/${thisRecipe._id}`} className={classes.link}>
            <CardMedia
              component="img"
              className={classes.media}
              height="250"
              image={thisRecipe.img}
              title={thisRecipe.title}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="headline" component="h2" className={classes.title}>
                {thisRecipe.title.toUpperCase()}
              </Typography>
            </CardContent>
            </a>
          </CardActionArea>
          <CardActions>
            <Button size="small" variant="contained" color="primary" href={`/admin/recipe/${thisRecipe._id}`} className={classes.button}>
              EDIT RECIPE
            </Button>
          </CardActions>
        </Card>
      </Grid>

    )
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
  }
}

const AdminRecipeDetailConnect = connect(mapStateToProps)(AdminRecipeDetail)

export default withStyles(styles)(AdminRecipeDetailConnect)
