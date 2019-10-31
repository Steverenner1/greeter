# Deployment notes

Web servers run web applications
-accept requests from clients
-send back responses to clients

Web servers are a software running on someone elses maching

[client] === [web server (multiple web applications/apis)]

Dev process

-write code
-commit and push
-profit (it's deployed automatically to heroku)

Steps to prepare our API for deployment to Heroku

- make the port dynamic
- setup a "start" script that uses `node` (not `nodemon`) to run our server (in package.json)


The environment (env) is the platform (the place/OS/machine) where the application is running