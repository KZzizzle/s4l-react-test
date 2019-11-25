import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  FormControlLabel,
  Checkbox,
  FormHelperText
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useFormContext } from 'react-hook-form';
import ArrayField from './ArrayField';
import { stringPath } from '../utils';

const useStyles = makeStyles(theme => ({
  control: {
    paddingBottom: theme.spacing(1.5)
  }
}));

/**
 * Component rendering the correct input field depending on the type
 * TODO: Use UISchema to influence in the rendering of the field
 * @param {Object} props 
 */
const InputElement = props => {
  const {
    path,
    data,
    givenTitle,
    title,
    readOnly,
    description,
    nomargin,
    required = false,
    arrayIndex = -1
  } = props;
  const strPath = stringPath(path);
  const classes = useStyles();
  const { register, errors } = useFormContext();
  const [value, setValue] = useState(data);
  switch (props.type) {
    case 'boolean':
      return (
        <FormControlLabel
          control={
            <Checkbox
              checked={value}
              disabled={readOnly || false}
              inputProps={{
                ref: register,
                name: strPath
              }}
              onChange={evt => setValue(evt.target.checked)}
            />
          }
          className={nomargin ? '' : classes.control}
          label={title}
        />
      )
    case 'array':
      return <ArrayField {...props} />;
    default:
      const withArrayStringPath = strPath + (arrayIndex > -1 ? `[${arrayIndex}]` : '');
      return (
        <FormControl
          className={nomargin ? '' : classes.control}
          disabled={readOnly || false}
          error={(errors && errors[withArrayStringPath] && true) || false}
        >
          {
            (title || givenTitle) &&
            <InputLabel htmlFor={strPath}>{title || givenTitle}</InputLabel>
          }
          <Input
            id={strPath}
            defaultValue={data}
            inputProps={{
              ref: register({
                required: required && 'Required'
              }),
              name: withArrayStringPath
            }}
          />
          {
            errors && errors[withArrayStringPath] &&
            <FormHelperText>{errors[withArrayStringPath].message}</FormHelperText>
          }
          {
            description &&
            <FormHelperText>{description}</FormHelperText>
          }
        </FormControl>
      );
  }
}

export default InputElement;
