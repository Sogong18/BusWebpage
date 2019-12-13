var recivedBusNum = "";
var remainingSeatNum = 0;

window.addEventListener('DOMContentLoaded', function() {
  recivedBusNum = (((window.location.href).split("?"))[1]).split(":")[1];

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      if (this.responseText != "openError") {
        var busDetailDataArray = this.responseText.split("|");
        remainingSeatNum = calculateZero(busDetailDataArray[5]);
      } else {
        alert("버스 정보 파일을 로드할 수 없습니다.");
      }
    }
  };
  xhttp.open("POST", "busLoad.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("busNum=" + recivedBusNum);
  //좌석 남은 숫자를 가져옴
});

//input인 toCalculate에서 0의 갯수를 리턴하는 함수
function calculateZero(toCalculate) {
  return (toCalculate.match(/0/g) || []).length;
}

document.getElementById("adult").setAttribute("onchange", "changeOnInput(this)");
document.getElementById("child").setAttribute("onchange", "changeOnInput(this)");
//inputtext가 onchange할때마다 다음 작업 수행
function changeOnInput(currentObject) {
  // console.log("hey!" + remainingSeatNum + currentObject.getAttribute("id"));
  var totalSeats = document.getElementById("adult").value*1+ document.getElementById("child").value*1;
  if(totalSeats>remainingSeatNum){
    alert("충분한 잔여석이 없습니다.");
    document.getElementById(currentObject.getAttribute("id")).value = document.getElementById(currentObject.getAttribute("id")).value-1;
    //원래대로 값 되돌리기
  }else{
    document.getElementById("amount").innerText = document.getElementById("adult").value*13600 + document.getElementById("child").value*9300;
    document.getElementById("All_Seats").innerText = totalSeats;
  }
  console.log(totalSeats);
}

document.getElementById("payment").addEventListener("click", function() {
  goPaymentPage(document.getElementById("amount").innerText);
});

function goPaymentPage(totalNum){
  location.href = "Payment.html?totalNum:" + totalNum+"?busNum:"+recivedBusNum;
}
