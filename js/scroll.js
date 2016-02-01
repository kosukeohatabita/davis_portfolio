$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
});

$('#collapse_icon').click(function () {
	alert('test toggle');
  /*$('#demo2').collapse('toggle');*/
});