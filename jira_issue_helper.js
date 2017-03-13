require('dotenv').config()
require('es6-promise').polyfill();
require('isomorphic-fetch');

const TARGET_URL = 'https://honestbee.atlassian.net/rest/api/2/issue/';
const USERNAME = process.env.HONESTBEE_ACCOUNT;
const PASSWORD = process.env.HONESTBEE_PASSWORD;
const PROJECT_KEY = 'CWEB';
const EPIC_KEY = 'CWEB-1522';

module.exports.jiraIssueCreator = function (titles) {
  titles.forEach(title => createJiraIssue(title));
}

function createJiraIssue(title) {
  console.log(`Creating issue with title name ${title}`);
  const authBase64Hash = new Buffer(`${USERNAME}:${PASSWORD}`).toString('base64');
  const BODY = {
    "fields": {
      "project": {
        "key": PROJECT_KEY
      },
      "assignee": {
        // empty string means Unassigned user
        "name": ""
      },
      "summary": `Refactor ${title} reducer`,
      "description": `*What:*\n Refactor redux reducer to make it extendable for future verticals.\n\n*How:*\nCombine ${title} reducer under correct category (common, groceries, food...) and modify current codebase to adapt this change.`,
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
    'body': JSON.stringify(BODY)
  })
  .then((res) => {
    if (res.status >= 400) {
      console.log(`Issue with title name ${title} has failed`);
    } else {
      console.log(`Issue with title name ${title} has created successfully`);
    }
  });
}

module.exports.jiraIssueUpdator = function (ids) {
  ids.forEach(id => updateJiraIssue(id));
}

function updateJiraIssue(id) {
  console.log(`Updating issue with ID: ${id} at ${TARGET_URL}${id}`);
  const authBase64Hash = new Buffer(`${USERNAME}:${PASSWORD}`).toString('base64');
  const BODY = {
    "fields": {
      "assignee": {
        // empty string means Unassigned user
        "name": ""
      },
      "labels": ["black_hole"]
    }
  };
  fetch(`${TARGET_URL}${id}`, {
    'method': 'PUT',
    'headers': {
      'Authorization': `Basic ${authBase64Hash}`,
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify(BODY)
  })
  .then((res) => {
    if (res.status >= 400) {
      res.json().then(obj => {console.log(obj)});
      console.log(`Update issue with ID: ${id} failed`);
    } else {
      console.log(`Update issue with ID: ${id} succeeded`);
    }
  });
}
