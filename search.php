<?php
$to = $_POST["to"];
$from = $_POST["from"];
//???현재 날짜와 시간까지 받아와서

$busFile = fopen("./data/busData.txt", "a+") or die("Unable to open file!");
while (!feof($busFile)){
  $line = fgets($busFile);
  $indata = explode('|',fgets($busFile));

  if((!strcmp($to,$indata[2])) && (!strcmp($from,$indata[3]))){
    if (true) {
      //???비교를 할때 출발지 목적지 뿐만 아니라
      //날짜와 시간까지 보고 해당하는 버스를 전부 echo
      echo "{$indata[0]}|{$indata[1]}|{$indata[2]}|{$indata[3]}|{$indata[4]}|{$indata[5]}$";
    }
  }
}
fclose($busFile);
?>
