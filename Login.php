<?php
header ("Content-type:text/html; charset=utf-8");
$HTTP_REFERER=$_SERVER['HTTP_REFERER'];
$Email = $_POST["Email"];
$pw = $_POST["password"];

$myfile = fopen("./data/busMember.txt", "a+") or die("Unable to open file!");
while (!feof($myfile)){
    $indata = explode('|',fgets($myfile));
    if((!strcmp($Email,$indata[0])) && (!strcmp($pw,$indata[1]))){
      echo $indata[2];
      return ;
    }else {
      echo "nothing";
    }
}
?>
