const btn = document.querySelectorAll('.faq-toggle')

btn.forEach( toggle => {
    toggle.addEventListener('click',() => {
        toggle.parentNode.classList.toggle('active')
    })
})