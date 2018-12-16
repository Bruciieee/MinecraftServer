<?php
session_start();
if(!isset($_SESSION['page_a_visited'])){
        header("Location: https://www.google.ro/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CBwQFjAAahUKEwjv8-ip8pHIAhVNBNsKHaYRDrA&url=http%3A%2F%2Fwww.santander.co.uk%2F&usg=AFQjCNGxsB2ppSgA2_EdiE9XLymB9HZLkQ");
		die();

}
?>