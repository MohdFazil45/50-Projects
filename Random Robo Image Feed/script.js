const container = document.querySelector('.container')
const imageURL = 'https://robohash.org/'

const rows = 10

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${imageURL}${getRandomSize()}`
    container.appendChild(img)
}

function getRandomSize(){
    return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr(){
    return Math.floor(Math.random() * 10) + 300
}
