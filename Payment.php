<?php
session_start();

//여기부터 코드 작성
header ("Content-type:text/html; charset=utf-8");
$HTTP_REFERER=$_SERVER['HTTP_REFERER'];

$busnumber = $_POST["busnumber"];
$useridnumber = $_POST["useridnumber"];

$myfile = fopen("./data/reserveList.txt", "a+") or die("Unable to open file!");

while (!feof($myfile)){
    $data = fgets($myfile);
    $indata = explode('|',$data);
}

fwrite($myfile, "{$useridnumber}|{$busnumber}\n");
fclose($myfile);

 ?>
