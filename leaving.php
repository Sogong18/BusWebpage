<?php
// 탈퇴를 담당하는 php 파일
session_start();
header ("Content-type:text/html; charset=utf-8");
$HTTP_REFERER=$_SERVER['HTTP_REFERER'];
$id = $_POST["id"];
$buffer = "";

// $myfile = fopen("./data/busMember.txt", "r") or die("Unable to open file!");
// while (!feof($myfile)){
//     $data = fgets($myfile);
//     $indata = explode('|',$data);
//     if(strcmp($id,$indata[2])==0){
//       $data = "";
//     }
//     $buffer = $buffer . $data;
// }
// // echo $buffer;
//
// fclose($myfile);
//
// $newfile = fopen("./data/busMember.txt", "w+") or die("Unable to open file!");
// fwrite($newfile, $buffer);
// fclose($newfile);
//잠시 주석처리해두고 로그아웃으로 사용함

session_destroy();
echo "회원탈퇴가 완료되었습니다! BYE!";
?>
