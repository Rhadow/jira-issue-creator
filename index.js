const {
  jiraIssueCreator,
  jiraIssueUpdator
} = require('./jira_issue_helper.js');


const IDS = [];

for (let i = 1671; i < 1743; i++) {
  IDS.push(`CWEB-${i}`);
}

jiraIssueUpdator(IDS);
