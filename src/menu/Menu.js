import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { IconButton, Box, Tooltip } from '@material-ui/core';
import { Brightness7, Brightness4, Code, Home } from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';

const NavigationButton = props => {
  const location = useLocation();
  const history = useHistory();
  if (location.pathname === '/') {
    return (
      <Tooltip title='Form demo'>
        <IconButton onClick={() => history.push('/form-demo')}>
          <Code />
        </IconButton> 
      </Tooltip>
    );
  } else {
    return (
      <Tooltip title='Home'>
        <IconButton onClick={() => history.push('/')}>
          <Home />
        </IconButton> 
      </Tooltip>
    )
  }
}

const ToggleModeButton = props => {
  const theme = useTheme();
  return (
    <Tooltip title="Toggle dark mode on/off">
      <IconButton onClick={props.toggleDarkModeHandler}>
        { theme.palette.type === 'dark' ? (
          <Brightness7 />
        ) : (
          <Brightness4 />
        )}
      </IconButton> 
    </Tooltip>
  );
}

class Menu extends React.Component {
  render() {
    return (
      <Box className="menu-container">
        <NavigationButton />
        <ToggleModeButton toggleDarkModeHandler={this.props.toggleDarkModeHandler} />
      </Box>
    )
  }
}

export default Menu;
