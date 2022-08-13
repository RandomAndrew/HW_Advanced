const box = document.querySelector('.box');

function createBlocks() {

    for (let i = 0; i < 25; i++) {
        let div = document.createElement('div');
        div.classList.add('square');
        box.append(div)
    }

}

function color() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)} )`
}

function blockIntervals() {
    createBlocks();
    setInterval(() => {
        for (let div of box.children) {
            div.style.backgroundColor = color(); 
        }
    }, 1000)
}

blockIntervals();
