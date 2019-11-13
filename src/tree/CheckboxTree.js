import React from 'react';
import ExtCheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import {
  CheckBox,
  CheckBoxOutlineBlank,
  IndeterminateCheckBox,
  ExpandMore,
  ChevronRight
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& label:hover': {
      background: theme.palette.action.hover
    },
    '& .rct-text': {
      '& > label': {
        display: 'flex',
        alignItems: 'center',
        '& > .rct-checkbox': {
          display: 'flex'
        }
      }
    }
  }
}));

const Tree = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ExtCheckboxTree {...props} />
    </div>
  );
};

class CheckboxTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      expanded: []
    };
  }
  
  render() {
    return (
      <Tree 
        nodes={this.props.nodes}
        checked={this.state.checked}
        expanded={this.state.expanded}
        onCheck={checked => this.setState({checked})}
        onExpand={expanded => this.setState({expanded})}
        showNodeIcon={false}
        icons={{
          check: <CheckBox fontSize='inherit' />,
          uncheck: <CheckBoxOutlineBlank fontSize='inherit' />,
          halfCheck: <IndeterminateCheckBox fontSize='inherit' />,
          expandClose: <ChevronRight fontSize='inherit' />,
          expandOpen: <ExpandMore fontSize='inherit' />
        }}
      />
    );
  }
  
};

export default CheckboxTree;