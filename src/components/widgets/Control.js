import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Link } from '@material-ui/core';

import { ControlForm, SocialLinks } from "./index";

const useStyles = makeStyles({
  root: {
    width: 850,
    // maxWidth: 850,
    height: 500,
    // minHeight: 500,
    background: '#fff',
    color: '#239f55',
    borderRadius: 10,
    padding: 15,
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  title: {
    marginBottom: 10,
    fontWeight: 600,
    display: 'flex',
    '& a': {
      color: '#ff671f',
      marginLeft: 5,
    }
  },

})

const Control = () => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      {/* <CloseBtn /> */}
      <Typography
        variant="h5"
        className={classes.title}>
        Live Screen Share Template by
        <Link href="https://fb.me/SChoolWab" target="_blank">
          Sofiqul Islam
        </Link>
        {/* <Time /> */}
      </Typography>

      <ControlForm />
      <SocialLinks />
    </Paper>
  );
}
export default Control;
