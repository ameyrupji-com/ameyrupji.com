site.cover = (function ($) {
    "use strict"
  
    var Model = {
    },
    View = {
        navbarTogglerBtnClass: '.navbar-toggler',
        navbarBtnClass: '.navbar'
    },
    Controller = {
        initilizeNavbarTogglerBtn: function initilizeNavbarTogglerBtn() {
            $(View.navbarTogglerBtnClass).click(function() {
                $(View.navbarBtnClass).toggleClass('navbar-open') 
            })
        },
        init: function init() {
            console.log('In cover:init()')
            Controller.initilizeNavbarTogglerBtn()
        }
    }
   
    return {
        init: Controller.init,
    };
})(jQuery);