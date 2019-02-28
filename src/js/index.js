// Can also be included with a regular script tag
import Typed from 'typed.js';


$(document).ready(function() {
  var $timeline_block = $('.timeline-block');
  var $timeline_block_alt = $('.timeline-block-alt');

  //hide timeline blocks which are outside the viewport
  $timeline_block.each(function(){
    if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
      $(this).find('.timeline-img-container, .timeline-content').addClass('is-hidden');
    }
  });

  $timeline_block_alt.each(function(){
    if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
      $(this).find('.timeline-img-container-alt').addClass('is-hidden');
    }
  });

  // on scolling, show/animate timeline blocks when enter the viewport
  $(window).on('scroll', function(){
    $timeline_block.each(function(){
      if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.timeline-img-container').hasClass('is-hidden') ) {
        $(this).find('.timeline-img-container, .timeline-content').removeClass('is-hidden').addClass('bounce-in');
      }
    });
    $timeline_block_alt.each(function(){
      if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.timeline-img-container-alt').hasClass('is-hidden') ) {
        $(this).find('.timeline-img-container-alt').removeClass('is-hidden').addClass('bounce-in');
      }
    });
  });

  
  // scroll amination
  $('a').click(function() {
    // alert("link clicked");
    console.log("link clicked");
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  // typing animations
  var options = {
    strings: ["Welcome to my website!", "I am still in the process of build this website."],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
  }

  var typed = new Typed(".typed", options);
  
  //Enable tooltips everywhere
  $('[data-toggle="tooltip"]').tooltip()
});