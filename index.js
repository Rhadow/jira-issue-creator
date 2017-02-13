const {
  jiraIssueCreator,
  jiraIssueUpdator
} = require('./jira_issue_helper.js');


const IDS = [];
const exceptList = [1714, 1693, 1726]
// 1671, 1743
for (let i = 1671; i < 1743; i++) {
  if (exceptList.indexOf(i) < 0) {
    IDS.push(`CWEB-${i}`);
  }
}

jiraIssueUpdator(IDS);
