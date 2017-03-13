const {
  jiraIssueCreator,
  jiraIssueUpdator
} = require('./jira_issue_helper.js');



// Updator
// let IDS = [1570];
// IDS = IDS.map(id => `TEST-${id}`);
// jiraIssueUpdator(IDS);



// Creator
const TITLES = [
  'ProductsFestive',
  'ProductsStore',
];
jiraIssueCreator(TITLES);
