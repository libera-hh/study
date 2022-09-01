// var userNumber = prompt("숫자를 입력하세요.");

// if(userNumber % 3 === 0) {
//   alert("3의 배수입니다.");
// } else {
//   alert("3의 배수가 아닙니다.")};


// var userNumber = prompt ("숫자를 입력하세요.");
// if(userNumber !== null) {
//   if(userNumber % 3 === 0) {
//     alert("3의 배수입니다.");
//   } else {
//     alert("3의 배수가 아닙니다");
//   }
//   } else {
//     alert ("입력이 취소되었습니다.");
//   }


// var userNumber = prompt("숫자를 입력하세요.");
// if(userNumber !==null) {
//   (userNumber % 3 === 0) ? alert("3의 배수입니다") : alert("3의 배수가 아닙니다.");
// } else {
//   alert("입력이 취소되었습니다.");
// }

// var numberOne = prompt("50 미만의 숫자를 입력하세요.");
// var numberTwo = prompt("50 미만의 숫자를 입력하세요.");

// if(numberOne < 10 || numberTwo < 10) {
//   alert("숫자 2개 중 하나 이상이 10 미만입니다.");
// } else {
//   alert("숫자 2개 중 10 미만인 수가 없습니다.");
// }

// if(numberOne < 50 && numberTwo <50) {
//   alert("숫자 2개 모두 50 미만입니다.")
// } else {
//   alert("조건에 맞지 않는 숫자가 있습니다.");
// }

var session = prompt("관심 분야를 선택해 주세요. 1-마케팅, 2-개발, 3-디자인");

switch(session) {
  case "1": document.write("<p>마케팅 세션은 <strong>201호</strong>에서 진행됩니다.</p>")
    break;
  case "2": document.write("<p>개발 세션은 <strong>202호</strong>에서 진행됩니다.</p>")
    break;
  case "3": document.write("<p>디자인 세션은 <strong>203호</strong>에서 진행됩니다.</p>")
    break;
  case null: document.write("<p>입력을 다시 확인해 주세요.</p>") 
    break;
  case "4": document.write("<p>입력을 다시 확인해 주세요.</p>")
    break;
}