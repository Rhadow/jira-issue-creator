const {
  jiraIssueCreator,
  jiraIssueUpdator
} = require('./jira_issue_helper.js');


// const IDS = [1570, 1571, 1576, 1588, 1589, 1590, 1592, 1594, 1595, 1596, 1597, 1600, 1602, 1603, 1605, 1606];
// // 1671, 1743
// for (let i = 1671; i < 1743; i++) {
//   if (exceptList.indexOf(i) < 0) {
//     IDS.push(`CWEB-${i}`);
//   }
// }

let IDS = [1570];

IDS = IDS.map(id => `CWEB-${id}`);

jiraIssueUpdator(IDS);
