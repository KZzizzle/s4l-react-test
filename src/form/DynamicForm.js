import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  Container,
  FormControlLabel,
  Checkbox,
  FormGroup,
  FormLabel,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  FormHelperText
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import useForm, { FormContext, useFormContext } from 'react-hook-form';
// import { RHFInput } from 'react-hook-form-input';


const useStyles = makeStyles(theme => ({
  control: {
    paddingBottom: theme.spacing(1.5)
  },
  controlContainer: {
    marginBottom: theme.spacing(-1.5)
  }
}));

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

const ValueUnitField = props => {
  const { path, properties: { value, unit }, title, data, description, required } = props;
  const valuePath = [...path, 'value'];
  const unitPath = [...path, 'unit'];
  const classes = useStyles();
  return (
    <div className={classes.control} >
      <FormLabel>{title}</FormLabel>
      <FormGroup row>
        <InputElement
          key={stringPath(valuePath)}
          {...value}
          path={valuePath}
          givenTitle='Value'
          data={data.value}
          nomargin
          required={required.includes('value')}
        />
        <InputElement
          key={stringPath(unitPath)}
          {...unit}
          path={unitPath}
          givenTitle='Unit'
          data={data.unit}
          nomargin
          required
        />
      </FormGroup>
      {
        description &&
        <FormHelperText>{description}</FormHelperText>
      }
    </div>
  )
}

const GroupContainer = props => {
  const classes = useStyles();
  return <FormGroup className={classes.controlContainer} {...props} />
}

const Form = props => {
  const methods = useForm();
  const { onSubmit, ...propsRest } = props;
  return (
    <FormContext {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} autoComplete='off' {...propsRest} />
    </FormContext>
  )
}

class DynamicForm extends React.Component {
  constructor(props) {
    super(props);
    const { schema, data } = props;
    this.state = {
      schema,
      data
    }
  }
  render() {
    return (
      <Container>
        <Form onSubmit={this.submitHandler}>
          {this.expand(this.state.schema, this.state.data)}
          <button type='submit' hidden />
        </Form>
      </Container>
    )
  }
  expand(element, data, path=[]) {
    return Object.keys(element).map(key => {
      const current = element[key];
      const currentData = data[key];
      const newPath = [...path, key];
      if (current.type ==='object') {
        // If it is an object, expand unless it is the special value-unit case
        if (isValueUnit(current)) {
          return <ValueUnitField key={stringPath(newPath)} {...current} path={newPath} data={currentData} />
        }
        // Grouping
        return (
          <ExpansionPanel key={stringPath(newPath)} defaultExpanded>
            <ExpansionPanelSummary>
              <Typography>{current.title || key}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <GroupContainer>
                {this.expand(current.properties, currentData, newPath)}
              </GroupContainer>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      }
      // If not an object, it should be already an input
      return <InputElement key={stringPath(newPath)} {...current} path={newPath} data={currentData} />
    })
  }
  submitHandler = values => {
    console.log(values);
  }
}

// Util functions
const stringPath = arrayPath => arrayPath.join('.')

const isValueUnit = object => {
  const keys = Object.keys(object.properties);
  return keys.length === 2 && keys.includes('value') && keys.includes('unit');
}

export default DynamicForm;
