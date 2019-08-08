import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './Home';
import SingleMovie from './SingleMovie/SingleMovie';

const RouterComponent = () => {
  return(
      <Router>
            <Scene key="root">
              <Scene key="HomeComponent" component={Home} title="UDH Movies" initial/>
              <Scene key="SingleMovie" component={SingleMovie} title="Movies"/>
            </Scene>
      </Router>
  )
}

export default RouterComponent;