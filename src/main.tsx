import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { LoginPage } from './pages/login';
import { MainPage } from './pages/main';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { SessionProvider } from './common';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
  <SessionProvider>
    <HashRouter>
      <Switch>
        <Route exact={true} path="/" component={LoginPage} />
        <Route path="/main" component={MainPage} />
      </Switch>
    </HashRouter>
    </SessionProvider>
  </MuiThemeProvider>
  , document.getElementById('root')
);
