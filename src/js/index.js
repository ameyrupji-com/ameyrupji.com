// Can also be included with a regular script tag
import Typed from 'typed.js';


$(document).ready(function() {
  var $timeline_block = $('.timeline-block');

  //hide timeline blocks which are outside the viewport
  $timeline_block.each(function(){
    if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
      $(this).find('.timeline-img, .timeline-content').addClass('is-hidden');
    }
  });

  // on scolling, show/animate timeline blocks when enter the viewport
  $(window).on('scroll', function(){
    $timeline_block.each(function(){
      if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.timeline-img').hasClass('is-hidden') ) {
        $(this).find('.timeline-img, .timeline-content').removeClass('is-hidden').addClass('bounce-in');
      }
    });
  });
});

// typing animations
var options = {
  strings: ["Welcome to my website!", "I am still in the process of build this website."],
  typeSpeed: 70,
  backSpeed: 60,
  loop: true
}

var typed = new Typed(".typed", options);

// scroll animation
// $(function() {
//   $('a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });


main();