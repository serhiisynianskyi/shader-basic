let loadTextResource = function(url) {
	return new Promise(function(resolve, reject){
		let request = new XMLHttpRequest();
		
		request.open("GET", url, true);

		request.onload = function() {
			if(request.status >= 200 && request.status < 300) {
				resolve(request.responceText);
			}else {
				reject("ERROR: " + request.status)
			}
		}
	});
}