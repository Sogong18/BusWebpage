window.addEventListener('DOMContentLoaded', function() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      if (this.responseText != "unLogined!") { //로그인이 되어있을때
        alert("이미 로그인 되어있습니다!");
        window.history.back();
      }
    }
  };
  xhttp.open("POST", "checkLogin.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("");
});
