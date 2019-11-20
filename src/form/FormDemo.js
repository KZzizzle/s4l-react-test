import React from 'react';
import DynamicForm from './DynamicForm';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: 'calc(100vh - 5em)',
    marginTop: '5em',
    display: 'flex',
    flexDirection: 'row'
  },
  childContainer: {
    flex: 1,
    padding: '1em'
  },
  textField: {
    height: '100%'
  }
})

const Workspace = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {
        React.Children.map(props.children, child => (
          <div className={classes.childContainer}>
            {child}
          </div>
        ))
      }
    </div>
  );
}

const CodeArea = props => {
  const classes = useStyles();
  return <TextField multiline={true} fullWidth={true} className={classes.textField} />
}

class FormDemo extends React.Component {
  render() {
    return (
      <Workspace>
        <CodeArea />
        <DynamicForm />
      </Workspace>
    );
  }
}

export default FormDemo;
