$(document).ready(function(){
  $('body').scrollspy({target: ".navbar", offset: 50});
  
  $("#task-4-demo a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });

  $("[id='scrollToTop']").on('click', function(event) {
    $('html, body').animate({
      scrollTop: $("body").offset().top
    }, 1000);
  });
});