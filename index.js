export default {
	fetch(request) {
		if (request.method == "POST") {
	    	return new Response(request.method, {
			headers: {
				'content-type': 'text/plain',
				},
			});
		}
		else{
			return new Response('wrong method! The method is ' + request.method, {
			headers: {
				'content-type': 'text/plain',
				},
			});
		}
	},
};	
