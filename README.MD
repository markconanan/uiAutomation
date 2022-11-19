# Google Login Automation
This repo contains an automation framework for UI Automation Tests

# Requirements
* Node.js 18 - Please note some packages may not run properly with Node Version 19
* Java
* Allure Commandline - Allure Commandline may be required to be installed globally to view Allure Reports

# Test Data
The test uses json files to provide data to the test. This can be found in src/resources. Further json files can be created if needed as necessary if more tests are created.

# Installation
To run the tests, clone or download the zip of this repo then install the node modules using ```npm install``` in the terminal in the folder. 

# Execution
To execute the test, enter ```npm test``` in the terminal. 

# Report
There is spec report available in the terminal.
There is also html report generated every test run. To open the html report, enter ```allure open``` in the terminal.
