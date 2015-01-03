$(document).ready(function(){
	// alert("hitech");
	$("#base").hide();
	$("#adv").hide();
	$("#sidebar").hide();
	$("#close").click(function(){
		$("#sidebar").hide("slow");
	})
	$("#basic").click(function(){
		$("#base").fadeToggle("slow");
		$("#adv").hide("slow");
	})
	$("#advance").click(function(){
		$("#adv").toggle("slow");
		$("#base").hide("slow");
	})
	$("#btn").click(function(){
		$("#sidebar").slideToggle("fast");
	})

	// Fadeing animation
	$("body").css("display", "none");
 
    $("body").fadeIn(200);
 
    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(200, redirectPage);     
    });
         
    function redirectPage() {
        window.location = linkLocation;
    }
})







