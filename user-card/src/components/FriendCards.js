import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  links: {
    color: "grey"
  }
}));

const FriendCards = ({ friends }) => {
  // console.log(user)
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader style={{ color: "white" }} component="div">Followers</ListSubheader>
        </GridListTile>
        {friends.map(friend => (
          <GridListTile key={friend.img}>
            <img src={friend.avatar_url} alt={friend.login} />
          <GridListTileBar
            title={friend.login}
            subtitle={<span>Handle:
            <a href={friend.html_url} className={classes.links} >
              @{friend.login}
            </a></span>}
          // actionIcon={
          // <IconButton aria-label={`info about ${friend.name}`} className={classes.icon}>
          // <InfoIcon />
          // </IconButton>
          // }
        />
        </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

export default FriendCards;
/* Handle:
  <a href={friend.html_url} >
    @{friend.login}
  </a>
<br />
Followers: {friend.followers}<br />
Following: {friend.following}<br />
Location: {friend.location}<br />
{friend.html_url}<br />
friend Since: {friend.created_at}<br /> */