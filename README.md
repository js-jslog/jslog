# JsLog
An ongoing project for me to try new things, and sometimes write about them.

## Usage
- `npm run build` this will create all of the assets which are built from src. Currently it is necessary to run this before either of the following npm commands, at least once in order to build the index.html entry point.
- `npm start` will start an express server at [http://localhost:3000](http://localhost:3000)
- `npm run dev` will start a webpack-dev-server at [http://localhost:8080](http://localhost:8080) with a proxy to the express app running on port 3000. This is necessary in order to host the pages files and the assets in different locations, which I'm not sure is of any benefit anymore. Currently though this means that the express server must already be running at [http://localhost:3000](http://localhost:3000) to actually serve anything.
