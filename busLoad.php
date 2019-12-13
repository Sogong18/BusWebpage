<?php
header ("Content-type:text/html; charset=utf-8");
$HTTP_REFERER=$_SERVER['HTTP_REFERER'];
$busNumData = $_POST["busNum"];

$busFile = fopen("./data/busData.txt", "a+") or die("openError");
while (!feof($busFile)){
  $line = fgets($busFile);
  $indata = explode('|',$line);

  $isEqualBusNum = strcmp($busNumData,$indata[0]);
  if($isEqualBusNum==0){
    $arriveTArr = explode(':',$indata[5]);
    $arriveT = $arriveTArr[0]*60+$arriveTArr[1];
    $departTArr = explode(':',$indata[4]);
    $departT = $departTArr[0]*60+$departTArr[1];
    if($arriveT<$departT){
      $arriveT += 24*60;
    }
    $duTime = $arriveT-$departT;
    //소요시간 구하기
    $remainingSeat = $indata[6];

    echo "{$indata[1]}|{$indata[2]}|{$indata[3]}|{$indata[4]}|{$duTime}|{$remainingSeat}";
    break;
  }
}
fclose($busFile);
?>
