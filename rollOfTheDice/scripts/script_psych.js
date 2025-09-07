const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

var sectionIndex = 0;

leftArrow.addEventListener('click', function() { 
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
slider.style.transform = 'translate('+ (sectionIndex) * -25 + '%)';
});

rightArrow.addEventListener('click', function() { 
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
slider.style.transform = 'translate('+ (sectionIndex) * -25 + '%)';
});


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
