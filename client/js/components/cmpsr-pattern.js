xtag.register('cmpsr-pattern', {
	// TODO:
	// attributes: lines, tracks (per track: columns and types)
	// setData( <massive object with data> ) or individual per cell methods? (or both)
	lifecycle: {
		created: function() {
			this.tracks = 8;
			this.innerHTML = '';
			
			this.setNumTracks(this.tracks);
		}
	},
	accessors: {
		lines: {
			attribute: { },
			set: function(v) {
				console.log('set lines', v);
				// TODO propagate
			}
		},
		tracks: {
			attribute: { },
			set: function(v) {
				console.log('set tracks', v);
				// TODO propagate
				this.setNumTracks(parseInt(v, 10));
			}
		}
	},
	methods: {
		setNumTracks: function(v) {
			var trackElements = this.querySelectorAll('cmpsr-pattern-track');
			var i;
			var diff = trackElements.length - v;

			if(diff < 0) {
				// add new tracks
				for(i = diff; i < 0; i++) {
					var el = document.createElement('cmpsr-pattern-track');
					this.appendChild(el);
					// TODO set track num lines
				}
			} else {
				// remove tracks
				for(i = 0; i < diff; i++) {
					this.removeChild(this.lastChild);
				}
			}
		}
	}

});
