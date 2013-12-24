xtag.register('cmpsr-pattern-track', {
	// TODO:
	// attributes: lines, tracks (per track: columns and types)
	// setData( <massive object with data> ) or individual per cell methods? (or both)
	lifecycle: {
		created: function() {
			this.innerHTML = 'a track';
		}
	},
	accessors: {
		lines: {
			set: function(v) {
				console.log('set lines', v);
				// TODO
			}
		}
	}
});

