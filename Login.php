<?php
header ("Content-type:text/html; charset=utf-8");
$HTTP_REFERER=$_SERVER['HTTP_REFERER'];
$Email= $pw = "";
$Email = $_POST["Email"];
$pw = $_POST["password"];

$myfile = fopen("./data/busMember.txt", "a+") or die("Unable to open file!");
while (!feof($myfile)){
    $data = fgets($myfile);
    $indata = explode('|',$data);
    if(strcmp($id,$indata[0]) && strcmp($pw,$indata[1])){
      echo $id;
      return ;
    }
}

?>
