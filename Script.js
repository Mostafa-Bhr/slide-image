'use strict'
const slideitem=document.querySelectorAll('.slide-item')
const removerclass=()=>{

for(let i=0; i<slideitem.length; i++){
    slideitem[i].classList.remove('active')
}
}

for(let i=0; i<slideitem.length; i++){
    slideitem[i].addEventListener('click',()=>{
        removerclass()
        slideitem[i].classList.add('active')
    })
}