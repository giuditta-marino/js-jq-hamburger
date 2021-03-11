// MOSTRO HAMBURGER MENU AL CLICK
  // SALVO IL DIV CON CLASS HAMBURGER MENU IN UNA VARIABILE
var hamburgerMenu = $('.hamburger-menu');
var chiusura = $('.hamburger-menu .close');

  // PRENDO EVENTO CLICK
$('.header-right i.fa-bars').click(function (){
  // AL CLICK SULL'ICONA HAMBURGER AGGIUNGO CLASSE ACTIVE
  hamburgerMenu.addClass('active');
});

// NASCONDO MENU HAMBURGER AL CLICK SULLA X
chiusura.click(function(){
  // AL CLICK SU CLOSE TOLGO LA CLASSE ACTIVE ALL'HAMBURGER MENU
  hamburgerMenu.removeClass('active');
})
