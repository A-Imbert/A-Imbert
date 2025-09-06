const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
const background = document.querySelector(".background");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let isWeb = false;
const webButton = document.getElementById("web-button");
const cButton = document.getElementById("c-button");
const projectTitle = document.querySelector(".project-title");
const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            projectTitle.classList.remove("hide");
            gsap.from(".project-title", {
                y: -100,
                duration: 0.5,
                opacity: 0,
                ease : "power1.out"
            })
            observer.unobserve(entry.target);
        }
    })
}, {threshold : 0.5})
observer.observe(projectTitle);
function DrawDottedBackground(spacing) {
    const fadeWidth = canvas.width * 0.4;
    
    for(let y = 0; y < canvas.height; y += spacing) {
        for(let x = 0; x < canvas.width; x += spacing) {

            const distFromLeft = x;
            const distFromRight = canvas.width - x;
            const distFromEdge = Math.min(distFromLeft, distFromRight);
            
            // Calculate opacity (0 at edges, 1 in center)
            let opacity = Math.min(distFromEdge / fadeWidth, 0.5);
            opacity = Math.max(opacity, 0);
            
            // Set fill style with calculated opacity
            ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`; // Adjust color as needed
            
            ctx.beginPath();
            ctx.arc(x, y, 0.5, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}
DrawDottedBackground(10);
document.addEventListener("DOMContentLoaded", (e) => {
    console.log("Running");
    gsap.fromTo(".swipe-up-box",
        {
            y: 2000,
            borderTopLeftRadius: "100%",
            borderTopRightRadius: "100%",
        },
        {
            y: 0,
            duration: 0.5,
            ease: "power1.out",
            delay: 1,
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "0px",
            onComplete: () => {
                LoadPage();
            }
        }
    );
});
function LoadPage() {
    background.classList.add("normal-background");
    document.querySelector(".swipe-up-box").remove();
    RevealCanvas();
}
function RevealProjects(){
    document.querySelector(".grid-pattern").classList.remove("hide-2");
    document.querySelector(".grid-pattern").classList.remove("hide");
}
function RevealCanvas(){
    gsap.fromTo(canvas, 
        {
            clipPath: "circle(0% at 50% 50%)"
        },
        {
            clipPath: "circle(100% at 50% 50%)",
            duration: 1,
            ease: "power3.in",
            onComplete: () =>{
                RevealText();
                RevealProjects();
            }
        }
    );
}
function RevealText() {
    document.querySelector(".top-header").classList.remove("hide");
    gsap.from(".name-title", {
        duration: 0.6,
        y: 100,
        opacity: 0,
        ease: "power1.out",
        onComplete: () =>{
            RunTechScroll();
            RevealDesc();
            setTimeout(() =>{
                RevealButtons();
                RevealMediaIcons();

            }, 500)
        }
    });
}
function RevealDesc(){
    const desc = document.querySelector(".name-desc");
    desc.classList.remove("hide");
    gsap.from(".name-desc", {
        y: 100,
        opacity: 0,
        ease: "power1.out",
    })
}
function RevealButtons(){
    const button1 = document.querySelector(".resume-button");
    button1.classList.remove("hide");
    gsap.from(".resume-button", {
        y: 100,
        opacity: 0,
        ease: "elastic.inout",
    })
    const button2 = document.querySelector(".contact-button");
    setTimeout(() =>{
        button2.classList.remove("hide");
        gsap.from(".contact-button", {
            y: 100,
            opacity: 0,
            ease: "elastic.inout",
            onComplete: () =>{

            }
        })
    }, 500)
}
function RevealMediaIcons() {
    const icon = document.querySelector(".media-icon");
    icon.classList.remove("hide");

    const iconHeight = icon.offsetHeight;

    gsap.fromTo(icon,
        {
            y: -iconHeight - 50,
            opacity: 0,
            rotation: -50
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.6,
            rotation: 0,
            ease: "power2.out"
        }
    );
}
function RunTechScroll() {
    const footer = document.querySelector(".top-footer");
    footer.classList.remove("hide");
    const logos = document.querySelector(".tech-scroll");

    // Calculate total width of the scrolling content
    const totalWidth = logos.scrollWidth;

    // Duplicate logos for seamless looping (optional)
    logos.innerHTML += logos.innerHTML;
    gsap.from(".scroll-container", {
        y: -100,
        duration: 0.5,
        ease : "power2.out" 
    })
    gsap.to(".tech-scroll", {
        x: -totalWidth,       // scroll left
        duration: 20,         // adjust speed
        ease: "linear",
        repeat: -1            // infinite
    });
}
function WebClicked(){
    if(webButton.classList.contains("pink")){
        return;
    }
    if(webButton.classList.contains("gray")){
        webButton.classList.remove("gray");
        webButton.classList.add("pink");
        cButton.classList.remove("pink");
        cButton.classList.add("gray");
    }
}
function CPlusClicked(){
    if(cButton.classList.contains("pink")){
        return;
    }
    if(cButton.classList.contains("gray")){
        cButton.classList.remove("gray");
        cButton.classList.add("pink");
        webButton.classList.remove("pink");
        webButton.classList.add("gray");
    }
}
