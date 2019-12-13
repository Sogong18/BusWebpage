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
    alert("결제가 완료되었습니다.");
    var a = document.getElementById('myModal');
    a.style.display = "none";
    window.location.href = "Payment_done.html";
  }
}
