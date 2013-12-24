function testCmpsrPattern() {

	module('cmpsr-pattern');

	test('declarative init', function() {
		var el = document.querySelector('cmpsr-pattern');
		ok(el !== null);
		equal(el.querySelectorAll('cmpsr-pattern-track').length, 8);
	});

	// Make sure attributes are set when using accessors
	test('attributes', function() {
		var el = document.createElement('cmpsr-pattern');
		var pairs = [
			[ 'lines', 32 ],
			[ 'tracks', 8 ]
		];

		pairs.forEach(function(pair) {

			var attribute = pair[0];
			var expectedValue = pair[1];
			
			el[attribute] = expectedValue;

			equal(el[attribute], expectedValue);
			equal(el.getAttribute(attribute), expectedValue);

		});

		document.body.appendChild(el);
	});

	test('children == tracks', function() {
		var el = document.createElement('cmpsr-pattern');

		el.tracks = 16;
		equal(el.querySelectorAll('cmpsr-pattern-track').length, 16);

		el.tracks = 8;
		equal(el.querySelectorAll('cmpsr-pattern-track').length, 8);

	});

}
