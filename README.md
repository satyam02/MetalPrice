# metal_price
Sample React App for fetching live and historical values of Gold and Silver rates

## Setup from scratch

Install node in your windows:
> pip install node

Install npm
> pip install npm

Install npx
> npm install npx

### create-react-app

Install `create-react-app` globally
> npm install -g create-react-app

Create a sample React app boilerplate using `create-react-app`
> npx create-react-app metal_price
 
Create a /client directory under metal_price directory and move all the React boilerplate code created by create-react-app to this new client directory.

### The Node Express Server

Download package.json from this project and copy into metal_price folder, parallel to client folder created recently.

Install `nodemon` and `yarn`
> npm i nodemon -g

> npm i yarn -g

Install project dependecies mentioned in package.json. Remember, install them locally to the project.
Go to metal_price folder and run following:
> npm install express

> npm install body-parser

> npm install concurrently

> npm install moment

>npm install request
Download server.js from this project and copy into metal_price folder parallel to package.json.

This is a simple Express server that will run on port 5000 and have APIS to get rates dynamically.

### The React App

Now switch over to the `client` directory where our React app lives.

Add the following line to the `package.json` file created by `create-react-app` insile `client` folder.
> "proxy": "http://localhost:5000/"


#### The key to using an Express back-end server with a project created with create-react-app is to use a proxy. This tells the Web-pack development server to proxy our API requests to our API server, given that our Express server is running on localhost:5000.

Replace `client/src` folder content and `client/package.json` created by `create-react-app` boilerplate by downloaded files from this project.

Now, your app is ready to run.

### How to run

Use following command to run your project
> yarn dev

This will launch the React app and run the server at the same time.

Now navigate to http://localhost:3000 and you will see Gold and Silver current and yesterday rates refreshing on 30sec. Nice 🎉!

### Settings
We are using https://www.goldapi.io/ which provides free Gold and Silver rates till 500 hits/month.

So, for testing perpose, we set the frequency of polling to 30s. You may increase or decrease it.

To use your own API, create your own from https://www.goldapi.io/ then go to `server.js` and change the `x-access-token`

Happy coding!



Reference: https://medium.com/free-code-camp/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0

