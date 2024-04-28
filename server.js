var express = require('express');
var bodyParser = require('body-parser')
var Twitter = require('twitter');

//define express app to serve the site
var app = express();

//define socket
var server = require('http').Server(app);
var io = require('socket.io')(server);

//require model
var Tweets = require('./models/tweet.js').Tweets; 

//put socket.io to listen to this port
server.listen('8000');

//serve static files from this folder
app.use(express.static(__dirname + '/public'));

//handler to parse data from body request
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
	extended: true
}));

//default route, index page
app.get('/', function(req, res) {
	res.redirect('/index.html');
});

//put app server to listen on port 8080. Browse http://localhost:8080 on your browser to start to use the app
app.listen(8080);

//listen to io connection from frontend
io.on('connection', function(socket) {
	//on searchSubmit request from frontend
	socket.on('searchSubmit', function(data) {
		//defined twitter api keys. Get it here https://apps.twitter.com/ .Create new app you you does not have one. Then get the keys from this app.
		var clientTw = new Twitter({
			consumer_key: '',
			consumer_secret: '',
			access_token_key: '',
			access_token_secret: ''
		});

		//default search in this location when no query input
		var track = {
			'locations': '-122.75,36.8,-121.75,37.8'
		};
		//for Suny Bay Lat & Long use '42.686496,-73.827203' instead of SF as above.

		//incase there is search query string provided, then remove the location filter to use query string
		if ('undefined' != typeof data.search_string && data.search_string.length > 0) {
			delete track.locations; //remove default for location
			track.track = data.search_string;
		}

		//default of total items to keep
		var totalItem = 20 - 1;
		if (!'undefined' != typeof data.total_item && data.total_item > 0) {
			totalItem = data.total_item - 1;
		}

		//remove array items range
		Array.prototype.remove = function(from, to) {
			var rest = this.slice((to || from) + 1 || this.length);
			this.length = from < 0 ? this.length + from : from;
			return this.push.apply(this, rest);
		};

		var items = [];
		var totalCount = 0; //count for total pushed intem

		try {
				//stream from twitter stream api
				clientTw.stream('statuses/filter', track, function(stream) {
					//on stream data
					stream.on('data', function(tweet) {
						//just steam with totalCount of item to be displayed on frontpage
						if (totalCount <= totalItem) {
							var dataLen = items.length;
							/*if (dataLen > totalItem) {
								//always keep the amount = totalItem only. If it is exceded then remove the old one.
								items.remove(-totalItem)
							}*/

							if (dataLen <= totalItem) {
								//define item data with specific fields
								var itemToPush = {};
								itemToPush.created_at = tweet.created_at;
								itemToPush.id = tweet.id;
								itemToPush.text = tweet.text;
								itemToPush.user_id = tweet.user.id;
								itemToPush.user_name = tweet.user.name;
								itemToPush.user_screen_name = tweet.user.screen_name;
								itemToPush.user_location = tweet.user.location;
								itemToPush.user_followers_count = tweet.user.followers_count;
								itemToPush.user_friends_count = tweet.user.friends_count;
								itemToPush.user_created_at = tweet.user.created_at;
								itemToPush.user_time_zone = tweet.user.time_zone;
								itemToPush.user_profile_background_color = tweet.user.profile_background_color;
								itemToPush.user_profile_image_url = tweet.user.profile_image_url;
								itemToPush.geo = tweet.geo;
								itemToPush.coordinates = tweet.coordinates;
								itemToPush.place = tweet.place;

								//push new data into array items list
								items.push(itemToPush);


					            ///create a new Tweet MongoDB document
					            var tweet = new Tweets(itemToPush);
					            //save into MongoDB Database
					            tweet.save(function(err, data) {
					                if (err) {
					                    console.log('Erorr Saving the user data ' + err);
					                } else {
					                    console.log('User data Saved ' + data);
					                }
					            });

								//increase count of totalCount
								totalCount += 1;

								//push data to frontend 
								socket.emit('tweet', itemToPush);
							}
						}
					});
				});
		} catch (err) {
			//error log into console
			console.log(err)
		}
	});

	socket.on('searchdbSubmit',  function(data){
		var searchString = data.search_string;
		var totalItem = parseInt(data.total_item);

		//define and execute query to fetch data from MongoDB
        var query = Tweets.find({});
        	if('undefined'!=typeof searchString && searchString.length>0){
				query.where('text', new RegExp(searchString, 'i'));
        	}
			query.limit(totalItem);
			query.sort({created_at: 1});

			query.exec(function (err, data) {
				if(err){
					console.log(err);
					return
				}
				socket.emit('tweetdb', data);
			});
	});
});
