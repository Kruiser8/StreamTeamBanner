/*
 This overlay was made by Kruiser8 (https://twitch.tv/kruiser8)
  and is licensed under the Creative Commmons Attribution 4.0 International License (CC BY 4.0)

 For License information, visit https://creativecommons.org/licenses/by/4.0/
*/

/* Configurations */

// IMPORTANT: Do you play host and raid alerts on your channel?
// - This setting synchronizes the overlay with your streamlabs alerts
var hasAlerts = false;

/****************
 * Team Options *
 ****************/

// If you are in a twitch team, put the team's name here
var streamTeamName = 'Str1keNat1on';

// If you want to provide a list of members instead, put names here
// NOTE: If both a streamTeamName and streamTeam members are provided,
//   the two lists will be combined
var streamTeamMembers = [];






/*********************
 * Animation Options *
 *********************/

var duration = 20; // seconds to remain on-screen
var repeat = 20; // minutes until repeat - Set to 0 to ONLY show on host/raid

// Should the image appear on host or raid?
// - true or false
var triggerOnHost = true;
var triggerOnRaid = true;

// What's the minimum number of viewers in a host or raid to trigger the image
var minViewersInHost = 0;
var minViewersInRaid = 0;

// Animations to apply when the overlay enters IN and exits OUT
//  - all possible options can be found at https://daneden.github.io/animate.css/
var animationIn = 'fadeIn';
var animationOut = 'fadeOut';






/*****************
 * Image Options *
 *****************/
var image = 'str1kenat1on.png';

// Set useFixedHeight to true if you need to apply a maximum height (imageHeight) to all images
var useFixedHeight = false;
var imageHeight = 200;

// Opacity setting
// Must be a value between 0 and 1 (the lower the number, the more transparent)
var imageOpacity = 0.6;

// Align the images inside the overlay.
//  - possible inputs: "left", "center", or "right"
var alignImage = "center";

// Should the image spin? (true/false)
var spinImage = true;

/* End Configurations */

var debug = true; // intended for dev use...
