import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Layout from "./Components/Layout/Layout";
import JobsApplicationPage from "./pages/JobsApplicationPage";
import JobDetailPage from "./pages/JobDetailPage";
import AuthForm from "./Components/Auth/AuthForm";
import HomePage from "./Components/Layout/StartingPageContent";

function App() {
  return (
    <Fragment>
      <Switch>
        <Layout>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/auth">
            <AuthForm />
          </Route>
          <Route path="/applications" exact>
            <section>
              <JobsApplicationPage />
            </section>
          </Route>
          <Route path="/applications/:applicationId">
            <section>
              <JobDetailPage />
            </section>
          </Route>
        </Layout>
      </Switch>
    </Fragment>
  );
}

export default App;
