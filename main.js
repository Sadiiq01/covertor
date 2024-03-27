let burger = document.querySelector('.burger')
let navigationBar = document.querySelector('.navigation-bar')

burger.addEventListener('click' , function(){
    navigationBar.classList.toggle('active')
})

let homeBtn = document.querySelector('.homeBtn')
let aboutBtn = document.querySelector('.aboutBtn')
let suscribeUs = document.querySelector('.suscribeUs')
let btnServive = document.querySelector('.btnServive')

let subscribMe = document.querySelector('.subscribMe')

let daySpan = document.querySelector('.daySpan')
let dateSpan = document.querySelector('.dateSpan')
let monthSpan = document.querySelector('.monthSpan')
let yearSpan = document.querySelector('.yearSpan')

let hourSpan = document.querySelector('.hourSpan')
let minuteSpan = document.querySelector('.minuteSpan')
let secondSpan = document.querySelector('.secondSpan')

setInterval(function(){
    let date = new Date()
    dateSpan.innerHTML=date.getDate()+'/'
    monthSpan.innerHTML=+date.getMonth()+1+'/'
    yearSpan.innerHTML=date.getFullYear()

    spanYearTwo.innerHTML=date.getFullYear()
    spanMonthTwo.innerHTML=+date.getMonth()+1+'/'

    if(date.getHours()<10){
        hourSpan.innerHTML= "0" + date.getHours() +'/'
    }else{
        hourSpan.innerHTML=  date.getHours()+'/'
    } 

    if(date.getMinutes()<10){
        minuteSpan.innerHTML= "0" +date.getMinutes() +'/'
    }else{
        minuteSpan.innerHTML= date.getMinutes()+'/'
    } 

    if(date.getSeconds()<10){
        secondSpan.innerHTML= "0" + date.getSeconds()
    }else{
       secondSpan.innerHTML=  date.getSeconds()
    } 

    let day = +date.getDay()
    switch(day){
        case 0 :
            daySpan.innerHTML='sunday'
        break;
        case 1 :
            dateSpan.innerHTML='monday'
        break;
        case 2:
            daySpan.innerHTML='tuesday'
        break;
        case 3:
            daySpan.innerHTML='wednesday'
        break;
        case 4 :
            daySpan.innerHTML='thrusday'
        break;
        case 5:
            daySpan.innerHTML='friday'
        break;
        case 6 :
            daySpan.innerHTML= 'saturday'
        break;
    }

},1000)

let simpleCalcBtn = document.querySelector('.simpleCalcBtn')
let ageCalcBtn = document.querySelector('.ageCalcBtn')
let mathPowBtn = document.querySelector('.mathPowBtn')
let convertorBtn = document.querySelector('.convertorBtn')

let spanYearTwo = document.querySelector('.spanYearTwo')
let spanMonthTwo = document.querySelector('.spanMonthTwo')

aboutBtn.addEventListener('click', function(){
    navigationBar.classList.remove('active')
})

btnServive.addEventListener('click' , function(){
    navigationBar.classList.remove('active')  
})

ageCalcBtn.addEventListener('click' , function(){
    window.location.href='age-calculator.html'
})

let DateInp = document.querySelector('.DateInp')

setInterval(function(){
    let date = new Date()
    switch(date.getDay()){
        case 0 :
           DateInp.value='sunday' + ' '
        break;
        case 1 :
            DateInp.value='monday' + ' '
        break;
        case 2:
            DateInp.value='tuesday' + ' '
        break;
        case 3:
            DateInp.value='wednesday' + ' '
        break;
        case 4 :
            DateInp.value='thrusday' + ' '
        break;
        case 5:
            DateInp.value='friday' + ' '
        break;
        case 6 :
            DateInp.value= 'saturday'+ ' '
        break;
    }
    if(date.getHours()<10){
        DateInp.value+= "0" + date.getHours() +'/'
    }else{
        DateInp.value+=  date.getHours()+'/'
    } 

    if(date.getMinutes()<10){
        DateInp.value+= "0" +date.getMinutes() +'/'
    }else{
        DateInp.value+= date.getMinutes()+'/'
    } 

    if(date.getSeconds()<10){
        DateInp.value+= "0" + date.getSeconds()
    }else{
        DateInp.value+=  date.getSeconds()
    } 

},1000)

let cancel = document.querySelector('.cancel')
let subscribeUsContainer = document.querySelector('.subscribeUs-container')
suscribeUs.addEventListener('click' , function(){
    subscribeUsContainer.classList.add('active')
    navigationBar.classList.remove('active')
})

subscribMe.addEventListener('click' , function(){
    subscribeUsContainer.classList.add('active')
    navigationBar.classList.remove('active')
})
cancel.addEventListener('click' , function(){
    subscribeUsContainer.classList.remove('active')
})

mathPowBtn.addEventListener('click' , function(){
    window.location.href='math-pow.html'
})

simpleCalcBtn.addEventListener('click' , function (){
    window.location.href='calculator.html'
})

convertorBtn.addEventListener('click' , function(){
    window.location.href='conver-units.html'
})