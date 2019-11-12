import React from 'react';
import CheckboxTree from './CheckboxTree';

const nodes = [{
  label: 'NeuralNetwork',
  value: 1,
  children: [
    { label: 'Axon1', value: 2 },
    { label: 'Axon2', value: 3 },
    { label: 'Axon3', value: 4 }
  ]
}, {
  label: 'Electrode',
  value: 5,
  children: [{
    label: 'Cilinder',
    value: 6,
    children: [{
      label: 'Shape1',
      value: 7,
      children: [
        { label: 'Shape2', value: 8 },
        { label: 'Shape3', value: 9 }
      ]
    }]
  }, {
    label: 'Spline',
    value: 10
  }]
}];

class SampleTree extends React.Component {
  render() {
    return <CheckboxTree nodes={nodes} />;
  }
}

export default SampleTree;
