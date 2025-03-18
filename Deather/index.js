
// const animation = anime({
//     targets: ".bgimg",
//     translateY: 600,
//     autoplay: false,
//     easing: 'linear',
//     duration: 4000,
//     position: "static",
// })

// const animation2 = anime({
//     targets: ".bgimg ",
//     opacity: 1,
//     autoplay: false,
//     easing: 'linear',
//     width: "400px",
//     height: "250px" 
    
// })


// const animation3 = anime({
//     targets: ".bgimg img",
//     autoplay: false,
//     easing: 'linear',
//     boxShadow: "0px 5px 20px black"

// })


// const bgimage = document.querySelector(".bgimg");

// window.onscroll = function () {
//     const scrollPercent = window.pageYOffset;
//     animation.seek((scrollPercent /100) * animation.duration)
//     animation2.seek((scrollPercent /500) * animation.duration)
//     animation3.seek((scrollPercent /500) * animation.duration)

// }





const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((e1) => observer.observe(e1));