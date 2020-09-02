import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    // width: "100%",
    // height: "auto"
  },
  img: {
    width: "100%",
    height: "auto"
  }

}));

const UserCard = ({ user }) => {
  // console.log(user)
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paper}>
      <img src={user.avatar_url}/><br />
      {user.name}<br />
      Handle:
        <a href={user.html_url} >
          @{user.login}
        </a>
      <br />
      Followers: {user.followers}<br />
      Following: {user.following}<br />
      Location: {user.location}<br />
      {/* repos will need it's own specialness, it returns an api??? */}
      {/* {user.repos_url}<br /> */}
      {user.html_url}<br />
      User Since: {user.created_at}<br />
    </Paper>
  )
}

export default UserCard;