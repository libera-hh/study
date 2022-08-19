const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input'); 
// searchEl 안에서만 input를 찾는다 = ('.search input')와 같게 작용

// searchEl의 요소를 클릭하면 function{searchInputEl.focus}을 실행
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색'); //searchInputEl에 HTML 속성 지정
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', ''); //searchInputEl에 HTML 속성 지정
});