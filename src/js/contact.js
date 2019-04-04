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
            $('#contact-submit-btn').click(function contactSubmit(e) {
                $(this).attr('disabled', 'disabled')
                e.preventDefault();
                var name_re = /[A-Za-z]{1}[A-Za-z]/;
                if (!name_re.test($("#full-name-input").val())) {
                  alert ("Name can not less than 2 char");
                  return;
                }
            
                var mobile_re = /[0-9]{10}/;
                if (!mobile_re.test($("#telephone-input").val())) {
                  alert ("Please enter valid phone number");
                  return;
                }
            
                if ($("#email-input").val()=="") {
                  alert ("Please enter your email id");
                  return;
                }
            
                var email_re = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
                if (!email_re.test($("#email-input").val())) {
                  alert ("Please enter valid email address");
                  return;
                }
            
                var name = $("#full-name-input").val();
                var telephone = $("#telephone-input").val();
                var email = $("#email-input").val();
                var message = $("#message-input").val();
                var data = {
                   name: name,
                   telephone: telephone,
                   email: email,
                   message: message
                }
            
                $.ajax({
                  type: "POST",
                  url : "http://api.ameyrupji.com/send-email/",
                  dataType: "json",
                  crossDomain: "true",
                  contentType: "application/json; charset=utf-8",
                  data: JSON.stringify(data),
            
                  success: function () {
                    alert('Success!')
                  },
                  error: function () {
                    alert("Failed!")
                  },
                  complete: function() {
                    $("#contact-me-form").trigger("reset")
                    $('#contact-submit-btn').removeAttr('disabled')
                  }
                });
              }) 
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