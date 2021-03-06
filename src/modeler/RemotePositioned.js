import React from 'react';
import { TextField } from '@material-ui/core';
import FloatingInput from './form/FloatingInput';

class RemotePositioned extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      components: {
        component1: {
          position: {
            top: '800px',
            left: '800px'
          }
        },
        component2: {
          position: {
            top: '840px',
            left: '800px'
          }
        }
      }
    }
  }
  render() {
    return (
      <React.Fragment>
        {
          Object.keys(this.state.components).map(key => (
            <FloatingInput key={key} component={TextField} position={this.state.components[key].position} />
          ))
        }
      </React.Fragment>
    )
  }
}

export default RemotePositioned;
