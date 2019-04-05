site.skills = (function ($) {
  "use strict"

  var Model = {
  },
  View = {
    skillsUnusedBlockClass: '.unused',
    skillsAllBtnId: '#skills-btn-all',
    skillsCurrentBtnId: '#skills-btn-current',
    skillsBtnGroupBtnClass: '#skills-main .btn-group .btn'
  },
  Controller = {
    initilizeSkillsBtns: function initilizeSkillsBtn() {
      var $skills_blocks = $(View.skillsUnusedBlockClass)
      $skills_blocks.each(function(){
        $(this).hide()
      });

      $(View.skillsAllBtnId).click(function() {
        $(View.skillsBtnGroupBtnClass).removeClass('btn-light').addClass('btn-primary')
        $(this).removeClass('btn-primary').addClass('btn-light')

        $skills_blocks.each(function(){
        $(this).show()
        });
      });

      $(View.skillsCurrentBtnId).click(function() {
        $(View.skillsBtnGroupBtnClass).removeClass('btn-light').addClass('btn-primary')
        $(this).removeClass('btn-primary').addClass('btn-light')

        $skills_blocks.each(function(){
        $(this).hide()
        });
      });
    },
    init: function init() {
      console.log('In skills:init()')
      Controller.initilizeSkillsBtns()
    }
  }
  
  return {
    init: Controller.init,
  };
})(jQuery);