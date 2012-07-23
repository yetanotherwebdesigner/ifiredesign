var bCanvas=document.getElementById('main-balloon'),
balloonCtx=bCanvas.getContext('2d'),
mainBalloon=new Image;
balloonCtx.canvas.width=cWidth;
balloonCtx.canvas.height=cHeight;
/*mainBalloon.src='images/thought-balloon.png';
//mainBalloon.width*=1.25;
//mainBalloon.height*=1.25;
balloonCtx.drawImage(mainBalloon,originX-mainBalloon.width/2,originY-mainBalloon.height/2);

/* EaselJS Enabled Animation */
var stage,img,bmp,ratio;
//initialize function
function init(){
    ratio=0;
    img=new Image;
    img.onload=handleImageLoad;
    img.onerror=handleImageError;
    img.src='images/thought-balloon.png';    
}
// stop or reset 
function reset(){
    createjs.Ticker.removeListener(window);
    stage.removeAllChildren();
    stage.update();
}
//onload success
function handleImageLoad(){
    blowBalloon();
}
//onload failure
function handleImageError(){
    throw new Error("Image not loaded. Please check your Internet connection.");
}
function blowBalloon(){
    stage=new Stage(bCanvas);
    bmp=new Bitmap(img);
    bmp.regX=img.width>>1;
    bmp.regY=img.height>>1;
    bmp.x=originX;
    bmp.y=cHeight;
    bmp.scaleX=bmp.scaleY=0;
    stage.addChild(bmp);
    Tween.get(bmp,{loop:false})
    .to({y:originY,scaleX:1,scaleY:1},2000,Ease.get(1))
    .call(function(){$('input').fadeIn('fast');});
//    stage.update();
//    createjs.Ticker.addListener(window);

    Ticker.setFPS(20);
    Ticker.addListener(stage,false);
}
/*function tick(){
    if(ratio<Math.PI/2)	ratio+=Math.PI/125;
    else $('input').fadeIn('fast');
    var sineValue=Math.sin(ratio);
    bmp.setTransform(bmp.x,bmp.y,bmp.scaleX,bmp.scaleY,0,0,0,bmp.regX,bmp.regY);
    bmp.scaleX = bmp.scaleY = sineValue;
    stage.update();
}*/