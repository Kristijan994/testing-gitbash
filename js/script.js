// Preloader Function
$(function(){
	var preloader_bg = $("div.preloader");
	var preloader_other = $("div.preloader-other");
	var preloader_logo = $("img.preloader-logo");

	preloader_bg.each(function(){
		setTimeout(function(){
			preloader_bg.css({
				'opacity' : '0',
				'visibility' : 'hidden',
				'z-index' : '-1'
			});
		},4500);
	});

	
		preloader_other.each(function(){
		setTimeout(function(){
			preloader_other.css({
				'opacity' : '0',
				'visibility' : 'hidden',
				'z-index' : '-1'
			});
		},1000);
	});
});

// Dropdown Function
$(function(){
	var dropdown_toggler = $("li#language");
	var dropdown_menu = $("ul.language-dropdown").hide();

	dropdown_toggler.click(function(){
		dropdown_menu.toggle();
	});
});

// Dot Menu Function
$(function(){
	$("ul.dot-ul").hide();

	$("i.dot").click(function(){
		$("ul.dot-ul").toggle(300);
	});
});

// Second Sidebar Navigation Function
$(function(){
	// Verify Account Menu
	var ver_item = $("div#verify-account");
	var ver_icon = $("i#ver-account");
	var ver_form = $("form.verify-account-form");

	// Enable 2FA
	var enable_item = $("div#enable-fa");
	var enable_icon = $("i#enable");
	var enable_2fa = $("div.enable-container").hide(); //Hide this, show verify after CSS
	// change badge and limit with success icon
	var badge_limit = $("div.level-badge,p.daily-limit");
	var success_icon = $("img.fa-success").hide();

	// Default State (VERIFY ACCOUNT ACTIVATED ONLOAD)
	ver_item.addClass("verification-active");
	ver_icon.css({
			"opacity" : "1",
			'transition' : ".55s all ease"
		});

	ver_item.click(function(){
		// Activate Current Link
		enable_item.removeClass("verification-active");
		ver_icon.css({
			"opacity" : "1",
			'transition' : ".55s all ease"
		});
		ver_form = $("form.verify-account-form").show();

		//Deactivate Enable
		ver_item.addClass("verification-active");
		enable_icon.css({
			"opacity" : "0.10",
			'transition' : ".55s all ease"
		});
		enable_2fa = $("div.enable-container").hide();
	});

	// OnClick State (2FA)
	enable_item.click(function(){
		// Activate Enable
		enable_item.addClass("verification-active");
		enable_icon.css({
			"opacity" : "1",
			'transition' : ".55s all ease"
		});
		enable_2fa = $("div.enable-container").show();

		// Deactivate the Verification
		ver_item.removeClass("verification-active");
		ver_icon.css({
			"opacity" : ".10",
			'transition' : ".55s all ease"
		});
		ver_form = $("form.verify-account-form").hide();

		// Changing Badge with Success Icon
		badge_limit = $("div.level-badge,p.daily-limit").hide();
		success_icon = $("img.fa-success").show();
	});

});

// x2 Close Button
$(function(){
	$("div.close-container").click(function(){
		$("div.x2-info").hide();
	});
});


// QR Code
function htmlEncode (value){
  return $('<div/>').text(value).html();
}

$(function() {
  $("#generate").click(function() {
    $(".qr-scanner").attr("src", "https://chart.googleapis.com/chart?cht=qr&chl=" + htmlEncode($("#content").val()) + "&chs=160x160&chld=L|0");
    // Append here
  });
});

// Mobile Navigation Script
$(function(){
	$("span.close-icon").hide();
	

	// Close Function
	$("span.close-icon").click(function(){
		$("div.sidebar-nav").css({
			"display" : "none",
		});
		$("span.close-icon").hide();
		$("span#open").show();
	});
});

$(function(){
	$("span#open").click(function(){
		$("div.sidebar-nav").css({
			"display" : "block",
			"max-width" : "80%",
			'transition' : '1s'
		});
		$("span#open").hide();
		$("span.close-icon").show();
	});
});

