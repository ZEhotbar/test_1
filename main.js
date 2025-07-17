//задача 1 


const regEXP = /^\d+$/


const CheksNumber = (str) => {
    if (regEXP.test(str)) {
        return true;
    }
    else{
        return false;
        }
}

console.log(CheksNumber("123"))
console.log(CheksNumber('aaa'))


// задаа 2 

// let second = 0;

// const  setIntervalSecond = setInterval (() => {
//     second ++;
//     console.log('Время прошло!!')
// }, 1000)

// задача 3

let Numb = 0; 

const  numberSecond =  setInterval(() => {
    Numb++;
    if (Numb <= 10 ) {
        console.log(`Numbers supers pupers ${Numb}`)
    }
    else if (Numb >= 10 ){
        clearInterval(numberSecond)
    }

}, 1000)    

// задача 4 

const clickBlock = document.querySelector(".block");



clickBlock.onclick = () => {
    clickBlock.classList.toggle('active')
};

// задача 5 

function xhrFUNCS() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'data.json')
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send()

    xhr.onload = () => {
        const data = JSON.parse(xhr.response)
        console.log(data)
    }
}

xhrFUNCS();