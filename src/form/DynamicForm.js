import React from 'react';
import { TextField, Container, FormControlLabel, Checkbox, FormGroup, FormLabel } from '@material-ui/core';


const InputElement = props => {
  const strPath = stringPath(props.path);
  switch (props.type) {
    case 'boolean':
      return (
        <FormControlLabel
          control={
            <Checkbox value={strPath} />
          }
          label={props.title}
        />
      )
    case 'array':
      return <ArrayField {...props} />;
    default:
      return (
        <TextField
          id={strPath}
          label={props.title || props.givenTitle}
          variant='filled'
          margin='dense'
        />
      );
  }
}

const ArrayField = props => {
  return (
    <div>
      { props.title && props.title.length &&
        <FormLabel>{props.title}</FormLabel>
      }
      <FormGroup row>
        is array
      </FormGroup>
    </div>
  )
}

const ValueUnitField = props => {
  const { path, properties: { value, unit }, title } = props;
  const valuePath = [...path, 'value'];
  const unitPath = [...path, 'unit'];
  return (
    <div>
      <FormLabel>{title}</FormLabel>
      <FormGroup row>
        <InputElement key={stringPath(valuePath)} {...value} path={valuePath} givenTitle='Value' />
        <InputElement key={stringPath(unitPath)} {...unit} path={unitPath} givenTitle='Unit' />
      </FormGroup>
    </div>
  )
}

class DynamicForm extends React.Component {
  render() {
    return (
      <Container>
        <form autoComplete='off'>
          <FormGroup>
            {this.expand(this.props.schema)}
          </FormGroup>
        </form>
      </Container>
    )
  }
  expand(element, path=[]) {
    return Object.keys(element).map(key => {
      const current = element[key];
      const newPath = [...path, key];
      if (current.type ==='object') {
        if (isValueUnit(current)) {
          return <ValueUnitField key={stringPath(newPath)} {...current} path={newPath} />
        }
        return this.expand(current.properties, newPath)
      }
      return <InputElement key={stringPath(newPath)} {...current} path={newPath} />
    })
  }
}

// Util functions
const stringPath = arrayPath => arrayPath.join('.')
const isValueUnit = object => {
  const keys = Object.keys(object.properties);
  return keys.length === 2 && keys.includes('value') && keys.includes('unit');
}

export default DynamicForm;
