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
  }
}));

const ArrayField = props => {
  const { title, ...propsRest } = props;
  const classes = useStyles();
  return (
    <div className={props.nomargin ? '' : classes.control} >
      { title && title.length &&
        <FormLabel>{title}</FormLabel>
      }
      <FormGroup row>
        {
          props.data.map((value, index) => (
            <InputElement
              key={index}
              {...propsRest}
              type='string'
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
