var out=0,
wWidth=$(window).width(),wHeight=$(window).height(),
lastAccessed;
console.log(wWidth,wHeight);
$("#ltr").css({left:-wWidth});
$("#rtl").css({left:wWidth});
$("nav a").click(function(e){
		     e.preventDefault();
		     var targetContent=$(this).attr("href").slice(0,-2);
		     if(out===0){
			 slideIn(targetContent);
			 out=1;
			 lastAccessed=targetContent;
		     }
		     else if(out==1&&targetContent==lastAccessed){
			 slideOut(targetContent);
			 out=0;
		     }
		     else if(out==1&&targetContent!=lastAccessed){
//do nothing
			 //			 $(".whisper").html($(targetContent).html());
			 //lastAccessed=targetContent;
		     }
		 });
/*
ABORTED FOR NOW COZ ANNOYING
 $("nav a").focus(function(e){
		     e.preventDefault();
		     if(out===0){
			 alert($(e.target)+" is focused, & shall slide out because whisper is still hidden.");out=1;console.log(out);
		     }
		     else{
			 alert($(e.target)+" is focused, but since whisper is already out, no sliding happens. IF content is diff from current content, content is extracted and simply pushed into current whisper; else nothing happens.");out=0;console.log(out); 
		     }
		 });*/
function slideIn(targetContent){
    if(targetContent=="#search-more"||targetContent=="#accounts")
	$("#rtl").css({display:"block"}).animate({left:(wWidth-$("#rtl").width())-10},'fast','easeInQuint').html($(targetContent).html());
    else if(targetContent=="#chrome"||targetContent=="#about")
    	$("#ltr").css({display:"block"}).animate({left:"10px"},'fast','easeInQuint').html($(targetContent).html());
}
function slideOut(targetContent){
    if(targetContent=="#search-more"||targetContent=="#accounts"){
	$("#rtl").animate({left:wWidth},'fast','easeOutQuint');
	//$("#rtl").css({display:"none"});
    }
    else if(targetContent=="#chrome"||targetContent=="#about"){
	$("#ltr").animate({left:-wWidth-7},'fast','easeOutQuint');
//    	$("#ltr").css({display:"none"});
    }
}