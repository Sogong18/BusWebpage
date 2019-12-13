<?php
  session_start();
  header ("Content-type:text/html; charset=utf-8");
  $HTTP_REFERER=$_SERVER['HTTP_REFERER'];

  $myfile = fopen("./data/reserveList.txt", "a+") or die("openError|");
  echo $_SESSION['userid']+"|";
  while (!feof($myfile)){
    //사용자의 이름과 일치하는 기록을 전부 찾음
      // $indata = explode('|',fgets($myfile));
      // if((!strcmp($Email,$indata[0])) && (!strcmp($pw,$indata[1]))){
      //   echo $indata[2];
      //   $_SESSION['userid']=$indata[4];
      //   return ;
      // }
  }
  fclose($myfile);

 ?>
