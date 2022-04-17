const btn = document.querySelector('.btn'),
principal = document.querySelector('#principal'),
interestRate = document.querySelector('#interest'),
period = document.querySelector('#years'),
monthlyPayment = document.querySelector('#monthly-payment'),
totalPayment = document.querySelector('#total-payment'),
totalInterest = document.querySelector('#total-interest');


const valueCheck = ()=>{
    // if(principalValue && interestRateValue && periodValue){
    //     console.log('yes oo')
    // }
    // else{
    //     console.log('No oo')
    // }
     
    if(!principalValue){
        // principal.classList.replace('output','error')
        principal.style.
        defaultValue()

    }
    else if(!interestRateValue){
        console.log('yes oo')
        defaultValue()
    }
    else if(!periodValue){
        console.log('yes oo')
        defaultValue()
    }
    else{
        console.log('No oo')
        amort()
    }
}
const defaultValue = ()=>{
    monthlyPayment.innerHTML = `N 0.00` 
    totalPayment.innerHTML = `N 0.00`
    totalInterest.innerHTML = `N 0.00`
}

const amort = ()=>{
    month = (principalValue*monthlyRate*(1+monthlyRate)**numberOfMonth)/(((1+monthlyRate)**numberOfMonth)-1)

    totalM = month*numberOfMonth
    totalI = totalM - principalValue

    monthlyPayment.innerHTML = `N ${Math.round(month * 100)/100}` 
    totalPayment.innerHTML = `N ${Math.round(totalM*100)/100}`
    totalInterest.innerHTML = `N ${Math.round(totalI * 100)/100}`
}

const compute = ()=>{
    principalValue = parseFloat(principal.value)
    interestRateValue = parseFloat(interestRate.value)
    periodValue = parseFloat(period.value)
    monthlyRate = interestRateValue/(12*100)
    numberOfMonth = periodValue*12

   

   

    valueCheck()

    console.log(month)
    console.log(totalM)
    console.log(totalI)
}



btn.addEventListener('click', compute)