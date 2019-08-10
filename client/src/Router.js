import React from "react";
import { Router, Scene } from "react-native-router-flux";
import { Icon } from "native-base";

import Home from "./Home";
import SingleMovie from "./SingleMovie/SingleMovie";
import AllMovies from "./AllMovies/AllMovies";

// Drawer
import Menu from "./Menu/Menu";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="DrawerComponent"
          drawer
          contentComponent={Menu}
          drawerIcon={<Icon name="menu" />}
          drawerWidth={300}
          hideNavBar
        >
          <Scene key="HomeComponent" component={Home} title="UDH Movies" />
          <Scene
            key="AllMovies"
            component={AllMovies}
            title="A-Z List"
            initial
          />
        </Scene>
        <Scene key="SingleMovie" component={SingleMovie} title="Movies" />
      </Scene>
    </Router>
  );
};
export default RouterComponent;