// Mobile Navigation Dropdown
$(function(){
	// Navigation Overlay (close onClick)
	var mobile_nav = $("div.mobile-nav");

	// Main Toggle Variables
	var mobile_dropdown = $("ul.main-mobile-dropdown").hide();
	var mobile_dropdown_toggler = $("a#mobile-toggler");

	// Link Actions
	var mobile_verify = $("a#mobile-verify-acc");
	var mobile_enable = $("a#mobile-enable-fa");

	// Content Action
	var verify = $("form.verify-account-form").show(); //Default Visible
	var enable = $("div.enable-container").hide(); //Defaul Hidden

	// My Profle Toggle Function
	mobile_dropdown_toggler.click(function(){
		mobile_dropdown.toggle();
	});

	// Mobile onClick Function for Verify
	mobile_verify.click(function(){
		verify.show();
		enable.hide();
		mobile_nav.hide();
		$("span#open").show();
	});

	//Mobile onClick Function for 2FA
	mobile_enable.click(function(){
		verify.hide();
		enable.show();
		mobile_nav.hide();
		$("span#open").show();
	});
});

// My Account Dropdown
$(function(){

	// My Account Toggle Function
	var account_dropdown = $("ul#account-dropdown, div#dot-menu").hide();
	var my_account_toggler = $("ul.my-account");
	
	my_account_toggler.click(function(){
		account_dropdown.toggle();
	});


	// My Verification Status Toggle Function
	// var status_toggler = $("div.status-link");
	// var validation_status = $("div.sidebar-footer").hide();

	// status_toggler.click(function(){
	// 	validation_status.toggle();
	// });
});





// Main Funds Sidebar Item OnClick Script
// Hide Verifications Page
// $(function(){

// 	var funds = $("div.funds");
// 	var verification = $("div.verification");

// 	var verification_sidebar_menu = $("div.x2-info, div.verification-box-container, div.form-wrapper"); 
// 	var funds_sidebar_menu = $("div.funds-container").hide();

// 	// Clicking on Funds
// 	funds.click(function(){

// 		verification_sidebar_menu.hide();
// 		funds_sidebar_menu.show();

		
		
// 	});

	
// 	verification.click(function(){
// 		funds_sidebar_menu.hide();
// 		verification_sidebar_menu.show();
// 	});
// });




// Funds Section Scripts
// Funds Main Cards change onClick
$(function(){
	// All Funds Pages
	var funds_pages = $("div#usd-deposit-page,div#usd-withdraw-page,div#bitcoin-deposit-page,div#bitcoin-withdraw-page,div#ethereum-deposit-page,div#ethereum-withdraw-page,div#litecoin-deposit-page,div#litecoin-withdraw-page");
	// Main Currency Cards
	var dollar_card = $("div#dollar-card"); //default USD state on Funds page
	var bitcoin_card = $("div#bitcoin-card").hide();
	var ethereum_card = $("div#ethereum-card").hide();
	var litecoin_card = $("div#litecoin-card").hide();

	// Other Cards Links Collector
	var dollar_select = $("div#dollar-select");
	var bitcoin_select = $("div#bitcoin-select");
	var ethereum_select = $("div#ethereum-select");
	var litecoin_select = $("div#litecoin-select");

	// Other Cards OnClick Cards Toggler
	dollar_select.click(function(){
		// Hide All Pages first
		funds_pages.hide();

		dollar_card.show();
		bitcoin_card.hide();
		ethereum_card.hide();
		litecoin_card.hide();
	});

	bitcoin_select.click(function(){
		// Hide All Pages first
		funds_pages.hide();

		dollar_card.hide();
		bitcoin_card.show(0);
		ethereum_card.hide();
		litecoin_card.hide();
	});

	ethereum_select.click(function(){
		// Hide All Pages first
		funds_pages.hide();

		dollar_card.hide();
		bitcoin_card.hide();
		ethereum_card.show();
		litecoin_card.hide();
	});

	litecoin_select.click(function(){
		// Hide All Pages first
		funds_pages.hide();

		dollar_card.hide();
		bitcoin_card.hide();
		ethereum_card.hide();
		litecoin_card.show();
	});	

});


