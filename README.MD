# UI Automation
This repo contains an automation framework for UI Automation Tests

# Requirements
* Node.js 18 - Please note some packages may not run properly with Node Version 19
* Java

# Test Cases
Please click [here](https://docs.google.com/spreadsheets/d/14OTZwksWD6i3nQO6ZlCokeBGmDtX5lRP/edit?usp=sharing&ouid=101616933613782818747&rtpof=true&sd=true) for the test cases used in this project.

# Test Data
The test uses json files to provide data to the test. This can be found in src/resources. Further json files can be created if needed as necessary if more tests are created.

# Installation
To run the tests, clone or download the zip of this repo then install the node modules using ```npm install``` in the terminal in the folder. 

# Execution
* To execute the test, enter ```npm test``` in the terminal. 
* Each test suite can also be run separately. To do this, enter ```npm run test-suite "suite name"```. Currently there are 3 suites in the framework: logintests, searchtests, mybagtests.

# Report
There is spec report available in the terminal.
There is also html report generated every test run. To open the html report, enter ```allure open``` in the terminal. A screenshot is taken when an error occurs in the test.

# [UI Automation Repo Link](https://github.com/markconanan/uiAutomation)