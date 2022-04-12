// const btn = document.querySelector('.btn');
// const total = document.querySelector('#total');
//     calculate = () => { // Get the user's input from the form. Assume it is all valid. // Convert interest from a percentage to a decimal, and convert from // an annual rate to a monthly rate. Convert payment period in years // to the number of monthly payments. 
    
//     const principal = document.loandata.amount.value; 
//     const interest = document.loandata.rate.value / 100 / 12; 
//     const payments = document.loandata.years.value * 12; 
    
//     // Now compute the monthly payment figure, using esoteric math. 
    
//     const x = Math.pow(1 + interest, payments); const monthly = (principal*x*interest)/(x-1); 
//     // Check that the result is a finite number. If so, display the results. 
    
//     if (!isNaN(monthly) && (monthly != Number.POSITIVE_INFINITY) && (monthly != Number.NEGATIVE_INFINITY)) { 
//     document.loandata.payment.value = round(monthly); 
//     document.loandata.total.value = round(monthly * payments); 
//     document.loandata.totalinterest.value = round((monthly * payments) - principal); 
//     } 
//     // Otherwise, the user's input was probably invalid, so don't // display anything. 
    
//     else { 
//     document.loandata.payment.value = ""; document.loandata.total.value = ""; 
//     document.loandata.totalinterest.value = ""; 
//     } 
//     } 
//     // This simple method rounds a number to two decimal places. 
    
//     function round(x) { 
//     return Math.round(x*100)/100; 
//     }
//     btn.addEventListener('click', calculate)
//     window.addEventListener('onchange', calculate)



const btn = document.querySelector('.btn'),
principal = document.querySelector('#principal'),
interestRate = document.querySelector('#interest'),
period = document.querySelector('#years'),
monthlyPayment = document.querySelector('#monthly-payment'),
totalPayment = document.querySelector('#total-payment'),
totalInterest = document.querySelector('#total-interest');




const amort = ()=>{
    month = (principalValue*monthlyRate*(1+monthlyRate)**numberOfMonth)/(((1+monthlyRate)**numberOfMonth)-1)

    totalM = month*numberOfMonth
    totalI = totalM - principalValue
}

const compute = ()=>{
    principalValue = parseInt(principal.value)
    interestRateValue = parseInt(interestRate.value)
    periodValue = parseInt(period.value)
    monthlyRate = interestRateValue/(12*100)
    numberOfMonth = periodValue*12

    amort()

    monthlyPayment.innerHTML = `N ${Math.round(month * 100)/100}` 
    totalPayment.innerHTML = `N ${Math.round(totalM*100)/100}`
    totalInterest.innerHTML = `N ${Math.round(totalI * 100)/100}`

    
    console.log(monthlyRate)
    console.log(numberOfMonth)
    console.log(month)
    console.log(Math.round(month * 100)/100)
    console.log(totalM)
    console.log(totalI)
    console.log(Math.round(totalI * 100)/100)
}



btn.addEventListener('click', compute)