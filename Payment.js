window.addEventListener('DOMContentLoaded', function() {
  document.getElementById("amount").innerText = (((window.location.href).split("?"))[1]).split(":")[1];
});

function goPayment() {
  var checkcardCom = false;
  var checkcardNum = false;
  var checkcvvc = false;
  var checkcardPwd = false;
  var validPeriod = false;
  var inputcardCom = document.getElementById('cardCom').value;
  var inputcardNum = document.getElementById('cardNum').value;
  var inputcvvc = document.getElementById('cvc').value;
  var inputcardPwd = document.getElementById('cardPw').value;
  var inputvalid = document.getElementById('expireDate').value;

  var submitData = "";
  // var cardNum = document.getElementsByClassName("")
  // var email = document.getElementsByClassName("Email");
  // var password = document.getElementsByName("pw");
  // var name = document.getElementsByName("name");
  // var phoneNum = document.getElementsByName('phoneNum');

  if (inputcardCom == "") {
    alert("카드사를 입력하지 않았습니다. 정보를 다시 입력해주세요.");
    var a = document.getElementById('myModal');
    a.style.display = "none";
    inputcardCom = "";
    inputcardNum = "";
    inputcvvc = "";
    inputcardPwd = "";
    inputvalid = "";
  } else {
    //예매한 버스 번호 : ((window.location.href).split("?"))[2]
    //예매한 사람 회원번호 : $_SESSION['userid'] (<---php에서 얻을 수 있음)
    //reserveList.txt에 예매한사람 회원번호|예매한 버스 번호로 기록하기 한줄씩
    var xhttp = new XMLHttpRequest();
    var busnumber = (((window.location.href).split("?"))[2]).split(":")[1];
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log("결제가 완료되었습니다.");
      }
    };
    xhttp.open("POST", "Payment.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("busnumber=" + busnumber);
    //busData 좌석 수 조정해주기 (<--이거는 아직 좌석선택을 제대로 못짜서 내가 나중에 할게)
    // alert("결제가 완료되었습니다.");
    var a = document.getElementById('myModal');
    a.style.display = "none";
    console.log("결제가 완료되었습니다.");
    location.href = "Payment_done.html?" + ((window.location.href).split("?"))[2];
  }
}
