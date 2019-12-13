<?php
header ("Content-type:text/html; charset=utf-8");
$HTTP_REFERER=$_SERVER['HTTP_REFERER'];

$memberFile = fopen("./data/busMember.txt", "a+") or die("openError|");
while (!feof($memberFile)){
}
fclose($memberFile);
 ?>
