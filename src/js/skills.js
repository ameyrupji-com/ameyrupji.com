site.skills = (function ($) {
  "use strict"

  var Model = {
  },
  View = {
    skillsArrayOther: '#skills-array-other',
    showMore: '#show-more'
  },
  Controller = {
    initializeSkillsBtns: function initializeSkillsBtn() {
      var $skillsArrayOther = $(View.skillsArrayOther)
      $skillsArrayOther.hide()

      $(View.showMore).click(function(event) {
        event.preventDefault();
        $skillsArrayOther.show();
        $(View.showMore).hide();
      })
    },
    init: function init() {
      console.log('In skills:init()')
      Controller.initializeSkillsBtns()
    }
  }
  
  return {
    init: Controller.init,
  };
})(jQuery);