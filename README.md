# jira-issue-creator
Fast jira issue creation tool

## Get Started
- Make sure latest version of [Node](https://nodejs.org/en/) is installed
- Run `$npm install` to install dependencies
- Create a file called `.env` and enter your account information, `.env` should look like this:
```
HONESTBEE_ACCOUNT=YOUR_ACCOUNT_HERE
HONESTBEE_PASSWORD=YOUR_PASSWORD_HERE
```
- Adjust customize part to suit your needs.
- Run `$npm start` and it will start running

## Customize Part

Only  `PROJECT_KEY`, `EPIC_KEY`, `TITLES` and `body` can be customized for now.

- `PROJECT_KEY`: The key of the project. Example: Consumer Web(CWEB), CWEB is the project key
- `EPIC_KEY`: If you have an issue mark as EPIC, just use the issue number such as `TP-59` for this value
- `TITLES`: These are the non-repetitive parts when you create the issue
- `Body`: Set a template for the issue content, fill in the information such as `summary`, `description`. More info [here](https://developer.atlassian.com/jiradev/jira-apis/jira-rest-apis/jira-rest-api-tutorials/jira-rest-api-example-create-issue).
