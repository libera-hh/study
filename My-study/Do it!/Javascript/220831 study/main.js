var heading = document.querySelector('#heading');
heading.onclick = function() {
  heading.style.color = "red";
}
/*
alert("안녕하세요.")
confirm("잘 지내셨어요?")
var name = prompt("제가 누군지 아시겠어요?","answer");
document.write("맞아요.  <b><big>"+ name + "</big></b>이에요.")*/

var currentYear = 2021;
var birthYear;
var age;

birthYear = prompt ("태어난 연도를 입력해 주세요. (YYYY)","");
age = currentYear - birthYear +2;
document.write(currentYear + "년 현재<br>");
document.write(birthYear + "년에 태어난 사람의 나이는"  + age + "세입니다.");