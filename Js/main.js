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
	})
})







