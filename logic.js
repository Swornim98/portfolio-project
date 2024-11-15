var side=0;
let mainPartImage=document.querySelector(".main-part-image");

let nav2=document.querySelector(".nav2");
$(document).ready(function(){
$(window).scroll(function(){
    if (this.scrollY > 10){
      $('.nav2').addClass("sticky");
    }else{
        $(".nav2").removeClass("sticky");
    }
})
});


// hamburger

const hamMenu = document.querySelector(".ham");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
