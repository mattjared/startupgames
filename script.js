$(document).ready(function() {  
var stickyNavTop = $('.sticky-navigation').offset().top;  
  
var stickyNav = function(){  
var scrollTop = $(window).scrollTop();  
       
if (scrollTop > stickyNavTop) {   
    $('.sticky-navigation').addClass('sticky');  
} else {  
    $('.sticky-navigation').removeClass('sticky');   
}  
};  
  
stickyNav();  
  
$(window).scroll(function() {  
    stickyNav();  
});  
});