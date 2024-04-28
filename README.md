# Twitter Search App

This Node.js application allows users to search and stream Twitter feeds based on specific keywords or geographical locations. The streamed tweets are saved into MongoDB for persistence and displayed in real-time on a web interface.

## Features

- Real-time streaming of tweets based on user-specified keywords or locations.
- Tweets data storage using MongoDB.
- Real-time display of tweets on a web interface.
- Search functionality within the stored tweets.

## Technologies Overview

### Server Backend
- **ExpressJs**: A web application framework for building web applications on Node.js. [ExpressJs](http://expressjs.com/)
- **socket.io**: Enables real-time communication between the backend server and frontend without page refreshes. [socket.io](http://socket.io/)
- **twitter**: A Node.js library to stream data from Twitter. [twitter on npm](https://www.npmjs.com/package/twitter)
- **mongoose**: A modeling library for MongoDB and Node.js. [mongoose](http://mongoosejs.com/)

### Database
- **MongoDB**: A NoSQL database. Install MongoDB on your machine from [MongoDB](https://www.mongodb.org/).

### Frontend
- **AngularJS**: A JavaScript framework for building user interfaces. [AngularJS](https://angularjs.org/)
- **Bootstrap**: A framework for building responsive websites across different devices. [Bootstrap](https://getbootstrap.com/)
- **jQuery**: A fast, small, and feature-rich JavaScript library. [jQuery](https://jquery.com/)

### Data Model
- **models/tweet.js**: Manage your MongoDB connection string here. The default is `mongodb://localhost/tweets`. Change `localhost` to `localhost:PORT_NUMBER` if necessary.

## App Logic
The app uses Express.js to serve web pages, streams data from Twitter using a Node.js library, and employs socket.io to transfer data in real time as it is received from the Twitter stream.

## Configuration

### Server Configuration
- **Application Port**: Change the server's listening port by modifying `app.listen(8080);` in `server.js` to any port you prefer.
- **Socket Server Port**: For real-time updates, adjust the socket server's listening port in `server.listen('8000');` in `server.js`. Make sure to update the port in `public/index.html` to match this setting.

### Database Configuration
- **Connection String**: Update the MongoDB connection string in `models/tweet.js`. The default is set to `mongodb://localhost/tweets`. Modify `localhost` to your MongoDB server's IP and port as needed.

### Twitter API Configuration
- **API Keys**: Set up your Twitter API credentials in `server.js`:
  ```javascript
  var clientTw = new Twitter({
      consumer_key: 'your_consumer_key',
      consumer_secret: 'your_consumer_secret',
      access_token_key: 'your_access_token_key',
      access_token_secret: 'your_access_token_secret'
  });

