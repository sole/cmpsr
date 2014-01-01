# Build JS bundle using browserify
# the :Components is for specifying the name the module will "expose" externally
browserify -r ./client/js/components:Components > ./client/build/Components.bundle.js
