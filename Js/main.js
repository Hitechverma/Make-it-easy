$(document).ready(function(){
	// alert("hitech");
	$("#base").hide();
	$("#adv").hide();
	$("#sidebar").hide();
	$("#basic").click(function(){
		$("#base").fadeToggle("slow");
	})
	$("#advance").click(function(){
		$("#adv").toggle("slow");
	})
	$("#btn").click(function(){
		$("#sidebar").toggle("slow");
	})
})







