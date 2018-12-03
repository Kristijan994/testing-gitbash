// New User Menu Scripts
$(function(){
	// Menu Box 1
	var menu_box_1 = $("#box-1-menu");
	var menu_txt_1 = $(".box-1");
	var menu_footer_1 = $(".footer-1");

	// Menu Box 2
	var menu_box_2 = $("#box-2-menu");
	var menu_txt_2 = $(".box-2");
	var menu_footer_2 = $(".footer-2");

	// Menu Box 3
	var menu_box_3 = $("#box-3-menu");
	var menu_txt_3 = $(".box-3");
	var menu_footer_3 = $(".footer-3");

	// Menu Box 4
	var menu_box_4 = $("#box-4-menu");
	var menu_txt_4 = $(".box-4");
	var menu_footer_4 = $(".footer-4");

	// Default Verify Account State
	menu_box_2.each(function(){
		menu_box_2.css({
        	'transition' : '.35s all ease',
        	'background' : '#222B46'
        });
        menu_txt_2.css({
        	"color" : "#fff"
        });
        menu_footer_2.css({
        	'transition' : '.35s all ease',
        	"background" : "#1A2340"
        });
        $("i.icon-2").css({'opacity' : '1'});
	});


    // ------------ Click Functions ------------

    // Containers
    var verify_account = $(".verify-account-form");
    var enable_fa = $(".enable-container").hide();

    // Verify Account
    menu_box_2.click(function(){

    	// Hide Other Containers
    	enable_fa.hide();

    	// Show Container
    	verify_account.show();

    	// Remove Other Box Styles
    	menu_box_4.css({
        	'transition' : '.35s all ease',
        	'background' : '#fff'
        });
        menu_txt_4.css({
        	"color" : "#1A2340"
        });
        menu_footer_4.css({
        	'transition' : '.35s all ease',
        	"background" : "#fff"
        });
        $("i.icon-4").css({'opacity' : '.15'});

    	// Append Style
    	menu_box_2.css({
        	'transition' : '.35s all ease',
        	'background' : '#222B46'
        });
        menu_txt_2.css({
        	"color" : "#fff"
        });
        menu_footer_2.css({
        	'transition' : '.35s all ease',
        	"background" : "#1A2340"
        });
        $("i.icon-2").css({'opacity' : '1'});
    });

    // Enable 2FA
    menu_box_4.click(function(){

    	// Hide Other Containers
    	verify_account.hide();

    	// Show Container
    	enable_fa.show();

    	// Remove Other Box Styles
    	menu_box_2.css({
        	'transition' : '.35s all ease',
        	'background' : '#fff'
        });
        menu_txt_2.css({
        	"color" : "#1A2340"
        });
        menu_footer_2.css({
        	'transition' : '.35s all ease',
        	"background" : "#fff"
        });
        $("i.icon-2").css({'opacity' : '.15'});

    	// Append Style
    	menu_box_4.css({
        	'transition' : '.35s all ease',
        	'background' : '#222B46'
        });
        menu_txt_4.css({
        	"color" : "#fff"
        });
        menu_footer_4.css({
        	'transition' : '.35s all ease',
        	"background" : "#1A2340"
        });
        $("i.icon-4").css({'opacity' : '1'});
    });

});