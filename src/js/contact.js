site.contact = (function ($) {
    "use strict"
  
    var Model = {
    },
    View = {
        contatForm: {
            formId: '#contact-me-form',
            nameInputId: '#full-name-input',
            telephoneInputId: '#telephone-input',
            emailInputId: '#email-input',
            messageInputId: '#message-textarea',
            submitBtnId: '#contact-submit-btn',
            cancelBtnId: '#cancel-btn'
        },
        contactFromAlertsId: '#contact-me-form-alerts'
    },
    Controller = {
        initilizeContactFromSendBtn: function initilizeContactFromSendBtn() {
            $(View.contatForm.submitBtnId).click(function contactSubmit(e) {
                $(this).attr('disabled', 'disabled')
                e.preventDefault();
                var name_re = /[A-Za-z]{1}[A-Za-z]/;
                if (!name_re.test($(View.contatForm.nameInputId).val())) {
                  alert ("Name can not less than 2 char");
                  return;
                }
            
                var mobile_re = /[0-9]{10}/;
                if (!mobile_re.test($(View.contatForm.telephoneInputId).val())) {
                  alert ("Please enter valid phone number");
                  return;
                }
            
                if ($(View.contatForm.emailInputId).val()=="") {
                  alert ("Please enter your email id");
                  return;
                }
            
                var email_re = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
                if (!email_re.test($(View.contatForm.emailInputId).val())) {
                  alert ("Please enter valid email address");
                  return;
                }
            
                var name = $(View.contatForm.nameInputId).val();
                var email = $(View.contatForm.emailInputId).val();
                var message = $(View.contatForm.messageInputId).val();
                var telephone = $(View.contatForm.telephoneInputId).val();
                var data = {
                   name: name,
                   telephone: telephone,
                   email: email,
                   message: message
                }
            
                var contactFromAlert =  $(View.contactFromAlertsId)

                $.ajax({
                  type: 'POST',
                  url : 'https://api.beta.ameyrupji.com/email/',
                  dataType: 'json',
                  crossDomain: true,
                  contentType: 'application/json',
                  data: JSON.stringify(data),
                  success: function () {
                    contactFromAlert
                        .removeClass('alert-danger')
                        .addClass('alert-success')
                        .html('Your message has been successfully sent! I will get back at my earliest convinience.')
                  },
                  error: function () {
                    contactFromAlert
                        .removeClass('alert-success')
                        .addClass('alert-danger')
                        .html('Error sending your message! I have taken a note of this and will try to fix this ASAP.')
                  },
                  complete: function() {
                    $(View.contatForm.formId).trigger("reset")
                    $(View.contatForm.submitBtnId).removeAttr('disabled')
                  }
                });
              }) 
        },
        init: function init() {
            console.log('In contact:init()')
            Controller.initilizeContactFromSendBtn()
        }
    }
   
    return {
        init: Controller.init,
    };
})(jQuery);