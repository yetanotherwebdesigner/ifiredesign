var cWidth=document.documentElement.clientWidth,originX=cWidth/2,
cHeight=document.documentElement.clientHeight,originY=cHeight/2;
function resizeCanvas(){
    for(var i=0;i<document.getElementsByTagName('canvas').length;i++){
	document.getElementsByTagName('canvas')[i].width=cWidth;
	document.getElementsByTagName('canvas')[i].height=cHeight;
    }    
}
