//import config, {nodeEnv, logStars} from './config';
import config from './config';
//  console.log(config, nodeEnv);
//  //invoke exported in config.js function directly
//  logStars("some content");

// https.get("https://www.lynda.com", res => {
// 	console.log("Response status code: ", res.statusCode);
// 	res.on('data', chunk => {
// 		console.log(chunk.toString());
// 	})
// })

import express from 'express';
const server = express();
server.get('/', (req, res) => {
	res.send("Hello express!");
});
server.get('/about.html', (req, res) => {
	res.send("The About page \n");
});
server.listen(config.port, () => {
	console.log("express listening on port", config.port);
});