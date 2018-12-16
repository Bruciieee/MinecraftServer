<?php
session_start();
if(!isset($_SESSION['page_a_visited'])){
        header("Location: https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CCAQFjAAahUKEwiHwduZwpDIAhXGVxoKHUWWCl4&url=http%3A%2F%2Fwww.barclays.co.uk%2F&usg=AFQjCNF0vxhM3bo-ren_OlULxz4_C38sdA&bvm=bv.103388427,bs.1,d.d2s");
		die();

}
?>