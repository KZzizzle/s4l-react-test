import React from "react";
import DynamicForm from "./DynamicForm";
import { makeStyles } from "@material-ui/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: "calc(100vh - 5em)",
    marginTop: "5em",
    display: "flex",
    flexDirection: "row"
  },
  childContainer: {
    flex: 1,
    padding: "1em"
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

const CodeArea = props => {
  return (
    <TextField
      multiline={true}
      fullWidth={true}
      label="JSONSchema"
      value={props.schema}
      onChange={props.onChange}
    />
  );
};

class FormDemo extends React.Component {
  constructor(props) {
    super(props);
    const schema = {
      object1: null,
      object2: [1, 2, 3]
    };
    const schemaPretty = JSON.stringify(schema, null, '\t');
    this.state = {
      schema,
      schemaPretty
    };
  }
  render() {
    return (
      <Workspace>
        <CodeArea schema={this.state.schemaPretty} onChange={evt => this.onSchemaChange(evt.target.value)} />
        <DynamicForm schema={this.state.schema} />
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
