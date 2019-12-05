<?php
header ("Content-type:text/html; charset=utf-8");
$HTTP_REFERER=$_SERVER['HTTP_REFERER'];

$memberNum = 0;
$Email = $_POST["Email"];
$password = $_POST["password"];
$name = $_POST["name"];
$phoneNum = $_POST["phoneNum"];

$myfile = fopen("./data/busMember.txt", "a+") or die("Unable to open file!");

while (!feof($myfile)){
    $data = fgets($myfile);
    $indata = explode('|',$data);
    $memberNum++;
    if(strcmp($Email,$indata[0])==0){
      echo "이메일이 중복됩니다. 다시 회원 가입해주세요. ";
      return ;
    }
}

fwrite($myfile, "{$Email}|{$password}|{$name}|{$phoneNum}|{$memberNum}\n");
fclose($myfile);

echo "회원가입이 완료되었습니다!"

?>
