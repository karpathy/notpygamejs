# notpygamejs
Game making library for Javascript with the Canvas element.
Andrej Karpathy
1 May 2012

## Usage
This library abstracts away boring stuff such as game loop, mouse, keyboard API calls, etc etc etc. All that is left to do is to implement the meat of the following functions:

```javascript
//executes once in the beginning
function myinit(){ }

//executes every tick, FPS (typically around 30-50) times a second
function update(){ }

//executes every tick right after update()
function draw(){
    ctx.clearRect(0,0,WIDTH,HEIGHT);
}

//event function when a click occurs. x, y coordinates of click are given
function mouseClick(x, y){ }

//events for key up and down. key value is passed in.
function keyUp(key){ }
function keyDown(key){ }
```

The library assumes that your HTML file looks, for example as:

```html
<body onLoad="NPGinit(50);">
<canvas id="NPGcanvas" width="500" height="500">Browser not supported for Canvas. Get a real browser.</canvas>
```

In other words, call NPGinit({#FPS}) function once somewhere in your code. The function will hook its functionality
into a canvas on the page with id "NPGcanvas". Since this is not using any namespaces, a few things get added to global namespace (I know, I know...). For now, extra variables include:

```javascript
var canvas;
var ctx;
var WIDTH;
var HEIGHT; 
var FPS;
```

The variable ctx will get instantiated to the canvas context that you should use for drawing. See demos for details.

## License
BSD