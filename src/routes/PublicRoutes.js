import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../components/Login/Login";
import NotFound from "../components/NotFound";

const PublicRoutes = ({ handleSignIn }) => (
  <>
    <Switch>
      <Route exact path="/">
        <Login handleSignIn={handleSignIn} />
      </Route>
      <Route component={NotFound} />
    </Switch>
  </>
);

export default PublicRoutes;
