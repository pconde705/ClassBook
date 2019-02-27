import React from 'react';
import { Route } from 'react-router-dom'
import './rootStyle.css'
import {ProtectedRoute, AuthRoute} from './auth_routes/auth_routes';

import SessionContainer from './session/session_container';
import WallContainer from './wall/wall_container';

const App = () => (
  <div>
    <AuthRoute exact path="/login" component={SessionContainer} />
    <ProtectedRoute exact path="/" component={WallContainer} />
  </div>
)

export default App;
