require('dotenv').config()
require('es6-promise').polyfill();
require('isomorphic-fetch');

const TARGET_URL = 'https://honestbee.atlassian.net/rest/api/2/issue/';
const USERNAME = process.env.HONESTBEE_ACCOUNT;
const PASSWORD = process.env.HONESTBEE_PASSWORD;
const PROJECT_KEY = 'TP';
const EPIC_KEY = 'TP-59';
const TITLES = [
  'Repetitive Title 1',
  'Repetitive Title 2'
];

function jiraIssueCreator(titles) {
  titles.forEach(title => createJiraIssue(title));
}

function createJiraIssue(title) {
  console.log(`Creating issue with title name ${title}`);
  const authBase64Hash = new Buffer(`${USERNAME}:${PASSWORD}`).toString('base64');
  const body = {
    "fields": {
      "project": {
        "key": PROJECT_KEY
      },
      "summary": `Add unit test for ${title} component`,
      "description": `Create unit test for ${title} component to catch more UI-related bugs`,
      "issuetype": {
        "name": "Tech Task"
      },
      // Epic
      "customfield_10009": EPIC_KEY
    }
  };
  fetch(TARGET_URL, {
    'method': 'POST',
    'headers': {
      'Authorization': `Basic ${authBase64Hash}`,
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify(body)
  })
  .then((res) => {
    if (res.status >= 400) {
      console.log(`Issue with title name ${title} has failed`);
    } else {
      console.log(`Issue with title name ${title} has created successfully`);
    }
  });
}

jiraIssueCreator(TITLES);
