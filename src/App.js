import React, { Fragment, useEffect, useState, useCallback } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import JobsList from "./Components/Jobs/JobsList";
import JobForm from "./Components/Jobs/JobForm";
import Layout from "./Components/Layout/Layout";
import StartingPage from "./Components/StartingPage/StartingPageContent";
import "./App.css";
import JobsApplicationPage from "./pages/JobsApplicationPage";

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

      setJobsData(data);
      setIsLoading(false);
    } catch (error) {
      alert(error.message);
    }
  }, []);

  useEffect(() => {
    fetchJobsHandler();
  }, [fetchJobsHandler]);

  const addJobHandler = async (job) => {
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(job),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
  };

  if (isLoading) {
    return <p>Loading... Please wait</p>;
  }

  return (
    <Fragment>
      <Switch>
        <Layout>
          <Route path="/" exact>
            <StartingPage />
          </Route>
          <Route path="/applications">
            <section>
              <JobsApplicationPage jobs={jobsData} />
            </section>
          </Route>
        </Layout>
      </Switch>
    </Fragment>
  );
}

export default App;
