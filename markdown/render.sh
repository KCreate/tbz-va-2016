#!/bin/bash

# Paths are relative to the root folder
rm -r ./markdown/rendered
mkdir ./markdown/rendered
cat ./markdown/vergleich.md | remarkable > ./markdown/rendered/vergleich.html

# Copy files into the view directory
rm ./views/vergleich.handlebars
echo '<div class="section">' >> ./views/vergleich.handlebars
cat ./markdown/rendered/vergleich.html >> ./views/vergleich.handlebars
echo '</div>' >> ./views/vergleich.handlebars

# Reload the browser tab inside chrome
osascript ./markdown/reloadChrome.scpt
