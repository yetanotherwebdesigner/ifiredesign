var out=0;
var lastAccessed;
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
			 $(".whisper").html($(targetContent).html());
			 lastAccessed=targetContent;
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
    if(targetContent=="#search-more"||targetContent=="#chrome")
	$("#rtl").css({display:"block",left:0}).html($(targetContent).html());
    else if(targetContent=="#accounts"||targetContent=="#about")
    	$("#ltr").css({display:"block",left:0}).html($(targetContent).html());
}
function slideOut(targetContent){
    if(targetContent=="#search-more"||targetContent=="#chrome")
	$("#rtl").css({display:"none",left:"3000px"}).html("");
    else if(targetContent=="#accounts"||targetContent=="#about")
	$("#ltr").css({display:"none",left:"-3000px"}).html("");
}