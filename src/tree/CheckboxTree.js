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
import CircularProgress from '@material-ui/core/CircularProgress';

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
          display: 'flex',
          '& > :first-child': {
            // Loading spinner needs to be the first element inside a React.Fragment
            display: 'none'
          }
        }
      }
    },
    '& .rct-node.loading > .rct-text > label > .rct-checkbox': {
      '& > :first-child': {
        display: 'inline-block'
      },
      '& > :nth-child(2)': {
        // Checkbox needs to be the first element inside a React.Fragment
        display: 'none'
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

/**
 * Wrapper component for react-checkbox-tree.
 * It adds the posibility to mark a node as loading while fetching some data.
 * It adds some default configuration.
 * It uses Material icons to integrate it with the theming and Material look&feel.
 */
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
          check: <React.Fragment><CircularProgress size='inherit' color='inherit' /><CheckBox fontSize='inherit' /></React.Fragment>,
          uncheck: <React.Fragment><CircularProgress size='inherit' color='inherit' /><CheckBoxOutlineBlank fontSize='inherit' /></React.Fragment>,
          halfCheck: <React.Fragment><CircularProgress size='inherit' color='inherit' /><IndeterminateCheckBox fontSize='inherit' /></React.Fragment>,
          expandClose: <ChevronRight fontSize='inherit' />,
          expandOpen: <ExpandMore fontSize='inherit' />
        }}
      />
    );
  }
  
};

export default CheckboxTree;
