import React from "react";
import {
  Switch,
  Route,
  // Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import ManScreen from "../pages/ManScreen";
import WomanScreen from "../pages/WomanScreen";
import SearchScreen from "../pages/SearchScreen";
import Navbar from "../components/Navbar";

function AppRouter() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/mans" component={ManScreen} />
        <Route exact path="/womans" component={WomanScreen} />
        <Route exact path="/search" component={SearchScreen} />
        {/* <Redirect to="/mans" /> */}
      </Switch>
    </>
  );
}

export default AppRouter;
