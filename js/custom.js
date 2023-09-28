jQuery(function($){                               
	 // Hover Left
	 $("#index-fixLeft").hover(function(){
	 
	 // Background Colors
	 $("#stories-left").css("background-color","#95c4c7");
	 $("#stories-right").css("background-color","#fff");
	 
	 // Text Colors
	 $("#stories-left h4").css("color","#fff");
	 $("#stories-right h4").css("color","#e7e7e7");
	 
	 // Show or Hide Text Box
	 $("#left-post").css("opacity","1");
	 $("#right-post").css("opacity","0");
	 
	 });
	 
	 // Hover Right
	 
	 $("#index-fixRight").hover(function(){
	 
	 // Background Colors
	 $("#stories-right").css("background-color","#459360");
	 $("#stories-left").css("background-color","#fff");
	 
	 // Text Colors
	 $("#stories-right h4").css("color","#fff");
	 $("#stories-left h4").css("color","#e7e7e7");
	 
	 // Show or Hide Text Box
	 $("#right-post").css("opacity","1");
	 $("#left-post").css("opacity","0");
	 
	 });
});
											 
var DIVI = {"item_count":"%d Item","items_count":"%d Items"};
var et_builder_utils_params = {"condition":{"diviTheme":true,"extraTheme":false},"scrollLocations":["app","top"],"builderScrollLocations":{"desktop":"app","tablet":"app","phone":"app"},"onloadScrollLocation":"app","builderType":"fe"};
var et_frontend_scripts = {"builderCssContainerPrefix":"#et-boc","builderCssLayoutPrefix":"#et-boc .et-l"};
var et_pb_custom = {"et_frontend_nonce":"8ce593e6dd","subscription_failed":"Please, check the fields below to make sure you entered the correct information.","et_ab_log_nonce":"648af4087d","fill_message":"Please, fill in the following fields:","contact_error_message":"Please, fix the following errors:","invalid":"Invalid email","captcha":"Captcha","prev":"Prev","previous":"Previous","next":"Next","wrong_captcha":"You entered the wrong number in captcha.","wrong_checkbox":"Checkbox","ignore_waypoints":"no","is_divi_theme_used":"1","widget_search_selector":".widget_search","ab_tests":[],"is_ab_testing_active":"","page_id":"73","unique_test_id":"","ab_bounce_rate":"5","is_cache_plugin_active":"yes","is_shortcode_tracking":"","accent_color":"#7EBEC5","waypoints_options":[]};
var et_pb_box_shadow_elements = [];
