import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: position => {
    const { top, left } = position;
    return {
      position: 'absolute',
      top,
      left
    }
  }
})

const FloatingInput = props => {
  const { component: Component, position, ...rest } = props;
  const classes = useStyles(position);
  return <div className={classes.root}><Component {...rest} /></div>
}

export default FloatingInput;
