window.addEventListener('DOMContentLoaded', function() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var menuToAppend = document.getElementById('topMenu');
      while (menuToAppend.hasChildNodes()) {
        menuToAppend.removeChild(menuToAppend.firstChild);
      }
      var btmMenuToAppend = document.getElementById('bottomMenu');
      while (btmMenuToAppend.hasChildNodes()) {
        btmMenuToAppend.removeChild(btmMenuToAppend.firstChild);
      }
      //자식 요소를 전부 제거

      var isLoginedArray = this.responseText.split("!");
      if (isLoginedArray[0] == "unLogined") { //로그인이 안 되어있을때
        var btnNode = document.createElement("button");
        btnNode.setAttribute("id", "loginbutton");
        btnNode.setAttribute("onclick", "location.href='Login.html'");
        var txtNode = document.createTextNode("로그인");
        btnNode.append(txtNode);
        menuToAppend.append(btnNode);
      } else { //로그인이 되어있을때
        var btnNode = document.createElement("button");
        btnNode.setAttribute("id", "Leaving");
        btnNode.onclick = function() {
                          leaving();
                          };
        var txtNode = document.createTextNode("탈퇴 하기");
        btnNode.append(txtNode);
        btmMenuToAppend.append(btnNode);

        var pNode = document.createElement("p");
        pNode.setAttribute("id", "memberBar");
        var uNode = document.createElement("u");
        var nameNode = document.createTextNode(isLoginedArray[1]);
        var txtNode2 = document.createTextNode("님 안녕하세요!");

        uNode.append(nameNode);
        pNode.append(uNode);
        pNode.append(txtNode2);
        menuToAppend.append(pNode);
      }
    }
  };
  xhttp.open("POST", "checkLogin.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("");
});

function leaving(){
  var check = confirm("회원님에 대한 모든 정보가 삭제됩니다. 회원 탈퇴를 계속하시겠습니까?");
  if(check == true){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if(this.readyState==4&&this.status==200){
        alert(this.responseText);
      }
    };
    var id = document.getElementById('memberBar').children[0].innerText;
    xhttp.open("POST", "leaving.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("id="+id);
    window.location.reload();
  }
  else if(check == false){
    alert("회원 탈퇴가 취소되었습니다!");
  }
}
