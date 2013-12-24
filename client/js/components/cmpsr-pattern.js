xtag.register('cmpsr-pattern', {
	// TODO:
	// attributes: lines, tracks (per track: columns and types)
	// setData( <massive object with data> ) or individual per cell methods? (or both)
	lifecycle: {
		created: function() {
			this.lines = 64;
			this.tracks = 8;
		}
	},
	accessors: {
		lines: {
			set: function(v) {
				v = parseInt(v, 10);
				this.dataset.lines = v;
				this.propagateNumLines(v);
			},
			get: function() {
				return this.dataset.lines;
			}
		},
		tracks: {
			set: function(v) {
				v = parseInt(v, 10);
				this.dataset.tracks = v;
				this.setNumTracks(v);
			},
			get: function() {
				return this.dataset.tracks;
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
