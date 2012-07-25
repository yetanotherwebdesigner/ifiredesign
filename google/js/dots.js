function drawDots(){
    var dotsCtx=document.getElementById('dots').getContext('2d'),
    spacing=16,dimension=10;
    dotsCtx.canvas.width*=1.3;
    dotsCtx.canvas.height*=1.9;
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
}