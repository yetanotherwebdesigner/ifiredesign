var dotsCtx=document.getElementsByTagName('canvas')[1].getContext('2d'),
spacing=16,
dimension=10;
dotsCtx.canvas.width=document.documentElement.clientWidth*1.3;
dotsCtx.canvas.height=document.documentElement.clientHeight*1.9;
console.log('canvas height is: '+dotsCtx.canvas.height+'canvas width is '+dotsCtx.canvas.width);
dotsCtx.globalAlpha=".1";
dotsCtx.fillStyle='#425B17';
dotsCtx.rotate(-Math.PI/12);
dotsCtx.translate(-190,0);
dotsCtx.beginPath();
for(var x=0.5;x<dotsCtx.canvas.width;x+=spacing){
    for(var y=0.5;y<dotsCtx.canvas.height;y+=spacing){
	dotsCtx.fillRect(x,y,dimension,dimension);
    }
}