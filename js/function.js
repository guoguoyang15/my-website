
//This is the images zoom in or out functions
$(function(){
  // Get the current width and height of elements with class "pic"
  $w = $('.pic').width();
  $h = $('.pic').height();

  // Add 20 pixels to the width and height, and store in variables "$w2" and "$h2"
  $w2 = $w + 20;
  $h2 = $h + 20;

  // When hovering over an element with class "pic", animate its height, width, and position
  $('.pic').hover(function(){
      $(this).stop().animate({height:$h2,width:$w2,left:"-10px",top:"-10px"},500);
  },function(){
      // When the hover ends, animate the element back to its original height, width, and position
      $(this).stop().animate({height:$h,width:$w,left:"0px",top:"0px"},500);
  });
});


 // change the brightness of the image when the mouse moves on top and resume when out
 document.addEventListener('DOMContentLoaded', () => {
  // Get a reference to the element with id "Image_left"
  const Image_left = document.querySelector('#Image_left');

  // When the mouse enters the element, increase its brightness and add a transition effect
  Image_left.addEventListener('mouseenter', () => {
    Image_left.style.filter = 'brightness(1.4)';
    Image_left.style.transition = 'filter 0.5s ease-in-out';
  });

  // When the mouse leaves the element, reset its brightness and add a transition effect
  Image_left.addEventListener('mouseleave', () => {
    Image_left.style.filter = 'brightness(1)';
    Image_left.style.transition = 'filter 0.5s ease-in-out';
  });
});