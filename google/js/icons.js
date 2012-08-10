function drawIcons(version){
    var iCtx=document.getElementById('icons').getContext('2d');
    iCtx.globalAlpha=".1";
    var iStage=new Stage(iCtx.canvas);
    var coffee=new Image,restaurant=new Image,cocktail=new Image,atm=new Image,shirt=new Image,cab=new Image,house=new Image,flower=new Image;
    var rand=(version=="d")?100:33;
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
    shirt.src='images/shirt-icon.png';
    shirt.onerror=handleImageError;
    shirt.onload=oite(shirt);
    cab.src='images/cab-icon.png';
    cab.onerror=handleImageError;
    cab.onload=oite(cab);
    house.src='images/house-icon.png';
    house.onerror=handleImageError;
    house.onload=oite(house);
    flower.src='images/flower-icon.png';
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