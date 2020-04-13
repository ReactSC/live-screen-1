import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    position: "fixed",
    top: 10,
    right: 10,
    background: "#ff7171",
    color: "#fff",
    // border: "1px solid #fff",
  },
});

const CloseBtn = () => {
  const classes = useStyles();
  
  return (
    <IconButton size="small" className={classes.root} >
      <CloseRounded />
    </IconButton>
  );
};

export default CloseBtn
