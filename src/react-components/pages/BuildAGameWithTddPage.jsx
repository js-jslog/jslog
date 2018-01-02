import React from 'react';

class BuildAGameWithTddPage extends React.Component {
    render () {
      return <div className="container">
         <div className="section">
<p className="emphasise">Here we will see the effect a TDD workflow has on application design by revisiting a game I created a few weeks ago. My coding ability may have improved slightly, but I expect an interesting deviation to arise purely from the use of the TDD workflow. This article will also serve as a simple demonstration of how to set up a basic project with version control in Git & GitHub and dependency management using bower.</p>
<p>The original and modified games along with their source code can be found <a href="tron-game">here (original)</a> & <a href="wing-tron-game">here (updated)</a></p>
<p></p>
<h2>Introduction</h2>
<p>One of my earliest attempts at application development came in the form of <a href="tron-game">a game</a>. I was quite proud of it at the time as I felt I had put a large number of decent development paradigms into action, and come up with a DRY application constructed diligently from 'the good parts' which I assumed would satisfy the open/closed principle & would be testable if I had invested any time in looking into that already.</p>
<p>Some time has passed since then and although I have recognised one sever mistake in the modularisation of the application (a rookie error which inspired <a href="modularisation-without-obstruction">this article</a>), I believe that its design is still comprehensible & effective.</p>
<p>I am curious to know how the design will be effected by the use of a TDD workflow, so I am rewriting the game using this workflow. You can compare the codebases with the links found at the end of the opening paragraph of this article.</p>
<p>As well as building the game we will be using version control, task automation, dependency management & following a TDD methodology.</p>
<p>If you are not already familiar with Git, GitHub & Bower then I would recommend reading the links in my <a href="professional-code-in-5-steps">article on producing well managed code</a> before attempting to walkthrough this process with me.</p>
<h2>Set up the project</h2>
<p>My <a href="professional-code-in-5-steps">experience with Yeoman</a> had given me some example files which I thought best understood before consistently resorting to this automated method.</p>
<p>First as I knew I would be using TDD I created two folders inside my project, a <code>src</code> folder containing one file, <code>wingTron.js</code> & a <code>test</code> folder containing <code>wingTron.html</code> to present the test results & <code>wingTron_test.js</code> to contain the tests themselves. Taking the test.html file produced by the template in the article linked above I updated wingTron.html with the following content :</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">Markup</div>
    <pre>
      <code className="language-markup">{`
<!doctype html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>karlgrovers Test Suite</title>
    <!-- Load local jQuery. -->
    <script src="../bower_components/jquery/dist/jquery.js"></script>
    <!-- Load local QUnit. -->
    <link rel="stylesheet" href="../bower_components/qunit/qunit/qunit.css" media="screen">
    <script src="../bower_components/qunit/qunit/qunit.js"></script>
    <!-- Load local lib and tests. -->
    <script src="../src/wingTron.js"></script>
    <script src="wingTron.html_test.js"></script>
    <!-- Removing access to jQuery and $. But it'll still be available as _$, if
         you REALLY want to mess around with jQuery in the console. REMEMBER WE
         ARE TESTING A PLUGIN HERE, THIS HELPS ENSURE BEST PRACTICES. REALLY. -->
    <script>window._$ = jQuery.noConflict(true);</script>
  </head>
  <body>
    <div id="qunit"></div>
    <div id="qunit-fixture">
      <span>lame test markup</span>
      <span>normal test markup</span>
      <span>awesome test markup</span>
    </div>
  </body>
</html>
      `}</code>
    </pre>
  </div>
  <figcaption>The starting wingTron.html file</figcaption>
</figure>
<p>Everything here makes sense, but we do not yet have a bower_components folder to contain the jQuery & QUnit files referenced here. The dependencies can be installed manually by running  <code className=" language-powershell">bower install jquery</code> & <code className=" language-powershell">bower install qunit</code> from inside the project folder, but better is to create a <code>bower.json</code> file which will allow us to define the dependencies for the project, and then install them with the more simple <code className=" language-powershell">bower install</code>.</p>
<p>To create a bower.json file simply run <code className=" language-powershell">bower init</code> from the command prompt & the initialiser will ask a series of questions. At the time of writing the ' what types of modules does this package expose?' doesn't have an effect on the output file. It is supposed to modify the moduleType field, but here it is always left empty.</p>
<p>Next we need to install the dependencies we have, and save this knowledge to our bower.json file to that all dependencies are recorded there. We can do these two steps for each dependency with a single command. So next type in <code className=" language-powershell">bower install jquery --save</code> & <code className=" language-powershell">bower install qunit --save</code></p>
<p>Here is what I ended up with :</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">bower.json</div>
    <pre>
      <code className="language-javascript">{`
{
  "name": "wingTron",
  "homepage": "https://github.com/js-jslog/wingTron",
  "authors": [
    "jslog"
  ],
  "description": "a game of wingTron",
  "main": "/src/wingTron.js",
  "moduleType": [],
  "keywords": [
    "game"
  ],
  "license": "MIT",
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ],
  "dependencies": {
    "jquery": "~2.1.4",
    "qunit": "~1.20.0"
  }
}
      `}</code>
    </pre>
  </div>
  <figcaption>The bower.json file we create to let bower know what dependencies the project has for it to download</figcaption>
</figure>
<p>Using bower in this way allows us to commit just the <code>bower.json</code> file to the repository rather than the whole dependency folder. This reduces the size of the project and makes it more stable across different machines who may need different binaries of the dependencies for their operating syste, However, in order to prevent git from picking the bower_components folder up, we need to add a <code>.gitignore</code> file to the project root.</p>
<p>Windows will not allow you to do this very easily through an explorer window. The easiest way to do it is by typing  <code className=" language-powershell">echo /bower_components/ >> .gitignore</code>. This will create the file with one entry which is all we need at the moment.</p>
<p>Finally I created a local repository (<code className=" language-powershell">git init</code>), added all the candidate files & folder to it (<code className=" language-powershell">git add -A</code>), commit to the local repository (<code className=" language-powershell">git commit -m "first commit"</code>), connected with my remote repository (<code className=" language-powershell">git remote add origin https://github.com/js-jslog/wingTron.git</code>) and push the local repository up to the remote one (<code className=" language-powershell">git push -u origin master</code>).</p>
<h2>Development</h2>
<p>Now we are ready for the iterative process of developing the game. I am not going to replicate each of the iterations here. It would undoubtedly be a valuable resource for people trying to learn this, but it would take up a lot of space and I worry that the article would become unreadable without a better author at the hel, What I will do instead is describe a long list of requirements to satisfy a 'milestone' achievement, show all of the tests that were written when that milestone was reached then show all of the application code that was written to fulfil those tests.</p>
<h3>Milestone 1. Minimum requirements</h3>
<p>So for our first broad iteration, lets see what our minimum requirements from the 3 main components of the application are. First of all a definition of each of these components.</p>
<ul>
<li>Field - an object which defines the boundaries of play</li>
<li>Player - an object which moves within boundaries defined by the field. It must know it's location & whether it is alive. It must have the ability to turn left or right, and incrementally move forward, logging the points of the changes of direction as dictated by it's speed & direction. When a player is dead it must not move any longer</li>
<li>Referee - an object which 'owns' the field and any number of players. It will define the timeline in which the player objects must move & inform the players when they have hit a wall or a path & consequentially mark them as dead.</li>
</ul>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">wingTron_test.js</div>
    <pre>
      <code className="language-javascript">{`
// Behaviour
// Two dots exist on a field
// Each dot has a position & a velocity
// After each iteration, the dots will have changed their position by an amount and direction dictated by their velocity
// If either of the dots are on a point which is outside of the boundaries of the field then they will be destroyed


// Field object should be able to :
// Define its boundaries
// Test when some coordinates are out of bounds
// 
// 
// 
// 
// Player objects should be able to :
// Record their current position & velocity
// Update their position based on their velocity
// 

module('fieldFactory');
test('check default field settings are ok', function (assert) {
  var field = getField(),
  bounds = field.getBoundaries(),
  width = bounds[0],
  height = bounds[1];
  assert.equal(width, 100, "The default width is 100");
  assert.equal(height, 100, "The default height is 100");
});

test('check default field settings are ok', function (assert) {
  var field = getField(),
  bounds, width, height;
  field.setBoundaries(150, 150);
  bounds = field.getBoundaries();
  width = bounds[0];
  height = bounds[1];
  assert.equal(width, 150, "The updated width is 150");
  assert.equal(height, 150, "The updated height is 150");
});

test('check out of bounds functionality', function (assert) {
  var field = getField(),
  safePoints = [[0,0],[0,100],[100,0],[100,100],[50,50]],
  deadPoints = [[-1,0],[0,-1],[-1,-1], [0,101],[101,0],[101,101], [-1,101],[101,-1]];
  safePoints.forEach(function (item, index, array) {
    var outOfBounds = field.isPointOutOfBounds(item);
    assert.equal(outOfBounds, false);
  });
  deadPoints.forEach(function (item, index, array) {
    var outOfBounds = field.isPointOutOfBounds(item);
    assert.equal(outOfBounds, true);
  });
});


module('playerFactory');
test('check that the default coords are set', function (assert) {
  var player = getPlayer(),
  playerCoords = player.getCoords(),
  playerx = playerCoords[0],
  playery = playerCoords[1],
  playerAlive = player.isAlive();
  assert.equal(playerx, 0, "Players default x coord is 0");
  assert.equal(playery, 0, "Players default y coord is 0");
  assert.equal(playerAlive, true, "Players are alive by default");
});

test('check that the updated properties are set', function (assert) {
  var player = getPlayer(),
  playerCoords, playerx, playery, playerAlive;
  player.setCoords([100,100]);
  playerCoords = player.getCoords();
  playerx = playerCoords[0];
  playery = playerCoords[1];
  player.die();
  playerAlive = player.isAlive();
  assert.equal(playerx, 100, "Players updated x coord is 100");
  assert.equal(playery, 100, "Players updated y coord is 100");
  assert.equal(playerAlive, false, "Players are not alive after they are dead");
});

test('check that the player can change direction & when moved the coordinates are updated correctly', function (assert) {
  var player = getPlayer(),
  playerCoords;
  player.move();
  playerCoords = player.getCoords();
  assert.equal(Math.round(playerCoords[0]), 1, 'Moving east - Player x position moved to 1');
  assert.equal(Math.round(playerCoords[1]), 0, 'Moving east - Player y position stayed the same');
  
  player.turnRight();
  player.move();
  playerCoords = player.getCoords();
  assert.equal(Math.round(playerCoords[0]), 1, 'Moving south - Player x position stayed the same');
  assert.equal(Math.round(playerCoords[1]), 1, 'Moving south - Player y position moved to 1');

  player.turnRight();
  player.move();
  playerCoords = player.getCoords();
  assert.equal(Math.round(playerCoords[0]), 0, 'Moving west - Player x position moved to 0');
  assert.equal(Math.round(playerCoords[1]), 1, 'Moving west - Player y position stayed the same');

  player.turnLeft();
  player.move();
  playerCoords = player.getCoords();
  assert.equal(Math.round(playerCoords[0]), 0, 'Moving south - Player x position stayed the same');
  assert.equal(Math.round(playerCoords[1]), 2, 'Moving south - Player y position moved to 2');

  player.turnLeft();
  player.move();
  playerCoords = player.getCoords();
  assert.equal(Math.round(playerCoords[0]), 1, 'Moving east - Player x position moved to 1');
  assert.equal(Math.round(playerCoords[1]), 2, 'Moving east - Player y position stayed the same');

  player.turnLeft();
  player.move();
  playerCoords = player.getCoords();
  assert.equal(Math.round(playerCoords[0]), 1, 'Moving north - Player x position has stayed the same');
  assert.equal(Math.round(playerCoords[1]), 1, 'Moving north - Player y position moved to 1');

  player.turnLeft();
  player.move();
  playerCoords = player.getCoords();
  assert.equal(Math.round(playerCoords[0]), 0, 'Moving west - Player x position has moved to 0');
  assert.equal(Math.round(playerCoords[1]), 1, 'Moving west - Player y position stayed the same');

  player.turnRight();
  player.move();
  playerCoords = player.getCoords();
  assert.equal(Math.round(playerCoords[0]), 0, 'Moving north - Player x position has stayed the same');
  assert.equal(Math.round(playerCoords[1]), 0, 'Moving north - Player y position moved to 0');
});

test('check that players stop moving when they are dead', function (assert) {
  var player = getPlayer(),
  playerCoords;
  player.die();
  player.move();
  playerCoords = player.getCoords();
  assert.equal(playerCoords[0], 0, 'A dead player cannot move');
  assert.equal(playerCoords[1], 0, 'A dead player cannot move');
});

test('check that a player has a record of all the points he has travelled', function (assert) {
  var player = getPlayer(),
  expectedPath = [[0,0],[0,0]];
  testPathAgainstExpected(assert, player, expectedPath);

  player.move();
  expectedPath = [[1,0],[0,0]];
  testPathAgainstExpected(assert, player, expectedPath);

  player.move();
  expectedPath = [[2,0],[0,0]];
  testPathAgainstExpected(assert, player, expectedPath);

  player.turnRight();
  player.move();
  expectedPath = [[2,1],[2,0],[0,0]];
  testPathAgainstExpected(assert, player, expectedPath);

  player.turnRight();
  player.move();
  expectedPath = [[1,1],[2,1],[2,0],[0,0]];
  testPathAgainstExpected(assert, player, expectedPath);

  player.turnLeft();
  player.move();
  expectedPath = [[1,2],[1,1],[2,1],[2,0],[0,0]];
  testPathAgainstExpected(assert, player, expectedPath);

  player.turnLeft();
  player.move();
  expectedPath = [[2,2],[1,2],[1,1],[2,1],[2,0],[0,0]];
  testPathAgainstExpected(assert, player, expectedPath);


  player.move();
  expectedPath = [[3,2],[1,2],[1,1],[2,1],[2,0],[0,0]];
  testPathAgainstExpected(assert, player, expectedPath);

  player.move();
  expectedPath = [[4,2],[1,2],[1,1],[2,1],[2,0],[0,0]];
  testPathAgainstExpected(assert, player, expectedPath);

  player.turnLeft();
  player.move();
  expectedPath = [[4,1],[4,2],[1,2],[1,1],[2,1],[2,0],[0,0]];
  testPathAgainstExpected(assert, player, expectedPath);
});

function testPathAgainstExpected (assert, player, expectedPath) {
  var playerPath = player.getPath();
  assert.equal(playerPath.length, expectedPath.length, 'Player has recorded the correct number of points on the path');
  expectedPath.forEach(function (point, index) {
    assert.equal(Math.round(playerPath[index][0]), point[0], 'x point is recorded in the correct location');
    assert.equal(Math.round(playerPath[index][1]), point[1], 'y point is recorded in the correct location');
  });
}

test('check that a player begins a new path when there position is set', function (assert) {
  var player = getPlayer(),
  expectedPath = [[0,0],[0,0]];
  testPathAgainstExpected(assert, player, expectedPath);
  player.setCoords([20,15]);
  expectedPath = [[20,15],[20,15]];
  testPathAgainstExpected(assert, player, expectedPath);
});

module('refereeFactory');
// referee should be able to take a field and a number of players and store them locally
// referee should be able to move all players in one go and evaluate whether each of them is dead and mark them as such if they are
test('check if players & field are successfully stored together within the object, adding one player at a time', function (assert) {
  var player1 = getPlayer(),
  player2 = getPlayer(),
  field = getField(),
  referee = getReferee(),
  playerArray;
  referee.addPlayer(player1);
  referee.addPlayer(player2);
  referee.setField(field);
  playerArray = referee.getPlayers();
  assert.equal(playerArray[0], player1, 'The player1 is successfully added to the player list');
  assert.equal(playerArray[1], player2, 'The player2 is successfully added to the player list');
  assert.notEqual(playerArray[1], player1, 'Confirmed that the two players are not being mistaken for one another');
  assert.notEqual(playerArray[0], player2, 'Confirmed that the two players are not being mistaken for one another');
  assert.equal(referee.getField(), field, 'The field is successfully set within the referee object');
});

test('check that players positions are updated properly when instructed to move by the referee', function (assert) {
  var player1 = getPlayer(),
  player2 = getPlayer(),
  field = getField(),
  player1Coords,
  player2Coords;
  referee = getReferee();
  referee.addPlayer(player1);
  referee.addPlayer(player2);
  referee.setField(field);

  referee.stepTime();
  player1Coords = player1.getCoords();
  player2Coords = player2.getCoords();
  assert.equal(player1Coords[0], 1, 'Player1 x position updated correctly');
  assert.equal(player1Coords[1], 0, 'Player1 y position remained the same as expected');
  assert.equal(player2Coords[0], 1, 'Player2 x position updated correctly');
  assert.equal(player2Coords[1], 0, 'Player2 y position remained the same as expected');

  player1.turnRight();
  referee.stepTime();
  player1Coords = player1.getCoords();
  player2Coords = player2.getCoords();
  assert.equal(player1Coords[0], 1, 'Player1 x position remained the same as expected');
  assert.equal(player1Coords[1], 1, 'Player1 y position updated correctly');
  assert.equal(player2Coords[0], 2, 'Player2 x position updated correctly');
  assert.equal(player2Coords[1], 0, 'Player2 y position remained the same as expected');
});


test('check that players die when they are moved outside of the field boundaries', function (assert) {
  var player1 = getPlayer(),
  player2 = getPlayer(),
  player3 = getPlayer(),
  player4 = getPlayer(),
  field = getField(),
  referee = getReferee(),
  player1Alive,
  player2Alive,
  player3Alive,
  player4Alive;

  field.setBoundaries(3,3);
  referee.setField(field);
  referee.addPlayer(player1);
  referee.addPlayer(player2);
  referee.addPlayer(player3);
  referee.addPlayer(player4);

  player1Alive = player1.isAlive();
  player2Alive = player2.isAlive();
  player3Alive = player3.isAlive();
  player4Alive = player4.isAlive();
  assert.ok(player1Alive && player2Alive && player3Alive && player4Alive, 'Players inside boundaries are alive');

  player2.turnRight();
  player3.turnLeft();
  player4.turnLeft();
  player4.turnLeft();

  referee.stepTime();
  player1Alive = player1.isAlive();
  player2Alive = player2.isAlive();
  player3Alive = player3.isAlive();
  player4Alive = player4.isAlive();
  assert.ok(player1Alive && player2Alive, 'Players inside boundaries are alive');
  assert.ok(!player3Alive && !player4Alive, 'Players outside boundaries are dead');

  referee.stepTime();
  referee.stepTime();
    player1Alive = player1.isAlive();
  player2Alive = player2.isAlive();
  player3Alive = player3.isAlive();
  player4Alive = player4.isAlive();
  assert.ok(player1Alive && player2Alive, 'Players inside boundaries are alive');
  assert.ok(!player3Alive && !player4Alive, 'Players outside boundaries are dead');

  referee.stepTime();
  player1Alive = player1.isAlive();
  player2Alive = player2.isAlive();
  player3Alive = player3.isAlive();
  player4Alive = player4.isAlive();
  player1Alive = player1.isAlive();
  assert.ok(!player1Alive && !player2Alive && !player3Alive && !player4Alive, 'Players outside boundaries are dead');
});

test('check a player is inside its own path and if so die', function (assert) {
  var player1 = getPlayer(),
  field = getField(),
  referee = getReferee(),
  loopIndex;
  referee.setField(field);
  referee.addPlayer(player1);
  for (loopIndex=0; loopIndex<20; loopIndex++) {
    referee.stepTime();
  }
  assert.equal(player1.isAlive(), true, 'Players outside their own path should not be dead');

  player1.turnRight();
  for (loopIndex=0; loopIndex<20; loopIndex++) {
    referee.stepTime();
  }
  assert.equal(player1.isAlive(), true, 'Players outside their own path should not be dead');

  player1.turnRight();
  referee.stepTime();
  assert.equal(player1.isAlive(), true, 'Players outside their own path should not be dead');
  
  player1.turnRight();
  referee.stepTime();
  assert.equal(player1.isAlive(), false, 'Players inside their own path should be dead');
});

// test that players become dead when they hit a polygon wall http://stackoverflow.com/questions/217578/how-can-i-determine-whether-a-2d-point-is-within-a-polygon



module('matchFactory');
test('check that a match can be setup without any parameters', function (assert) {
  var match = getMatch();
  assert.ok(typeof match.getResults === 'function', 'The match produced has a getResults function');
  assert.ok(typeof match.isInPlay === 'function', 'The match produced has a isInPlay function');
  assert.ok(typeof match.stepTime === 'function', 'The match produced has a stepTime function');
});
test('check that the default values are set as expected', function (assert) {
  var match = getMatch();
  assert.equal(match.isInPlay(), true, 'Match starts inPlay');
});
test('check that a match will be over after some time - players will inevitably die after a long game', function (assert) {
  var match = getMatch(),
  loopIndex;
  for (loopIndex=0; loopIndex < 5000; loopIndex++) {
    match.stepTime();
  }
  assert.equal(match.isInPlay(), false, 'The game will end eventually without any intervention');
});
      `}</code>
    </pre>
  </div>
  <figcaption>The tests which we have after the first iteration</figcaption>
</figure>


<figure>
  <div className="panel panel-code">
    <div className="panel-heading">wingTron.js</div>
    <pre>
      <code className="language-javascript">{`
var pi = Math.PI,
    radianLookup = {E : pi*0,   SE : pi*0.25,
                    S : pi*0.5, SW : pi*0.75,
                    W : pi*1,   NW : pi*1.25,
                    N : pi*1.5, NE : pi*1.75
                   };


var getField = function getField () {
    var width = 100,
    height = 100,
    setBoundaries = function setBoundaries (w, h) {
        width = w;
        height = h;
    },
    getBoundaries = function getBoundaries () {
        return [width, height];
    },
    isPointOutOfBounds = function isPointOutOfBounds (pointArray) {
        var testx = pointArray[0],
        testy = pointArray[1],
        result = false;
        if (testx < 0 || testx > width || testy < 0 || testy > height) {
            result = true;
        }
        return result;
    },
    fieldObj = {
        setBoundaries: setBoundaries,
        getBoundaries: getBoundaries,
        isPointOutOfBounds: isPointOutOfBounds
    };
    return fieldObj;
};


var getPlayer = function getPLayer () {
    var coords = [0,0],
    speed = 1,
    direction = 0,
    alive = true,
    path = [],
    setCoords = function setCoords (arrayPoint) {
        coords = arrayPoint;
        beginPath(path, coords);
    },
    getCoords = function getCoords () {
        return coords;
    },
    turnLeft = function turnLeft () {
        direction -= pi*0.5;
        addPathTurn(path);
    },
    turnRight = function turnRight () {
        direction += pi*0.5;
        addPathTurn(path);
    },
    move = function move () {
        if (alive) {
            coords[0] += speed * Math.cos(direction);
            coords[1] += speed * Math.sin(direction);
            updatePathPoint(path, coords);
        }
    },
    die = function die () {
        alive = false;
    },
    isAlive = function isAlive () {
        return alive;
    },
    getPath = function getPath () {
        return path;
    },
    playerObj = {
        setCoords: setCoords,
        getCoords: getCoords,
        turnLeft: turnLeft,
        turnRight: turnRight,
        move: move,
        die: die,
        isAlive: isAlive,
        getPath: getPath
    },
    beginPath = function beginPath (path, coords) {
        path.length = 0;
        path.push([]);
        updatePathPoint(path, coords);
        addPathTurn(path);
    },
    updatePathPoint = function updatePathPoint (path, coords) {
        path[0][0] = coords[0];
        path[0][1] = coords[1];
    },
    addPathTurn = function addPathTurn (path) {
        var turnCood = [];
        turnCood[0] = path[0][0];
        turnCood[1] = path[0][1];
        path.unshift(turnCood);
    };
    beginPath(path, coords);
    return playerObj;
};

var getReferee = function getIntegration () {
    var players = [],
    field,
    addPlayer = function addPlayer (p) {
        players.push(p);
    },
    getPlayers = function getPlayers () {
        return players;
    },
    setField = function setField (f) {
        field = f;
    },
    getField = function getField () {
        return field;
    },
    stepTime = function stepTime () {
        players.forEach(function (player, index, array) {
            if (player.isAlive()) {
                player.move();
                if (!isPlayerSafe(player, array, field)) {
                    player.die();
                }
            }
        });
    },
    refereeObject = {
        addPlayer: addPlayer,
        getPlayers: getPlayers,
        setField: setField,
        getField: getField,
        stepTime: stepTime
    },
    isPlayerSafe = function isPlayerSafe (p, allPlayers, f) {
        var playerCoords = p.getCoords(),
        px = playerCoords[0],
        py = playerCoords[1],
        fieldBounds = f.getBoundaries(),
        fx = fieldBounds[0],
        fy = fieldBounds[1],
        pathHit;
        if (px < 0 || py < 0 || px > fx || py > fy) {
            return false;
        }
        pathHit = allPlayers.some(function (player) {
            return isPointWithinPath(p.getCoords(), player.getPath());
        });
        return !pathHit;
    };
    return refereeObject;
};

// needs improving for more complex shapes
var isPointWithinPath = function isPointWithinPath (point, path) {
    var simpleCheck = (function () {
        var x = point[0],
        y = point[1],
        minx, maxx,
        miny, maxy;
        path.forEach(function (pathPoint) {
            if (minx === undefined || minx > pathPoint[0]) {
                minx = pathPoint[0];
            }
            if (maxx === undefined || maxx < pathPoint[0]) {
                maxx = pathPoint[0];
            }
            if (miny === undefined || miny > pathPoint[1]) {
                miny = pathPoint[1];
            }
            if (maxy === undefined || maxy < pathPoint[1]) {
                maxy = pathPoint[1];
            }
        });
        if (point[0] <= minx || point[0] >= maxx || point[1] <= miny || point[1] >= maxy) {
            return false;
        }
        return true;
    }());
    if (simpleCheck === false) {
        return false;
    }
    // Going to need to improve this check for more complex shapes
    return true;
};



var getMatch = function getMatch () {
    var inPlay = true,
    matchResults,
    players = [],
    field = getField(),
    referee = getReferee(),
    isInPlay = function isInPlay () {
        return inPlay;
    },
    stepTime = function stepTime () {
        referee.stepTime();
        evaluateGameStatus();
    },
    getResults = function getResults () {
        return matchResults;
    },
    matchObject = {
        isInPlay: isInPlay,
        stepTime: stepTime,
        getResults: getResults
    },
    initialise = function initialise () {
        players.push(getPlayer());
        referee.setField(getField());
        players.forEach(function (p) {
            referee.addPlayer(p);
        });
    },
    evaluateGameStatus = function evaluateGameStatus () {
        var deadNum = 0;
        players.forEach(function (p) {
            if (!p.isAlive()) {
                deadNum += 1;
            }
        });
        if (deadNum >= players.length) {
            inPlay = false;
        }
    };
    initialise();
    return matchObject;
};
      `}</code>
    </pre>
  </div>
  <figcaption>The code for the two modules which make up the field and the player objects</figcaption>
</figure>
<p>Before we go any further, since we have something that works & our next step is to refactor, we need to commit this work to version control. <code className="javascript-git">git add -A</code>, <code className="javascript-git">git commit -m "First milestone. Minimum requirements"</code>, <code className="javascript-git">git push -u origin master</code>.</p>
<h2>Refactor</h2>
<p>Having reached our first milestone, it's time to reflect and refactor. I'm sure a number of criticisms could be levelled against the code I have produced, but the thing which really stood out to me were the following:</p>
<ol>
<li>Pollution of the global namespace</li>
<li>Pure functions being contained inside factory functions</li>
</ol>
<p>These two issues are really part of 1 broader issue which is that of modularisation. While we have modularised our stateful functionality within objects specifically for that task, these objects are overexposed (to run a game we only need access to the a match object through use of the getMatch function. On top of this we have utility objects & functions which are either overexposed as well (radianLookup & pi), or are encapsulated inside a factory function, meaning that they will be created once for every call of that function & persist for the life of the object returned. This is because the execution context in which they were created will remain open while the object returned from that context is in use elsewhere in the application. As these are pure functions and do not rely on the objects state to function well this is a particular shame.</p>
<p>We can summarise our goals for the refactoring in 2 statements.</p>
<ul>
<li>Modularise the code so that only the matchFactory will be externally exposed, while leaving ALL modules APIs exposed for testing</li>
<li>Place the pure functions & utility objects in a scope which shelters them from unnecessary access, and duplication, whilst being available where ever necessary</li>
</ul>
<p>The solution to both of these requirements is to use a decent modularisation framework. I will be using RequireJS's AMD pattern framework.</p>
<p>So first of all the sheltering of background APIs - that is those which the application does not need direct access to and sit behind at least one other layer of modules. In our case that will be fieldFactory, playerFactory & refereeFactory.</p>
<p>This really is very simple. The first step is to create a new file for each of the functions we are converting to modules. That is fieldFactory.js, playerFactory.js, refereeFactory.js & matchFactory.js. These will replace wingTron.js eventually. If you are wondering where the pi & radianLookup variables will go, we will answer that soon.</p>
<p>The fieldFactory & playerFactory modules have no dependencies, so we simply turn them into RequireJS modules by using the <code className="language-javascript">define</code> keyword at the top & returning the <code className="language-javascript">getField</code> or <code className="language-javascript">getPlayer</code> function at the end.</p>
<div className="row">
  <div className="col-md-6">
    <figure>
      <div className="panel panel-code">
        <div className="panel-heading">fieldFactory.js</div>
        <pre>
          <code className="language-javascript">{`
define(function () {
    var getField  = function getField () {
        var width = 100,
        height = 100,
        setBoundaries = function setBoundaries (w, h) {
            width = w;
            height = h;
        },
        getBoundaries = function getBoundaries () {
            return [width, height];
        },
        isPointOutOfBounds = function isPointOutOfBounds (pointArray) {
            var testx = pointArray[0],
            testy = pointArray[1],
            result = false;
            if (testx < 0 || testx > width || testy < 0 || testy > height) {
                result = true;
            }
            return result;
        },
        fieldObj = {
            setBoundaries: setBoundaries,
            getBoundaries: getBoundaries,
            isPointOutOfBounds: isPointOutOfBounds
        };
        return fieldObj;
    };
    return getField;
});
          `}</code>
        </pre>
      </div>
      <figcaption>The fieldFactory.js file. Nothing surprising here.</figcaption>
    </figure>
  </div>
  <div className="col-md-6">
    <figure>
      <div className="panel panel-code">
        <div className="panel-heading">playerFactory.js</div>
        <pre>
          <code className="language-javascript">{`
define(function () {
    var pi = Math.PI,
    radianLookup = {E : pi*0,   SE : pi*0.25,
                    S : pi*0.5, SW : pi*0.75,
                    W : pi*1,   NW : pi*1.25,
                    N : pi*1.5, NE : pi*1.75
                   },
    beginPath = function beginPath (path, coords) {
        path.length = 0;
        path.push([]);
        updatePathPoint(path, coords);
        addPathTurn(path);
    },
    updatePathPoint = function updatePathPoint (path, coords) {
        path[0][0] = coords[0];
        path[0][1] = coords[1];
    },
    addPathTurn = function addPathTurn (path) {
        var turnCood = [];
        turnCood[0] = path[0][0];
        turnCood[1] = path[0][1];
        path.unshift(turnCood);
    },
    getPlayer = function getPLayer () {
        var coords = [0,0],
        speed = 1,
        direction = 0,
        alive = true,
        path = [],
        setCoords = function setCoords (arrayPoint) {
            coords = arrayPoint;
            beginPath(path, coords);
        },
        getCoords = function getCoords () {
            return coords;
        },
        turnLeft = function turnLeft () {
            direction -= pi*0.5;
            addPathTurn(path);
        },
        turnRight = function turnRight () {
            direction += pi*0.5;
            addPathTurn(path);
        },
        move = function move () {
            if (alive) {
                coords[0] += speed * Math.cos(direction);
                coords[1] += speed * Math.sin(direction);
                updatePathPoint(path, coords);
            }
        },
        die = function die () {
            alive = false;
        },
        isAlive = function isAlive () {
            return alive;
        },
        getPath = function getPath () {
            return path;
        },
        playerObj = {
            setCoords: setCoords,
            getCoords: getCoords,
            turnLeft: turnLeft,
            turnRight: turnRight,
            move: move,
            die: die,
            isAlive: isAlive,
            getPath: getPath
        };
        beginPath(path, coords);
        return playerObj;
    };
    return getPlayer;
});
          `}</code>
        </pre>
      </div>
      <figcaption>The playerFactory.js file. Note that the pure functions have been moved from inside the getPlayer function body</figcaption>
    </figure>
  </div>
</div>
<p>Simple enough. We have defined two modules which expose one function each. Note that in the playerFactory module we have moved the pure functions from the getPlayer function body to being independent local variables of the module. This means that they will only be created once when the module is used but will be available for use by all objects returned from the getPLayer function.</p>
<p>Next, because the refereeFactory only receives field and player objects from the matchFactory, it doesn't actually have a dependency on the, The matchFactory however is dependent on all 3 of the former modules.</p>
<div className="row">
  <div className="col-md-6">
    <figure>
      <div className="panel panel-code">
        <div className="panel-heading">refereeFactory.js</div>
        <pre>
          <code className="language-javascript">{`
define(function () {
    // needs improving for more complex shapes
    var isPointWithinPath = function isPointWithinPath (point, path) {
        var simpleCheck = (function () {
            var x = point[0],
            y = point[1],
            minx, maxx,
            miny, maxy;
            path.forEach(function (pathPoint) {
                if (minx === undefined || minx > pathPoint[0]) {
                    minx = pathPoint[0];
                }
                if (maxx === undefined || maxx < pathPoint[0]) {
                    maxx = pathPoint[0];
                }
                if (miny === undefined || miny > pathPoint[1]) {
                    miny = pathPoint[1];
                }
                if (maxy === undefined || maxy < pathPoint[1]) {
                    maxy = pathPoint[1];
                }
            });
            if (point[0] <= minx || point[0] >= maxx || point[1] <= miny || point[1] >= maxy) {
                return false;
            }
            return true;
        }());
        if (simpleCheck === false) {
            return false;
        }
        // Going to need to improve this check for more complex shapes
        return true;
    };
    var getReferee = function getIntegration () {
        var players = [],
        field,
        addPlayer = function addPlayer (p) {
            players.push(p);
        },
        getPlayers = function getPlayers () {
            return players;
        },
        setField = function setField (f) {
            field = f;
        },
        getField = function getField () {
            return field;
        },
        stepTime = function stepTime () {
            players.forEach(function (player, index, array) {
                if (player.isAlive()) {
                    player.move();
                    if (!isPlayerSafe(player, array, field)) {
                        player.die();
                    }
                }
            });
        },
        refereeObject = {
            addPlayer: addPlayer,
            getPlayers: getPlayers,
            setField: setField,
            getField: getField,
            stepTime: stepTime
        },
        isPlayerSafe = function isPlayerSafe (p, allPlayers, f) {
            var playerCoords = p.getCoords(),
            px = playerCoords[0],
            py = playerCoords[1],
            fieldBounds = f.getBoundaries(),
            fx = fieldBounds[0],
            fy = fieldBounds[1],
            pathHit;
            if (px < 0 || py < 0 || px > fx || py > fy) {
                return false;
            }
            pathHit = allPlayers.some(function (player) {
                return isPointWithinPath(p.getCoords(), player.getPath());
            });
            return !pathHit;
        };
        return refereeObject;
    };
    return getReferee;
});
          `}</code>
        </pre>
      </div>
      <figcaption>The refereeFactory.js. Again, the pure function <code className="language-javascript">isPointWithinPath</code> is encapsulated with the module and will only be loaded once</figcaption>
    </figure>
  </div>
  <div className="col-md-6">
    <figure>
      <div className="panel panel-code">
        <div className="panel-heading">matchFactory.js</div>
        <pre>
          <code className="language-javascript">{`
define(["./fieldFactory", "./playerFactory", '../src/refereeFactory'], function (getField, getPlayer, getReferee) {
    var getMatch = function getMatch () {
        var inPlay = true,
        matchResults,
        players = [],
        field = getField(),
        referee = getReferee(),
        isInPlay = function isInPlay () {
            return inPlay;
        },
        stepTime = function stepTime () {
            referee.stepTime();
            evaluateGameStatus();
        },
        getResults = function getResults () {
            return matchResults;
        },
        matchObject = {
            isInPlay: isInPlay,
            stepTime: stepTime,
            getResults: getResults
        },
        initialise = function initialise () {
            players.push(getPlayer());
            referee.setField(getField());
            players.forEach(function (p) {
                referee.addPlayer(p);
            });
        },
        evaluateGameStatus = function evaluateGameStatus () {
            var deadNum = 0;
            players.forEach(function (p) {
                if (!p.isAlive()) {
                    deadNum += 1;
                }
            });
            if (deadNum >= players.length) {
                inPlay = false;
            }
        };
        initialise();
        return matchObject;
    };
    return getMatch;
});
          `}</code>
        </pre>
      </div>
      <figcaption>The matchFactory.js has dependencies on all 3 of the previously defined modules</figcaption>
    </figure>
  </div>
</div>
<p>The test files only have a few simple changes. The wingTron_test.js file has been gutted to highlight where the changes are :</p>
<div className="row">
  <div className="col-md-6">
    <figure>
      <div className="panel panel-code">
        <div className="panel-heading">wingTron.html</div>
        <pre>
          <code className="language-markup">{`
<!doctype html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>wingTron Test Suite</title>
    <!-- Load local jQuery. -->
    <script src="../bower_components/jquery/dist/jquery.js"></script>
    <!-- Load local QUnit. -->
    <link rel="stylesheet" href="../bower_components/qunit/qunit/qunit.css" media="screen">
    <script src="../bower_components/qunit/qunit/qunit.js"></script>
    <!-- Load local lib and tests. -->
    <script data-main="../src/matchFactory.js" src="../src/require.js"></script>
    <script src="wingTron_test.js"></script>
    <!-- Removing access to jQuery and $. But it'll still be available as _$, if
         you REALLY want to mess around with jQuery in the console. REMEMBER WE
         ARE TESTING A PLUGIN HERE, THIS HELPS ENSURE BEST PRACTICES. REALLY. -->
    <script>window._$ = jQuery.noConflict(true);</script>
  </head>
  <body>
    <div id="qunit"></div>
    <div id="qunit-fixture">
      <span>lame test markup</span>
      <span>normal test markup</span>
      <span>awesome test markup</span>
    </div>
  </body>
</html>
          `}</code>
        </pre>
      </div>
      <figcaption>Only one line has been modified here to reference the require.js file we downloaded following the standard syntax for single entry point applications as ours will be</figcaption>
    </figure>
  </div>
  <div className="col-md-6">
    <figure>
      <div className="panel panel-code">
        <div className="panel-heading">wingTron_test.js</div>
        <pre>
          <code className="language-javascript">{`
requirejs(['../src/fieldFactory'], function(getField) {
  module('fieldFactory');
  test('check default field settings are ok', function (assert) {...});
  test('check default field settings are ok', function (assert) {...});
  test('check out of bounds functionality', function (assert) {...});
});

requirejs(['../src/playerFactory'], function(getPlayer) {
  module('playerFactory');
  test('check that the default coords are set', function (assert) {...});
  test('check that the updated properties are set', function (assert) {...});
  test('check that the player can change direction & when moved the coordinates are updated correctly', function (assert) {...});
  test('check that players stop moving when they are dead', function (assert) {...});
  test('check that a player has a record of all the points he has travelled', function (assert) {...});
  function testPathAgainstExpected (assert, player, expectedPath) {...}
  test('check that a player begins a new path when there position is set', function (assert) {...});
});

requirejs(['../src/fieldFactory', '../src/playerFactory', '../src/refereeFactory'], function(getField, getPlayer, getReferee) {
  module('refereeFactory');
  test('check if players & field are successfully stored together within the object, adding one player at a time', function (assert) {...});
  test('check that players positions are updated properly when instructed to move by the referee', function (assert) {...});
  test('check that players die when they are moved outside of the field boundaries', function (assert) {...});
  test('check a player is inside its own path and if so die', function (assert) {...});
});

requirejs(['../src/matchFactory'], function(getMatch) {
  module('matchFactory');
  test('check that a match can be setup without any parameters', function (assert) {...});
  test('check that the default values are set as expected', function (assert) {...});
  test('check that a match will be over after some time - players will inevitably die after a long game', function (assert) {...});
});
          `}</code>
        </pre>
      </div>
      <figcaption>The tests here are simply wrapped in requirejs statements to define the dependencies these tests have. Even though the refereeFactory module itself doesn't have dependencies on fieldFactory & playerFactory, the tests do as we need to define new fileds & players for testing with.</figcaption>
    </figure>
  </div>
</div>
<p>Before we move on, the modularity of the code now raises a question with the semantics we have in use. To get to the point, we are defining factory modules which are directly exposing the constructor function. This means that to get a player we access the getPlayer function directly. It would be much better if this function were contained within a factory object so that we access the constructor like so : playerFactory.getPlayer().</p>
<p>Achieving this is as simple as returning an object literal of {`{getPlayer: getPlayer}`} rather than just returning the function itself. Following this we have to change the way that the module is handled by it's dependants. This is most apparent in the wingTron_test.js file where we have to append the factory object name to the front of every constructor function call. The following figures should make the changes in the modules clear & I have included the complete test file again so that you can copy all the changes if you wish. After this delete your src/wingTron.js file as we no longer need this and check that everything is ok with the unit tests.</p>
<div className="row">
  <div className="col-md-6">
    <figure>
      <div className="panel panel-code">
        <div className="panel-heading">fieldFactory.js</div>
        <pre>
          <code className="language-javascript">{`
define(function () {
    var getField  = function getField () {
        ...
    };
    return {getField: getField};
});
          `}</code>
        </pre>
      </div>
      <figcaption>Only the return statement is changed here</figcaption>
    </figure>
  </div>
  <div className="col-md-6">
    <figure>
      <div className="panel panel-code">
        <div className="panel-heading">playerFactory.js</div>
        <pre>
          <code className="language-javascript">{`
define(function () {
    var pi = Math.PI,
    radianLookup = {...},
    beginPath = function beginPath (path, coords) {...},
    updatePathPoint = function updatePathPoint (path, coords) {...},
    addPathTurn = function addPathTurn (path) {...},
    getPlayer = function getPLayer () {...};
    return {getPlayer: getPlayer};
});
          `}</code>
        </pre>
      </div>
      <figcaption>Only the return statement is changed here</figcaption>
    </figure>
  </div>
</div>
<div className="row">
  <div className="col-md-6">
    <figure>
      <div className="panel panel-code">
        <div className="panel-heading">refereeFactory.js</div>
        <pre>
          <code className="language-javascript">{`
define(function () {
    // needs improving for more complex shapes
    var isPointWithinPath = function isPointWithinPath (point, path) {...};
    var getReferee = function getIntegration () {...};
    return {getReferee: getReferee};
});
          `}</code>
        </pre>
      </div>
      <figcaption>Only the return statement is changed here</figcaption>
    </figure>
  </div>
  <div className="col-md-6">
    <figure>
      <div className="panel panel-code">
        <div className="panel-heading">matchFactory.js</div>
        <pre>
          <code className="language-javascript">{`
define(["./fieldFactory", "./playerFactory", './refereeFactory'], function (fieldFactory, playerFactory, refereeFactory) {
    var getMatch = function getMatch () {
        ...
        field = fieldFactory.getField(),
        referee = refereeFactory.getReferee(),
        ...
        initialise = function initialise () {
            players.push(playerFactory.getPlayer());
            ...
        },
        ...
    };
    return {getMatch: getMatch};
});
          `}</code>
        </pre>
      </div>
      <figcaption>The return statement, the parameters which are passed in, and the use of those parameters has changed. This is what needs to be done to a much larger extent within wingTron_test.js.</figcaption>
    </figure>
  </div>
</div>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">wingTron_test.js</div>
    <pre>
      <code className="language-javascript">{`
requirejs(['../src/fieldFactory'], function(fieldFactory) {
  module('fieldFactory');
  test('check default field settings are ok', function (assert) {
    var field = fieldFactory.getField(),
    bounds = field.getBoundaries(),
    width = bounds[0],
    height = bounds[1];
    assert.equal(width, 100, "The default width is 100");
    assert.equal(height, 100, "The default height is 100");
  });

  test('check default field settings are ok', function (assert) {
    var field = fieldFactory.getField(),
    bounds, width, height;
    field.setBoundaries(150, 150);
    bounds = field.getBoundaries();
    width = bounds[0];
    height = bounds[1];
    assert.equal(width, 150, "The updated width is 150");
    assert.equal(height, 150, "The updated height is 150");
  });

  test('check out of bounds functionality', function (assert) {
    var field = fieldFactory.getField(),
    safePoints = [[0,0],[0,100],[100,0],[100,100],[50,50]],
    deadPoints = [[-1,0],[0,-1],[-1,-1], [0,101],[101,0],[101,101], [-1,101],[101,-1]];
    safePoints.forEach(function (item, index, array) {
      var outOfBounds = field.isPointOutOfBounds(item);
      assert.equal(outOfBounds, false);
    });
    deadPoints.forEach(function (item, index, array) {
      var outOfBounds = field.isPointOutOfBounds(item);
      assert.equal(outOfBounds, true);
    });
  });
});


requirejs(['../src/playerFactory'], function(playerFactory) {
  module('playerFactory');
  test('check that the default coords are set', function (assert) {
    var player = playerFactory.getPlayer(),
    playerCoords = player.getCoords(),
    playerx = playerCoords[0],
    playery = playerCoords[1],
    playerAlive = player.isAlive();
    assert.equal(playerx, 0, "Players default x coord is 0");
    assert.equal(playery, 0, "Players default y coord is 0");
    assert.equal(playerAlive, true, "Players are alive by default");
  });

  test('check that the updated properties are set', function (assert) {
    var player = playerFactory.getPlayer(),
    playerCoords, playerx, playery, playerAlive;
    player.setCoords([100,100]);
    playerCoords = player.getCoords();
    playerx = playerCoords[0];
    playery = playerCoords[1];
    player.die();
    playerAlive = player.isAlive();
    assert.equal(playerx, 100, "Players updated x coord is 100");
    assert.equal(playery, 100, "Players updated y coord is 100");
    assert.equal(playerAlive, false, "Players are not alive after they are dead");
  });

  test('check that the player can change direction & when moved the coordinates are updated correctly', function (assert) {
    var player = playerFactory.getPlayer(),
    playerCoords;
    player.move();
    playerCoords = player.getCoords();
    assert.equal(Math.round(playerCoords[0]), 1, 'Moving east - Player x position moved to 1');
    assert.equal(Math.round(playerCoords[1]), 0, 'Moving east - Player y position stayed the same');
    
    player.turnRight();
    player.move();
    playerCoords = player.getCoords();
    assert.equal(Math.round(playerCoords[0]), 1, 'Moving south - Player x position stayed the same');
    assert.equal(Math.round(playerCoords[1]), 1, 'Moving south - Player y position moved to 1');

    player.turnRight();
    player.move();
    playerCoords = player.getCoords();
    assert.equal(Math.round(playerCoords[0]), 0, 'Moving west - Player x position moved to 0');
    assert.equal(Math.round(playerCoords[1]), 1, 'Moving west - Player y position stayed the same');

    player.turnLeft();
    player.move();
    playerCoords = player.getCoords();
    assert.equal(Math.round(playerCoords[0]), 0, 'Moving south - Player x position stayed the same');
    assert.equal(Math.round(playerCoords[1]), 2, 'Moving south - Player y position moved to 2');

    player.turnLeft();
    player.move();
    playerCoords = player.getCoords();
    assert.equal(Math.round(playerCoords[0]), 1, 'Moving east - Player x position moved to 1');
    assert.equal(Math.round(playerCoords[1]), 2, 'Moving east - Player y position stayed the same');

    player.turnLeft();
    player.move();
    playerCoords = player.getCoords();
    assert.equal(Math.round(playerCoords[0]), 1, 'Moving north - Player x position has stayed the same');
    assert.equal(Math.round(playerCoords[1]), 1, 'Moving north - Player y position moved to 1');

    player.turnLeft();
    player.move();
    playerCoords = player.getCoords();
    assert.equal(Math.round(playerCoords[0]), 0, 'Moving west - Player x position has moved to 0');
    assert.equal(Math.round(playerCoords[1]), 1, 'Moving west - Player y position stayed the same');

    player.turnRight();
    player.move();
    playerCoords = player.getCoords();
    assert.equal(Math.round(playerCoords[0]), 0, 'Moving north - Player x position has stayed the same');
    assert.equal(Math.round(playerCoords[1]), 0, 'Moving north - Player y position moved to 0');
  });

  test('check that players stop moving when they are dead', function (assert) {
    var player = playerFactory.getPlayer(),
    playerCoords;
    player.die();
    player.move();
    playerCoords = player.getCoords();
    assert.equal(playerCoords[0], 0, 'A dead player cannot move');
    assert.equal(playerCoords[1], 0, 'A dead player cannot move');
  });

  test('check that a player has a record of all the points he has travelled', function (assert) {
    var player = playerFactory.getPlayer(),
    expectedPath = [[0,0],[0,0]];
    testPathAgainstExpected(assert, player, expectedPath);

    player.move();
    expectedPath = [[1,0],[0,0]];
    testPathAgainstExpected(assert, player, expectedPath);

    player.move();
    expectedPath = [[2,0],[0,0]];
    testPathAgainstExpected(assert, player, expectedPath);

    player.turnRight();
    player.move();
    expectedPath = [[2,1],[2,0],[0,0]];
    testPathAgainstExpected(assert, player, expectedPath);

    player.turnRight();
    player.move();
    expectedPath = [[1,1],[2,1],[2,0],[0,0]];
    testPathAgainstExpected(assert, player, expectedPath);

    player.turnLeft();
    player.move();
    expectedPath = [[1,2],[1,1],[2,1],[2,0],[0,0]];
    testPathAgainstExpected(assert, player, expectedPath);

    player.turnLeft();
    player.move();
    expectedPath = [[2,2],[1,2],[1,1],[2,1],[2,0],[0,0]];
    testPathAgainstExpected(assert, player, expectedPath);


    player.move();
    expectedPath = [[3,2],[1,2],[1,1],[2,1],[2,0],[0,0]];
    testPathAgainstExpected(assert, player, expectedPath);

    player.move();
    expectedPath = [[4,2],[1,2],[1,1],[2,1],[2,0],[0,0]];
    testPathAgainstExpected(assert, player, expectedPath);

    player.turnLeft();
    player.move();
    expectedPath = [[4,1],[4,2],[1,2],[1,1],[2,1],[2,0],[0,0]];
    testPathAgainstExpected(assert, player, expectedPath);
  });

  function testPathAgainstExpected (assert, player, expectedPath) {
    var playerPath = player.getPath();
    assert.equal(playerPath.length, expectedPath.length, 'Player has recorded the correct number of points on the path');
    expectedPath.forEach(function (point, index) {
      assert.equal(Math.round(playerPath[index][0]), point[0], 'x point is recorded in the correct location');
      assert.equal(Math.round(playerPath[index][1]), point[1], 'y point is recorded in the correct location');
    });
  }

  test('check that a player begins a new path when there position is set', function (assert) {
    var player = playerFactory.getPlayer(),
    expectedPath = [[0,0],[0,0]];
    testPathAgainstExpected(assert, player, expectedPath);
    player.setCoords([20,15]);
    expectedPath = [[20,15],[20,15]];
    testPathAgainstExpected(assert, player, expectedPath);
  });
});

requirejs(['../src/fieldFactory', '../src/playerFactory', '../src/refereeFactory'], function(fieldFactory, playerFactory, refereeFactory) {
  module('refereeFactory');
  test('check if players & field are successfully stored together within the object, adding one player at a time', function (assert) {
    var player1 = playerFactory.getPlayer(),
    player2 = playerFactory.getPlayer(),
    field = fieldFactory.getField(),
    referee = refereeFactory.getReferee(),
    playerArray;
    referee.addPlayer(player1);
    referee.addPlayer(player2);
    referee.setField(field);
    playerArray = referee.getPlayers();
    assert.equal(playerArray[0], player1, 'The player1 is successfully added to the player list');
    assert.equal(playerArray[1], player2, 'The player2 is successfully added to the player list');
    assert.notEqual(playerArray[1], player1, 'Confirmed that the two players are not being mistaken for one another');
    assert.notEqual(playerArray[0], player2, 'Confirmed that the two players are not being mistaken for one another');
    assert.equal(referee.getField(), field, 'The field is successfully set within the referee object');
  });

  test('check that players positions are updated properly when instructed to move by the referee', function (assert) {
    var player1 = playerFactory.getPlayer(),
    player2 = playerFactory.getPlayer(),
    field = fieldFactory.getField(),
    player1Coords,
    player2Coords;
    referee = refereeFactory.getReferee();
    referee.addPlayer(player1);
    referee.addPlayer(player2);
    referee.setField(field);

    referee.stepTime();
    player1Coords = player1.getCoords();
    player2Coords = player2.getCoords();
    assert.equal(player1Coords[0], 1, 'Player1 x position updated correctly');
    assert.equal(player1Coords[1], 0, 'Player1 y position remained the same as expected');
    assert.equal(player2Coords[0], 1, 'Player2 x position updated correctly');
    assert.equal(player2Coords[1], 0, 'Player2 y position remained the same as expected');

    player1.turnRight();
    referee.stepTime();
    player1Coords = player1.getCoords();
    player2Coords = player2.getCoords();
    assert.equal(player1Coords[0], 1, 'Player1 x position remained the same as expected');
    assert.equal(player1Coords[1], 1, 'Player1 y position updated correctly');
    assert.equal(player2Coords[0], 2, 'Player2 x position updated correctly');
    assert.equal(player2Coords[1], 0, 'Player2 y position remained the same as expected');
  });


  test('check that players die when they are moved outside of the field boundaries', function (assert) {
    var player1 = playerFactory.getPlayer(),
    player2 = playerFactory.getPlayer(),
    player3 = playerFactory.getPlayer(),
    player4 = playerFactory.getPlayer(),
    field = fieldFactory.getField(),
    referee = refereeFactory.getReferee(),
    player1Alive,
    player2Alive,
    player3Alive,
    player4Alive;

    field.setBoundaries(3,3);
    referee.setField(field);
    referee.addPlayer(player1);
    referee.addPlayer(player2);
    referee.addPlayer(player3);
    referee.addPlayer(player4);

    player1Alive = player1.isAlive();
    player2Alive = player2.isAlive();
    player3Alive = player3.isAlive();
    player4Alive = player4.isAlive();
    assert.ok(player1Alive && player2Alive && player3Alive && player4Alive, 'Players inside boundaries are alive');

    player2.turnRight();
    player3.turnLeft();
    player4.turnLeft();
    player4.turnLeft();

    referee.stepTime();
    player1Alive = player1.isAlive();
    player2Alive = player2.isAlive();
    player3Alive = player3.isAlive();
    player4Alive = player4.isAlive();
    assert.ok(player1Alive && player2Alive, 'Players inside boundaries are alive');
    assert.ok(!player3Alive && !player4Alive, 'Players outside boundaries are dead');

    referee.stepTime();
    referee.stepTime();
      player1Alive = player1.isAlive();
    player2Alive = player2.isAlive();
    player3Alive = player3.isAlive();
    player4Alive = player4.isAlive();
    assert.ok(player1Alive && player2Alive, 'Players inside boundaries are alive');
    assert.ok(!player3Alive && !player4Alive, 'Players outside boundaries are dead');

    referee.stepTime();
    player1Alive = player1.isAlive();
    player2Alive = player2.isAlive();
    player3Alive = player3.isAlive();
    player4Alive = player4.isAlive();
    player1Alive = player1.isAlive();
    assert.ok(!player1Alive && !player2Alive && !player3Alive && !player4Alive, 'Players outside boundaries are dead');
  });

  test('check a player is inside its own path and if so die', function (assert) {
    var player1 = playerFactory.getPlayer(),
    field = fieldFactory.getField(),
    referee = refereeFactory.getReferee(),
    loopIndex;
    referee.setField(field);
    referee.addPlayer(player1);
    for (loopIndex=0; loopIndex<20; loopIndex++) {
      referee.stepTime();
    }
    assert.equal(player1.isAlive(), true, 'Players outside their own path should not be dead');

    player1.turnRight();
    for (loopIndex=0; loopIndex<20; loopIndex++) {
      referee.stepTime();
    }
    assert.equal(player1.isAlive(), true, 'Players outside their own path should not be dead');

    player1.turnRight();
    referee.stepTime();
    assert.equal(player1.isAlive(), true, 'Players outside their own path should not be dead');
    
    player1.turnRight();
    referee.stepTime();
    assert.equal(player1.isAlive(), false, 'Players inside their own path should be dead');
  });
});

// test that players become dead when they hit a polygon wall http://stackoverflow.com/questions/217578/how-can-i-determine-whether-a-2d-point-is-within-a-polygon



requirejs(['../src/matchFactory'], function(matchFactory) {
  module('matchFactory');
  test('check that a match can be setup without any parameters', function (assert) {
    var match = matchFactory.getMatch();
    assert.ok(typeof match.getResults === 'function', 'The match produced has a getResults function');
    assert.ok(typeof match.isInPlay === 'function', 'The match produced has a isInPlay function');
    assert.ok(typeof match.stepTime === 'function', 'The match produced has a stepTime function');
  });
  test('check that the default values are set as expected', function (assert) {
    var match = matchFactory.getMatch();
    assert.equal(match.isInPlay(), true, 'Match starts inPlay');
  });
  test('check that a match will be over after some time - players will inevitably die after a long game', function (assert) {
    var match = matchFactory.getMatch(),
    loopIndex;
    for (loopIndex=0; loopIndex < 5000; loopIndex++) {
      match.stepTime();
    }
    assert.equal(match.isInPlay(), false, 'The game will end eventually without any intervention');
  });
});
      `}</code>
    </pre>
  </div>
  <figcaption>Both the parameters which are passed into the requirejs function, and the use of those parameters has changed</figcaption>
</figure>
<p>I will endeavour to finish this guide, unfortunately now I have run out of time. You can finish the analysis yourself however by looking at the two codebases included in the links at the top of this article</p>
          </div>
      </div>
    }
};

export default BuildAGameWithTddPage;
