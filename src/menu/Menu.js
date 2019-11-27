import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { IconButton, Box, Tooltip } from '@material-ui/core';
import { Brightness7, Brightness4, Code, Home } from '@material-ui/icons';
import { toggleDarkModeHandler } from '../redux/actions';

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

class Menu extends React.Component {
  render() {
    const { toggleDarkModeHandler, themeType } = this.props;
    return (
      <Box className='menu-container'>
        <NavigationButton />
        <Tooltip title='Toggle dark mode on/off'>
          <IconButton onClick={toggleDarkModeHandler}>
            {themeType === 'dark' ? (
              <Brightness7 />
            ) : (
              <Brightness4 />
            )}
          </IconButton> 
        </Tooltip>
      </Box>
    );
  }
}

const mapStateToProps = state => {
  return {
    themeType: state.app.theme.palette.type
  };
}

// toggle logic in themeReducer
const mapDispatchToProps = dispatch => ({
  toggleDarkModeHandler: () => dispatch(toggleDarkModeHandler())
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
