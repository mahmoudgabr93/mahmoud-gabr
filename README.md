# mahmoud-gabr
This repository is divided into three folders, the first folder is the Automation task which includes a doc file for the API tests for automation purposes, cypress folder which includes a framework for automating some of Facebook's registration and Login scenarios using cypress.io, The 'test' folder includes the framework that is responsible for automating Best buy APIs that were documented in the swagger documenetation and I managed to automate the APIs using supertest library and Mocha and Chai for assertions and Executing the API tests. The second folder 'Issue reported' is related to the Bugs that I found while test execution for YallaKoora app and I have included the screenshots in both the defects report and in a seperate folder. The third folder is the Testplan/Test cases that I covered while testing YallaKoora App.


# Prequisites for executing the Automation test cases
Make sure that you have NodeJS installed https://nodejs.org/en/download/

After installing nodejs, Open the terminal and follow the below instructions:
git clone https://github.com/mahmoudgabr93/mahmoud-gabr
cd Automation task
npm install

Enable BestBuy APIs on your localhost 
git clone https://github.com/bestbuy/api-playground/
cd api-playground
npm install
npm start
Best Buy API Playground started at http://localhost:3030

Open The Automation Task folder and from the terminal of your Operating system or your IDE, execute the facebook test cases using the below command:

npm run cypress

And for executing the APIs test cases run the below command also in the terminal:

npm run api

Mochawesome reports are added for the frontend test cases and in case of failure screenshots from the failed test case will be added to the report