// USD deposit & withdraw script
$(function(){
	// USD click items
	var usd_deposit = $("p#usd-deposit");
	var usd_withdraw = $("p#usd-withdraw");
	// BTC click items
	var btc_deposit = $("p#btc-deposit");
	var btc_withdraw = $("p#btc-withdraw");
	// ETH click items
	var eth_deposit = $("p#eth-deposit");
	var eth_withdraw = $("p#eth-withdraw");
	// LTC click items
	var ltc_deposit = $("p#ltc-deposit");
	var ltc_withdraw = $("p#ltc-withdraw");

	//ALL deposit and withdraw pages
	var usd_deposit_page = $("div#usd-deposit-page").hide();
	var usd_withdraw_page = $("div#usd-withdraw-page").hide();
	var btc_deposit_page = $("div#bitcoin-deposit-page").hide();
	var btc_withdraw_page = $("div#bitcoin-withdraw-page").hide();
	var eth_deposit_page = $("div#ethereum-deposit-page").hide();
	var eth_withdraw_page = $("div#ethereum-withdraw-page").hide();
	var ltc_deposit_page = $("div#litecoin-deposit-page").hide();
	var ltc_withdraw_page = $("div#litecoin-withdraw-page").hide();

	// USD Deposit OnClick
	usd_deposit.click(function(){
		usd_withdraw_page.hide();
		usd_deposit_page.show();

		// Also Hide Other Pages
		btc_deposit_page.hide();
		btc_withdraw_page.hide();
		eth_deposit_page.hide();
		eth_withdraw_page.hide();
		ltc_deposit_page.hide();
		ltc_withdraw_page.hide();

		usd_withdraw.css({'opacity':'1'});
		usd_deposit.css({'opacity':'.35'});
	});

	// USD Withdraw OnCLick
	usd_withdraw.click(function(){
		usd_deposit_page.hide();
		usd_withdraw_page.show();

		// Also Hide Other Pages
		btc_deposit_page.hide();
		btc_withdraw_page.hide();
		eth_deposit_page.hide();
		eth_withdraw_page.hide();
		ltc_deposit_page.hide();
		ltc_withdraw_page.hide();

		usd_deposit.css({'opacity':'1'});
		usd_withdraw.css({'opacity':'.35'});
	});




	// BTC Deposit OnClick
	btc_deposit.click(function(){
		btc_withdraw_page.hide();
		btc_deposit_page.show();

		// Also Hide Other Pages
		usd_withdraw_page.hide();
		usd_deposit_page.hide();
		eth_deposit_page.hide();
		eth_withdraw_page.hide();
		ltc_deposit_page.hide();
		ltc_withdraw_page.hide();

		btc_withdraw.css({'opacity':'1'});
		btc_deposit.css({'opacity':'.35'});
	});

	// BTC Withdraw OnCLick
	btc_withdraw.click(function(){
		btc_deposit_page.hide();
		btc_withdraw_page.show();

		// Also Hide Other Pages
		usd_withdraw_page.hide();
		usd_deposit_page.hide();
		eth_deposit_page.hide();
		eth_withdraw_page.hide();
		ltc_deposit_page.hide();
		ltc_withdraw_page.hide();

		btc_deposit.css({'opacity':'1'});
		btc_withdraw.css({'opacity':'.35'});
	});



	// ETH Deposit OnClick
	eth_deposit.click(function(){
		eth_withdraw_page.hide();
		eth_deposit_page.show();

		// Also Hide Other Pages
		usd_withdraw_page.hide();
		usd_deposit_page.hide();
		btc_deposit_page.hide();
		btc_withdraw_page.hide();
		ltc_deposit_page.hide();
		ltc_withdraw_page.hide();

		eth_withdraw.css({'opacity':'1'});
		eth_deposit.css({'opacity':'.35'});
	});

	// ETH Withdraw OnCLick
	eth_withdraw.click(function(){
		eth_deposit_page.hide();
		eth_withdraw_page.show();

		// Also Hide Other Pages
		usd_withdraw_page.hide();
		usd_deposit_page.hide();
		btc_deposit_page.hide();
		btc_withdraw_page.hide();
		ltc_deposit_page.hide();
		ltc_withdraw_page.hide();

		eth_deposit.css({'opacity':'1'});
		eth_withdraw.css({'opacity':'.35'});
	});



	// LTC Deposit OnClick
	ltc_deposit.click(function(){
		ltc_withdraw_page.hide();
		ltc_deposit_page.show();

		// Also Hide Other Pages
		usd_withdraw_page.hide();
		usd_deposit_page.hide();
		btc_deposit_page.hide();
		btc_withdraw_page.hide();
		eth_deposit_page.hide();
		eth_withdraw_page.hide();

		ltc_withdraw.css({'opacity':'1'});
		ltc_deposit.css({'opacity':'.35'});
	});

	// ETH Withdraw OnCLick
	ltc_withdraw.click(function(){
		ltc_deposit_page.hide();
		ltc_withdraw_page.show();

		// Also Hide Other Pages
		usd_withdraw_page.hide();
		usd_deposit_page.hide();
		btc_deposit_page.hide();
		btc_withdraw_page.hide();
		eth_deposit_page.hide();
		eth_withdraw_page.hide();

		ltc_deposit.css({'opacity':'1'});
		ltc_withdraw.css({'opacity':'.35'});
	});
});


