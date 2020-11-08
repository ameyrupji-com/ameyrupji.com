site.footer = (function ($) {
  "use strict"

  var Model = {
  },
  View = {
    feedbackLink: '#feedback-link',
    oldVersionLinks: '.old-version-links'
  },
  Controller = {
    initializeFeedbackLink: function initializeFeedbackLink() {
        $(View.feedbackLink).on('click', function() {
          site.contact.changeReason('feedback')
        })
    },
    updateVersionLink: function initializeFeedbackLink() {
        $(View.oldVersionLinks).each(function () {
          var oldUrl = $(this).attr("href");
          var newUrl = oldUrl +  "/index.html";
          $(this).attr("href", newUrl);
        });
    },
    init: function init() {
      console.log('In footer:init()')
      Controller.initializeFeedbackLink()
      Controller.updateVersionLink()
    }
  }
  
  return {
    init: Controller.init,
  };
})(jQuery);