<?php
session_start();
if(!isset($_SESSION['userid'])){
  echo "unLogined!";
  //로그인되지 않은 상태일 때에는 상단바에 로그인 버튼 하나 append해주기
}else {
  echo "logined!";
  $memberFile = fopen("./data/busMember.txt", "a+") or die("error");
  while (!feof($memberFile)){
    $indata = explode('|',fgets($memberFile));
    if(strcmp($_SESSION['userid'],$indata[4])==0){
      echo $indata[2];
      break;
    }
  }
  fclose($memberFile);
  //로그인된 상태일때는 상단바에 회원 정보 출력 및 하단바에 탈퇴하기 버튼
}
?>
