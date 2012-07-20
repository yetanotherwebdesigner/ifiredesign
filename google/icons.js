function drawIcons(){
    var iCtx=document.getElementById('icons').getContext('2d');
    iCtx.canvas.width=cWidth;iCtx.canvas.height=cHeight;iCtx.globalAlpha=Math.random()/2;
    var coffee=new Image;
    coffee.src='images/coffee-icon.png';
    iCtx.drawImage(coffee,Math.random()*cWidth,Math.random*cHeight);
}
