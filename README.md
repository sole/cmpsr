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
- share/fork songs
- all instruments are pianos (or something that sounds cool)
- basic midi export
- OFFLINE!!! aka has to work on a plane

### MVP/WIP todos

- 'build' system a la audio-tags so I just have to include a .js and a .css
    - .register
    - move NoteCell, EffectCell out to share + add tests 
- data binding cell<->real data

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
