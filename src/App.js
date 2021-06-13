import React from "react";

import JobsList from "./components/JobsList";
import "./App.css";

function App() {
  const dummyMovies = [
    {
      id: 1,
      company: "Some Dummy Movie",
      role: "This is the opening text of the movie",
      releaseDate: "2021-05-18",
    },
    {
      id: 2,
      title: "Some Dummy Movie 2",
      openingText: "This is the second opening text of the movie",
      releaseDate: "2021-05-19",
    },
  ];

  return (
    <React.Fragment>
      <section>
        <JobsList jobs={dummyMovies} />
      </section>
    </React.Fragment>
  );
}

export default App;
