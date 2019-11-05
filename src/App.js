import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import ToolMenu from './tool/ToolMenu'

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}/>
        <Container className="App">
          <ToolMenu />
        </Container>
      <ThemeProvider />
    </React.Fragment>
  );
}

export default App;
