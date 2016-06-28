#!/bin/bash

# Render markdown files
./markdown/render.sh

rm -r dist/
webpack
cp -r static/* dist/

npm run serve &

# Give express some time to compile all the stuff
sleep 2 # two seconds

# curl the pages and copy to dist
curl http://localhost:3000/ > dist/index.html
curl http://localhost:3000/umfrage > dist/umfrage.html
curl http://localhost:3000/vergleich > dist/vergleich.html
curl http://localhost:3000/interview > dist/interview.html

kill $!
