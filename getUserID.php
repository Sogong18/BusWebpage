<?php
  session_start();
  header ("Content-type:text/html; charset=utf-8");
  $HTTP_REFERER=$_SERVER['HTTP_REFERER'];

  $memberFile = fopen("./data/busMember.txt", "a+") or die("openError|");
  while (!feof($memberFile)){
    $memberData = explode('|',fgets($memberFile));
    if(strcmp($_SESSION['userid'],$memberData[4])==0){
      echo "{$memberData[2]}|";
      break;
    }
  }
  fclose($memberFile);

  $reservefile = fopen("./data/reserveList.txt", "a+") or die("openError|");
  while (!feof($reservefile)){
    $indata = explode('|',fgets($reservefile));
    $isEqualId = $_SESSION['userid']==$indata[0];
    if($isEqualId){
      echo $indata[1]+"|";
    }
  }
  fclose($reservefile);

 ?>
