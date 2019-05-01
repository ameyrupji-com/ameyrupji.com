window.site = (function() {
    return {}
})();

site.all = (function (){
    "use strict"
  
    var Model = {
    },
    View = {
        navBarClass: '.navbar'
    },
    Controller = {
        initializeTooltip: function initializeTooltip() {
            //Enable tooltip everywhere
            $('[data-toggle="tooltip"]').tooltip()    
        },
        initilizeScrollAnimation: function initilizeScrollAnimation() {
            // scroll animation
            $('a').on('click', function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
                    && location.hostname == this.hostname) {
                    

                    $(View.navBarClass).removeClass('navbar-open')

                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return true;
                    }
                }

                
            });
        },
        init: function init() {
            console.log('In app:init()')
            Controller.initilizeScrollAnimation()
            Controller.initializeTooltip()
        }
    }
   
    return {
        init: Controller.init,
    };
})(jQuery);