import React, { Fragment } from 'react';
import { ErrorMessage, Field } from 'formik';
import { TextField, FormControl } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    "& > *": {
      margin: "5px 0",
      display: "block",
      marginTop: 10,
    },
  },
});


const InputField = props => {
  const classes = useStyles();
  const { name, label, placeholder, required, type } = props;

  return (
    <Fragment>
      <FormControl className={classes.root} style={{ display: "block" }}>
        <Field
          as={TextField}
          varient="outline"
          type={type}
          name={name}
          label={label}
          placeholder={placeholder}
          fullWidth
          required={required}
          size="small"
        />
      </FormControl>
      <ErrorMessage name={name} />
    </Fragment>
  );
}
export default InputField;