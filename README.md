User Story
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use

Acceptance Criteria
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application

Mock-Up
The following animation demonstrates the application functionality:

Demonstration of the finished Module 19 Challenge being used in the browser and then installed.

The following image shows the application's manifest.json file:

Demonstration of the finished Module 19 Challenge with a manifest file in the browser.

The following image shows the application's registered service worker:

Demonstration of the finished Module 19 Challenge with a registered service worker in the browser.

The following image shows the application's IndexedDB storage:

Demonstration of the finished Module 19 Challenge with a IndexedDB storage named 'jate' in the browser.

Grading Requirements
NOTE
If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:

A repository that has no code

A repository that includes a unique name but nothing else

A repository that includes only a README file but nothing else

A repository that only includes starter code

This Challenge is graded based on the following criteria:

Technical Acceptance Criteria: 40%
Satisfies all of the above acceptance criteria plus the following:

Uses IndexedDB to create an object store and includes both GET and PUT methods

The application works without an internet connection

Automatically saves content inside the text editor when the DOM window is unfocused

Bundled with webpack

Create a service worker with workbox that Caches static assets

The application should use babel in order to use async / await

Application must have a generated manifest.json using the WebpackPwaManifest plug-in

Can be installed as a Progressive Web Application

Deployment: 32%
Application deployed to Heroku at live URL with build scripts

Application loads with no errors

Application GitHub URL submitted

GitHub repo contains application code

Application Quality: 15%
Application user experience is intuitive and easy to navigate

Application user interface style is clean and polished

Application resembles the mock-up functionality provided in the Challenge instructions

Repository Quality: 13%
Repository has a unique name

Repository follows best practices for file structure and naming conventions

Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

Repository contains multiple descriptive commit messages

Repository contains a quality README file with description, screenshot, and link to deployed application

How to Submit the Challenge
You are required to submit BOTH of the following for review:

The URL of the functional, deployed application.

The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

NOTE
You are allowed to miss up to two Challenge assignments and still earn your certificate. If you complete all Challenge assignments, your lowest two grades will be dropped. If you wish to skip this assignment, click Next, and move on to the next Module.

Comments are disabled for graded submissions in BootCamp Spot. If you have questions about your feedback, please notify your instructional staff or the Student Success Manager. If you would like to resubmit your work for an improved grade, you can use the Resubmit Assignment button to upload new links. You may resubmit up to three times for a total of four submissions.