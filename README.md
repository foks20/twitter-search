Twitter Search App
This Node.js application allows users to search and stream Twitter feeds based on specific keywords or geographical locations. The streamed tweets are saved into MongoDB for persistence and displayed in real-time on a web interface.

Features
Real-time streaming of tweets based on user-specified keywords or locations.
Tweets data storage using MongoDB.
Real-time display of tweets on a web interface.
Search functionality within the stored tweets.

Technologies Overview
Server Backend
ExpressJs: A web application framework for building web applications on Node.js. ExpressJs
socket.io: Enables real-time communication between the backend server and frontend without page refreshes. socket.io
twitter: A Node.js library to stream data from Twitter. twitter on npm
mongoose: A modeling library for MongoDB and Node.js. mongoose
Database
MongoDB: A NoSQL database. Install MongoDB on your machine from MongoDB.
Frontend
AngularJS: A JavaScript framework for building user interfaces. AngularJS
Bootstrap: A framework for building responsive websites across different devices. Bootstrap
jQuery: A fast, small, and feature-rich JavaScript library. jQuery
Data Model
models/tweet.js: Manage your MongoDB connection string here. The default is mongodb://localhost/tweets. Change localhost to localhost:PORT_NUMBER if necessary.
App Logic
The app uses Express.js to serve web pages, streams data from Twitter using a Node.js library, and employs socket.io to transfer data in real time as it is received from the Twitter stream.

Getting Started
Installation
To install dependencies:
