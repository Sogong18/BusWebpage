var recivedBusNum = "";
var remainingSeatNum = 0;
var currentBusSeat;
var availSelect = 0;

document.getElementById("payment").addEventListener("click", function() {
  var seatNumbers = "";
  for (var i = 0; i < document.getElementsByClassName("selected").length; i++) {
    seatNumbers += document.getElementsByClassName("selected")[i].getAttribute("id").split("t")[1] + "|";
  }
  //선택된 좌석의 번호도 같이 보내기
  location.href = "Payment.html?totalNum:" + document.getElementById("amount").innerText + "?busNum:" + recivedBusNum + "?seatNums:" + seatNumbers;
});

window.addEventListener('DOMContentLoaded', function() {
  recivedBusNum = (((window.location.href).split("?"))[1]).split(":")[1];

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      if (this.responseText != "openError") {
        var busDetailDataArray = this.responseText.split("|");
        remainingSeatNum = calculateZero(busDetailDataArray[5]);
        currentBusSeat = busDetailDataArray[5];

        for (var i = 1; i <= 45; i++) {
          if (currentBusSeat.charAt(i) == "1") {
            document.getElementById("seat" + i).setAttribute("class", "occupied");
          } else {
            document.getElementById("seat" + i).addEventListener("click", function() {
              selectThisSeat(this.getAttribute("id"));
            });
          }
        }
      } else {
        alert("버스 정보 파일을 로드할 수 없습니다.");
      }
    }
  };
  xhttp.open("POST", "busLoad.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("busNum=" + recivedBusNum);
});

//input인 toCalculate에서 0의 갯수를 리턴하는 함수
function calculateZero(toCalculate) {
  return (toCalculate.match(/0/g) || []).length;
}

//좌석을 선택하면 이미 선택된 좌석(selected)가 아니거나 empty좌석이 아닐경우 선택할 수 있도록 함
function selectThisSeat(id) {
  if ((availSelect > 0) && (document.getElementById(id).getAttribute("class") == null)) {
    document.getElementById(id).setAttribute("class", "selected");
    availSelect--;
  }
}

document.getElementById("adult").setAttribute("onchange", "changeOnInput(this)");
document.getElementById("child").setAttribute("onchange", "changeOnInput(this)");
//inputtext가 onchange할때마다 다음 작업 수행
function changeOnInput(currentObject) {
  clearInputs();
  var totalSeats = document.getElementById("adult").value * 1 + document.getElementById("child").value * 1;

  if (totalSeats > remainingSeatNum) {
    alert("충분한 잔여석이 없습니다.");
    document.getElementById(currentObject.getAttribute("id")).value = document.getElementById(currentObject.getAttribute("id")).value - 1;
    //원래대로 값 되돌리기
  } else {
    availSelect = totalSeats;
    document.getElementById("amount").innerText = document.getElementById("adult").value * 13600 + document.getElementById("child").value * 9300;
    document.getElementById("All_Seats").innerText = totalSeats;
  }
}
//그룹 인원수에 변동이 생길 때마다(또는 기존값보다 작아질 때마다) 테이블을 초기화하도록 함

//선택된 셀 다 해제하는것
function clearInputs() {
  while (document.getElementsByClassName("selected").length > 0) {
    document.getElementsByClassName("selected")[0].removeAttribute("class");
  }
}
