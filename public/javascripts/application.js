$(window).on('beforeunload', function(){
  $('main, footer').animate({
    opacity: 0,
  }, 300);
});