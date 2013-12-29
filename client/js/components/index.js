
function register() {

	require('./cmpsr-pattern-cell').register();
	require('./cmpsr-pattern-track').register();
	require('./cmpsr-pattern').register();
	
	console.log('cmpsr components registered');
}

module.exports = {
	register: register
};
