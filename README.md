# Project Set up

## Package.json and NPM set up

1. Run `npm init -y` to initialize project
2. install packages such as express and hbs for templating engine. Run `npm i express hbs`
3. Install development dependency. Run `npm i --save-dev nodemon` which allows to restart a server everytime it makes a change
4. Set up scripts in package json to run the server for development and production.
   - Change the following
     1. "start": "node server.js" - this runs in production environment
     2. "devStart": "nodemon server.js" - this runs in development which allows to refresh the server

## Set up server using Express

1. Create new file in root folder - `server.js`
2. Inside server.js, set up express and hbs configuration
3. Organize folders in MVC structure. Create the following folders
   - **Models**: interacts with Database and handles data logic
   - **Views**: handles data presentation and dynamically renders layouts where hbs files are located
   - **Routes** (also known as Controller), handles request flow. Controller and Routes functions the same, using the term 'Routes' for easy reference since we are using Express and NodeJS.

## Routes and Views folder

1. In Routes folder, create a new file called 'index.js' to set up routes for your CRUD operation. I changed the layouts folder to partials to correct naming convention when using hbs.
2. In Views folder, create your hbs files

## Integrate MongoDB database

1. Install Mongoose to integrate MongoDB. Run `npm install mongoose --save`
2. Go to server.js file to set up Mongoose
3. Install dotenv for .env where database variable is stored. After successful installation, create `.env` file.
4. Create gitignore to exclude files that are not meant to be in the repository
5. Add `require('dotenv').config()` on top of your server.js file

- Once everything is set, always refresh your server and application for errors

## Resources

(hbs for express)[https://www.geeksforgeeks.org/handlebars-templating-in-expressjs/]
