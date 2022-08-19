
// // // HTML 요소(Element) 1개 검색/찾기
// // const boxEl = document.querySelector('.box');

// // // HTML 요소에 적용할 수 있는 메소드
// // boxEl.addEventListener();

// // // 인수(Arguments)를 추가 가능
// // boxEl.addEventListener(1, 2);

// // // 1 - 이벤트(Event, 상황)
// // boxEl.addEventListener('click', 2);

// // // 2 - 핸들러 (Handler, 실행할 함수)
// // boxEl.addEventListener('click', function () {
// //   console.log('Click');
// // })

// let boxEl = document.querySelector('.box');
// console.log(boxEl);
// boxEl.addEventListener('click',function () {
//   console.log('click!');
//   boxEl.classList.add('active'); //.box의 class에 'active'를 추가(add)
//   console.log(
//       boxEl.classList.contains('active') //.box의 class에 'active'가 포함되어 있는가 확인
//   );
//   boxEl.classList.remove('active'); //.box의 class에 'active'를 삭제(remove)
//   console.log(
//       boxEl.classList.contains('active')
//   );
// });

// // // 요소의 클래스 정보 객체 활용
// // boxEl.classList.add('active'); //classList라는 객체에 add를 통해 'active'라는 클래스를 추가함
// // let isContains = boxEl.classList.contains('active'); //boxEl에 'active'라는 클래스가 있는가 확인 - 위에서 추가해서 true가 나옴
// // console.log(isContains); //true

// // boxEl.classList.remove('active');
// // isContains = boxEl.classList.contains('active');
// // console.log(isContains); //false

// //-------------------------------------------------------------------------

// // HTML 요소(Element) 모두 검색/찾기
// const boxEls = document.querySelectorAll('.box');
// console.log(boxEls);
 
// //찾은 요소들 반복해서 함수 실행하기 - forEach
// //익명 함수를 인수로 추가
// boxEls.forEach(function () {});

// //첫 번째 매개변수 (boxEl): 반복 중인 요소.
// //두 번째 매개변수 (index): 반복 중인 번호 
// boxEls.forEach(function (boxEl, index) {});

// //출력
// boxEls.forEach(function (boxEl, index) {
//   boxEl.classList.add(`order-${index + 1}`);
//   console.log(index, boxEl);
// })

const boxEls = document.querySelectorAll('.box') // .box class를 가진 모든 요소를 찾아 가져오겠다
//querySelectorAll 사용 후 forEach로 각각 반복해서 함수 실행 가능
boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index+1}`)
  console.log(index, boxEl);
});

const boxEl = document.querySelector('.box');
// 값을 얻는 용도 Getter
console.log(boxEl.textContent); //Box!!
// 값을 지정하는 용도 Setter
boxEl.textContent = 'EASY';
console.log(boxEl.textContent);


const a = 'Hello';
const b = a.split('').reverse().join(''); // 메소드 체이닝 ~ 메소드를 체인처럼 연결해서 동시에 사용
// split: 문자를 배열로 반환 H e l l o
// reverse : 배열을 뒤집기
// join: 배열을 인수 기준으로 문자로 병합해 반환
console.log(a);
console.log(b);
