let numberInp = document.querySelector('.Number')
let powerInp = document.querySelector('.power')
let resultInp = document.querySelector('.result')
let submitBtn = document.querySelector('.submit')

submitBtn.addEventListener('click' , function(){
    if(numberInp.value=='' || powerInp.value==''){
        alert('please Enter The value')
    } else{
        let newNumber = Math.pow(numberInp.value, powerInp.value )
        resultInp.value= newNumber
    }
})