import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import LoginScreen from "../pages/LoginScreen";
import AppRouter from "./AppRouter";

function LoginRouter() {
  return (
    <Router>
      <AppRouter />
      <Switch>
        <Route exact path={"/"} component={LoginScreen} />
      </Switch>
    </Router>
  );
}

export default LoginRouter;
