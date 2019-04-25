site.cover = (function ($) {
    "use strict"
  
    var Model = {
    },
    View = {
        navbarClass: '.navbar',
        navbarTogglerBtnClass: '.navbar-toggler',
        navbarBtnClass: '.navbar'
    },
    Controller = {
        initializefixedNavBarOnScroll: function fixedNavBarOnScroll() {
            console.log('In cover:initializefixedNavBarOnScroll()')
            
            if($(window).scrollTop() > 20) {
                $(View.navbarClass).removeClass('bg-transparent').addClass('fixed-top');
            }
            if($(window).scrollTop() < 20) {
                $(View.navbarClass).removeClass('fixed-top').addClass('bg-transparent');
            }

            $(window).on('scroll', function(){
                if($(window).scrollTop() > 20) {
                    $(View.navbarClass).removeClass('bg-transparent').addClass('fixed-top');
                }
                if($(window).scrollTop() < 20) {
                    $(View.navbarClass).removeClass('fixed-top').addClass('bg-transparent');
                }
            })
        },
        initilizeNavbarTogglerBtn: function initilizeNavbarTogglerBtn() {
            $(View.navbarTogglerBtnClass).click(function() {
                $(View.navbarBtnClass).toggleClass('navbar-open') 
            })
        },
        init: function init() {
            console.log('In cover:init()')
            Controller.initilizeNavbarTogglerBtn()
            Controller.initializefixedNavBarOnScroll()
        }
    }
   
    return {
        init: Controller.init,
    };
})(jQuery);