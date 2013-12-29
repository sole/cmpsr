(function() {

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

})();
