function scriptLayout(){
    $("nav a").css({width:(cWidth/4)|0,right:0,display:"inline"});
    $("nav a+a").css({right:(cWidth/4)|0});
    $("nav a+a+a").css({right:2*(cWidth/4)|0});
    $("nav a+a+a+a").css({right:3*(cWidth/4)|0});
    $("#search-more").css({right:cWidth,height:((cHeight-60)*5/16)|0,width:cWidth});
    $("#search-more li a").css({height:((cHeight-60)*5/16)|0,width:(cWidth/9)|0});
    $("#accounts").css({left:-cWidth,top:60+((cHeight-60)*5/16)|0,height:((cHeight-60)*5/16),width:cWidth});
    $("#accounts li a").css({height:((cHeight-60)*5/16)|0,width:(cWidth/9)|0});
    $("#chrome").css({left:cWidth,top:60+((cHeight-60)*5/8)|0,height:((cHeight-60)/4),width:cWidth});
    $("#chrome div").css({"margin-top":-($("#chrome div").height())/2});
    $("#about").css({left:-cWidth,top:60+((cHeight-60)*7/8)|0,height:((cHeight-60)/8),width:cWidth});
    $("#about li").css({width:(cWidth/5)|0});
}
var whispers=[{ id:"#search-more",out:0},{ id:"#accounts",out:0},{ id:"#chrome",out:0},{ id:"#about",out:0}];
$(".desktop nav a").click(function(e){
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
	slide(cWidth);	
    }
    else if(id=="#accounts"||id=="#about"){
	slide(-cWidth);	
    }
    function slide(dimensions){
	$(id).animate({left:dimensions},{duration:'slow',specialEasing:'easeOutQuint',complete:function(){
					     $(this).delay(5000).hide();
					 }});
    }
}