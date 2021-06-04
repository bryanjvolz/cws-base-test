const jobs = require('./public/jobs.json');

exports.createPages = async ({ actions: { createPage } }) => {
  // Create a page that lists all Jobs.
  createPage({
    path: `/search-results/`,
    component: require.resolve('./src/templates/search-results.js'),
    context: { jobs }
  });

  //Create a page for each Job.
  jobs.queryResult.forEach(job => {
    createPage({
      path: `/jobs/${job.ref}/${job.title}`,
      component: require.resolve('./src/templates/jobs.js'),
      context: { job }
    });
  });
};