import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, Typography, Grid } from "@material-ui/core";
// import { DropzoneArea } from 'material-ui-dropzone'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { ProfileContext } from '../store/profileProvider'
import { InputField } from './index';

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  thumb: {
    width: '100%',
    height: 'auto',
    paddingBottom: '56.25%',
    background: '#a4d7b9',
    border: '1px solid #239f55',
    borderRadius: 5,
    margin: '15px auto',
    cursor: 'pointer',
  },
  button: {
    width: "50%",
    background: "#239f55",
    color: "#fff;",
  },
  left: {
    width: "40%",
    margin: "25px auto",
    marginLeft: 15,
    padding: "10px 0",
  },
  right: {
    width: "60%",
    margin: "25px auto",
    marginLeft: 15,
    padding: "10px 15px",
    borderLeft: "3px solid #239f55",
  },
  headline: {
    color: "#239f55",
    marginBottom: 10,
  },
}));

const ControlForm = () => {
  const classes = useStyles()
  const { state, setBG, setInfo } = useContext(ProfileContext)

  const initialValues = {
    name: state.name,
    title: state.title,
    fbUser: state.fbUser,
    bgUrl: state.bg,
    files: null
  }

  const AddNewSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .required('Required'),
    title: Yup.string()
      .min(3, 'Too Short!')
      .required('Required'),
    fbUser: Yup.string()
      .min(6, 'Too Short!')
      .required('Required'),
  })

  const submitHandler = value => {
    setInfo(value)
    setBG(value.bgUrl)
    const data = {
      name: value.name,
      title: value.title,
      fbUser: value.fbUser,
      bg: value.bgUrl
    }
    localStorage.setItem('liveScreenData', JSON.stringify(data))
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddNewSchema}
      onSubmit={submitHandler}
    >
      {(isValid) => (
        <Form className={classes.root}>


          <Grid item className={classes.left}>
            <Typography variant="h5" className={classes.headline}>
              Set Background
            </Typography>

            <Paper
              className={classes.thumb}
              style={{
                backgroundImage: `url(${state.bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
              {/* <DropzoneArea /> */}
            </Paper>
            
            <InputField
              style={{ color: "red" }}
              name="bgUrl"
              type="url"
              label="Insert BG url"
            />
            <Button
              disabled={!isValid}
              className="mt-3"
              variant="contained"
              type="submit"
              fullWidth
              style={{
                background: "#239f55",
                color: "#fff",
                marginTop: 15,
              }}
            >
              Save Background
            </Button>
          </Grid>



          <Grid item className={classes.right}>
            <Typography variant="h5" className={classes.headline}>
              Your Information
            </Typography>

            <InputField
              style={{ color: "red" }}
              name="name"
              type="text"
              label="Full Name"
              required
            />
            <InputField
              style={{ color: "red" }}
              name="title"
              type="text"
              label="Your Title"
              required
            />
            <InputField
              style={{ color: "red" }}
              name="fbUser"
              type="text"
              label="Facebook Username"
              required
            />
            <Button
              // onClick={setInfoHandler}
              disabled={!isValid}
              className="mt-3"
              variant="contained"
              type="submit"
              fullWidth
              style={{
                background: "#239f55",
                color: "#fff",
                marginTop: 15,
              }}
            >
              Save
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default ControlForm



