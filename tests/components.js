window.addEventListener('DOMComponentsLoaded', testComponents, false);

function testComponents() {
	module('cmpsr-pattern');

	test('declarative init', function() {
		var el = document.querySelector('cmpsr-pattern');
		ok(el !== null);
	});
}
