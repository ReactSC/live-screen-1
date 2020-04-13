import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import { Edit, Close } from '@material-ui/icons';

import { ProfileContext } from '../store/profileProvider'

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: 25,
    left: 25,
    background: '#ffffff',
    color: "#239f55",
    // border: "1px solid #fff",
  },
});

const EditBtn = () => {
  const { popup, state } = useContext(ProfileContext)


  const classes = useStyles();
  return (
    <IconButton className={ classes.root } onClick={ ()=> popup() }>
      {!state.popup ? <Edit /> : <Close /> }
    </IconButton>
  )
}

export default EditBtn
