import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TreeItem } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row'
  }
}));

const TreeLabel = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    
    </div>
  )
};

class CheckboxTreeItem extends React.Component {
  render() {
    return (
      <TreeItem label={TreeLabel} />
    )
  }
}

export default CheckboxTreeItem;