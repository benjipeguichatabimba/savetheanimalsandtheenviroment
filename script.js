"use strict";
const bpcBoton=document.querySelector ("button.hamburger");
console.log(bpcBoton);



const nav=document.querySelector ("nav");
























function clickMenu(){

bpcBoton.classList.toggle("is-active")


nav.classList.toggle("cerrado")


}






bpcBoton.addEventListener("click",clickMenu)

































