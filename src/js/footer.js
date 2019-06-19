site.footer = (function ($) {
  "use strict"

  var Model = {
  },
  View = {
    feedbackLink: '#feedback-link'
  },
  Controller = {
    initializeFeedbackLink: function initializeFeedbackLink() {
        $(View.feedbackLink).on('click', function() {
          site.contact.changeReason('feedback')
        })
    },
    init: function init() {
      console.log('In footer:init()')
      Controller.initializeFeedbackLink()
    }
  }
  
  return {
    init: Controller.init,
  };
})(jQuery);