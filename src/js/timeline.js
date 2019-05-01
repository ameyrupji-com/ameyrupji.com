site.timeline = (function ($) {
  "use strict"

  var Model = {
  },
  View = {
    timelineBlocksClass: '.timeline-block',
    timelineBlocksAlternateClass: '.timeline-block-alt',
    timelineImageContainerClass: '.timeline-img-container',
    timelineImageContainerAlternateClass: '.timeline-img-container-alt',
    timelineContentContainerClass: '.timeline-content',
    timelineAllButtonsId: '#timeline-btn-all',
    timelineWorkBtnId: '#timeline-btn-work',
    timelineEducationBtnId: '#timeline-btn-education',
    timelineBtnGroupBtnClass: '#timeline-main .btn-group .btn'
  },
  Controller = {
    initializeTimelineAnimation: function initializeTimelineAnimation() {
      var $timeline_block = $(View.timelineBlocksClass);
      var $timeline_block_alt = $(View.timelineBlocksAlternateClass);
    
      //hide timeline blocks which are outside the viewport
      $timeline_block.each(function(){
        if($(this).offset().top > $(window).scrollTop()+$(window).height() * 0.75) {
          $(this).find('.timeline-img-container, .timeline-content').addClass('is-hidden');
        }
      });
    
      $timeline_block_alt.each(function(){
        if($(this).offset().top > $(window).scrollTop()+$(window).height() * 0.75) {
          $(this).find('.timeline-img-container-alt').addClass('is-hidden');
        }
      });
    
      // on scolling, show/animate timeline blocks when enter the viewport
      $(window).on('scroll', function(){
        $timeline_block.each(function(){
          if($(this).offset().top <= $(window).scrollTop()+$(window).height() * 0.75 && $(this).find('.timeline-img-container').hasClass('is-hidden')) {
            $(this).find('.timeline-img-container, .timeline-content').removeClass('is-hidden').addClass('bounce-in');
          }
        });
        $timeline_block_alt.each(function(){
          if($(this).offset().top <= $(window).scrollTop()+$(window).height() * 0.75 && $(this).find('.timeline-img-container-alt').hasClass('is-hidden')) {
            $(this).find('.timeline-img-container-alt').removeClass('is-hidden').addClass('bounce-in');
          }
        });
      });
    },
    initilizeTimelineBtns: function initilizeTimelineBtns() {
      var $timeline_block = $(View.timelineBlocksClass);
      var $timeline_block_alt = $(View.timelineBlocksAlternateClass);

      $(View.timelineAllButtonsId).click(function() {
        $(View.timelineBtnGroupBtnClass).removeClass('btn-primary').addClass('btn-light')
        $(this).removeClass('btn-light').addClass('btn-primary')

        $timeline_block.each(function(){
            $(this).removeClass('timeline-hide');
        });

        $timeline_block_alt.each(function(){
            $(this).removeClass('timeline-hide');
        });
      });
      $(View.timelineWorkBtnId).click(function() {
        $(View.timelineBtnGroupBtnClass).removeClass('btn-primary').addClass('btn-light')
        $(this).removeClass('btn-light').addClass('btn-primary')
    
        // unhide everything
        $timeline_block.each(function(){
          $(this).removeClass('timeline-hide');
        });
    
        $timeline_block_alt.each(function(){
          $(this).removeClass('timeline-hide');
        });
    
        // hide everything thing but the work
        $timeline_block.each(function(){
          if(!$(this).hasClass('work')) {
            $(this).addClass('timeline-hide');
          }
        });
    
        $timeline_block_alt.each(function(){
          if(!$(this).hasClass('work')) {
            $(this).addClass('timeline-hide');
          }
        });
      });
      $(View.timelineEducationBtnId).click(function() {
        $(View.timelineBtnGroupBtnClass).removeClass('btn-primary').addClass('btn-light')
        $(this).removeClass('btn-light').addClass('btn-primary')
    
        // unhide everything
        $timeline_block.each(function(){
          $(this).removeClass('timeline-hide');
        });
    
        $timeline_block_alt.each(function(){
          $(this).removeClass('timeline-hide');
        });
    
        // hide everything thing but the work
        $timeline_block.each(function(){
          if(!$(this).hasClass('education')) {
            $(this).addClass('timeline-hide');
          }
        });
    
        $timeline_block_alt.each(function(){
          if(!$(this).hasClass('education')) {
            $(this).addClass('timeline-hide');
          }
        });
      });
    },
    init: function init() {
      console.log('In timeline:init()')
      Controller.initializeTimelineAnimation()
      Controller.initilizeTimelineBtns()
    }
  }
  
  return {
    init: Controller.init,
  };
})(jQuery);