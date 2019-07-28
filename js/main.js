$(document).ready(function(){
let nav = (tar,clas)=>{
    
     $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(tar).addClass(clas);
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(tar).removeClass(clas);
        }
    }); 
}
nav(".nav__dark","nav__hidden")
nav(".nav__logo","nav__logo--display")


});