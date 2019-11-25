import React from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  Container,
  FormControlLabel,
  Checkbox,
  FormGroup,
  FormLabel,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  FormHelperText
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
  control: {
    paddingBottom: theme.spacing(1.5)
  },
  controlContainer: {
    marginBottom: theme.spacing(-1.5)
  }
}));

const InputElement = props => {
  const { path, data, givenTitle, title, readOnly, description } = props;
  const strPath = stringPath(path);
  switch (props.type) {
    case 'boolean':
      return (
        <FormControlLabel
          control={
            <Checkbox
              value={strPath}
              checked={data}
              disabled={readOnly || false}
            />
          }
          label={title}
        />
      )
    case 'array':
      return <ArrayField {...props} />;
    default:
      return (
        <FormControl disabled={readOnly || false}>
          {
            (title || givenTitle) &&
            <InputLabel htmlFor={strPath}>{title || givenTitle}</InputLabel>
          }
          <Input
            id={strPath}
            value={data}
          />
          {
            description &&
            <FormHelperText>{description}</FormHelperText>
          }
        </FormControl>
      );
  }
}

const ArrayField = props => {
  const { title, ...propsRest } = props;
  const classes = useStyles();
  return (
    <div className={propsRest.nomargin ? '' : classes.control} >
      { title && title.length &&
        <FormLabel>{title}</FormLabel>
      }
      <FormGroup row>
        {
          props.data.map((value, index) => (
            <InputElement key={index} {...propsRest} type='string' data={value} />
          ))
        }
      </FormGroup>
    </div>
  )
}

const ValueUnitField = props => {
  const { path, properties: { value, unit }, title, data, description } = props;
  const valuePath = [...path, 'value'];
  const unitPath = [...path, 'unit'];
  const classes = useStyles();
  return (
    <div className={classes.control} >
      <FormLabel>{title}</FormLabel>
      <FormGroup row>
        <InputElement key={stringPath(valuePath)} {...value} path={valuePath} givenTitle='Value' data={data.value} nomargin />
        <InputElement key={stringPath(unitPath)} {...unit} path={unitPath} givenTitle='Unit' data={data.unit} />
      </FormGroup>
      {
        description &&
        <FormHelperText>{description}</FormHelperText>
      }
    </div>
  )
}

const GroupContainer = props => {
  const classes = useStyles();
  return <FormGroup className={classes.controlContainer} {...props} />
}

class DynamicForm extends React.Component {
  render() {
    const { schema, data } = this.props;
    return (
      <Container>
        <form autoomplete='off'>
          {this.expand(schema, data)}
        </form>
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
}

// Util functions
const stringPath = arrayPath => arrayPath.join('.')

const isValueUnit = object => {
  const keys = Object.keys(object.properties);
  return keys.length === 2 && keys.includes('value') && keys.includes('unit');
}

export default DynamicForm;
