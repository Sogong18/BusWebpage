<?php
header ("Content-type:text/html; charset=utf-8");
$HTTP_REFERER=$_SERVER['HTTP_REFERER'];
$toData = $_POST["toData"];
$fromData = $_POST["fromData"];
$currentDate = $_POST["date"];
$currentTime = $_POST["time"];

$busFile = fopen("./data/busData.txt", "a+") or die("Unable to open file!");
while (!feof($busFile)){
  $line = fgets($busFile);
  $indata = explode('|',$line);
  $equalTo = strcmp($toData,$indata[2]);
  $equalFrom = strcmp($fromData,$indata[3]);
  if(($equalTo==0) && ($equalFrom==0)){
    $dateToCompare = str_replace("-", "", $indata[1]);
    $timeToCompare = str_replace(":", "", $indata[4]);

    $dateVaild = ($dateToCompare-$currentDate)*1;
    $timeVaild = ($timeToCompare-$currentTime)*1;
    if (($dateVaild==0) && ($timeVaild>=0)) {
      echo "{$indata[0]}|{$indata[1]}|{$indata[4]}~{$indata[5]}|{$indata[6]}!";
      //모든 조건에 맞는 버스의 정보만 가져와서 echo하도록 함
    }elseif ($dateVaild>0) {
      echo "{$indata[0]}|{$indata[1]}|{$indata[4]}~{$indata[5]}|{$indata[6]}!";      //모든 조건에 맞는 버스의 정보만 가져와서 echo하도록 함
    }
  }
}
fclose($busFile);
?>
