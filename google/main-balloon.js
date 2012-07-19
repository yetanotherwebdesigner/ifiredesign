var balloonCtx=document.getElementById('main-balloon').getContext('2d');
var mainBalloon=new Image;
balloonCtx.canvas.width=cWidth;
balloonCtx.canvas.height=cHeight;
mainBalloon.src='images/thought-balloon.png';
//mainBalloon.width*=1.25;
//mainBalloon.height*=1.25;
balloonCtx.drawImage(mainBalloon,originX-mainBalloon.width/2,originY-mainBalloon.height/2);