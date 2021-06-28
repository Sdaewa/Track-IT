import React, { useContext, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Layout from "./Components/Layout/Layout";
import LoadingSpinner from "./Components/UI/LoadingSpinner";
import AuthContext from "./store/auth-context";

const AllJobsPage = React.lazy(() => import("./pages/AllJobsPage"));
const JobDetailsPage = React.lazy(() => import("./pages/JobDetailsPage"));
const NewJobPage = React.lazy(() => import("./pages/NewJobPage"));
const ProfilePage = React.lazy(() => import("./pages/ProfilePage"));
const AuthPage = React.lazy(() => import("./pages/AuthPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }>
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
      </Suspense>
    </Layout>
  );
}

export default App;
