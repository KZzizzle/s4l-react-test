import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { IconButton, Box, Tooltip } from '@material-ui/core';
import { Brightness7, Brightness4, Code, Home } from '@material-ui/icons';
import { toggleDarkModeHandler } from '../redux/actions';

// toggle logic in themeReducer
const mapDispatchToProps = dispatch => ({
  toggleDarkModeHandler: () => dispatch(toggleDarkModeHandler())
});

const mapStateToProps = state => {
  return {themetype: state.themeR.theme.palette.type };
}

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
  return (
      <Tooltip title='Toggle dark mode on/off'>
        <IconButton onClick={props.toggleDarkModeHandler}>
          {props.themetype === 'dark' ? (
            <Brightness7 />
          ) : (
            <Brightness4 />
          )}
        </IconButton> 
      </Tooltip>
  )
}

class Menu extends React.Component {
  render() {
    return (
      <Box className='menu-container'>
        <NavigationButton />
        <ToggleModeButton toggleDarkModeHandler={this.props.toggleDarkModeHandler} themetype = {this.props.themetype}/>
      </Box>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu);
