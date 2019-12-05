function vaildcheckSignin() {
  var checkEmail = false;
  var checkPassword = false;
  var validEmail = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  var inputEmail = document.getElementById("Email").value;
  var vaildPassword = /^.*(?=^.{8,15}$)(?=.*|d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  var inputPassword = document.getElementById("pw").value;
  var inputName = document.getElementById('name').value;
  var inputPhnum = document.getElementById('phoneNum').value;

  if (inputEmail.match(validEmail)) {
    checkEmail = true;
  }

  if (inputPassword.match(vaildPassword)) {
    checkPassword = true;
  }

  var submitData = "";
  var email = document.getElementsByClassName("Email");
  var password = document.getElementsByName("pw");
  var name = document.getElementsByName("name");
  var phoneNum = document.getElementsByName('phoneNum');

  if (inputEmail == "" || inputPassword == "" || inputName == "" || inputPhnum == "") {
    alert("빈칸을 남기지 말고 다 입력해주세요.");
  } else if (checkEmail === false || checkPassword === false) {
    alert("이메일 또는 패스워드의 입력양식을 체크해주세요.");
  } else {
    var submitData = "";
    submitData = document.getElementById("Email").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert(this.responseText);
      }
    };
    xhttp.open("POST", "Join.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("Email="+inputEmail+"&password="+inputPassword+"&name="+inputName+"&phoneNum="+inputPhnum);
  }
}


function vaildcheckSumit() {
  var checkEmail = false;
  var checkCheck = false;
  var checkPassword = false;
  var validEmail = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  var inputEmail = document.getElementById("Email").value;
  var vaildPassword = /^.*(?=^.{8,15}$)(?=.*|d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  var inputPassword = document.getElementById("pw").value;

  if (inputEmail.match(validEmail)) {
    checkEmail = true;
  }

  if (inputPassword.match(vaildPassword)) {
    checkPassword = true;
  }

   var submitData = "";
   var email = document.getElementsByClassName("Email");
   var password = document.getElementsByName("pw");

  if (inputEmail == "" || inputPassword == "") {
    alert("아이디 또는 패스워드의 입력양식을 체크해주세요");
  } else if (checkEmail === false || checkPassword === false) {
    alert("아이디 또는 패스워드의 입력양식을 체크해주세요.");

  } else {
    var submitData = "";
    submitData = document.getElementById("Email").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // if (this.responseText == inputEmail) {
          // sessionStorage.setItem('name', document.getElementById('Email').value);
          // schedulerCheck();
          // var x = document.getElementById("idDiv");
          // var t = document.createTextNode(this.responseText);
          // x.appendChild(t);
          alert(this.responseText+ "님 환영합니다.");
          // document.body.appendChild(x);
        // }
      }
    };
    xhttp.open("POST", "Login.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("Email="+inputEmail+"&password="+inputPassword);
  }
}

function backtologin() {
  var inputEmail = document.getElementById("Email");
  var inputPassword = document.getElementById("pw");
  var inputName = document.getElementById('name');
  var inputPhnum = document.getElementById('phoneNum');
  inputEmail.value = "";
  inputName.value = "";
  inputPhnum.value = "";
  window.history.back();

}
