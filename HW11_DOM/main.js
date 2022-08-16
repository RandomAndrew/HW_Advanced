// знаходимо наш клас для стилів за допомогою методу querySelector і зберігаємо його в змінну styles яку в подальшому будемо використовувати
const styles = document.querySelector('.box');

function createBlocks() {
    // за допомогою цикла перебираємо 25 наших кубиків які в подальшому будуть змінювати колір
    for (let i = 0; i < 25; i++) {
        //створюємо div елемент
        let div = document.createElement('div');
        //додаємо стилі з класу 'square_style'
        div.classList.add('square_style');
        // додаємо дочірній елемент
        styles.appendChild(div)
    }

}
// створюємо функцію де будемо повертати змішани кольори 
function squareColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)} )`
}

function blockIntervals() {
    createBlocks();
    // використовуємо метод setInterval для зміни кольорів кожні 1.2сек 
    setInterval(() => {
        for (let div of styles.children) {
            div.style.backgroundColor = squareColor(); 
        }
    }, 1200)
}

blockIntervals();
