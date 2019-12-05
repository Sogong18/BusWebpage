<?php
header ("Content-type:text/html; charset=utf-8");
$HTTP_REFERER=$_SERVER['HTTP_REFERER'];

$Email = $_POST["Email"];
$password = $_POST["password"];
$name = $_POST["name"];
$phoneNum = $_POST["phoneNum"];

$myfile = fopen("./data/busMember.txt", "a+") or die("Unable to open file!");

while (!feof($myfile)){
    $data = fgets($myfile);
    $indata = explode('|',$data);
    if(strcmp($Email,$indata[0])==0){
      echo "이메일이 중복됩니다. 다시 회원 가입해주세요. ";
      return ;
    }
}

fwrite($myfile, $Email);
fwrite($myfile, "|");
fwrite($myfile, $password);
fwrite($myfile, "|");
fwrite($myfile, $name);
fwrite($myfile, "|");
fwrite($myfile, $phoneNum);
fwrite($myfile,"\n");
fclose($myfile);

echo "회원가입이 완료되었습니다."

?>
