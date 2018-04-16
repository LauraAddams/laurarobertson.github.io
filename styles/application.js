$(window).scroll(() => {
  if ($(window).scrollTop() >= 500) {
    $('header').addClass('fixed-header');
    $('#about p').addClass('fixed-adjustment');
  } else {
    $('header').removeClass('fixed-header');
    $('#about p').removeClass('fixed-adjustment');
  }
});

(function($) {
  $.fn.progress = function() {
    var percent = this.data("percent");
    this.css("width", percent + "%");
  };
}(jQuery));

$(document).ready(() => {
  $('.bar1').progress();
  $('.bar2').progress();
  $('.bar3').progress();
  $('.bar4').progress();
  $('.bar5').progress();
});
