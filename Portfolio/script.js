// Mouse Circle
const mouseCircle = document.querySelector('.mouse-circle')
const mouseDot = document.querySelector('.mouse-dot')

const mouseCircleFn = (x, y) => {
    mouseCircle.style.cssText = `top: ${y}px; left:${x}px; 
    opacity: 1`;
    mouseDot.style.cssText = `top: ${y}px; left:${x}px; 
    opacity: 1`;
};
// End of Mouse Circle

// Animated Circles

const circles = document.querySelectorAll('.circle')
const mainImg = document.querySelector('.main-circle img')

let preClientX = 0
let preClientY = 0
let distanceMoved = 100

const animatedCircles = (e,x,y) => {

    if (x < preClientX) {
        circles.forEach((circle) => {
            circle.style.left = `${distanceMoved}px`
        })
        mainImg.style.left = `${distanceMoved}px`
    }
    else if (x > preClientX) {
        circles.forEach((circle) => {
            circle.style.left = `-${distanceMoved}px`
        })
        mainImg.style.left = `-${distanceMoved}px`
    }

    if (y < preClientY) {
        circles.forEach((circle) => {
            circle.style.top = `${distanceMoved}px`
        })
        mainImg.style.top = `${distanceMoved}px`
    }
    else if (y > preClientY) {
        circles.forEach((circle) => {
            circle.style.top = `-${distanceMoved}px`
        })
        mainImg.style.top = `-${distanceMoved}px`
    }

    preClientX = e.clientX
    preClientY = e.clientY
}
//End of Animated Circles


document.body.addEventListener('mousemove', (e) => {
    let x = e.clientX
    let y = e.clientY

    mouseCircleFn(x, y)
    animatedCircles(e,x,y)
})

document.body.addEventListener('mouseleave', () => {
    mouseCircle.style.opacity = '0'
    mouseDot.style.opacity = '0'
})


// Main Buttons
const mainBtns = document.querySelectorAll('.main-btn')

mainBtns.forEach(btn => {
    btn.addEventListener('mouseenter', (e) => {
        const left = e.clientX - e.target.getBoundingClientRect().left
        const top = e.clientY - e.target.getBoundingClientRect().top

        ripple = document.createElement('div')
        ripple.classList.add('ripple')
        ripple.style.left = `${left}px`
        ripple.style.top = `${top}px`
        btn.prepend(ripple)
    })

    btn.addEventListener('mouseleave', () => {
        btn.removeChild(ripple)
    })
})

// End of Main Buttons

// About Me Text
const aboutMeText = document.querySelector('.about-me-text')
const aboutMeTextContent = 
`I am a designer & I create awards winning websites with 
the best user experience & I do nottalk much, just contance me.`

Array.from(aboutMeTextContent).forEach((letter) => {
    const span = document.createElement('span')
    span.textContent = letter
    aboutMeText.appendChild(span)  

    span.addEventListener('mouseenter', (e) => {
        e.target.style.animation = 'aboutMeTextAnim 10s infinite'
    })
})

// End of About Me Text

