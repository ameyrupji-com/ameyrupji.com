site.footer = (function ($) {
  "use strict"

  var Model = {
  },
  View = {
    releaseNumberSpanId: '#release-number-span',
    feedbackLink: '#feedback-link'
  },
  Controller = {
    initilizeVersionForSite: function initilizeVersionForSite() {
      // get the latest release 
      $.ajax({url: "https://api.github.com/repos/ameyrupji/ameyrupji.com/releases/latest", success: function(result){
        var release_number = result['tag_name'] 
        console.log('Found release number: ' + release_number)
        $(View.releaseNumberSpanId).html(release_number);
      }});
    },
    initializeFeedbackLink: function initializeFeedbackLink() {
        $(View.feedbackLink).on('click', function() {
          site.contact.changeReason('feedback')
        })
    },
    init: function init() {
      console.log('In footer:init()')
      Controller.initilizeVersionForSite()
      Controller.initializeFeedbackLink()
    }
  }
  
  return {
    init: Controller.init,
  };
})(jQuery);