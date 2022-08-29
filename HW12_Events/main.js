const buttons = document.querySelectorAll('button');
const audio = document.querySelectorAll('audio')

// для кліку 
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        let id = this.id;
        for (let x = 0; x < buttons.length; x++) {
            if(audio[x].id == id) {
                // currentTime - вказує з якого моменту починати аудіо
                audio[x].currentTime = 0;
                audio[x].play();
            }
        }
    })
}

// для клавіші 
window.addEventListener("keydown", function(event) {
    let keyNum = event.keyCode;
    for(let x = 0; x < buttons.length; x++) {
        if(audio[x].id == keyNum) {
            audio[x].currentTime = 0;
            audio[x].play();
        }
    }
  });
  
  













