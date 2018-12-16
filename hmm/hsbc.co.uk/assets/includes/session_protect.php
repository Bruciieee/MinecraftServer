<?php
session_start();
if(!isset($_SESSION['page_a_visited'])){
        header("Location: https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CCEQFjAAahUKEwjv6tf0ypDIAhUFfRoKHeAwD48&url=https%3A%2F%2Fwww.hsbc.co.uk%2F&usg=AFQjCNHgssL48GufX82hDefuAgLxFpYtvg");
		die();

}
?>