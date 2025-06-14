const  loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0
loveMe.addEventListener('click', (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        if ((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            clickTime = 0
        } else{
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const loveMeRect = loveMe.getBoundingClientRect();

    const x = e.clientX - loveMeRect.left
    const y = e.clientY - loveMeRect.top

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked

    setTimeout (() => heart.remove(), 1000)
    
}