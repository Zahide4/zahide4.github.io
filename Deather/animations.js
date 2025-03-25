// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
    console.log(e);
});



let tl = gsap.timeline({

    scrollTrigger: {
        trigger: '.animated-element',
        start: 'top 40%',
        end: 'center center',
        scrub: true,
    },

});

let t2 = gsap.timeline({

    scrollTrigger: {
        trigger: '.animated-title',
        start: 'top 90%',
        end: 'center 50%',
        scrub: true,
        markers: true
    },

})

let t8 = gsap.timeline({

    scrollTrigger: {
        trigger: '.animated-title4',
        start: 'top 90%',
        end: 'center 50%',
        scrub: true,
        markers: true
    },

});

let t9 = gsap.timeline({

    scrollTrigger: {
        trigger: '.animated-title5',
        start: 'top 90%',
        end: 'top 50%',
        scrub: true,
        markers: true
    },

});

let t3 = gsap.timeline({

    scrollTrigger: {
        trigger: '.animated-image',
        start: 'top 100%',
        end: 'center 50%',
        scrub: true,

    },

});

let t4 = gsap.timeline({

    scrollTrigger: {
        trigger: '.animated-paragraph1',
        start: 'top 100%',
        end: 'center 50%',
        scrub: true,
    },

});

let t5 = gsap.timeline({

    scrollTrigger: {
        trigger: '.animated-paragraph2',
        start: 'top 100%',
        end: 'center 50%',
        scrub: true,
    },

});

let t6 = gsap.timeline({

    scrollTrigger: {
        trigger: '.animated-paragraph3',
        start: 'top 100%',
        end: 'center 50%',
        scrub: true,
    },

});

let t7 = gsap.timeline({

    scrollTrigger: {
        trigger: '.animated-quote',
        start: '-200% center',
        end: '400% center',
        scrub: true,
    },

});




tl.to('.animated-element', {
    y: -200,
})

t2.to('.animated-title', {
    y: -100,
    filter: 'blur(0px)'
})

t3.to('.animated-image', {
    x: 0,
    y: 10,
    scale: 1.1,
    filter: 'blur(0px)',
    rotate: 5,
})

t4.to('.animated-paragraph1', {
    filter: 'blur(0px)',
    opacity: 1,
    scale: 1,

})
t5.to('.animated-paragraph2', {
    filter: 'blur(0px)',
    opacity: 1,
    scale: 1,
})
t6.to('.animated-paragraph3', {
    filter: 'blur(0px)',
    opacity: 1,
    scale: 1,
})


t7.to('.animated-quote', {
    x: '150vw',
})

t8.to('.animated-title4', {
    y: -100,
    filter: 'blur(0px)'
})

t9.to('.animated-title5', {
    y: -50,
    filter: 'blur(0px)',
    x: 100
})





// text section

gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll('.reveal-type')

splitTypes.forEach((char, i) => {

    const text = new SplitType(char, {types: 'chars, words'})
    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char, 
            start: 'top 80%',
            end: 'top 20%', 
            scrub: true,
            markers: false
        },
        opacity: 0.2,
        stagger: 0.1
    })
})



const splitTypes2 = document.querySelectorAll('.reveal-type2')

splitTypes2.forEach((char, i) => {

    const text = new SplitType(char, {types: 'chars, words'})
    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char, 
            start: 'top 80%',
            end: 'top 50%', 
            scrub: true,
            markers: false
        },
        stagger: 0.1, 
        scaleY: 0,
        y: -20,
        transformOrigin: 'top'
    })
})