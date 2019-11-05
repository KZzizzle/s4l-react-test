import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TreeItem, TreeView } from '@material-ui/lab';
import { ExpandMore, ChevronRight } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
});

function Tree(props) {
  const classes = useStyles();
  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMore />}
      defaultExpandIcon={<ChevronRight />}
    >
      <TreeItem nodeId="1" label="Applications">
        <TreeItem nodeId="2" label="Calendar" />
        <TreeItem nodeId="3" label="Chrome" />
        <TreeItem nodeId="4" label="Webstorm" />
      </TreeItem>
      <TreeItem nodeId="5" label="Documents">
        <TreeItem nodeId="6" label="Material-UI">
          <TreeItem nodeId="7" label="src">
            <TreeItem nodeId="8" label="index.js" />
            <TreeItem nodeId="9" label="tree-view.js" />
          </TreeItem>
        </TreeItem>
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
