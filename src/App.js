import React, { useState, useEffect } from "react";
import { UserSession, AppConfig } from "blockstack";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PrivateRoutes from "./routes/PrivateRoutes.js";
import PublicRoutes from './routes/PublicRoutes'

const appConfig = new AppConfig();
const userSession = new UserSession({ appConfig: appConfig });

const authentication = (data) =>
  userSession.isUserSignedIn() ? (
    <Redirect to="/app" />
  ) : (
    <PublicRoutes userSession={userSession} handleSignIn={data} />
  );

const App = () => {
  const [userData, setUserData] = useState(null);
  console.log(userData)
  useEffect(() => {
    if (userSession.isSignInPending()) {
     return  userSession.handlePendingSignIn().then(userData => {
        // window.history.replaceState({}, document.title, "/");
        return setUserData(userData);
      });
    }
  }, []);
  const handleSignIn = e => {
    e.preventDefault();
    userSession.redirectToSignIn();
  };

  const handleSignOut = e => {
    e.preventDefault();
    userSession.signUserOut(window.location.origin);
  };

  return (
    <div>
      <div>
        <Router>
          <Switch>
            <Route path="/app">
              <PrivateRoutes
                userSession={userSession}
                handleSignOut={handleSignOut}
              />
            </Route>
            <Route path="" render={()=>authentication(handleSignIn)} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
