function drawIcons(){
    var iCtx=document.getElementById('icons').getContext('2d');
    iCtx.globalAlpha=".1";
    var iStage=new Stage(iCtx.canvas);
    var coffee=new Image,restaurant=new Image,cocktail=new Image,atm=new Image;
    coffee.src='images/coffee-icon.png';
    coffee.onerror=handleImageError;
    coffee.onload=oite(coffee);
    restaurant.src='images/restaurant-icon.png';
    restaurant.onerror=handleImageError;
    restaurant.onload=oite(restaurant);
    cocktail.src='images/cocktail-icon.png';
    cocktail.onerror=handleImageError;
    cocktail.onload=oite(cocktail);
    atm.src='images/atm-icon.png';
    atm.onerror=handleImageError;
    atm.onload=oite(atm);
    function oite(img){
	for(var i=0;i<Math.floor(Math.random()*100);i++){
	    var bmp=new Bitmap(img),random=Math.random();;
	    bmp.regX=img.width>>1;
	    bmp.regY=img.height>>1;	
	    bmp.x=Math.random()*cWidth;
	    bmp.y=Math.random()*cHeight;
	    bmp.scaleX=bmp.scaleY=random;
	    bmp.rotation=Math.sin(random)*360;
	    bmp.alpha=random>.5?random-.45:+.45;
	    iStage.addChild(bmp);
	}
	Ticker.addListener(iStage);	
    }

}