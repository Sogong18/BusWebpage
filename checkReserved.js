window.addEventListener('DOMContentLoaded', function() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var resultArray = this.responseText.split("|");
      if(resultArray[0]!="openError"){
        document.getElementById("userName").innerText = this.responseText[0];
/*<p><span class="busNum">버스번호예</span> <span class="departDay">2019-11-11</span> <span class="departTime">21:00</span>~<span class="arriveTime">22:00</span> <span class="to">대전</span>→<span class="from">서울</span></p>*/
        for(var i=1;i<resultArray.length;i++){

        }
      }else{
        alert("파일을 여는 데 에러가 발생했습니다.");
      }
    }
  };
  xhttp.open("POST", "getUserID.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send();
});
