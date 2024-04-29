

# React IOS Calculator

This project recreates the iconic iOS calculator interface using ReactJS. Designed to mimic the look and functionality of the native iOS calculator, this application provides a familiar user experience for desktop web browsers. 


## Requirements

node v16.17.0

## Usage

1. clone project   
2. open project `cd twitter-search`
3. install npm `npm i`
4. to start app `node server.js`

## Edit if you want:
To change port of the web application, edit line 30 *app.listen(8080);* :
In server.js file, replace 8080 to whatever you want.
You will browser the application on this port on your browser (eg, http://location:8080)

To change Twitter authentication keys, edit server.js line 37:
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

## Credits
 
Developer - Samuel Fok (@foks20)

 
## License
 
The MIT License (MIT)

Copyright (c) 2015 Samuel Fok

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
