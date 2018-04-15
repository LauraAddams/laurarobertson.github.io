$(window).scroll(function(){
    if ($(window).scrollTop() >= 470) {
       $('header').addClass('fixed-header');
       $('#about p').addClass('fixed-adjustment');
    }
    else {
       $('header').removeClass('fixed-header');
       $('#about p').removeClass('fixed-adjustment');
    }
});
