/*
 This overlay was made by Kruiser8 (https://twitch.tv/kruiser8)
  and is licensed under the Creative Commmons Attribution 4.0 International License (CC BY 4.0)

 For License information, visit https://creativecommons.org/licenses/by/4.0/
*/

/**
 * Connect to the Streamlabs websocket and setup the event handlers
 * @param {boolean} useAlertPlaying Should the socket use the alertPlaying event
 */
 function connectWebsocket(useAlertPlaying) {
	//Connect to socket
	var streamlabs = io(`https://sockets.streamlabs.com?token=${token}`, {transports: ['websocket']});

  streamlabs.onclose = function () {
    console.error('Error connecting to streamlabs socket: Incorrect token or connection error');
  }

	if (useAlertPlaying) {
		//Perform Action on event
	  streamlabs.on('event', (eventData) => {
			if (debug) {
				console.log(eventData);
			}
	    switch(eventData.type) {
				case 'alertPlaying':
					var type = eventData.message.type;
					switch(type) {
			      case 'host':
						  var hoster = eventData.message.name.toLowerCase();
							var viewers = eventData.message.viewers;
							if (debug) {
								console.log(hoster + '-' + viewers);
							}
							if (triggerOnHost && viewers >= minViewersInHost && hosters.indexOf(hoster) == -1 && teamMembers.indexOf(hoster) != -1) {
								hosters.push(hoster);
								animate();
							}
			        break;
						case 'raid':
						  var raider = eventData.message.name.toLowerCase();
							var viewers = eventData.message.raiders;
							if (debug) {
								console.log(raider + '-' + viewers);
							}
							if (triggerOnRaid && viewers >= minViewersInRaid && raiders.indexOf(raider) == -1 && teamMembers.indexOf(raider) != -1) {
								raiders.push(raider);
								animate();
							}
			        break;
						default:
							// do nothing
						}
	      default:
	        // do nothing
	    }
		});
	} else {
		//Perform Action on event
	  streamlabs.on('event', (eventData) => {
			if (debug) {
				console.log(eventData);
			}
	    switch(eventData.type) {
	      case 'host':
				  var hoster = eventData.message[0].name.toLowerCase();
					var viewers = eventData.message[0].viewers;
					if (debug) {
						console.log(hoster + '-' + viewers);
					}
					if (triggerOnHost && viewers >= minViewersInHost && hosters.indexOf(hoster) == -1 && teamMembers.indexOf(hoster) != -1) {
						hosters.push(hoster);
						animate();
					}
	        break;
				case 'raid':
				  var raider = eventData.message[0].name.toLowerCase();
					var viewers = eventData.message[0].raiders;
					if (debug) {
						console.log(raider + '-' + viewers);
					}
					if (triggerOnRaid && viewers >= minViewersInRaid && raiders.indexOf(raider) == -1 && teamMembers.indexOf(raider) != -1) {
						raiders.push(raider);
						animate();
					}
	        break;
				default:
					// do nothing
				}
    });
	}
}
