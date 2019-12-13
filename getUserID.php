<?php
  session_start();
  header ("Content-type:text/html; charset=utf-8");
  $HTTP_REFERER=$_SERVER['HTTP_REFERER'];

  $memberFile = fopen("./data/busMember.txt", "a+") or die("openError!");
  while (!feof($memberFile)){
    $memberData = explode('|',fgets($memberFile));
    if(strcmp($_SESSION['userid'],$memberData[4])==0){
      echo "{$memberData[2]}!";
      break;
    }
  }
  fclose($memberFile);

  $busNumList = "";
  $reservefile = fopen("./data/reserveList.txt", "a+") or die("openError!");
  while (!feof($reservefile)){
    $indata = explode('|',fgets($reservefile));
    $isEqualId = ($_SESSION['userid']==$indata[1]);
    if($isEqualId){
      $busNumList+= $indata[0]+"!";
    }
  }
  fclose($reservefile);

  $busNumListArray = explode('|',$busNumList);
  for ($i=0; $i < count($busNumListArray); $i++) {
    $busFile = fopen("./data/busData.txt", "a+") or die("openError!");
    while (!feof($busFile)){
      $line = fgets($busFile);
      $indata = explode('|',$line);

      $isEqualBusNum = strcmp($busNumListArray[$i],$indata[0]);
      if($isEqualBusNum==0){
        echo "{$indata[0]}     |{$indata[1]}     |{$indata[4]}~{$indata[5]}     |{$indata[2]}-{$indata[3]}!";
        break;
      }
    }
    fclose($busFile);
  }


 ?>
