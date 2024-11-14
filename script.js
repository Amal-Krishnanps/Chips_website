const  swiper=new Swiper('.Tslider',{
    autoplay:{
        delay:2000,
    },
    loop:true,
});

let bars=document.querySelector(".bars .fa-bars");
let menu=document.querySelector(".menu");
let nav=document.querySelector("nav");

bars.addEventListener("click",() =>{
    menu.classList.toggle("show");
});

window.addEventListener("scroll",()=>{
   if (window.scrollY >50){
    nav.classList.add("sticky_nav");
   }
   else{
    nav.classList.remove("sticky_nav");
   }
});