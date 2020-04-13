import React, {useContext} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Control, EditBtn, Output } from './widgets';

import {ProfileContext} from './store/profileProvider'
const useStyles = makeStyles((props) => ({
  root: {
    width: '100%',
    height: '100vh',
    background: '#a4d7b9',
    backgroundSize: 'cover',
    padding: 15,
    color: '#fff',
    overflowX: 'hidden',
  },
}));

const Home = () => {
  const classes = useStyles();
  const { state } = useContext(ProfileContext)
  return (
    <div className={classes.root} style={{backgroundImage: `url(${state.bg})`}} >
      { state.popup ? <Control /> : <Output /> }
      
      <EditBtn />
    </div>
  );
}

export default Home
