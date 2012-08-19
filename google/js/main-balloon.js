var bCanvas=document.getElementById('main-balloon'),
balloonCtx=bCanvas.getContext('2d'),mainBalloon=new Image,imgRatio=0.634765625;
/* EaselJS Enabled Animation */
var bStage,img,bmp,ratio;
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
    bStage.removeAllChildren();
    bStage.update();
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
    bStage=new Stage(bCanvas);
    bmp=new Bitmap(img);
    bmp.regX=img.width>>1;
    bmp.regY=img.height>>1;
    bmp.x=originX;
    bmp.y=cHeight;
    bmp.scaleX=bmp.scaleY=0;
    bStage.addChild(bmp);
    Tween.get(bmp,{loop:false})
    .to({y:371,scaleX:1,scaleY:1},2000,Ease.get(1))
    .call(function(){$('input').fadeIn('fast').focus();});//371=351+20
    Ticker.setFPS(20);
    Ticker.addListener(bStage,false);
}