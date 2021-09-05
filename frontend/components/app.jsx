
import React from 'react';
import { AuthRoute } from '../util/route_util';
import HeaderContainer from './header/header_container';
import LogInModalContainer from './session_form/login_modal_container';
import SignUpModalContainer from './session_form/signup_modal_container';


const App = () => (
  <div>
        <HeaderContainer />
        <AuthRoute exact path="/login" component={LogInModalContainer} />
        <AuthRoute exact path="/signup" component={SignUpModalContainer} />
  </div>
);

export default App;