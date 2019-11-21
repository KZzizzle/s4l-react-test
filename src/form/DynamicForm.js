import React from 'react';
import { TextField, Container } from '@material-ui/core';


const InputElement = props => {
  switch (props.type) {
    default:
      return (
        <TextField 
          id={props.title}
          label={props.title}
          variant='filled'
          margin='dense'
          autoComplete='off'
        />
      );
  }
}

class DynamicForm extends React.Component {
  render() {
    return (
      <Container>
        <form>
          {this.expand(this.props.schema)}
        </form>
      </Container>
    )
  }
  expand(element, path=[]) {
    return Object.keys(element).map(key => {
      const current = element[key];
      if (current.type ==='object') {
        return this.expand(current.properties, [...path, key])
      }
      console.log(`${path.join('.')}.${key}`);
      return <InputElement key={`${path.join('.')}.${key}`} {...current} />
    })
  }
}

export default DynamicForm;
