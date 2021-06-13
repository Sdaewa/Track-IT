import React from 'react';

import Job from './Job';
import classes from './JobsList.module.css';

const JobsList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((job) => (
        <Job
          key={job.id}
          title={job.title}
          releaseDate={job.release}
          openingText={job.openingText}
        />
      ))}
    </ul>
  );
};

export default JobsList;
