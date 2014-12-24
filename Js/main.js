$(document).ready(function(){
	// alert("hitech");
	$("#base").hide();
	$("#adv").hide();
	$("#basic").click(function(){
		$("#base").fadeToggle("slow");
	})
	$("#advance").click(function(){
		$("#adv").fadetoggle("slow");
	})
})







$(document).ready(function (){
	$('.title').bind("mouseover",hit);
});
function hit (evt) {
	alert("hello");
}