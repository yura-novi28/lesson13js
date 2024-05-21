const addText = document.querySelector('#add-text');
const keybords = document.querySelectorAll('.small-box')

function effect(event){
    if(event.keyCode == 32){
        document.querySelector('#space').style.backgroundColor = 'rgb(130, 130, 130)'
        addText.innerHTML += ' ';
    }
    else if(event.keyCode == 9){
        document.querySelector('#tab').style.backgroundColor = 'rgb(130, 130, 130)'
        addText.innerHTML += '\t';
    }
    else if(event.keyCode == 20){
        document.querySelector('#caps').style.backgroundColor = 'rgb(130, 130, 130)'
    }
    else if(event.keyCode == 16){
        document.querySelector('#shift').style.backgroundColor = 'rgb(130, 130, 130)'
    }
    else if(event.keyCode == 13){
        document.querySelector('#enter').style.backgroundColor = 'rgb(130, 130, 130)'
        addText.innerHTML += ' </br>';
    }
    else if(event.keyCode == 8){
        document.querySelector('#back').style.backgroundColor = 'rgb(130, 130, 130)'
        addText.innerText = addText.innerText.slice(0, -1);
    }
    else{
        for(let i=0; i < keybords.length; i++){
            if(keybords[i].innerText == event.key){
                keybords[i].style.backgroundColor = 'rgb(130, 130, 130)'
                addText.innerHTML += event.key;
            }
            else if(keybords[i].innerText.toUpperCase() == event.key){
                keybords[i].style.backgroundColor = 'rgb(130, 130, 130)'
                addText.innerHTML += event.key.toUpperCase();
            }
        }
    }
    
    
    // console.log(event.keyCode)
    // console.log(event.key)

}
function effectNone(event){
    for(let i=0; i < keybords.length; i++){
        if(keybords[i].innerText == event.key || keybords[i].innerText.toUpperCase() == event.key){
            keybords[i].style.backgroundColor = '#fff'
        }
        else if(event.keyCode == 32){
            document.querySelector('#space').style.backgroundColor = '#fff'
        }
    }
    // console.log(event.keyCode)
    // console.log(event.key)

}

window.addEventListener('keydown', effect)
window.addEventListener('keyup', effectNone)
