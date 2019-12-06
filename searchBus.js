var searchBtn = document.getElementById("search");
searchBtn.addEventListener("click", btnClick);

var busListObj = document.getElementsByClassName("busList");
// searchBtn.addEventListener("click", btnClick);

function btnClick() {
  var busTo = document.getElementById('to').value;
  var busFrom = document.getElementById('from').value;
  if (busTo == "") {
    alert("출발지를 입력해 주세요");
  } else if (busFrom == "") {
    alert("목적지를 입력해 주세요");
  } else {
    //제대로 값이 입력되었고 이 값들을 busData.txt에서 검사한다
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var tbodyToAppend = document.getElementById('busResult');
        while (tbodyToAppend.hasChildNodes()) {
          tbodyToAppend.removeChild(tbodyToAppend.firstChild);
        }
        //자식 요소를 전부 제거

        var busSearchResultArray = this.responseText.split("$");
        //php에서 가져온 조건에 맞는 버스들의 배열
        for (var i = 0; i < busSearchResultArray.length; i++) {
          var trNode = document.createElement("tr");
          trNode.setAttribute("class", "busList");

          var busDetailArray = busSearchResultArray[i].split("|");
          for (var i = 0; i < busDetailArray.length; i++) {
            var tdNode = document.createElement("td");
            var txtNode = document.createTextNode(busDetailArray[i]);
            tdNode.append(txtNode);
            trNode.append(tdNode);
          }
          //버스 정보를 갖는 tr만드는 반복문
          /* 양식 이거임
          <tr class="busList">
            <td class="busNum">버스번호</td>
            <td>버스번호</td>
            <td>버스번호</td>
            <td>버스번호</td>
          </tr>
          */

          tbodyToAppend.append(trNode);
        }
      }
    };
    xhttp.open("POST", "search.php", true);
    xhttp.send("to=" + busTo + "&from=" + busFrom);
    //???시간도 같이 넘겨주기
  }
}
