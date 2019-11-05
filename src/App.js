import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { IconButton, Box, Tooltip } from '@material-ui/core';
import { Brightness7, Brightness4 } from '@material-ui/icons';

import ToolMenu from './tool/ToolMenu'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        palette: {
          type: 'dark'
        }
      }
    }
  }
  render() {
    return (
      <ThemeProvider theme={createMuiTheme(this.state.theme)}>
        <CssBaseline />
        <div className="app"></div>
        <ToolMenu className="tool-menu" />
        <Box className="dark-mode-toggle-container">
          <Tooltip title="Toggle dark mode on/off">
            <IconButton onClick={this.toggleDarkMode}>
              {this.state.theme.palette.type === 'dark' ? (
                <Brightness7 />
              ) : (
                <Brightness4 />
              )}
            </IconButton> 
          </Tooltip>
        </Box>
      </ThemeProvider>
    );
  }
  toggleDarkMode = () => {
    this.setState(state => ({
      theme: {
        palette: {
          type: state.theme.palette.type === 'dark' ? 'light' : 'dark'
        }
      }
    }))
  }
}

export default App;
