<?php
// 관광명소 찾는 것,,,,
$destination = $_POST['destination'];
$fileName = "data/".$destination."_Place".".txt";
$myfile = fopen($fileName, "r") or die ("입력하신 목적지에 대한 관광명소가 존재하지 않습니다.");
$var = fgets($myfile);
if($var !=null){
  echo $var;
  while(!feof($myfile)){
    echo fgets($myfile);
  }
}
fclose($myfile);
 ?>
