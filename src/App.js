import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";

import AllJobsPage from "./pages/AllJobsPage";
import HomePage from "./pages/HomePage";
import JobDetailsPage from "./pages/JobDetailsPage";
import NewJobPage from "./pages/NewJobPage";
import ProfilePage from "./pages/ProfilePage";
import AuthPage from "./pages/AuthPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./Components/Layout/Layout";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/auth">
          <AuthPage />
        </Route>
        {authCtx.isLoggedIn && (
          <Route path="/profile">
            <ProfilePage />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/jobs" exact>
            <AllJobsPage />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/jobs/:jobId">
            <JobDetailsPage />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/new-job">
            <NewJobPage />
          </Route>
        )}
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
