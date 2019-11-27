import React from 'react';
import {
  FormGroup,
  FormLabel,
  FormHelperText
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { stringPath } from '../utils';
import InputElement from './InputElement';


const useStyles = makeStyles(theme => ({
  control: {
    paddingBottom: theme.spacing(1.5)
  },
  label: {
    display: 'inline-block',
    marginBottom: theme.spacing(0.8)
  },
  value: {
    flex: 1
  },
  unit: {
    maxWidth: '3.5em'
  }
}));

const ValueUnitField = props => {
  const { path, properties: { value, unit }, title, data, description, required } = props;
  const valuePath = [...path, 'value'];
  const unitPath = [...path, 'unit'];
  const classes = useStyles();
  return (
    <div className={classes.control} >
      <FormLabel classes={{ root: classes.label }}>{title}</FormLabel>
      <FormGroup row>
        <InputElement
          key={stringPath(valuePath)}
          {...value}
          path={valuePath}
          givenTitle='Value'
          data={data.value}
          nomargin
          required={required.includes('value')}
          className={classes.value}
        />
        <InputElement
          key={stringPath(unitPath)}
          {...unit}
          path={unitPath}
          givenTitle='Unit'
          data={data.unit}
          nomargin
          required
          className={classes.unit}
        />
      </FormGroup>
      {
        description &&
        <FormHelperText>{description}</FormHelperText>
      }
    </div>
  )
}

export default ValueUnitField;
