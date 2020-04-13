import React, { useContext } from 'react'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
// import { Facebook } from '@material-ui/icons'
import { ProfileContext } from '../store/profileProvider'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    // minWidth: '767px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  paper: {
    width: '100%',
    maxWidth: '700px',
    marginLeft: 'auto',
    padding: 25,
    paddingLeft: 50,
    textAlign: 'left'
  },
  name: {
    fontWeight: 700
  },
  title: {
    margin: '10px 0'
  },
  fbUser: {

  }
}))


const Output = () => {
  const classes = useStyles()
  const {state} = useContext(ProfileContext)
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} >
        <Typography variant='h2'className={classes.name}>
          {state.name}
        </Typography>
        <Typography variant="h4" className={classes.title}>
          {state.title}
        </Typography>
        <Typography variant="h5" className={classes.fbUser}>
          {`fb/${state.fbUser}`}
        </Typography>
      </Paper>
    </div>
  )
}

export default Output
