const secrect = "aback";
const letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
const alpha = new Set(letters.split(''));
const keyboard = [ 
    "QWERTYUIOP".split(''),
    "ASDFGHJKL".split(''),
    "ZXCVBNM"  .split('')
]   

window.addEventListener('keyup', logKey);


function logKey(evt) {
    console.log('submit');

    if (evt.key.toUpperCase()  == "ENTER") {
         console.log ('submit')
    }

    if (evt.key.toUpperCase() == "backspace") { 
        constole.log('deleting');
    }

    if (alpha.has(evt.key.toUpperCase())) {
         constole.log(evt.key.toUppeerCase());
    } else {
        constole.log('not a letter');
    }
}
function render() {
    const main = document.querySelector('#root');
    let template =  ``;
    
    for (let i = 0; i<keyboard.lenth; i++) {
    template += `<div class="row">`
    for (let j=0; j<keyboard[i].length; j++) {
        template += `<div class="key">${  keyboard[i][j] } </div>`
       }
       template += `</div>`
    }

    template += `</div>`
       
     main.innerHTML = template;
    
    console.log(main);
}

render();