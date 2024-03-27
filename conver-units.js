let radioLengOne = document.querySelector('.radioLengOne')
let divlengOne = document.querySelector('.divlengOne')

radioLengOne.addEventListener('change' , function(){
    if(this.checked){
        let inpResult = document.createElement('input')
        let btnResult = document.createElement('button')
        let btnDelt= document.createElement('button')
        btnDelt.classList.add('btn')
        inpResult.classList.add('All-inp')
        btnResult.classList.add('btn')
        btnDelt.innerHTML= 'delete'
        btnResult.innerHTML='convert'
        divlengOne.append(inpResult," ",btnResult , " " , btnDelt)
        btnDelt.addEventListener('click' , function(){
            window.location.reload()
        })
        btnResult.addEventListener('click' , function(){
            let pragresult = document.createElement('p')
            let result = +inpResult.value*100
            pragresult.innerHTML=result +" "+'cm'
            pragresult.style.margin='1rem'
            divlengOne.append(pragresult)
        })
    }
})
let radioLengTwo = document.querySelector('.radioLengTwo')
let divlengTwo = document.querySelector('.divlengTwo')

radioLengTwo.addEventListener('change' , function(){
    if(this.checked){
        let inpResult = document.createElement('input')
        let btnResult = document.createElement('button')
        let btnDelt= document.createElement('button')
        btnDelt.classList.add('btn')
        inpResult.classList.add('All-inp')
        btnResult.classList.add('btn')
        btnDelt.innerHTML= 'delete'
        btnResult.innerHTML='convert'
        divlengTwo.append(inpResult," ",btnResult , " " , btnDelt)
        btnDelt.addEventListener('click' , function(){
            window.location.reload()
        })
        btnResult.addEventListener('click' , function(){
            let pragresult = document.createElement('p')
            let result = +inpResult.value/100
            pragresult.innerHTML=result +" "+'m'
            pragresult.style.margin='1rem'
            divlengTwo.append(pragresult)
        })
    }
})
let radioLengThree = document.querySelector('.radioLengThree')
let divlengThree = document.querySelector('.divlengThree')

radioLengThree.addEventListener('change' , function(){
    if(this.checked){
        let inpResult = document.createElement('input')
        let btnResult = document.createElement('button')
        let btnDelt= document.createElement('button')
        btnDelt.classList.add('btn')
        inpResult.classList.add('All-inp')
        btnResult.classList.add('btn')
        btnDelt.innerHTML= 'delete'
        btnResult.innerHTML='convert'
        divlengThree.append(inpResult," ",btnResult , " " , btnDelt)
        btnDelt.addEventListener('click' , function(){
            window.location.reload()
        })
        btnResult.addEventListener('click' , function(){
            let pragresult = document.createElement('p')
            let result = +inpResult.value/10
            pragresult.innerHTML=result +" "+'cm'
            pragresult.style.margin='1rem'
            divlengThree.append(pragresult)
        })
    }
})
let radioLengFour = document.querySelector('.radioLengFour')
let divlengFour = document.querySelector('.divlengFour')

radioLengFour.addEventListener('change' , function(){
    if(this.checked){
        let inpResult = document.createElement('input')
        let btnResult = document.createElement('button')
        let btnDelt= document.createElement('button')
        btnDelt.classList.add('btn')
        inpResult.classList.add('All-inp')
        btnResult.classList.add('btn')
        btnDelt.innerHTML= 'delete'
        btnResult.innerHTML='convert'
        divlengFour.append(inpResult," ",btnResult , " " , btnDelt)
        btnDelt.addEventListener('click' , function(){
            window.location.reload()
        })
        btnResult.addEventListener('click' , function(){
            let pragresult = document.createElement('p')
            let result = +inpResult.value*10
            pragresult.innerHTML=result +" "+'mm'
            pragresult.style.margin='1rem'
            divlengFour.append(pragresult)
        })
    }
})
let radioLengFive = document.querySelector('.radioLengFive')
let divlengFive = document.querySelector('.divlengFive')

