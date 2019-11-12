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

class CheckboxTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      expanded: [1]
    };
  }
  
  render() {
    return (
      <ExtCheckboxTree
        nodes={this.props.nodes}
        checked={this.state.checked}
        expanded={this.state.expanded}
        onCheck={checked => this.setState({checked})}
        onExpand={expanded => this.setState({expanded})}
        showNodeIcon={false}
        icons={{
          check: <CheckBox />,
          uncheck: <CheckBoxOutlineBlank />,
          halfCheck: <IndeterminateCheckBox />,
          expandClose: <ChevronRight />,
          expandOpen: <ExpandMore />
        }}
      />
    );
  }
  
};

export default CheckboxTree;