import React from "react";
import DynamicForm from "./DynamicForm";
import { makeStyles } from "@material-ui/styles";
import schema from './schema';
import data from './data';

const useStyles = makeStyles({
  root: {
    height: 'calc(100vh - 5em)',
    marginTop: '5em',
    display: 'flex',
    flexDirection: "row"
  },
  childContainer: {
    flex: 1,
    padding: '1em',
    overflow: 'auto'
  }
});

const Workspace = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {React.Children.map(props.children, child => (
        <div className={classes.childContainer}>{child}</div>
      ))}
    </div>
  );
};

class FormDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schema,
      data
    };
  }
  render() {
    return (
      <Workspace>
        <DynamicForm schema={this.state.schema} data={this.state.data} />
      </Workspace>
    );
  }
  onSchemaChange(value) {
    this.setState({
      schemaPretty: value
    });
    try {
      const schema = JSON.parse(value)
      this.setState({
        schema
      });
    }
    catch (err) {
      console.error('JSONSchema JSON is not valid:', err.message);
    }
  }
}

export default FormDemo;
