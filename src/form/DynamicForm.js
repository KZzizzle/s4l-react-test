import React from 'react';
import {
  TextField,
  Container,
  FormControlLabel,
  Checkbox,
  FormGroup,
  FormLabel,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography
} from '@material-ui/core';


const InputElement = props => {
  const { path, data, givenTitle, title, readOnly } = props;
  const strPath = stringPath(path);
  switch (props.type) {
    case 'boolean':
      return (
        <FormControlLabel
          control={
            <Checkbox
              value={strPath}
              checked={data}
              disabled={readOnly || false}
            />
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
          value={data}
          margin='dense'
          disabled={readOnly}
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
        {
          props.data.map((value, index) => (
            <InputElement key={index} {...props} type='string' data={value} />
          ))
        }
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
          {/* <FormGroup> */}
            {this.expand(schema, data)}
          {/* </FormGroup> */}
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
              <FormGroup>
                {this.expand(current.properties, currentData, newPath)}
              </FormGroup>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      }
      // If not an object, it should be already an input
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
