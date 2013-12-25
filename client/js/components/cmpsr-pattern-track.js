xtag.register('cmpsr-pattern-track', {
	// TODO:
	// attributes: lines, noteColumns, effectColumns
	// setData( <massive object with data> ) or individual per cell methods? (or both)
	lifecycle: {
		created: function() {
			this._data = {};
			this.noteColumns = 1;
			this.effectColumns = 1;
			this.lines = 64;
		}
	},
	accessors: {
		lines: {
			set: function(v) {
				v = parseInt(v, 10);
				this._data.lines = v;
				this.setNumLines(v);
			},
			get: function() {
				return this._data.lines;
			}
		},
		noteColumns: {
			set: function(v) {
				v = parseInt(v, 10);
				this._data.noteColumns = v;
				this.setNumNoteColumns(v);
			},
			get: function() {
				return this._data.noteColumns;
			}
		},
		effectColumns: {
			set: function(v) {
				v = parseInt(v, 10);
				this._data.effectColumns = v;
				this.setNumEffectColumns(v);
			},
			get: function() {
				return this._data.effectColumns;
			}
		}
	},
	methods: {
		getCells: function() {
			return xtag.query(this, 'cmpsr-pattern-cell');
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

			this.setNumNoteColumns(this.noteColumns);
			this.setNumEffectColumns(this.effectColumns);
		},
		setNumNoteColumns: function(v) {
			var cells = this.getCells();
			cells.forEach(function(cell) {
				cell.noteColumns = v;
			});
		},
		setNumEffectColumns: function(v) {
			var cells = this.getCells();
			cells.forEach(function(cell) {
				cell.noteColumns = v;
			});
		}
	}
});

