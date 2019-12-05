<?
// login 정보를 받아와서 txt 파일로 확인
header ("Content-type:text/html; charset=utf-8");
$HTTP_REFERER=$_SERVER['HTTP_REFERER'];
$id= $Email= $phoneNum = $pw = "";
$id = $_POST["id"];
$Email = $_POST["Email"];
$phoneNum = $_POST["phoneNum"];
$pw = $_POST["password"];

$myfile = fopen("./data/busMember.txt", "a+") or die("Unable to open file!");
while (!feof($myfile)){
    $data = fgets($myfile);
    $indata = explode('|',$data);
    if(strcmp($id,$indata[0])==0){
      echo "아이디가 중복됩니다. 다시 회원 가입해주세요. ";
      return ;
    }
}
fwrite($myfile, $id);
fwrite($myfile, "|");
fwrite($myfile, $Email);
fwrite($myfile, "|");
fwrite($myfile, $phoneNum);
fwrite($myfile, "|");
fwrite($myfile, $pw);
fwrite($myfile,"\n");
fclose($myfile);
fclose($myfile);

echo "회원가입이 완료되었습니다."

?>
