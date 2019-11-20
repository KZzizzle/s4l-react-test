import React from 'react';
import { TextField } from '@material-ui/core';

class DynamicForm extends React.Component {
  render() {
    return (
      <form>
        <div>
          <TextField 
            id='firstInput'
            label='First field'
            variant='filled'
            margin='dense'
          />
        </div>
      </form>
    )
  }
}

export default DynamicForm;
