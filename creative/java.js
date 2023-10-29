console.log("hello world")
const date = new Date()
let year = date.getFullYear()
let input = document.querySelector('input')
let button = document.querySelector('button')
let p = document.querySelector('p')



button.addEventListener('click',()=>{
    p.innerHTML = -input.value+year
})
//node --version
//npm --version

/*
npm init

packege name must br in small letters

To install pakage we should use npm i {packages}


*/ 




