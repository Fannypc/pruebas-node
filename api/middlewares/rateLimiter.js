module.exports = rateLimiter => (req, res, next) => {
	console.log('req.ip es:');
	console.log(req.ip);
    return rateLimiter.consume(req.ip)
    .then(() => {
        next();
    })
    .catch((rejRes) => {
        res.status(429).send('Too Many Requests');
    });
}
