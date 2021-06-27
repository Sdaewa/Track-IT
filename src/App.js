import React from "react";

import { Route, Switch } from 'react-router-dom';

import AllJobsPage from './pages/AllJobsPage';
import HomePage from './pages/HomePage'
import JobDetailsPage from './pages/JobDetailsPage';
import NewJobPage from './pages/NewJobPage';
import ProfilePage from './pages/ProfilePage'
import AuthPage from './pages/AuthPage'
import NotFoundPage from './pages/NotFoundPage';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/auth">
        <AuthPage />
      </Route>
         <Route path="/profile">
            <ProfilePage />
          </Route>
        <Route path='/jobs' exact>
          <AllJobsPage />
        </Route>
        <Route path='/jobs/:jobId'>
          <JobDetailsPage />
        </Route>
        <Route path='/new-job'>
          <NewJobPage />
        </Route>
        <Route path='*'>
          <NotFoundPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
