
import config from './config';
import apiRouter from './api';
import express from 'express';
import lessMiddleware from 'less-middleware';
import path from 'path';

const server = express();
server.use(lessMiddleware(path.join(__dirname, 'public')));

server.set('view engine', 'ejs');

import serverRender from './serverRender';
server.get('/', (req, res) => {
	serverRender()
		.then(content => {
			res.render('index', {
				content
			});
		})
});

server.use('/api', apiRouter);

server.use(express.static("public"));

server.listen(config.port, config.host, () => {
	console.log("express listening on port", config.port);
	console.log("express listening on host", config.host);
});