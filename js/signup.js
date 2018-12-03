// Signup Scripts

$(function(){
	var box_checker = $("div.box-checker");
	var box_check = $("div.box-check").hide();

	box_checker.click(function(){
		box_check.toggle();
	});
	
});