radioLengFive.addEventListener('change' , function(){
    if(this.checked){
        let inpResult = document.createElement('input')
        let btnResult = document.createElement('button')
        let btnDelt= document.createElement('button')
        btnDelt.classList.add('btn')
        inpResult.classList.add('All-inp')
        btnResult.classList.add('btn')
        btnDelt.innerHTML= 'delete'
        btnResult.innerHTML='convert'
        divlengFive.append(inpResult," ",btnResult , " " , btnDelt)
        btnDelt.addEventListener('click' , function(){
            window.location.reload()
        })
        btnResult.addEventListener('click' , function(){
            let pragresult = document.createElement('p')
            let result = +inpResult.value*1000
            pragresult.innerHTML=result +" "+'mm'
            pragresult.style.margin='1rem'
            divlengFive.append(pragresult)
        })
    }
})
let radioLengSix = document.querySelector('.radioLengSix')
let divlengSix = document.querySelector('.divlengSix')

radioLengSix.addEventListener('change' , function(){
    if(this.checked){
        let inpResult = document.createElement('input')
        let btnResult = document.createElement('button')
        let btnDelt= document.createElement('button')
        btnDelt.classList.add('btn')
        inpResult.classList.add('All-inp')
        btnResult.classList.add('btn')
        btnDelt.innerHTML= 'delete'
        btnResult.innerHTML='convert'
        divlengSix.append(inpResult," ",btnResult , " " , btnDelt)
        btnDelt.addEventListener('click' , function(){
            window.location.reload()
        })
        btnResult.addEventListener('click' , function(){
            let pragresult = document.createElement('p')
            let result = +inpResult.value/1000
            pragresult.innerHTML=result +" "+'m'
            pragresult.style.margin='1rem'
            divlengSix.append(pragresult)
        })
    }
})
let radioMassOne = document.querySelector('.radioMassOne')
let divMassOne = document.querySelector('.divMassOne')

radioMassOne.addEventListener('change' , function(){
    if(this.checked){
        let inpResult = document.createElement('input')
        let btnResult = document.createElement('button')
        let btnDelt= document.createElement('button')
        btnDelt.classList.add('btn')
        inpResult.classList.add('All-inp')
        btnResult.classList.add('btn')
        btnDelt.innerHTML= 'delete'
        btnResult.innerHTML='convert'
        divMassOne.append(inpResult," ",btnResult , " " , btnDelt)
        btnDelt.addEventListener('click' , function(){
            window.location.reload()
        })
        btnResult.addEventListener('click' , function(){
            let pragresult = document.createElement('p')
            let result = +inpResult.value*1000
            pragresult.innerHTML=result +" "+'g'
            pragresult.style.margin='1rem'
            divMassOne.append(pragresult)
        })
    }
})
let radioMassTwo = document.querySelector('.radioMassTwo')
let divMassTwo = document.querySelector('.divMassTwo')

radioMassTwo.addEventListener('change' , function(){
    if(this.checked){
        let inpResult = document.createElement('input')
        let btnResult = document.createElement('button')
        let btnDelt= document.createElement('button')
        btnDelt.classList.add('btn')
        inpResult.classList.add('All-inp')
        btnResult.classList.add('btn')
        btnDelt.innerHTML= 'delete'
        btnResult.innerHTML='convert'
        divMassTwo.append(inpResult," ",btnResult , " " , btnDelt)
        btnDelt.addEventListener('click' , function(){
            window.location.reload()
        })
        btnResult.addEventListener('click' , function(){
            let pragresult = document.createElement('p')
            let result = +inpResult.value/1000
            pragresult.innerHTML=result +" "+'kg'
            pragresult.style.margin='1rem'
            divMassTwo.append(pragresult)
        })
    }
})
let radioTempOne = document.querySelector('.radioTempOne')
let divTempOne = document.querySelector('.divTempOne')

