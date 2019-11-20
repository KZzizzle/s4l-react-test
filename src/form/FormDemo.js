import React from "react";
import DynamicForm from "./DynamicForm";
import { makeStyles } from "@material-ui/styles";
import { TextField } from "@material-ui/core";
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
  },
  textField: {
    fontFamily: 'monospace',
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
  const classes = useStyles();
  return (
    <TextField
      multiline={true}
      fullWidth={true}
      label="JSONSchema"
      value={props.schema}
      onChange={props.onChange}
      InputProps={{ className: classes.textField }}
    />
  );
};

class FormDemo extends React.Component {
  constructor(props) {
    super(props);
    const schema = data;
    const schemaPretty = JSON.stringify(schema, null, '   ');
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
