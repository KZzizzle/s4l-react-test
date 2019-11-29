import React from 'react';
import {
  FormGroup,
  FormLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import InputElement from './InputElement';


const useStyles = makeStyles(theme => ({
  control: {
    paddingBottom: theme.spacing(1.5)
  },
  label: {
    display: 'inline-block',
    marginBottom: theme.spacing(0.8)
  },
  input: {
    flex: 1
  }
}));

const ArrayField = props => {
  const { title, items, ...propsRest } = props;
  const classes = useStyles();
  const inputs = props.data.map((value, index) =>
  (
    <InputElement
      key={index}
      {...propsRest}
      {...items}
      data={value}
      nomargin
      arrayIndex={index}
      className={classes.input}
    />
  ));
  return title && title.length ? (
    <div className={props.nomargin ? '' : classes.control}>
      <FormLabel classes={{ root: classes.label }}>{title}</FormLabel>
      <FormGroup row children={inputs} />
    </div>
  ) : inputs;
}

export default ArrayField;