radioTempOne.addEventListener('change' , function(){
    if(this.checked){
        let inpResult = document.createElement('input')
        let btnResult = document.createElement('button')
        let btnDelt= document.createElement('button')
        btnDelt.classList.add('btn')
        inpResult.classList.add('All-inp')
        btnResult.classList.add('btn')
        btnDelt.innerHTML= 'delete'
        btnResult.innerHTML='convert'
        divTempOne.append(inpResult," ",btnResult , " " , btnDelt)
        btnDelt.addEventListener('click' , function(){
            window.location.reload()
        })
        btnResult.addEventListener('click' , function(){
            let pragresult = document.createElement('p')
            let result = +inpResult.value - 272.15
            pragresult.innerHTML=result +" "+'c'
            pragresult.style.margin='1rem'
            divTempOne.append(pragresult)
        })
    }
})
let radioTempTwo = document.querySelector('.radioTempTwo')
let divTempTwo = document.querySelector('.divTempTwo')

radioTempTwo.addEventListener('change' , function(){
    if(this.checked){
        let inpResult = document.createElement('input')
        let btnResult = document.createElement('button')
        let btnDelt= document.createElement('button')
        btnDelt.classList.add('btn')
        inpResult.classList.add('All-inp')
        btnResult.classList.add('btn')
        btnDelt.innerHTML= 'delete'
        btnResult.innerHTML='convert'
        divTempTwo.append(inpResult," ",btnResult , " " , btnDelt)
        btnDelt.addEventListener('click' , function(){
            window.location.reload()
        })
        btnResult.addEventListener('click' , function(){
            let pragresult = document.createElement('p')
            let result = +inpResult.value + 272.15
            pragresult.innerHTML=result +" "+'k'
            pragresult.style.margin='1rem'
            divTempTwo.append(pragresult)
        })
    }
})
let divTempThree = document.querySelector('.divTempThree')
let radioTempThree = document.querySelector('.radioTempThree')

radioTempThree.addEventListener('change' , function(){
    if(this.checked){
        let inpResult = document.createElement('input')
        let btnResult = document.createElement('button')
        let btnDelt= document.createElement('button')
        btnDelt.classList.add('btn')
        inpResult.classList.add('All-inp')
        btnResult.classList.add('btn')
        btnDelt.innerHTML= 'delete'
        btnResult.innerHTML='convert'
        divTempThree.append(inpResult," ",btnResult , " " , btnDelt)
        btnDelt.addEventListener('click' , function(){
            window.location.reload()
        })
        btnResult.addEventListener('click' , function(){
            let pragresult = document.createElement('p')
            let result = 9/5*parseInt(inpResult.value)+32
            pragresult.innerHTML=result +" "+'f'
            pragresult.style.margin='1rem'
            divTempThree.append(pragresult)
        })
    }
})
let divTempFour = document.querySelector('.divTempFour')
let radioTempFour = document.querySelector('.radioTempFour')

radioTempFour.addEventListener('change' , function(){
    if(this.checked){
        let inpResult = document.createElement('input')
        let btnResult = document.createElement('button')
        let btnDelt= document.createElement('button')
        btnDelt.classList.add('btn')
        inpResult.classList.add('All-inp')
        btnResult.classList.add('btn')
        btnDelt.innerHTML= 'delete'
        btnResult.innerHTML='convert'
        divTempFour.append(inpResult," ",btnResult , " " , btnDelt)
        btnDelt.addEventListener('click' , function(){
            window.location.reload()
        })
        btnResult.addEventListener('click' , function(){
            let pragresult = document.createElement('p')
            let result = ( parseInt(inpResult.value)-32 )*5/9
            pragresult.innerHTML=result +" "+'c'
            pragresult.style.margin='1rem'
            divTempFour.append(pragresult)
        })
    }
})