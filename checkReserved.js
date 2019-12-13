window.addEventListener('DOMContentLoaded', function() {
  recivedBusNum = (((window.location.href).split("?"))[1]).split(":")[1];
  //버스 번호를 받아와서 자리 로드하기
  //비어있지 않은 칸에 class="occupied"

  //1. username id span에 사람 이름 추가
  //2. class listItemExample에 reserveList.txt 읽어서
  //<li class="listItem">
  //  <p><span class="busNum">버스번호예</span> <span class="departDay">2019-11-11</span> <span class="departTime">21:00</span>~<span class="arriveTime">22:00</span> <span class="to">대전</span>→<span class="from">서울</span></p>
  //  <button type="button" class="cancel">취소</button>
  //</li>
  //만들어서 append해주기
});
