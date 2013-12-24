function testCmpsrPattern() {

	module('cmpsr-pattern');

	test('declarative init', function() {
		var el = document.querySelector('cmpsr-pattern');
		ok(el !== null);
		equal(el.querySelectorAll('cmpsr-pattern-track').length, 8);
	});

	// Make accessors set things properly
	test('attributes', function() {
		var el = document.createElement('cmpsr-pattern');
		var pairs = [
			[ 'lines', 32 ],
			[ 'tracks', 8 ]
		];

		pairs.forEach(function(pair) {

			var key = pair[0];
			var expectedValue = pair[1];
			
			el[key] = expectedValue;

			equal(el[key], expectedValue);

		});
	});

	
	// .tracks actually updates the number of tracks
	test('children == tracks', function() {
		var el = document.createElement('cmpsr-pattern');

		el.tracks = 16;
		equal(el.getTracks().length, 16);

		el.tracks = 8;
		equal(el.getTracks().length, 8);
	});


}
