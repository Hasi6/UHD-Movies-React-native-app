import React from 'react';
import {View} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Home from './Home';
import SingleMovie from './SingleMovie/SingleMovie';
import AllMovies from './AllMovies/AllMovies';

const RouterComponent = () => {
  return(
      <Router>
            <Scene key="root">
              <Scene key="HomeComponent" component={Home} title="UDH Movies" />
              <Scene key="SingleMovie" component={SingleMovie} title="Movies"/>
              <Scene key="AllMovies" component={AllMovies} title="A-Z List" initial/>
            </Scene>
      </Router>
  )
}
export default RouterComponent;