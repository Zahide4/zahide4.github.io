gsap.registerPlugin(ScrollTrigger);

// const contents = gsap.utils.toArray("#horizontal .content");
// const testimonials1 = document.querySelector("#horizontal");
// const races = document.querySelector(".races");
// console.log(races.offsetWidth)

// function getScrollAmount() {
//     let racesWidth = races.scrollWidth;
//     return -(racesWidth - window.innerWidth);
// }

// const tween = gsap.to(races, {
//     x: getScrollAmount,
//     duration: 5,
//     ease: "none",
// });




// ScrollTrigger.create({
//     trigger: ".racesWrapper",
//     start: "30% 10%",
//     end: () => `+=${getScrollAmount() * -1}`,
//     pin: true,
//     animation: tween,
//     scrub: 1,
//     invalidateOnRefresh: true,
// })


const scrollers = document.querySelector(".scroller");

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);


        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true)
            duplicatedItem.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicatedItem);
        })
    });
}



function copy() {
    if (window.innerWidth > 900) {
        const userid = document.getElementById("id")
        navigator.clipboard.writeText("cremier4");
        document.execCommand("copy");
        userid.innerHTML = "ID Copied";
        setTimeout(function () {
            const userid = document.getElementById("id")
            userid.innerHTML = `<i class="fa-brands fa-discord"></i> @cremier`;
            console.log("hi")
        }, 2000);
    }
    else {
        var copyText = document.getElementById('myInput')
        copyText.select();
        document.execCommand('copy')
        const userid1 = document.getElementById("id")

        console.log('Copied Text')
        userid1.innerHTML = "ID Copied";
        setTimeout(function () {
            userid1.innerHTML = `<i class="fa-brands fa-discord"></i> Zahid#3554`;
            console.log("hi")
        }, 1500);
    }
}


function copy2() {
    if (window.innerWidth > 900) {
        const userid = document.getElementById("id2")
        navigator.clipboard.writeText("Zahid#3554");
        document.execCommand("copy");
        userid.innerHTML = "ID Copied";
        setTimeout(function () {
            const userid = document.getElementById("id2")
            userid.innerHTML = `<i class="fa-brands fa-discord"></i> Zahid#3554`;
            console.log("hi")
        }, 2000);
    }
    else {
        var copyText = document.getElementById('myInput')
        copyText.select();
        document.execCommand('copy')
        const userid1 = document.getElementById("id2")

        console.log('Copied Text')
        userid1.innerHTML = "ID Copied";
        setTimeout(function () {
            userid1.innerHTML = "Zahid#3554";
            console.log("hi")
        }, 1500);
    }
}


function copy3() {
    if (window.innerWidth > 900) {
        const userid = document.getElementById("id3")
        navigator.clipboard.writeText("cremier4@gmail.com");
        document.execCommand("copy");
        userid.innerHTML = "Copied";
        setTimeout(function () {
            const userid = document.getElementById("id3")
            userid.innerHTML = `<i class="fa-solid fa-envelope"></i> Email`;
            console.log("hi")
        }, 2000);
    }
    else {
        var copyText = document.getElementById('myInput2')
        copyText.select();
        document.execCommand('copy')
        const userid1 = document.getElementById("id3")

        console.log('Copied Text')
        userid1.innerHTML = "Copied";
        setTimeout(function () {
            userid1.innerHTML = `<i class="fa-solid fa-envelope"></i> Email`;
            console.log("hi")
        }, 1500);
    }
}



// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
