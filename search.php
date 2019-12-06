<?php

$to = $_POST["to"];
$from = $_POST["from"];

$myfile = fopen("./data/busData.txt", "a+") or die("Unable to open file!");
while (!feof($myfile)){
  $line = fgets($myfile);
  $indata = explode('|',fgets($myfile));

  // if((!strcmp($Email,$indata[0])) && (!strcmp($pw,$indata[1]))){
  //   echo $indata[2];
  //   return ;
  // }else {
  //   echo "nothing";
  // }

  }
  fwrite("");
  fclose($myfile);
  echo "ss";

?>
