xtag.register('cmpsr-pattern', {
	// TODO:
	// attributes: lines, tracks (per track: columns and types)
	// setData( <massive object with data> ) or individual per cell methods? (or both)
	lifecycle: {
		created: function() {
			this.innerHTML = 'a pattern';
		}
	}
});
