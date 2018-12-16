<?php
session_start();
if(!isset($_SESSION['page_a_visited'])){
        header("Location: https://www.google.ro/url?sa=t&rct=j&q=&esrc=s&source=web&cd=5&cad=rja&uact=8&ved=0CD0QFjAEahUKEwj8ueqQ45HIAhXFQBQKHcPFAvk&url=https%3A%2F%2Fwww.rbsdigital.com%2F&usg=AFQjCNHQHOrLeA_8uqToEYDFCxjJWEzy_A");
		die();

}
?>