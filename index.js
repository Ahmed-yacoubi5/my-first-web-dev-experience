'use strict';

const switcher = document.querySelector('.button');
document.body.style.backgroundImage = "url('background.jpg')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover"; 


  function changeBackgroundImage(bgImage) {
    document.body.style.backgroundImage = "url(" + bgImage + ")";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }
  function redirect() {
    
    
    window.open("", '_blank');
   
  }
 