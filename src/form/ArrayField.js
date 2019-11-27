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
  }
}));

const ArrayField = props => {
  const { title, items, ...propsRest } = props;
  const classes = useStyles();
  return (
    <div className={props.nomargin ? '' : classes.control} >
      { title && title.length &&
        <FormLabel classes={{ root: classes.label }}>{title}</FormLabel>
      }
      <FormGroup row>
        {
          props.data.map((value, index) => (
            <InputElement
              key={index}
              {...propsRest}
              {...items}
              data={value}
              nomargin
              arrayIndex={index}
            />
          ))
        }
      </FormGroup>
    </div>
  )
}

export default ArrayField;
