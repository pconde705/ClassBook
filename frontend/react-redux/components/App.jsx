import React from 'react';
import { Route } from 'react-router-dom'

import SessionContainer from './session/session_container';

const App = () => (
  <div>
    <Route exact path="/" component={SessionContainer} />
  </div>
)

export default App;