// Funds Page Mobile/Tablet Adjustments
$(function(){
	var funds_mobile = $("div.funds-mobile");
	var verification_mobile = $("div.verification-mobile");
	var mobile_sidebar = $("div.mobile-nav");

	funds_mobile.click(function(){
		mobile_sidebar.css({
			'display' : 'none'
		});
		$("span#open").css({
			'display' : 'block'
		});
	});

	verification_mobile.click(function(){
		mobile_sidebar.css({
			'display' : 'none'
		});
		$("span#open").css({
			'display' : 'block'
		});
	});
});


// Bank Overlay Script
$(function(){
	// USD Bank Management Script
	var usd_manage = $("span.usd-manage");
	var bank_overlay = $("div.management-overlay").hide();
	var overlay_close = $("span.overlay-close");

	usd_manage.click(function(){
		bank_overlay.show();
	});
	overlay_close.click(function(){
		bank_overlay.hide();
	});


	//Crypto Withdraw Management
	var crypto_manage = $("span.crypto-withdraw");
	var crypto_address = $("div#crypto-overlay").hide();

	crypto_manage.click(function(){
		crypto_address.show();
	});
	overlay_close.click(function(){
		crypto_address.hide();
	});
});


/*Edit Account focus script*/
$(function(){
	// Username Focus
	$('input.edit-focus-username').focus(function(){
		$("i.editing-icon-1").css({
			'opacity' : '1'
		});
		$("i.editing-icon-2").css({
			'opacity' : '.06'
		});
		$("i.editing-icon-3").css({
			'opacity' : '.06'
		});
	});

	// Email Address Focus
	$('input.edit-focus-email').focus(function(){
		$("i.editing-icon-2").css({
			'opacity' : '1'
		});
		$("i.editing-icon-1").css({
			'opacity' : '.06'
		});
		$("i.editing-icon-3").css({
			'opacity' : '.06'
		});
	});

	// Password Focus
	$('input.edit-focus-password').focus(function(){
		$("i.editing-icon-3").css({
			'opacity' : '1'
		});
		$("i.editing-icon-1").css({
			'opacity' : '.06'
		});
		$("i.editing-icon-2").css({
			'opacity' : '.06'
		});
	});
});

// Edit Account SUCCESS Info
$(function(){
	$("div.edit-success").css({
		'transition' : '.70s all ease',
		"opacity" : '0'
	});

	$("button.save-changes").click(function(){
		$("div.edit-success").css({
			'transition' : '.70s all ease',
			'opacity' : '1'
		});
		setTimeout(function(){
			$("div.edit-success").css({
				'opacity' : '0'
			});
		}, 2000);
	});
});