# Twitter Search App

## Brief of technologies:

### Server Backend:
**ExpressJs** Web application framework to build web application on node.js (http://expressjs.com/)  
**socket.io** To communicate in realtime between backend server and frontend without refreshing page (http://socket.io/)  
**twitter** nodejs library to stream data from Twitter (https://www.npmjs.com/package/twitter)  
**mongoose** Model nodejs library to work with MongoDB database (http://mongoosejs.com/)  

### Database
**MongoDB** data storage, install it on your machine(https://www.mongodb.org/).

### Frontend:
**angularjs** Javascript framework on frontend to build UI (https://angularjs.org/)
**Bootstrap** Building website in responsive to have good looking on difference devices such as desktop browser, mobile browser, tablet browser....
**jQuery** Fast, small, and feature-rich JavaScript library (https://jquery.com/)

### Data model
**models/tweet.js**
You can change connection string there, default setup of mongodb is as current string(mongodb://localhost/tweets). If you have your own MongoDB opened port just change *localhost* to *localhost:PORT_NUMBER*

### Basic logic of the app:
Expressjs to run web application. Twitter nodejs library to stream data from Twitter into web application then use socket.io to stransfer data in realtime once backend receive data from Twitter stream.

### To start app, issue command:
node server.js

### Edit if you want:
To change port of the web application, edit line 33 *app.listen(8080);* :  
In server.js file, replace 8080 to whatever you want.  
You will browser the application on this port on your browser (eg, http://location:8080)  
In models/tweet.js, replace *tweets* in mongodb://localhost/tweets if you want to change the database name where you want to store the data from Twitter

To change port of socket to expose on server and listen on frontend:  
* In server.js line 16 *server.listen('8000');* is the socket server port, change to whatever number you want.  
* In public/index.html line 15 *<script src="//localhost:8000/socket.io/socket.io.js"></script>* change 8080 to the the same number has been changed above for the socket server port. Warning: This number required to have the same number with server socket port.

To change Twitter authentication keys, edit server.js line 40:
```javascript
var clientTw = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});
```
Get start to create your own Twitter app and get authentication keys here https://apps.twitter.com/ . Create new app you you does not have one. Then get the keys from this app.

**Note**
Incase there is any error when start app with *node server.js*
Delete **node_modules** folder and issue the following commands:
npm install
node server.js

To start app again!
