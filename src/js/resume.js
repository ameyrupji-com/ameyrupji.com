site.resume = (function ($) {
    "use strict"
  
    var Model = {
        resumeUrl: window.location.href.split('#')[0] + 'assets/pdf/ameyrupji_resume.pdf',
        emailTitle: 'Check out Amey Rupji\'s resume at:',
        emailSubject: 'Check out Amey Rupji\'s Resume',
        emailTo: ''
    },
    View = {
        shareBtnClass: '.sharer.btn',
        shareBtnId: '#share-email-btn'
    },
    Controller = {
        initilizeShareEmailBtn: function initilizeShareEmailBtn() {
            console.log('In resumeModule:initilizeShareEmailBtn()')
          
            $(View.shareBtnId)
                .attr('data-url', Model.resumeUrl)
                .attr('data-title', Model.emailTitle)
                .attr('data-subject', Model.emailSubject)
                .attr('data-to', Model.emailTo)
                .attr('data-sharer', 'email');

            $(View.shareBtnClass).click(function(e) {
                e.preventDefault();
                return false;
            });
        },
        init: function init() {
            console.log('In resumeModule:init()')
            Controller.initilizeShareEmailBtn()
        }
    }
   
    return {
        init: Controller.init,
    };
})(jQuery);