/*
 This overlay was made by Kruiser8 (https://twitch.tv/kruiser8)
  and is licensed under the Creative Commmons Attribution 4.0 International License (CC BY 4.0)

 For License information, visit https://creativecommons.org/licenses/by/4.0/
*/
var raiders = [];
var hosters = [];
var teamMembers;

/**
 * Trigger an animation of the logo or extend the current animation
 */
function animate() {
  if (timer) {
		clearTimeout(timeoutIn);
		animateIn('.logo','fadeIn');
	} else {
		clearTimeout(timeoutOut);
		if ($('.logo').css("visibility") == "hidden") {
			animateIn('.logo','fadeIn');
		} else {
			timeoutOut = setTimeout(animateOut,duration*1000,'.logo','fadeOut');
		}
	}
}

// Do stuff if the document is fully loaded
$(document).ready(function() {
	// Show an error message if the API key file is not loaded
	if (typeof token === "undefined" || token === "") {
		$("body").html("No Streamlabs token found or loaded!");
		$("body").css({"font-size": "50px", "color": "#ff8080", "text-align": "center"});
	}
	// Connect to the Streamlabs Chatbot websocket
	else {
		init();
		if (repeat != 0) {
			animate();
		}
	}
});

/**
 * Setup the overlay with settings
 */
function init() {
	buildTeamMembers();

	// Add image
	$('.logo img').attr('src', 'images/' + image);

	// Set height
	if (useFixedHeight) {
		$('.logo img').css('max-height', imageHeight);
	}

	// Set opacity
	$( '.logo img' ).css('opacity', imageOpacity);

	// Add spinner
	if (spinImage) {
		$('.logo img').addClass('spinner');
	}

	// Align image
	$( '.logo' ).css('text-align', alignImage);

  connectWebsocket(hasAlerts);
}

/**
 * Build the list of team members
 */
function buildTeamMembers() {
	if (streamTeamName) {
		getTwitchTeamMembers(streamTeamName);
	} else {
		teamMembers = streamTeamMembers;
		if (debug) {
			console.log('using streamteam members...');
			console.log(teamMembers);
		}
	}
}

/**
 * Retrieve a list of twitch team members
 * @param {string} team name of the twitch stream team
 */
function getTwitchTeamMembers(team) {
  team = team.toLowerCase();
	$.ajax({
    url: "https://decapi.me/twitch/team_members/" + team
  }).done(function( data ) {
		if (Array.isArray(data)) {
			if (Array.isArray(streamTeamMembers)) {
				teamMembers = streamTeamMembers.concat(data);
			} else {
				teamMembers = data;
			}
		} else {
			teamMembers = streamTeamMembers;
		}
		teamMembers = teamMembers.filter( onlyUnique );
		teamMembers.toLowerCase();
		if (debug) {
			console.log('team members...');
			console.log(teamMembers);
		}
  });
}

/**
 * Array extension to lowercase all values
 */
Array.prototype.toLowerCase = function() {
    for (var i = 0; i < this.length; i++) {
        this[i] = this[i].toString().toLowerCase();
    }
}

/**
 * Array filter used to remove duplicates
 */
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
