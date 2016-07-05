#!/bin/bash
echo $(pwd)
gource \
    --auto-skip-seconds .1 \
    --seconds-per-day 1 \
    --multi-sampling \
    -1280x720 \
    --stop-at-end \
    --hide mouse,progress \
    --file-idle-time 0 \
    --font-size 22 \
    --title "TBZ Vertiefungsarbeit 2016 Website" \
    --key \
    --highlight-users \
    --colour-images \
    --output-ppm-stream - \
    --output-framerate 30 \
    | avconv -y -r 30 -f image2pipe -vcodec ppm -i - -b 65536K render.mp4
