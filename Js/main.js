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
		$("#sidebar").toggle("slow");
		// $("#my_image").css("-ms-transform: rotate(90deg); -webkit-transform: rotate(90deg); -moz-transform: rotate(90deg); -o-transform: rotate(90deg);transform: rotate(90deg);");
	})

	// Fadeing animation
	$("body").css("display", "none");
 
    $("body").fadeIn(1000);
 
    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);     
    });
         
    function redirectPage() {
        window.location = linkLocation;
    }
})







