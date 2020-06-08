var configure = document.querySelector('.MIXcont');
var mixer = mixitup(configure);

$(window).scroll(function(){
  $('nav').toggleClass('Scrolled',$(this).scrollTop() > 200);
});

$('.counter').counterUp({
delay: 10,
time: 500
});