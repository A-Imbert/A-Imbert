//animation for line
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.timeline-items');
  
      if (entry.isIntersecting) {
        square.classList.add('line-animation');
        return; 
      }
  
    });
});
  
observer.observe(document.querySelector('.timeline-section'));

//Animation for individual boxes
const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('timeline-item-animation');
        entry.target.classList.remove('hide-item');
        return;
      }
    });
});
  

const squares = document.querySelectorAll('.timeline-item');
  
squares.forEach((element) => observer2.observe(element));

window.addEventListener('scroll', function() {
  var nav = document.getElementById('nav');
  if (window.scrollY > 0) {
      nav.classList.add('addBackground');
  } else {
      nav.classList.remove('addBackground');
  }
});
var filled = document.querySelector('.filled');

function updateBar(){
  filled.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`
  requestAnimationFrame(updateBar);
}
updateBar();