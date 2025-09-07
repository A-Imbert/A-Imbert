var animation = document.getElementById('ani');
var title = document.getElementById('title');
var button = document.getElementById('button');
var introtext = document.getElementById('introtext')

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        animation.classList.add('hide');
        console.log("hi");
        setTimeout(()=>{
            title.classList.remove('hide2');
            title.classList.add('textani');
            setTimeout(()=>{
                button.classList.remove('hide2');
                button.classList.add('textani');
                introtext.classList.remove('hide2');
                introtext.classList.add('textani');
            },150)
        },500)
    }, 2000)
})