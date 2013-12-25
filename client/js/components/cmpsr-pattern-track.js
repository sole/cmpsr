xtag.register('cmpsr-pattern-track', {
	// TODO:
	// attributes: lines, noteColumns, effectColumns
	// setData( <massive object with data> ) or individual per cell methods? (or both)
	lifecycle: {
		created: function() {
			this.lines = 64;
			this.innerHTML = '';
		}
	},
	accessors: {
		lines: {
			set: function(v) {
				v = parseInt(v, 10);
				console.log('set lines', v);
				this.dataset.lines = v;
				this.setNumLines(v);
			},
			get: function() {
				return this.dataset.lines;
			}
		}
	},
	methods: {
		getCells: function() {
			return xtag.query('cmpsr-pattern-cell');
		},
		setNumLines: function(v) {
			var cells = this.getCells();
			var i;
			var diff = cells.length - v;

			if(diff < 0) {
				// add new cells
				for(i = diff; i < 0; i++) {
					var el = document.createElement('cmpsr-pattern-cell');
					this.appendChild(el);
				}
			} else {
				// remove tracks
				for(i = 0; i < diff; i++) {
					this.removeChild(this.lastChild);
				}
			}
			// TODO propagate num noteColumns, num effectColumns
		}
	}
});

