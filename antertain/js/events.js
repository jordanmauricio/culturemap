/*

################################
NOTE:
################################

The code below is a working prototype of our project,
but as can be seen right below the code isn't exactly
beautiful or using proper standards (such as defining
a lot of variables on the global scope). But this was 
done in order to get around Facebook's API due to the
fact that their JavaScript and PHP drivers at the time
of posting was throwing several scope errors. 

It was decided that, if time allowed, we would go back
and refractor the code to adhere to proper guidelines
(such as using ES6's "const") but this wasn't possible.

Moreover, it was realized later in the project (after
we had a better understanding of how the FB API worked)
that it would have been better to either use a CRON
job to retreive all the events, or to create a dummy
account that would serve as our "user" to prevent
that every user needs to login with their personal
account. However, as mentioned, this wasn't feasible 
anymore to implement as time ran out.

*/


var title = '';
var desc = '';
var startTime = '';
var count = '';
var place = '';
var cover = '';
var weatherForcast = '';
var weatherText = '';
var weatherUnit = '';
var daysBetween = '';
var weather = '';
var temp = '';
var units = '';
var html = '';
var eventId = '';
var eventObjects = [];

function statusChangeCallback( response ) {

	console.log('statusChangeCallback');
	console.log(response);
	FB.getLoginStatus()
	FB._https = true;

	if ( response.status === 'connected' ) {

		establishedConnection(); //main function

	} else if (response.status === 'not_authorized') {

		document.getElementById('status').innerHTML = 'Please log' + 'into this app.';
		$( '#status' ).css( {"color": "white" , "float": "left", "font-size":"20px"} );
		document.getElementById('status2').innerHTML = 'Please log' + 'into this app.';
		$( '#status2' ).css( {"color": "white" , "float": "left", "font-size":"20px"} );

	} else {

		document.getElementById('status').innerHTML = 'Please log in';
		$( '#status' ).css( {"color": "white" , "float": "left", "padding-right":"2%","font-size":"20px"} );
		document.getElementById('status2').innerHTML = 'Please log in';
		$( '#status2' ).css( {"color": "white" , "float": "left", "padding-right":"2%","font-size":"20px"} );

	}
}

function checkLoginState() {
	FB.getLoginStatus(function(response){
		statusChangeCallback(response);
	});
}

window.fbAsyncInit = function() {
	FB._https = true;
	FB.init({
		appId      : APP_ID,
		cookie	   : true,
		xfbml      : true,
		version    : 'v2.6'
	});

	console.log("Houston, we're ready");

	FB.getLoginStatus(function (response) {
		statusChangeCallback(response);
  	});
};

