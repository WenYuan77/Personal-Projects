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
        e.target.style.animation = 'aboutMeTextAnim 5s'
    })
})

// End of About Me Text


// Projects
const projects = document.querySelectorAll('.project')
const container = document.querySelector('.container')
const projectHideBtn = document.querySelector('.project-hide-btn')

projects.forEach( (project, index) => {
    project.addEventListener('mouseenter', () => {
        project.firstElementChild.style.top = 
        `${project.offsetHeight - 
            project.firstElementChild.offsetHeight + 20}px`
    })

    project.addEventListener('mouseleave', () => {
        project.firstElementChild.style.top = '2rem'
    })

    // Big Project Image
    project.addEventListener('click', () => {
        const bigImgWrapper = document.createElement('div')
        bigImgWrapper.className = 'project-img-wrapper'
        container.appendChild(bigImgWrapper)

        const bigImg = document.createElement('img')
        bigImg.className = 'project-img'

        const imgPath = project.firstElementChild.getAttribute('src').split('.')[0]
        bigImg.setAttribute('src', `${imgPath}-big.jpg`)
        bigImgWrapper.appendChild(bigImg)

        document.body.style.overflow = 'hidden'

        projectHideBtn.classList.add('change')
        projectHideBtn.onclick = () => {
            projectHideBtn.classList.remove('change')
            bigImgWrapper.remove()
            document.body.style.overflow = 'scroll'
        }
    })
    // End of Big Project Image

    index >= 6 && (project.style.cssText = 'display: none; opacity: 0')
        
})

// Show-More Button
const section3 = document.querySelector('.section-3')
const showMoreBtn = document.querySelector('.show-more-btn')
const showMoreBtnText = document.querySelector('.show-more-btn span')

let showMoreProjects = true

const moreProjects = (project, index) => {

    if (index >= 6) {

        setTimeout(() => {
            project.style.display = 'flex';
            section3.scrollIntoView({block: 'end'})
        }, 600);

        setTimeout(() => {
            project.style.opacity = 1
        }, index * 200);      
    }
}


const lessProjects = (project, index) => {

    if (index >=6) {
  
        setTimeout(() => {
            project.style.display = 'none';
            section3.scrollIntoView({block: 'end'})
        }, 1200);

        setTimeout(() => {
            project.style.opacity = 0;
        }, index * 100);
    }
}

showMoreBtn.addEventListener('click', (e) => {

    e.preventDefault();

    showMoreBtn.firstElementChild.nextElementSibling.classList.toggle('change')

    if (showMoreProjects) {

        projects.forEach((project, index) => {

            moreProjects(project, index)
        });

        showMoreProjects = !showMoreProjects;

        showMoreBtnText.textContent = 'Show Less';
    }

    else {
        projects.forEach((project, index) => {
            
            lessProjects(project, index)
        });

        showMoreProjects = !showMoreProjects;
        showMoreBtnText.textContent = 'Show More'
    }
})
// End of Show-More Button
// End of Projects

// Section 4
document.querySelectorAll('.service-btn').forEach((service) => {
    service.addEventListener('click', (e) => {

        e.preventDefault();

        const serviceText = service.nextElementSibling;

        serviceText.classList.toggle('change');

        const rightPosition = serviceText.classList.contains('change') 
        ? `calc(100% - ${getComputedStyle(service.firstElementChild).width})`
        : 0;

        service.firstElementChild.style.right = rightPosition;
    })
})

// End of Section 4


// Section 5

// Form
const formHeading = document.querySelector('.form-heading')
const formInputs = document.querySelectorAll('.contact-form-input')

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        formHeading.style.opacity = 0
        setTimeout(() => {
            formHeading.textContent = `Your ${input.placeholder}`;
            formHeading.style.opacity = 1
        }, 300)
    })

    input.addEventListener('blur', () => {
    formHeading.style.opacity = 0
    setTimeout(() => {
        formHeading.textContent = "Let's Talk";
        formHeading.style.opacity = 1
    }, 300)
})
})


// End of Form
// End of Section 5
