#!/bin/bash

# Paths are relative to the root folder
rm -r ./markdown/rendered
mkdir ./markdown/rendered
cat ./markdown/vergleich.md | remarkable > ./markdown/rendered/vergleich.html
cat ./markdown/home.md | remarkable > ./markdown/rendered/home.html
cat ./markdown/fotoreportage.md | remarkable > ./markdown/rendered/fotoreportage.html

# Copy files into the view directory
rm ./views/vergleich.handlebars
echo '<div class="section">' >> ./views/vergleich.handlebars
cat ./markdown/rendered/vergleich.html >> ./views/vergleich.handlebars
echo '</div>' >> ./views/vergleich.handlebars

rm ./views/home.handlebars
echo '<div class="section">' >> ./views/home.handlebars
cat ./markdown/rendered/home.html >> ./views/home.handlebars
echo '</div>' >> ./views/home.handlebars

rm ./views/fotoreportage.handlebars
echo '<div class="section">' >> ./views/fotoreportage.handlebars
cat ./markdown/rendered/fotoreportage.html >> ./views/fotoreportage.handlebars
echo '</div>' >> ./views/fotoreportage.handlebars

# Reload the browser tab inside chrome
osascript ./markdown/reloadChrome.scpt
