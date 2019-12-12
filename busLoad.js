window.addEventListener('DOMContentLoaded', function() {
  var recivedBusNum = (((window.location.href).split("?"))[1]).split(":")[1];
  //주소에서 버스 번호를 가져옴
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      if (this.responseText != "openError") {
        var busDetailDataArray = this.responseText.split("|");
        document.getElementById("departDay").innerText = busDetailDataArray[0];
        document.getElementById("to").innerText = busDetailDataArray[1];
        document.getElementById("from").innerText = busDetailDataArray[2];
        document.getElementById("departTime").innerText = busDetailDataArray[3];
        document.getElementById("Time_required").innerText = busDetailDataArray[4];

        var reserveBtn = document.getElementById("reserve");
        var selectBtn = document.getElementById("select");
        reserveBtn.addEventListener("click", function() {
          doReserve(recivedBusNum);
        });
        selectBtn.addEventListener("click", function() {
          doSelectSeat(recivedBusNum);
        });
      } else {
        alert("버스 정보 파일을 로드할 수 없습니다.");
      }
    }
  };
  xhttp.open("POST", "busLoad.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("busNum=" + recivedBusNum);
});

function doReserve(recivedBusNum) {
  location.href = "reserveBus.html?busNum:" + recivedBusNum;
}

function doSelectSeat(recivedBusNum) {
  location.href = "selectSeat.html?busNum:" + recivedBusNum;
}
