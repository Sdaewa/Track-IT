import React, { Fragment, useCallback, useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Layout from "./Components/Layout/Layout";
import JobsApplicationPage from "./pages/JobsApplicationPage";
import JobDetailPage from "./pages/JobDetailsPage";
import AuthForm from "./Components/Auth/AuthForm";
import HomePage from "./Components/Layout/StartingPageContent";
import ProfilePage from "./pages/ProfilePage";

const URL =
  "https://track-it-temp-759d7-default-rtdb.europe-west1.firebasedatabase.app/jobs.json";

function App() {
  const [jobsData, setJobsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchJobsHandler = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error("Could not fetch data");
      }

      const data = await response.json();

      const jobs = [];

      for (const key in data) {
        jobs.push({
          id: key,
          company: data[key].company,
          role: data[key].role,
          techStack: data[key].techStack,
          appliedDate: data[key].appliedDate,
        });
      }

      setJobsData(jobs);
      setIsLoading(false);
    } catch (error) {
      alert(error.message);
    }
  }, []);

  useEffect(() => {
    fetchJobsHandler();
  }, []);

  if (isLoading) {
    return <p>Loading... Please wait</p>;
  }

  if (!jobsData) {
    return <p>Add a job application</p>;
  }

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
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/applications" exact>
            <section>
              <JobsApplicationPage
                onAddJob={addJobHandler}
                onFetch={jobsData}
              />
            </section>
          </Route>
          <Route path="/applications/:applicationId">
            <section>
              <JobDetailPage jobs={jobsData} />
            </section>
          </Route>
        </Layout>
      </Switch>
    </Fragment>
  );
}

export default App;
