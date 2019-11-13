import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { IconButton, Box, Tooltip } from '@material-ui/core';
import { Brightness7, Brightness4 } from '@material-ui/icons';
import Window from './window/Window';
import SampleTree from './tree/SampleTree';
import RemoteView from './modeler/RemoteView';

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
        {/* Full screen modeler */}
        <RemoteView />
        {/* Top buttons (tools) */}
        <ToolMenu className="tool-menu" />
        {/* Top right corner (dark theme) */}
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
        {/* Tree */}
        <Window title="Tree" rndConfig={{ default: { width: 300, height: 400, x: 10, y: 10 } }}>
          <SampleTree />
        </Window>
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
