let displayInp = document.querySelector('.display-inp')
let clearBtn = document.querySelector('.clearBtn')
let clearOneOf = document.querySelector('.clearOneOf')

function displayValue(inp){
    displayInp.value+=inp
}

function equalTo(){
    try{
        displayInp.value = eval(displayInp.value)
    }
    catch(error){
        displayInp.value= 'syntax error'
    }
}


clearBtn.addEventListener('click' , function(){
    displayInp.value= " "
})

function floor(){
    displayInp.value= Math.floor(displayInp.value)
}
function ceil(){
    displayInp.value= Math.ceil(displayInp.value)
}

// clearOneOf.addEventListener('click' , function(){
//     displayInp.value =displayInp.value.lenghth 
// })