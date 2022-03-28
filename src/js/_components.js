//burger 
$('.burger').click(function(){
    $(this).toggleClass("active");
    $('.header__nav').toggleClass("active");
    $('.grey-back').toggleClass("active");
    $('body').toggleClass("hidden");
});

//nav-mob
$('.nav__elem').click(function(){
    $('.burger').removeClass("active");
    $('.header__nav').removeClass("active");
    $('.grey-back').removeClass("active");
    $('body').removeClass("hidden");
});

//nav active elem 
$(function() {
    $('.nav__elem').removeClass('active') 
  
    var loc = window.location.href;
    if(/foto/.test(loc)) {
      $('#nav-1').addClass('active');
    }
    if(/lechenie/.test(loc)) {
      $('#nav-2').addClass('active');
    }
    if(/homeopathy/.test(loc)) {
      $('#nav-3').addClass('active');
    }
    if(/doktor/.test(loc)) {
      $('#nav-4').addClass('active');
    }
    if(/zdravnitsa/.test(loc)) {
      $('#nav-5').addClass('active');
    }
    if(/contact/.test(loc)) {
      $('#nav-6').addClass('active');
    }
    return
  });
  //nav-active-end