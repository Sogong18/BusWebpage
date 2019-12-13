window.addEventListener('DOMContentLoaded', function() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var resultArray = this.responseText.split("!");
      if (resultArray[0] != "openError") {
        document.getElementById("userName").innerText = resultArray[0];
        /*<li class="listItem">
          <p><span class="busNum">버스번호예</span>
          <span class="departDay">2019-11-11</span>
          <span class="departTime">21:00</span>~<span class="arriveTime">22:00</span>
          <span class="to">대전</span>→<span class="from">서울</span></p>
          <button type="button" class="cancel">취소</button>
        </li>*/
        var target = document.getElementById("reservedBusList");
        for (var i = 1; i < resultArray.length; i++) {
          if (resultArray[i] != "") {
            var liNode = document.createElement("li");
            liNode.setAttribute("class", "listItem");
            var pNode = document.createElement("p");
            var busDetail = resultArray[i].split("|");
            for (var j = 0; j < busDetail.length; j++) {
              var spanNode = document.createElement("span");
              var textNode = busDetail[j];
              spanNode.append(textNode);
              pNode.append(spanNode);
            }
            //버튼 만들어 어펜드
            var btNode = document.createElement("button");
            btNode.setAttribute("type", "button");
            btNode.setAttribute("class", "cancel");
            var textNode = "취소";
            btNode.append(textNode);
            pNode.append(btNode);
            liNode.append(pNode);
            target.append(liNode);
          }
        }
      } else {
        alert("파일을 여는 데 에러가 발생했습니다.");
      }
    }
  };
  xhttp.open("POST", "getUserID.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send();
});
