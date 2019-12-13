var recivedBusNum = "";
var remainingSeatNum = 0;

window.addEventListener('DOMContentLoaded', function() {
  recivedBusNum = (((window.location.href).split("?"))[1]).split(":")[1];
  //버스 번호를 받아와서 자리 로드하기
  //비어있지 않은 칸에 class="occupied"
});

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
//그룹 인원수에 변동이 생길 때마다(또는 기존값보다 작아질 때마다) 테이블을 초기화하도록 함
