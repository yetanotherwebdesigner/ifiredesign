var wWidth=$(window).width(),wHeight=$(window).height();
$("#search-more").css({left:wWidth,height:((wHeight-60)*5/16)|0});
$("#search-more li a").css({height:((wHeight-60)*5/16)|0,width:(wWidth/9)|0});
$("#accounts").css({left:-wWidth,top:60+((wHeight-60)*5/16)|0,height:((wHeight-60)*5/16)});
$("#accounts li a").css({height:((wHeight-60)*5/16)|0,width:(wWidth/9)|0});
$("#chrome").css({left:wWidth,top:60+((wHeight-60)*5/8)|0,height:((wHeight-60)/4)});
$("#about").css({left:-wWidth,top:60+((wHeight-60)*7/8)|0,height:((wHeight-60)/8)});
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