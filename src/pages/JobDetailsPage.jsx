import React, { Fragment, useEffect } from "react";
import { useParams, Route, useRouteMatch } from "react-router-dom";

import FullJobDetails from "../Components/Jobs/FullJobDetails";
import Comments from "../Components/comments/Comments";
import useHttp from "../hooks/use-http";
import { getSingleJob } from "../lib/api";
import LoadingSpinner from "../Components/UI/LoadingSpinner";

const JobDetailsPage = () => {
  const match = useRouteMatch();
  const params = useParams();

  const { jobId } = params;

  const { sendRequest, status, data: job, error } = useHttp(getSingleJob, true);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      sendRequest(jobId);
      mounted = false;
    }
    return () => {
      mounted = false;
    };
  }, [sendRequest, jobId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!job) {
    return <p>No job found</p>;
  }

  return (
    <Fragment>
      <FullJobDetails
        company={job.company}
        role={job.role}
        techStack={job.techStack}
        appliedDate={job.appliedDate}
      />
      <Route path={match.path} exact>
        <div className="centered">
          <Comments />
        </div>
      </Route>
    </Fragment>
  );
};

export default JobDetailsPage;
