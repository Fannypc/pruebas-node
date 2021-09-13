const { RateLimiterMemory } = require('rate-limiter-flexible');

module.exports = configLimiter = (opts = null)=>{ // middleware 1
	if (!opts) {
		opts = {
			points: 5, // 5 points
			duration: 30, // Per second
			blockDuration: 60, // block for 1 minute if more than points consumed 
		};
	}

	return new RateLimiterMemory(opts);
}