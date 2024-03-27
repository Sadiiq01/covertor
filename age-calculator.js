let brithYear = document.querySelector('.brithYear')
let inputCurrentYear = document.querySelector('.inputCurrentYear')
let clickMe = document.querySelector('.clickMe')
let result = document.querySelector('.result')

setInterval(function(){
    let date = new Date()
    inputCurrentYear.value= date.getFullYear()
},1000)


clickMe.addEventListener('click' , function(){
    if(brithYear.value==''){
        alert('please enter your birth year')
    } else{
        let newYear = parseInt(inputCurrentYear.value) - parseInt(brithYear.value)
        result.value= newYear
        brithYear.value==NaN
    }
})

