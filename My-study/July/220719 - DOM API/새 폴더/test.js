const boxEl = document.querySelector('.box');
boxEl.addEventListener('click',function(){
  console.log('Hello~');
});

const divEls = document.querySelectorAll('div');
divEls.forEach(function(divEl) {
  divEl.classList.add('hello');
})

const testEl = document.querySelector('.box');
if (testEl.classList.contains('active')) {
  console.log("포함됨!")
} else {
  console.log("포함 안 됨!")
}