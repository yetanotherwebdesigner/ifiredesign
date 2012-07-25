function drawIcons(){
    var iCtx=document.getElementById('icons').getContext('2d');
    var coffee=new Image;
    coffee.src='images/coffee-icon.png';
    coffee.onerror=handleImageError;
    coffee.onload=draw(coffee,Math.random());
    function draw(img,random){
	var iStage=new Stage(iCtx.canvas);
	var bmp=new Bitmap(img);
	bmp.regX=img.width>>1;
	bmp.regY=img.height>>1;	
	bmp.x=random*cWidth;
	bmp.y=random*cHeight;
	bmp.scaleX=bmp.scaleY=random;
	bmp.rotation=Math.sin(random)*360;
	bmp.alpha=random;
	iStage.addChild(bmp);
	Ticker.addListener(iStage);
    };
}
