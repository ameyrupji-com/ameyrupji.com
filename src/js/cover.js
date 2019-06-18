site.cover = (function ($) {
    "use strict"
  
    var Model = {
        MenuHeight: '70px',
        scrollStart: 20
    },
    View = {
        navbarClass: '.navbar',
        navbarTogglerBtnClass: '.navbar-toggler',
        navbarBtnClass: '.navbar',
        contentClass: '#jumbotron-content'
    },
    Controller = {
        scrollFunction: function scrollFunction() {
            // console.log('In cover:scrollFunction()')
            if ( $(window).scrollTop() > Model.scrollStart  && $(window).scrollTop() < ($(window).height() - 200) ) {
                $(View.navbarClass).removeClass('bg-transparent');
                $(View.navbarClass).removeClass('nav-scrolled-vh');
                $(View.navbarClass).addClass('nav-scrolled-20');

            } else if ( $(window).scrollTop() > ($(window).height()-200) ) {
                $(View.navbarClass).removeClass('bg-transparent');
                $(View.navbarClass).addClass('nav-scrolled-20');
                $(View.navbarClass).addClass('nav-scrolled-vh');
                
            } else {
                $(View.navbarClass).addClass('bg-transparent');
                $(View.navbarClass).removeClass('nav-scrolled-20');
                $(View.navbarClass).removeClass('nav-scrolled-vh');
            }
        },
        initializeFixedNavBarOnScroll: function fixedNavBarOnScroll() {
            console.log('In cover:initializeFixedNavBarOnScroll()')
            window.onscroll = function() {
                Controller.scrollFunction()
            }
        },
        initilizeNavbarTogglerBtn: function initilizeNavbarTogglerBtn() {
            $(View.navbarTogglerBtnClass).click(function() {
                $(View.navbarBtnClass).toggleClass('navbar-open') 
            })
        },
        initilizeMobileNavbarToggleEvents: function initilizMobileNavbarToggleEvents() {
            console.log('In cover:initilizeMobileNavbarToggleEvents()');
            $(View.navbarClass).on('shown.bs.collapse', function() {
                console.log('Navbar Closed');
                $('body').addClass('fixed-position')
            })
            $(View.navbarClass).on('hidden.bs.collapse', function() {
                console.log('Navbar Opened');
                $('body').removeClass('fixed-position')
            })
        },
        init: function init() {
            console.log('In cover:init()')
            Controller.initilizeNavbarTogglerBtn()
            Controller.initilizeMobileNavbarToggleEvents()
            Controller.scrollFunction()
            Controller.initializeFixedNavBarOnScroll()
        }
    }
   
    return {
        init: Controller.init,
    };
})(jQuery);