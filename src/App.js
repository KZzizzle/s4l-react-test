import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Window from './window/Window';
import SampleTree from './tree/SampleTree';
import RemoteView from './modeler/RemoteView';
import Menu from './menu/Menu';
import FormDemo from './form/FormDemo'

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
        <Router>
          {/* Top right corner (menu) */}
          <Menu toggleDarkModeHandler={this.toggleDarkMode} />
          <Switch>
            <Route path='/form-demo'>
              <FormDemo />
            </Route>
            <Route path='/'>
              {/* Full screen modeler */}
              <RemoteView />
              {/* Top buttons (tools) */}
              <ToolMenu className="tool-menu" />
              {/* Tree */}
              <Window title="Tree" rndConfig={{ default: { width: 300, height: 400, x: 10, y: 10 } }}>
                <SampleTree />
              </Window>
            </Route>
          </Switch>
        </Router>
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
