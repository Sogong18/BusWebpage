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
    //제대로 값이 입력되었고 이 값들을 BusInfo.txt에서 검사한다
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var tbodyToAppend = document.getElementById('busResult');
        while (tbodyToAppend.hasChildNodes()) {
          tbodyToAppend.removeChild(tbodyToAppend.firstChild);
        }
        //자식 요소를 전부 제거하고


        //조건에 맞는 버스 요소를 만들어 append해준다

        alert(this.responseText + "님 환영합니다.");
      }
    };
    xhttp.open("POST", "search.php", true);
    xhttp.send("to=" + busTo + "&from=" + busFrom);
  }
}
