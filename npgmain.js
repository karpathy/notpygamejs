//This function does all the boring canvas stuff. To use it, just create functions:
//update()          gets called every frame
//draw()            gets called every frame
//myinit()          gets called once in beginning
//mouseClick(x, y)  gets called on mouse click

var canvas;
var ctx;
var WIDTH;
var HEIGHT; 
var FPS;

function drawBubble(x, y, w, h, radius)
{
  var r = x + w;
  var b = y + h;
  ctx.beginPath();
  ctx.strokeStyle="black";
  ctx.lineWidth="2";
  ctx.moveTo(x+radius, y);
  ctx.lineTo(x+radius/2, y-10);
  ctx.lineTo(x+radius * 2, y);
  ctx.lineTo(r-radius, y);
  ctx.quadraticCurveTo(r, y, r, y+radius);
  ctx.lineTo(r, y+h-radius);
  ctx.quadraticCurveTo(r, b, r-radius, b);
  ctx.lineTo(x+radius, b);
  ctx.quadraticCurveTo(x, b, x, b-radius);
  ctx.lineTo(x, y+radius);
  ctx.quadraticCurveTo(x, y, x+radius, y);
  ctx.stroke();
}

function drawRect(x, y, w, h){
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.closePath();
    ctx.fill();
}

function drawCircle(x, y, r){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, true); 
    ctx.closePath();
    ctx.fill();
}

function eventClick(e) {
    
    //get position of cursor relative to top left of canvas
    var x;
    var y;
    if (e.pageX || e.pageY) { 
      x = e.pageX;
      y = e.pageY;
    } else { 
      x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; 
      y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop; 
    } 
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;
    
    //call user-defined callback
    mouseClick(x, y);
}

function init(){
    canvas = document.getElementById('mycanvas');
    ctx = canvas.getContext('2d');
    WIDTH = canvas.width;
    HEIGHT = canvas.height;
    canvas.addEventListener('click', eventClick, false);
    
    FPS = 10; //frames per secont to run at
    setInterval(tick, FPS);
    
    myinit();
}

function tick() {
    update();
    draw();
}