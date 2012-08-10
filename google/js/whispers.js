var wWidth=$(window).width(),wHeight=$(window).height();
$("nav a").css({width:(wWidth/4)|0,left:0,display:"inline"});
$("nav a+a").css({left:(wWidth/4)|0});
$("nav a+a+a").css({left:2*(wWidth/4)|0});
$("nav a+a+a+a").css({left:3*(wWidth/4)|0});
if(wWidth>768){//if tablet/desktop
    $("#search-more").css({left:wWidth,height:((wHeight-60)*5/16)|0,width:wWidth});
    $("#search-more li a").css({height:((wHeight-60)*5/16)|0,width:(wWidth/9)|0});
    $("#accounts").css({left:-wWidth,top:60+((wHeight-60)*5/16)|0,height:((wHeight-60)*5/16),width:wWidth});
    $("#accounts li a").css({height:((wHeight-60)*5/16)|0,width:(wWidth/9)|0});
    $("#chrome").css({left:wWidth,top:60+((wHeight-60)*5/8)|0,height:((wHeight-60)/4),width:wWidth});
    $("#chrome div").css({"margin-top":-($("#chrome div").height())/2});
    $("#about").css({left:-wWidth,top:60+((wHeight-60)*7/8)|0,height:((wHeight-60)/8),width:wWidth});
    $("#about li").css({width:(wWidth/5)|0});
}
else{
    $("#search-more").css({left:wWidth,height:wHeight,width:wWidth});
    $("#search-more li a").css({height:(wHeight-60)/9,width:wWidth});
    $("#accounts").css({left:-wWidth,height:wHeight,width:wWidth});
    $("#accounts li a").css({height:(wHeight-60)/9,width:wWidth});    
    $("#chrome").css({left:wWidth,height:wHeight,width:wWidth});
    $("#about").css({left:-wWidth,height:wHeight,width:wWidth});
}
var whispers=[{ id:"#search-more",out:0},{ id:"#accounts",out:0},{ id:"#chrome",out:0},{ id:"#about",out:0}];
$("nav a").click(function(e){
		     e.preventDefault();
		     var id=$(this).attr("href").slice(0,-2);
		     if(whisperHidden(id)==0){
			 slideIn(id);
			 toggleInOut(id);
		     }
		     else{
			 slideOut(id);
			 toggleInOut(id);
		     }
		 });      
function whisperHidden(id){
    for(var i=0;i<whispers.length;i++){
	if(whispers[i].id==id){
	    return whispers[i].out;
	}
    }
}
function toggleInOut(id){
    for(var i=0;i<whispers.length;i++){
	if(whispers[i].id==id){
	    whispers[i].out=(whispers[i].out==0)?1:0;
	}
    }
}
function slideIn(id){
    $(id).css({display:"block"}).animate({left:0},'fast','easeInQuint');
}
function slideOut(id){
    if(id=="#search-more"||id=="#chrome"){
	slide(wWidth);	
    }
    else if(id=="#accounts"||id=="#about"){
	slide(-wWidth);	
    }
    function slide(dimensions){
	$(id).animate({left:dimensions},{duration:'slow',specialEasing:'easeOutQuint',complete:function(){
					     $(this).delay(5000).hide();
					 }});
    }
}