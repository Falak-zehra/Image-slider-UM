const  images = document.querySelectorAll(".im");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const box = document.querySelector(".box");
const slides = document.querySelector(".slide"); 

let arr = Array.from(images);

let count = 1;





right.addEventListener('click',()=>{
    if(count<arr.length){
        
    slides.style.transform = `translateX(-${count*800}px)`;
    count++
    }

})

left.addEventListener('click',()=>{
    if(count!=0 ){
        count--
    slides.style.transform = `translateX(-${count*800}px)`;
    
    }


})

















