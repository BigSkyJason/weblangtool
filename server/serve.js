//Usage:  node serve.js
//Usage: curl localhost:8000/other
//Usage: curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST http://localhost:8000/post

var http = require('http');

process.on('SIGINT', function() {
    console.log("Caught interrupt signal - shutdown gracefully and save stored data");
    process.exit();
});

let storage = {};

const requestListener = function (req, res) {
	res.setHeader("Content-Type", "application/json");
	let results = {};
	let breakdown = req.url.split('/');
	let page = breakdown[1];
	let target = breakdown.length > 2 ? breakdown[2] : undefined;
	//console.log(page,target,breakdown);
	switch(page) {
		case "post":
			let incoming;
			try {
				req.on('data', chunk => {
					//console.log(`Data chunk available: ${chunk}` )
					incoming = chunk;
				})
				req.on('end', () => {
					//end of data
					let json = {};
					try {
						json = JSON.parse(incoming);
					} catch (err) {
						json = {'error': typeof(incoming)};
					}
					results = { type: 'posted', 'incoming': json};
					function mergeJson(res,json) {
						for(key in json) {
							if (!res.hasOwnProperty(key)) {
								res[key] = '';;
							}
							res[key]=json[key];
						}
						return res;
					}
					results = mergeJson(results,json);
					res.writeHead(200);
					res.end(JSON.stringify(results));
				})
			} catch (err) {
				incoming = { 'error': 'error' };
			}
			break;
		case "get":
		default:
			res.writeHead(200);
			res.end(JSON.stringify(results));
			break;
	}
};

http.createServer(requestListener).listen(8000, '127.0.0.1');
