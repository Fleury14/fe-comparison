# UNIHORN COMPARATOR

This is a small Angular app used to compare runs of FFIV: Free Enterprise. This can be modified to manage pretty much any game. Initially, I was going to include a server/database but for now this just uses local storage.

## Requirements 

### Development

- NodeJS
- Angular CLI (This uses Angular 8)

### Production

Coming soon...

## How to run (dev)

After cloning the repo, run `npm install` inside the `application` folder. From the same folder, then run `ng serve`. The app should appear in the browser at `localhost:4200`.

## In-app stuff

The app initialized with free enterprise segment names. If you wish to change it, you can edit the file inside the `initial data` folder.

To begin, you will need to "Reset Race" and enter the names of the racers. From then, you can add segments to each racer. There are two ways to input
- Individual segment time: Simply enter how long the segment took
- Based on total time: Easier for entering segments while watching a stream, input the total time of the racer at the time the segment finished and the app will calculate how long the segment was based on how much time has passed since the original total time.
