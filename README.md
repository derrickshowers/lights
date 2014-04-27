# Lights

Quick web app for a quick and easy web interface for Hue lights.

When complete, there will be a simple interface at [http://lights.derrickshowers.com](http://lights.derrickshowers.com) that can only be accessed while in my home network. The goal is to make an easy way for visitors to turn lights on and off while visiting.

Currently working on building out the node backend, which contains a small API to make calls to the bridge. `/lib/hue.js` is where the methods are contained that communicate with the bridge. Everything else is in `/app.js`.

## API

Right now, things are pretty simple. There are two `GET` requests that can be made:

* `/api/allon/`: Turns all of the lights on to last scene
* `/api/alloff/`: Turns all of the lights off

## Interface

Still needs completed...