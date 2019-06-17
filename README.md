# 5aside

5aside, an app to where 5 aside footballers can create player profiles which can then link to the profile of their team.

The website can be found at the following url: http://35.246.42.33:8080/5aside-1.0/.
As the site is still under development, the current working version can be found in the developer branch. 

The project is hosted on a wildfly server, supported by a h2 database. Both are currently run on a google cloud virtual machine which is automatically updated via Jenkins whenever there is a push to github.

The project was planned and organised via a trello board, found at https://trello.com/b/ElmywOoc/5aside.

The landing page gives the user the option to either login or navigate to the register player or team pages. At both of these pages, the user submits details on either themselves or the team they would like to create, which is then sent to be stored in a h2 database using Java Persistence API. Once the user has an account they can log in with their registered email address, which is verified on the backend.
Once logged in, the user can view details on the team and then navigate to the player and team portals. Here the user can update details of both, or choose to delete their team or player account. Log out buttons are present throughout which remove the users details from the session storage and bring them back to the landing page.

The test coverage for this project in measures via a combination of Junit and Selenium, was unfortunately only 66%. The reason the required minimum of 80% wasn’t achieved was due to my laptop continually crashing when running the tests, and using eclipse in general. These tests can be found in the testing branch. Postman was used frequently in order to test and verify the POST, GET, PUT and DELETE commands.

