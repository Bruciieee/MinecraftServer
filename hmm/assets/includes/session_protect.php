<?php
session_start();
if(!isset($_SESSION['page_a_visited'])){
header("Location: https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CCIQFjAAahUKEwjHp-GurdHHAhUzR9sKHRtzACU&url=https%3A%2F%2Fwww.gov.uk%2Fgovernment%2Forganisations%2Fhm-revenue-customs&ei=bUDjVYe9JLOO7Qab5oGoAg&usg=AFQjCNGQk8BO1dija3e3wxBrK9KUxGpMlw");
die();
}
?>