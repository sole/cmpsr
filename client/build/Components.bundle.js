require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function register() {

	function NoteCell() {
		this.note = null;
		this.instrument = null;
		this.volume = null;
	}

	xtag.register('cmpsr-pattern-cell-note', {
		lifecycle: {
			created: function() {
				this.innerHTML = 'a';
			}
		}
	});

	xtag.register('cmpsr-pattern-cell', {
		// TODO:
		// setData( <massive object with data> ) or individual per cell methods? (or both)
		lifecycle: {
			created: function() {
				this._data = {
					notes: [],
					effects: []
				};
				this.noteColumns = 1;
				this.effectColumns = 1;
				this.innerHTML = '... .. .. ...';
			}
		},
		accessors: {
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
					// TODO this.setNumEffectColumns(v);
				},
				get: function() {
					return this._data.effectColumns;
				}
			}

		},
		methods: {
			
			setNumNoteColumns: function(v) {
				var columns = this._data.notes;
				var i;
				var diff = columns.length - v;

				if(diff < 0) {
					// add new columns
					for(i = diff; i < 0; i++) {
						var el = new NoteCell();
						columns.push(el);
						// TODO gui side // this.appendChild(el);
					}
				} else {
					// remove tracks
					columns.splice(v, diff);
					/*for(i = 0; i < diff; i++) {
						// TODO this.removeChild(this.lastChild);
					}*/
				}

				this.updateHTML();
			},

			updateHTML: function() {

				var notes = this._data.notes;

				var self = this;
				self.innerHTML = '';

				var noteFields = [
					['note', 3, '...'],
					['instrument', 2, '..'],
					['volume', 2, '..']
				];

				notes.forEach(function(n) {

					/*noteFields.forEach(function(f) {
						var input = document.createElement('input');
						input.maxlength = f[1];
						input.size = f[1];
						input.placeholder = f[2];
						self.appendChild(input);

						if(n[ f[0] ] !== null) {
							input.value = n[ f[0] ];
						}
					});*/

					noteFields.forEach(function(f) {
						var field = document.createElement('cmpsr-pattern-cell-note');
						field.size = f[1];
						field.placeholder = f[2];
						self.appendChild(field);
					});

				});
			}

		}
	});

}

module.exports = {
	register: register
};

},{}],2:[function(require,module,exports){
function register() {
	
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
					cell.effectColumns = v;
				});
			}
		}
	});
}

module.exports = {
	register: register
};

},{}],3:[function(require,module,exports){
function register() {

	xtag.register('cmpsr-pattern', {
		// TODO:
		// attributes: lines, tracks (per track: columns and types)
		// setData( <massive object with data> ) or individual per cell methods? (or both)
		lifecycle: {
			created: function() {
				this._data = {};
				this.lines = 64;
				this.tracks = 8;
			}
		},
		accessors: {
			lines: {
				set: function(v) {
					v = parseInt(v, 10);
					this._data.lines = v;
					this.propagateNumLines(v);
				},
				get: function() {
					return this._data.lines;
				}
			},
			tracks: {
				set: function(v) {
					v = parseInt(v, 10);
					this._data.tracks = v;
					this.setNumTracks(v);
				},
				get: function() {
					return this._data.tracks;
				}
			}
		},
		methods: {
			getTracks: function() {
				return xtag.query(this, 'cmpsr-pattern-track');
			},
			setNumTracks: function(v) {
				var trackElements = this.getTracks();
				var i;
				var diff = trackElements.length - v;

				if(diff < 0) {
					// add new tracks
					for(i = diff; i < 0; i++) {
						var el = document.createElement('cmpsr-pattern-track');
						this.appendChild(el);
					}
				} else {
					// remove tracks
					for(i = 0; i < diff; i++) {
						this.removeChild(this.lastChild);
					}
				}
				this.propagateNumLines(this.lines);
			},
			propagateNumLines: function(v) {
				var trackElements = this.getTracks();
				for(var i = 0; i < trackElements.length; i++) {
					trackElements[i].lines = v;
				}
			}
		}

	});
}


module.exports = {
	register: register
};

},{}],"z+UI00":[function(require,module,exports){

function register() {

	require('./cmpsr-pattern-cell').register();
	require('./cmpsr-pattern-track').register();
	require('./cmpsr-pattern').register();
	
	console.log('cmpsr components registered');
}

module.exports = {
	register: register
};

},{"./cmpsr-pattern":3,"./cmpsr-pattern-cell":1,"./cmpsr-pattern-track":2}],"Components":[function(require,module,exports){
module.exports=require('z+UI00');
},{}]},{},[])
;