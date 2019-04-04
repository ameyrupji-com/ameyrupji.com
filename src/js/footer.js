site.footer = (function ($) {
    "use strict"
  
    var Model = {
    },
    View = {
        releaseNumberSpanId = '#release-number'
    },
    Controller = {
        initilizeSkillsBtns: function initilizeSkillsBtn() {
            // get the latest release 
            $.ajax({url: "https://api.github.com/repos/ameyrupji/ameyrupji.com/releases/latest", success: function(result){
                var release_number = result['tag_name'] 
                $(releaseNumberSpanId).html(release_number);
            }});
        },
        init: function init() {
            console.log('In footer:init()')
            Controller.initilizeSkillsBtns()
        }
    }
   
    return {
        init: Controller.init,
    };
})(jQuery);