let menuBtn = document.querySelector(".btn-menu");
let canlarBtn = document.querySelector(".cancelar-btn");
let navBar = document.querySelector(".navbar");

menuBtn.onclick = function(){
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    navBar.classList.add("ativar");
}
canlarBtn.onclick = function(){
menuBtn.style.opacity = "1";
menuBtn.style.pointerEvents  ="auto";
navBar.classList.remove("ativar");
}

let nav = document.querySelector("nav");
let val;
window.onscroll = function(){
    if(document.documentElement.scrollTop > 2){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
}