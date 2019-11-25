import React from 'react';
import {
  Container,
  FormGroup,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import useForm, { FormContext } from 'react-hook-form';
import { stringPath, isValueUnit } from '../utils';
import InputElement from './InputElement';
import ValueUnitField from './ValueUnitField';


const useStyles = makeStyles(theme => ({
  controlContainer: {
    marginBottom: theme.spacing(-1.5)
  }
}));

const GroupContainer = props => {
  const classes = useStyles();
  return <FormGroup className={classes.controlContainer} {...props} />
}

const Form = props => {
  const methods = useForm();
  const { onSubmit, ...propsRest } = props;
  return (
    <FormContext {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} autoComplete='off' {...propsRest} />
    </FormContext>
  )
}

class DynamicForm extends React.Component {
  constructor(props) {
    super(props);
    const { schema, data } = props;
    this.state = {
      schema,
      data
    }
  }
  render() {
    return (
      <Container>
        <Form onSubmit={this.submitHandler}>
          {this.expand(this.state.schema, this.state.data)}
          <button type='submit' hidden />
        </Form>
      </Container>
    )
  }
  expand(element, data, path=[]) {
    return Object.keys(element).map(key => {
      const current = element[key];
      const currentData = data[key];
      const newPath = [...path, key];
      if (current.type ==='object') {
        // If it is an object, expand unless it is the special value-unit case
        if (isValueUnit(current)) {
          return <ValueUnitField key={stringPath(newPath)} {...current} path={newPath} data={currentData} />
        }
        // Grouping
        return (
          <ExpansionPanel key={stringPath(newPath)} defaultExpanded>
            <ExpansionPanelSummary>
              <Typography>{current.title || key}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <GroupContainer>
                {this.expand(current.properties, currentData, newPath)}
              </GroupContainer>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      }
      // If not an object, it should be already an input
      return <InputElement key={stringPath(newPath)} {...current} path={newPath} data={currentData} />
    })
  }
  submitHandler = values => {
    console.log('Checking data:', values);
  }
}

export default DynamicForm;