// Loading the SDK 
(function(d, s, id) {
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = "//connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function establishedConnection() {
	console.log('Fetching Information');
	FB.api('/me', function(response){
		console.log('Successful login for: ' + response.name);
		document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.name + '!';
		$( '#status' ).css( {"color": "white" , "float": "left", "padding-right":"1%","font-size":"15px"} );
		$( " .fb_iframe_widget" ).css({"visibility": "hidden"});
		document.getElementById('status2').innerHTML = 'Thanks for logging in, ' + response.name + '!';
		$( '#status2' ).css( {"color": "white" , "float": "left", "padding-right":"1%","font-size":"15px"} );
		$( ".fb_iframe_widget" ).css({"visibility": "hidden"});

	});

	$( '#opts' ).change(retrieveEvents);

}

//selecting venues

$(document).ready(function(){
    $('.item').click(function(){
        $('.item').removeClass('active');
        $(this).addClass('active');

		var getDiv = document.getElementsByClassName('item active');

		eventId = $(getDiv).data('id');
		$( ".wrapper" ).empty();
		retrieveEvents(eventId);
    });    
});

//Getting data from FB
function retrieveEvents(eventId){
	FB.api( ( eventId + '/events'),'GET', {"fields":"name,place,start_time,attending_count,description,cover"}, function(response){

		var currentDataFormatted = moment().format('DDDD');
		//console.log(this);

		for (var i = response.data.length -1;  i > -1; i-- ) {
			var eventDateTime = response.data[i].start_time.toString();
			var eventDate = eventDateTime.substring(0,10);
			var eventTime = eventDateTime.substring(11,16);
			var eventDateFormatted = moment(eventDate, "YYYY-MM-DD").format('DDDD');
			var eventDateYear = moment(eventDate, "YYYY-MM-DD").format('YYYY');
			var timeDifference = eventDateFormatted - currentDataFormatted;
			var eventObj = {};
			
			eventObj.timeDifference = timeDifference;
			console.log(response.data[i]);

			//retrieve events based on year
			if (eventDateYear == 2016){

				if (timeDifference > -1) {
					eventObj.HTML = $('<div class="container"> <div class="box"> <div id="cover"><p><img src="' + response.data[i].cover.source + '"></img></p></div> <div class="top"><div id="title">' + response.data[i].name + '</div><div class="tooltip"><span id="count">' + response.data[i].attending_count + '</span><span class="tooltiptext">Amount of People Attending</span></div><span id="weather"> &deg;</span> </div> <div class="mid"><div id="location">' + moment(eventDate).format("Do [of] MMM YYYY") + '</div> at ' + eventTime + ' @ <div id="time">' + response.data[i].place.name + '</div></div>  <div id="desc">' + response.data[i].description + '</div>');
					eventObjects.push( eventObj );
					$('.wrapper').append( eventObj.HTML );
				}

				if (eventId == 172171559518838){
					eventObj.HTML = $('<div class="container"> <div class="box"> <div id="cover"><p><img src="' + response.data[i].cover.source + '"></img></p></div> <div class="top"><div id="title">' + response.data[i].name + '</div><div class="tooltip"><span id="count">' + response.data[i].attending_count + '</span><span class="tooltiptext">Amount of People Attending</span></div><span id="weather"> &deg;</span> </div> <div class="mid"><div id="location">' + moment(eventDate).format("Do [of] MMM YYYY") + '</div> at ' + eventTime + '  @ <div id="time">' + response.data[i].place.name + '</div></div>  <div id="desc">' + response.data[i].description + '</div>');
					eventObjects.push( eventObj );
					$('.wrapper').append( eventObj.HTML );
				}

			} else {
				$('.wrapper').innerHTML = "<p>No events</p>";
			}

			if (eventDateYear == 2014) {							
				eventObj.HTML = $('<div class="container"> <div class="box"> <div class="top"><div id="title">' + response.data[i].name + '</div><div class="tooltip"><span id="count">' + response.data[i].attending_count + '</span><span class="tooltiptext">Amount of People Attending</span></div><span id="weather"> &deg;</span> </div> <div class="mid"><div id="location">' + moment(eventDate).format("Do [of] MMM YYYY") + '</div> at ' + eventTime + '  @ <div id="time">' + response.data[i].place.name + '</div></div>  <div id="desc">' + response.data[i].description + '</div>');
				eventObjects.push( eventObj );
				$('.wrapper').append( eventObj.HTML );
				eventObj.HTML = $('<div class="container"> <div class="box"> <div id="cover"><p><img src="' + response.data[i].cover.source + '"></img></p></div> <div class="top"><div id="title">' + response.data[i].name + '</div><div class="tooltip"><span id="count">' + response.data[i].attending_count + '</span><span class="tooltiptext">Amount of People Attending</span></div><span id="weather"> &deg;</span> </div> <div class="mid"><div id="location">' + moment(eventDate).format("Do [of] MMM YYYY") + '</div> at ' + eventTime + '  @ <div id="time">' + response.data[i].place.name + '</div></div>  <div id="desc">' + response.data[i].description + '</div>');
				eventObjects.push( eventObj );
				$('.wrapper').append( eventObj.HTML );
			} else {
				console.log("No events");
				$('.wrapper').innerHTML = "<p>No events</p>";
			}

			if (eventDateYear == 2017)
			{
				eventObj.HTML = $('<div class="container"> <div class="box"> <div id="cover"><p><img src="' + response.data[i].cover.source + '"></img></p></div> <div class="top"><div id="title">' + response.data[i].name + '</div><div class="tooltip"><span id="count">' + response.data[i].attending_count + '</span><span class="tooltiptext">Amount of People Attending</span></div><span id="weather"> </span> </div> <div class="mid"><div id="location">' + moment(eventDate).format("Do [of] MMM YYYY") + '</div> at ' + eventTime + '  @ <div id="time">' + response.data[i].place.name + '</div></div>  <div id="desc">' + response.data[i].description + '</div>');
				eventObjects.push( eventObj );
				$('.wrapper').append( eventObj.HTML );
			} else {
				console.log("No events");
				$('.wrapper').innerHTML = "<p>No events</p>";
			}
		} // for-loop
	});

	retrieveWeather( eventObjects );
};

function retrieveWeather( eventObjects ) {
	//retrieve weather data based on certain events
	$.simpleWeather({
		location: 'Enschede, NL',
		woeid: '',
		unit: 'c',
		success: function( data ){
			for (var i = 0;  i < eventObjects.length; i++ ) {
				$( eventObjects[i].HTML ).find( '#weather' ).prepend( data.forecast[eventObjects[i].timeDifference].low + '&deg;C' );
			}
		},
		error: function( error ) {
			var errWeather = "Something went wrong with loading the weather data.";
			$( eventObjects[i].HTML ).find( '#weather' ).prepend(errWeather);
			console.log("Error with Weather");
		}
	});
};