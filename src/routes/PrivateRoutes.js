import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { rolesConfig } from "../config/roles";
import * as Routes from "./index";
import Navigation from "../components/header/Header";
import NotFound from "../components/NotFound";
import { useStyles } from "../components/Classes/classes";
import CssBaseline from "@material-ui/core/CssBaseline";

const PrivateRoutes = props => {
  const [allowedRoutes, setAllowed] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("blockstack-session"));
    const userName = user.userData;
    if (userName) {
      console.log(userName);
      let myAllowedRoutes = [...rolesConfig];
      setAllowed(myAllowedRoutes);
    } else {
      return window.location.assign("/");
    }
  }, [props.history]);

  console.log(allowedRoutes);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navigation />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Switch>
          {allowedRoutes.map(route => (
            <Route
              exact
              key={route.url}
              component={Routes[route.component]}
              path={`/app${route.url}`}
            />
          ))}
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
};

export default PrivateRoutes;
