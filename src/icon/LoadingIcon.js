import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  '@keyframes lds-hourglass': {
    '0%': {
      transform: 'rotate(0)',
      animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'
    },
    '50%': {
      transform: 'rotate(360deg)',
      animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
    },
    '100%': {
      transform: 'rotate(720deg)'
    }
  },
  root: {
    animation: '$lds-hourglass 2s infinite'
  }
})

const LoadingIcon = props => {
  const classes = useStyles(props);
  const { icon, ...rest } = props;
  return React.createElement(
    icon,
    {
      classes: { root: classes.root },
      ...rest
    }
  );
};

export default LoadingIcon;
