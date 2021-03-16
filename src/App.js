import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './containers/RouteManage/Routes';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
