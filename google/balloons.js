var ctx=document.getElementsByTagName('canvas')[0].getContext('2d');
ctx.canvas.width=document.documentElement.clientWidth;
ctx.canvas.height=document.documentElement.clientHeight;
var originX=ctx.canvas.width/2,
originY=ctx.canvas.height/2;
ctx.arc(originX,originY-75,250,0,2*Math.PI);
ctx.arc(originX*2/3,originY-75,150,0,2*Math.PI);
ctx.arc(originX*4/3,originY-75,150,0,2*Math.PI);
ctx.fillStyle='#425B17';
ctx.fill();
ctx.beginPath();
ctx.arc(originX,originY*1.5,35,0,2*Math.PI);
ctx.arc(originX+20,originY*1.66,20,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(originX+40,originY*1.78,10,0,2*Math.PI);
ctx.fill();