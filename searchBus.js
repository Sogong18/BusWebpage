//EventListener를 추가하여 동작에 대한 이벤트를 만들어주는 부분
var searchBtn = document.getElementById("search");
searchBtn.addEventListener("click", doSearch);

//버스를 선택했을 때 예약을 할 수 있도록 예약 페이지로 이동하는 함수
function doReserve(busNum) {
  location.href = "busDetail.html?busNum:"+busNum;
}

//조건에 맞는 버스를 찾는 함수
function doSearch() {
  var busTo = document.getElementById('to').value;
  var busFrom = document.getElementById('from').value;
  if (busTo == "") {
    alert("출발지를 입력해 주세요");
  } else if (busFrom == "") {
    alert("목적지를 입력해 주세요");
  } else {
    //제대로 값이 입력되었고 이 값들을 busData.txt에서 검사한다
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }
    var time = today.getHours() + '' + today.getMinutes();
    today = yyyy + '' + mm + '' + dd;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var tbodyToAppend = document.getElementById('busResult');
        while (tbodyToAppend.hasChildNodes()) {
          tbodyToAppend.removeChild(tbodyToAppend.firstChild);
        }
        //자식 요소를 전부 제거

        if (this.responseText == "") {
          alert("해당하는 버스가 없습니다.");
        } else {
          var busSearchResultArray = this.responseText.split("!");

          //php에서 가져온 조건에 맞는 버스들의 배열
          for (var i = 0; i < busSearchResultArray.length; i++) {
            if (busSearchResultArray[i] != "") {
              var trNode = document.createElement("tr");
              trNode.setAttribute("class", "busList");

              var busDetailArray = busSearchResultArray[i].split("|");
              for (var j = 0; j < busDetailArray.length; j++) {
                var tdNode = document.createElement("td");
                if(j==3){
                  var txtNode = document.createTextNode(calculateZero(busDetailArray[j])+"/45");
                  tdNode.append(txtNode);
                  trNode.append(tdNode);
                }else {
                  var txtNode = document.createTextNode(busDetailArray[j]);
                  tdNode.append(txtNode);
                  trNode.append(tdNode);
                }
              }
              trNode.addEventListener("click", function(){doReserve(busDetailArray[0])});
              tbodyToAppend.append(trNode);
            }
          }
        }
      }
    };
    xhttp.open("POST", "search.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("toData=" + busTo + "&fromData=" + busFrom + "&date=" + today + "&time=" + time);
    clearInputs();
  }
}

//입력한 input을 비워주는 함수
function clearInputs() {
  document.getElementById('to').value = "";
  document.getElementById('from').value = "";
}

//input인 toCalculate에서 0의 갯수를 리턴하는 함수
function calculateZero(toCalculate) {
  return (toCalculate.match(/0/g) || []).length;
}
