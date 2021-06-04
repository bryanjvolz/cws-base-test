import React from 'react';
import { Link } from 'gatsby';
import parse from 'html-react-parser';

export default ({ pageContext: { job } }) => (
  <div style={{ width: 960, margin: '4rem auto' }}>
    <h1>{job.title}</h1>
    <Link to={job.seo_url} target="_blank">Apply Now</Link>
    <hr />
    <h2>Job Description</h2>
    <div>{parse(job.description)}</div>
    <br />
    <Link to={job.seo_url}>Apply Now</Link>
    <br />
    <Link to="/search-results/" target="_blank">Back to all Jobs</Link>
  </div>
);
