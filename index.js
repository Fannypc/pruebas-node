const express = require('express');
const configLimiter = require('./api/helpers/configLimiter');
const rateLimiter = require ('./api/middlewares/rateLimiter');
const app = express();

app.set('trust proxy', true);

app.get('/',
 rateLimiter(configLimiter({
			points: 3,
			duration: 60,
			blockDuration: 20,
		})),
 (req, res) => {
  res.send('Hello World!')
});

app.get('/test',
 rateLimiter(configLimiter({
			points: 3,
			duration: 60,
			blockDuration: 20,
		})),
 (req, res) => {
  res.sendFile('views/test.html', {root: __dirname})
});

app.listen(process.env.PORT || 8000, () => {
  console.log('Example app listening on port 8000!')
});