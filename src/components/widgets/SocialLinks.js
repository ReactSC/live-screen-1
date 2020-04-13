import React from 'react'
import { IconButton, Link } from '@material-ui/core';
import { Facebook, Twitter, Instagram, LinkedIn, YouTube, GitHub } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
  root: {
    position: "absolute",
    bottom: 15,
    right: 15,
  },
  socialIcon: {
    padding: 5,
    margin: 5,
    border: "1px solid #239f55",
    color: "#239f55",
  },
});

const SocialLinks = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Social url="https://facebook.com/schoolwab">
        <Facebook />
      </Social>
      <Social url="https://twitter.com/schoolwab">
        <Twitter />
      </Social>
      <Social url="https://instagram.com/schoolwab">
        <Instagram />
      </Social>
      <Social url="https://www.linkedin.com/in/schoolwab">
        <LinkedIn />
      </Social>
      <Social url="https://github.com/schoolwab">
        <GitHub />
      </Social>
      <Social url="https://www.youtube.com/channel/UCJNrAErSOLrwUlzQeJr9rtA">
        <YouTube />
      </Social>
    </div>
  );
}

export default SocialLinks



const Social = props => {
  const classes = useStyles();
  return (
    <Link href={props.url} target="_blank">
      <IconButton  size="small" className={ classes.socialIcon }>
        {props.children}
      </IconButton>
    </Link>
  );
}