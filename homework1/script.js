const myColor = document.querySelector('#color')
const myImage = document.querySelector('#image')
const smallBox = document.querySelectorAll('.box-small') 
function clickColor(){
    document.body.style.backgroundColor = getComputedStyle(this).backgroundColor
}
function clickImage(){
    document.body.style.backgroundImage = getComputedStyle(this).backgroundImage
}
function sizeBox(){
    document.querySelector('#box').classList.add('box_size')
    for(let small of smallBox){
        small.classList.add('box-small_size')
    }
    if(this.getAttribute('id') == 'color'){
        for(let i = 0; i < smallBox.length; i++){
            smallBox[i].classList.remove('bgi-' + i)
            smallBox[i].classList.add('bgc-' + i)
            smallBox[i].addEventListener('click', clickColor)
        }
    }
    else{
        for(let i = 0; i < smallBox.length; i++){
            smallBox[i].classList.remove('bgc-' + i)
            smallBox[i].classList.add('bgi-' + i)
            smallBox[i].addEventListener('click', clickImage)
        }
        
    }
}

myColor.addEventListener('click', sizeBox)
myImage.addEventListener('click', sizeBox)