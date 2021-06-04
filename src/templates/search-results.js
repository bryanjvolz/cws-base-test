import React from 'react';
import { Link } from 'gatsby';

const SearchResults = ({ pageContext: { jobs } }) => (
  <div style={{ width: 960, margin: '4rem auto' }}>
    <h1>Choose a Job!</h1>
    <hr />
    <ul style={{ padding: 0, columns: 2 }}>
      {jobs.queryResult.map(job => (
        <li
          key={job.id}
          style={{
            textAlign: 'left',
            listStyle: 'none',
            display: 'block'
          }}
        >
          <Link to={`/jobs/${job.ref}/${job.title}`}>
            <p>{job.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default SearchResults;