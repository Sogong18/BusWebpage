
function search(){
  var destination = document.getElementById('to').innerText;
  // 나중에 여기서 destnation 값만 잘 바꿔주면 될듯!
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState==4&&this.status==200){
       var parent = document.getElementById("attrationList");
       var res = this.responseText.split("\n");
       for(var i = 0;i<res.length;i++){
         if(res[i]!=""){
           var span = document.createElement('span');
           var temp = res[i].split("|");
           var element = document.createElement('li');
           var placename = temp[0];
           var placeadd = temp[1];
           var placeinfo = temp[2];
           var strNode = document.createTextNode(placename);
           var idNode = document.createAttribute('id');
           idNode.value = temp[0];
           element.setAttributeNode(idNode);
           span.appendChild(strNode);
           element.appendChild(span);
           parent.appendChild(element);
           checkload(temp[0],temp[1],temp[2],span);
         }
       }
     }
  };
  xhttp.open("POST", "searchPlace.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("destination="+destination);
}

function checkload(temp0, temp1,temp2,span){
  var buttonatt = document.createAttribute('onclick');
  var name = temp0;
  var nameClick = document.getElementById(name);
  nameClick.onclick = function(){ lookinfo(temp0, temp1,temp2,span);}
}

function lookinfo(temp0, temp1,temp2,span){
  var srcElement = document.getElementById('attractionInfo');
  if (srcElement != null) {
    if (srcElement.style.display == "block") {
      srcElement.style.display = 'none';
    }
    else {
      srcElement.style.display = 'block';
  }
  var realname = document.getElementById('inputplacename');
  var realadd = document.getElementById('inputplaceadd');
  var realinfo = document.getElementById('inputplaceinfo');
  var lookname = temp0;
  var lookadd = temp1;
  var lookinfo = temp2;
  realname.innerText = lookname;
  realadd.innerText = lookadd;
  realinfo.innerText = lookinfo;
}
}

function divgone(){
  var div = document.getElementById('attractionInfo');
  div.style.display = "none";
}
