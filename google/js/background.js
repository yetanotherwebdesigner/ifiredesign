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
function drawIcons(version){
    var iCtx=document.getElementById('icons').getContext('2d');
    iCtx.globalAlpha=".1";
    var iStage=new Stage(iCtx.canvas);
    var coffee=new Image,restaurant=new Image,cocktail=new Image,atm=new Image,shirt=new Image,cab=new Image,house=new Image,flower=new Image;
    var rand=(version=="d")?100:33;
    coffee.src='http://iir.yetanotherwebdesigner.com/google/images/coffee-icon.png';
    coffee.onerror=handleImageError;
    coffee.onload=oite(coffee);
    restaurant.src='http://iir.yetanotherwebdesigner.com/google/images/restaurant-icon.png';
    restaurant.onerror=handleImageError;
    restaurant.onload=oite(restaurant);
    cocktail.src='http://iir.yetanotherwebdesigner.com/google/images/cocktail-icon.png';
    cocktail.onerror=handleImageError;
    cocktail.onload=oite(cocktail);
    atm.src='http://iir.yetanotherwebdesigner.com/google/images/atm-icon.png';
    atm.onerror=handleImageError;
    atm.onload=oite(atm);
    shirt.src='http://iir.yetanotherwebdesigner.com/google/images/shirt-icon.png';
    shirt.onerror=handleImageError;
    shirt.onload=oite(shirt);
    cab.src='http://iir.yetanotherwebdesigner.com/google/images/cab-icon.png';
    cab.onerror=handleImageError;
    cab.onload=oite(cab);
    house.src='http://iir.yetanotherwebdesigner.com/google/images/house-icon.png';
    house.onerror=handleImageError;
    house.onload=oite(house);
    flower.src='http://iir.yetanotherwebdesigner.com/google/images/flower-icon.png';
    flower.onerror=handleImageError;
    flower.onload=oite(flower);
    function oite(img){
	for(var i=0;i<Math.floor(Math.random()*rand);i++){
	    var bmp=new Bitmap(img),random=Math.random();;
	    bmp.regX=img.width>>1;
	    bmp.regY=img.height>>1;	
	    bmp.x=Math.random()*cWidth;
	    bmp.y=Math.random()*cHeight;
	    bmp.scaleX=bmp.scaleY=random>.3?random:random*2;
	    bmp.rotation=Math.sin(random)*360;
	    bmp.alpha=random>.5?random/2:random*2;
	    iStage.addChild(bmp);
	}
	Ticker.addListener(iStage);	
    }
}