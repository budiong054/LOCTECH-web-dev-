const red = document.querySelector('.red'),
redLight = document.querySelector('#red-light'),
yellow = document.querySelector('.yellow'),
green = document.querySelector('.green'),
countDown = document.querySelector('.count-down'),
opacityRed = document.querySelector('.opacity-red'),
opacity = document.querySelector('.opacity'),
carContainer = document.querySelector('.car-container'),
modalPopUp = document.querySelector('.modal-pop-up');


let countDownNum = Number(countDown.innerHTML)

const modal = () =>{
    modalPopUp.style.display ='block'
    setTimeout(() => {
        modalPopUp.style.display = 'none'
    }, 7500);
}

const trafficColor = ()=>{
    if(countDownNum === 50 && !(redLight.classList.contains('no-opacity-red'))){
        opacityRed.classList.toggle('no-opacity-red');
        green.classList.replace('no-opacity-green','opacity-green')
        countDown.style.color = 'green'
        carContainer.classList.add('car-moving')
        modalPopUp.innerHTML = 'Go!'
        modalPopUp.style.color ='green'
        
        modal()
    }
    else if(countDownNum === 50 && redLight.classList.contains('no-opacity-red')){
        opacityRed.classList.toggle('no-opacity-red');
        green.classList.replace('opacity-green','no-opacity-green')
        countDown.style.color = 'red'
        carContainer.classList.remove('car-moving')
        modalPopUp.innerHTML = 'Stop!'
        modalPopUp.style.color = 'red'

        modal()
    }
}

const yellowBlink = ()=> {
    setInterval(() => {
        if (countDownNum <5 && countDownNum >0){
            opacity.classList.toggle('no-opacity');
            countDown.style.color = 'yellow'
        }
    }, 500);
}

const startCount = ()=>{
    yellow.classList.replace('opacity','no-opacity')
    setInterval(() => {
        if (countDownNum !== 0) {
            countDown.innerHTML =  countDownNum--
        }
        else {
            countDownNum = 50
            countDown.innerHTML = countDownNum
        }
        trafficColor()
        
    }, 1000);

    yellowBlink()
    
    modal()
}

window.addEventListener('load', startCount)