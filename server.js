//import config, {nodeEnv, logStars} from './config';
import config from './config';
import apiRouter from './api';
//import fs from 'fs';
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
import lessMiddleware from 'less-middleware';
import path from 'path';


const server = express();
server.use(lessMiddleware(path.join(__dirname, 'public')));
//server.use(express.static(path.join(__dirname, 'public')));
//for setting ejs
server.set('view engine', 'ejs');
// server.get('/', (req, res) => {
// 	res.send("Hello express!");
// });
server.get('/', (req, res) => {
	res.render('index', {
		content: "Hello express and <em>EJS</em>!"
	});
});
//instead of this combersome construction,
// server.get('/about.html', (req, res) => {
// 	fs.readFile("./about.html", (err, data) => {
// 		res.send(data.toString());
// 	})
// });

server.use('/api', apiRouter);
//we will use middleware method of express:
server.use(express.static("public"));
//server.use('')
//and we even don't need fs module enymore
server.listen(config.port, () => {
	console.log("express listening on port", config.port);
});