window.addEventListener('DOMContentLoaded', function() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //버스 번호를 받고
    }
  };
  xhttp.open("POST", "checkLogin.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("");
});
