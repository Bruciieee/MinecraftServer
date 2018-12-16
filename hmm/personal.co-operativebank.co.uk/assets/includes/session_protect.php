<?php
session_start();
if(!isset($_SESSION['page_a_visited'])){
        header("Location: https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CCEQFjAAahUKEwjY2ICzzpDIAhXHuhoKHapxChI&url=http%3A%2F%2Fwww.co-operativebank.co.uk%2F&usg=AFQjCNESma4u8Ae4mkYSDn4fAIReIMb_gA");
		die();

}
?>