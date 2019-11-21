import React from 'react';
import { TextField, Container, FormControlLabel, Checkbox, FormGroup, FormLabel } from '@material-ui/core';


const InputElement = props => {
  const { path, data, givenTitle, title } = props;
  const strPath = stringPath(path);
  switch (props.type) {
    case 'boolean':
      return (
        <FormControlLabel
          control={
            <Checkbox value={strPath} checked={data} />
          }
          label={title}
        />
      )
    case 'array':
      return <ArrayField {...props} />;
    default:
      return (
        <TextField
          id={strPath}
          label={title || givenTitle}
          variant='filled'
          margin='dense'
          value={data}
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
  const { path, properties: { value, unit }, title, data } = props;
  const valuePath = [...path, 'value'];
  const unitPath = [...path, 'unit'];
  return (
    <div>
      <FormLabel>{title}</FormLabel>
      <FormGroup row>
        <InputElement key={stringPath(valuePath)} {...value} path={valuePath} givenTitle='Value' data={data.value} />
        <InputElement key={stringPath(unitPath)} {...unit} path={unitPath} givenTitle='Unit' data={data.unit} />
      </FormGroup>
    </div>
  )
}

class DynamicForm extends React.Component {
  render() {
    const { schema, data } = this.props;
    return (
      <Container>
        <form autoomplete='off'>
          <FormGroup>
            {this.expand(schema, data)}
          </FormGroup>
        </form>
      </Container>
    )
  }
  expand(element, data, path=[]) {
    return Object.keys(element).map(key => {
      const current = element[key];
      const currentData = data[key];
      const newPath = [...path, key];
      if (current.type ==='object') {
        if (isValueUnit(current)) {
          return <ValueUnitField key={stringPath(newPath)} {...current} path={newPath} data={currentData} />
        }
        return this.expand(current.properties, currentData, newPath)
      }
      return <InputElement key={stringPath(newPath)} {...current} path={newPath} data={currentData} />
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
