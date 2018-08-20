import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addComment } from '../../redux/actions'
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CommentIcon from '@material-ui/icons/CommentRounded';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    width: '100%',
  },
  margin: {
   margin: theme.spacing.unit * 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  container: {
   display: 'flex',
   flexWrap: 'wrap',
   width: '100%',
  },
  textField: {
   marginLeft: theme.spacing.unit,
   marginRight: theme.spacing.unit,
   width: '100%',
  },
  commentIcon: {
    marginBottom: 0,
  },
});

class RecipeComments extends Component {
  state = {
    comment: ''
  }

  SubmitHandler = (recipe, user) => {
    let newComment = {
      comment: this.state.comment,
      recipe,
      user
    }
    this.props.addComment(newComment)
  }

  render() {
    const { classes } = this.props;

    let totalComments = 0
    let commentList = []

    if (this.props.recipe.comments && this.props.recipe.comments.length > 0) {
      totalComments = this.props.recipe.comments.length
      commentList = this.props.recipe.comments.map(comment => {
      let thisUser = {...this.props.users.filter(user=> user._id === comment.user)[0]}
      return <div key={comment._id}> {comment.comment} by {thisUser.firstName+" "+thisUser.lastName}</div>
    })
    }

    return (

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
            <Badge className={classes.margin} badgeContent={totalComments} color="primary">
              <CommentIcon className={classes.commentIcon}/>
            </Badge>
            &nbsp;&nbsp;COMMENTS
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {commentList}
            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="multiline-static"
                label="Post a Comment"
                multiline
                rows="4"
                value={this.state.comment}
                className={classes.textField}
                onChange={(e)=> this.setState({comment: e.target.value})}
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={()=> this.SubmitHandler(this.props.recipe._id, this.props.user._id)}>
                Submit Comment
              </Button>
            </form>
          </ExpansionPanelDetails>
        </ExpansionPanel>

    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addComment
}, dispatch)

const RecipeCommentsConnect = connect(mapStateToProps, mapDispatchToProps)(RecipeComments)

export default withStyles(styles)(RecipeCommentsConnect)
