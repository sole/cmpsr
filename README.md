# cmpsr

we'll see...

## "MVP"

- 2 views
    - tracker
    - piano roll

- new song
- edit songs
    - autosave
    - maybe edit in tracker mode for now only? - slightly off notes need precise quantization/timing in tracker mode ("delay" effect)
- users (to save/fork)
	- use emails? for the git thing
	- simultaneous
		- private song (default)
		- "unlisted"
		- public song
- share/fork songs
- all instruments are pianos (or something that sounds cool)
- basic midi export
- OFFLINE!!! aka has to work on a plane
- replay/rebuild from zero how the song was built
	- so have to save all the steps/changes
		- the biggest hack ever: use git and make a git commit per change
			- 'changed note'
			- 'changed instrument parameter'
	- education!
	- visualise differences

### MVP/WIP todos

- arrow/tab/mouse clicks -> find which one is the active cell
    - arrow left right
    - arrow up down
    - tab, shift + tab
- keypress -> "generate" and set note in the grid
    - later with octave selector
- inputs kind of look like a nice believable grid, but can't be selected with the mouse like divs woul
    - need to show divs and maybe hide them and show input when clicked (not dragged?)
    - also, when a key is pressed it should use current octave to determine which note to add
- 'build' system a la audio-tags so I just have to include a .js and a .css
    - move NoteCell, EffectCell out to share + add tests 
    - build components - export package audio tags style
        - tests to use this file
        - main to use this file
- data binding cell<->real data
- format research
    - text based vs binary
        - text -> easy diff
        - git based? lots of tools already built
            - how to hook on that?
            - a repo per song/project
            - author email (where each save ~~ 1 commit)
            - forks are "natural"/understandable (?)

## to experiment with

- chords (using names)
    - metadata in pattern == have notes themselves but store chord metadata somewhere?
- bpm / tempo names (piano, andante, etc)
- rhythms / auto arrangement a la casio?
- notes
- file format
    - json
    - json sort-of-packed-binary?
- midi
    - export: tied to bpm at the time of exporting... precise timing (pretty much rewrite list of events into midi)
    - import: is harder as there are no patterns in midi!
        - idea: "pattern recognition", can it work for notes?
- web midi api
- different views, same note data
    - tracker
        <cmpsr-pattern></cmpsr-pattern>
            tracks --> 1+ columns ~~ note/effect lanes? <--> one instrument only (simpler)
    - notes (staff)
    - piano roll
- clipboard
    - is there an api?
    - copy and paste capture (?)
- architecture
    - client
    - server
- versions
    - history
    - comparison
    - authors
    - merge? forks?
    - blame?
- random ideas while I develop
    - have track names, auto number them (when adding tracks)

## Nothing else to see here

Move along.
