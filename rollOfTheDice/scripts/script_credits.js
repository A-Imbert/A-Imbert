var title = document.getElementById('title');
var text = title.innerText;
var txt = `CREDITS`;
var i = 0;
var speed = 50;
function typeEffect(){
    if (i < txt.length) {
        title.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeEffect, speed);
    }
}
window.onload = function() {
    setTimeout(typeEffect , 500);
};