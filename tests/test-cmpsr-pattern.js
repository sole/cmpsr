function testCmpsrPattern() {

	module('cmpsr-pattern');

	test('declarative init', function() {
		var el = document.querySelector('cmpsr-pattern');
		ok(el !== null);
	});

	test('attributes', function() {
		var el = document.createElement('cmpsr-pattern');
		var numLines = 32;
		el.lines = numLines;
		equal(el.lines, numLines);

		document.body.appendChild(el);
	});

}
