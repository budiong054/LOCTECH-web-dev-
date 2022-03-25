const buttons = document.querySelector('.buttons'),
    displayNumber = document.querySelector('.displayNumber'),
    defaultColor = '#ffffff';

    function colorDisplay(displayNumber){
        if(displayNumber.innerHTML <0 ){
            return displayNumber.style.color = 'red'
        }
        else if(displayNumber.innerHTML >0 ){
            return displayNumber.style.color = 'rgb(60, 221, 60)'
        }
        else{
        return displayNumber.style.color = defaultColor
        }
    }


    const perform = (e)=> {
        if(e.target.classList.contains('addBtn')){
            displayNumber.innerHTML++
        }
        else if(e.target.classList.contains('subBtn')){
            displayNumber.innerHTML--
        }
        else{
            displayNumber.innerHTML = 0
        }

        colorDisplay(displayNumber)
    }





    buttons.addEventListener('click',perform)
