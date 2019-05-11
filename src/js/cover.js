site.cover = (function ($) {
    "use strict"
  
    var Model = {
        MenuHeight: '70px'
    },
    View = {
        navbarClass: '.navbar',
        navbarTogglerBtnClass: '.navbar-toggler',
        navbarBtnClass: '.navbar',
        contentClass: '#jumbotron-content'
    },
    Controller = {
        initializefixedNavBarOnScroll: function fixedNavBarOnScroll() {
            console.log('In cover:initializefixedNavBarOnScroll()')
            
            if($(window).scrollTop() > 20) {
                $(View.navbarClass).removeClass('bg-transparent').addClass('fixed-top');
                $(View.contentClass).css('margin-top', Model.MenuHeight)
            }
            if($(window).scrollTop() < 20) {
                $(View.navbarClass).removeClass('fixed-top').addClass('bg-transparent');
                $(View.contentClass).css('margin-top', 0)
            }

            $(window).on('scroll', function(){
                if($(window).scrollTop() > 20) {
                    $(View.navbarClass).removeClass('bg-transparent').addClass('fixed-top');
                    $(View.contentClass).css('margin-top', Model.MenuHeight)
                }
                if($(window).scrollTop() < 20) {
                    $(View.navbarClass).removeClass('fixed-top').addClass('bg-transparent');
                    $(View.contentClass).css('margin-top', 0)
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