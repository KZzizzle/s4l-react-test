import React from 'react';
import { TreeItem, TreeView } from '@material-ui/lab';
import { ExpandMore, ChevronRight } from '@material-ui/icons';

function Tree(props) {
  return (
    <TreeView
      defaultCollapseIcon={<ExpandMore />}
      defaultExpandIcon={<ChevronRight />}
    >
      <TreeItem nodeId="1" label="NeuralNetwork">
        <TreeItem nodeId="2" label="Axon1" />
        <TreeItem nodeId="3" label="Axon2" />
        <TreeItem nodeId="4" label="Axon3" />
      </TreeItem>
      <TreeItem nodeId="5" label="Electrode">
        <TreeItem nodeId="6" label="Cilinder">
          <TreeItem nodeId="7" label="Shape1">
            <TreeItem nodeId="8" label="Shape2" />
            <TreeItem nodeId="9" label="Shape3" />
          </TreeItem>
        </TreeItem>
        <TreeItem nodeId="10" label="Spline" />
      </TreeItem>
    </TreeView>
  );
}

class SampleTree extends React.Component {
  render() {
    return <Tree />;
  }
}

export default SampleTree;
