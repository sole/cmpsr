function testCmpsrPatternTrack() {

	module('cmpsr-pattern-track');

	test('declarative init', function() {
		var el = document.querySelector('cmpsr-pattern cmpsr-pattern-track');
		ok(el !== null);
	});

	// Make accessors set things properly
	test('accessors', function() {
		var el = document.createElement('cmpsr-pattern-track');
		var pairs = [
			[ 'lines', 32 ],
			[ 'noteColumns', 1 ],
			[ 'effectColumns', 1 ]
		];

		pairs.forEach(function(pair) {

			var key = pair[0];
			var expectedValue = pair[1];
			
			el[key] = expectedValue;

			equal(el[key], expectedValue);

		});
	});


	// .lines actually updates the number of cells
	test('children == cells', function() {
		var el = document.createElement('cmpsr-pattern-track');

		el.lines = 16;
		equal(el.getCells().length, 16);

		el.lines = 8;
		equal(el.getCells().length, 8);
	});

	// .noteColumns and .effectColumns actually updates those in the cells
	test('propagate noteColumns and effectColumns', function() {
		var el = document.createElement('cmpsr-pattern-track');

		for(var i = 0; i < 3; i++) {
			
			el.noteColumns = i;
			equal(el.getCells()[0].noteColumns, i);

			el.effectColumns = i;
			equal(el.getCells()[0].effectColumns, i);

		}

	});



}

