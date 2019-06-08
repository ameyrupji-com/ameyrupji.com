site.contact = (function ($) {
    "use strict"
  
    var Model = {
    },
    View = {
        contactForm: {
            formId: '#contact-me-form',
            nameInputId: '#fullNameInput',
            telephoneInputId: '#telephoneInput',
            emailInputId: '#emailInput',
            messageInputId: '#messageTextarea',
            submitBtnId: '#contact-submit-btn',
            submitBtnSendingId: '#contact-submit-btn i',
            cancelBtnId: '#cancel-btn',
            reasonInputId: '#reasonInput'
        },
        contactFromAlertsId: '#contact-me-form-alerts'
    },
    Controller = {
        initilizeContactFromSendBtn: function initilizeContactFromSendBtn() {
            $.validator.addMethod("fullName", function(value, element) {
                return this.optional(element) || /[A-Za-z]{2,}\s[A-Za-z]{1,}\s{0}[A-Za-z]{0,}/.test( value );
            }, "Please enter the valid Full Name");
            $(View.contactForm.submitBtnId).click(function() {
                $(View.contactForm.formId).validate({
                    rules: {
                        fullNameInput: {
                            required: true,
                            fullName: true
                        },
                        emailInput: {
                            required: true,
                            email: true
                        },
                        telephoneInput: {
                            required: true,
                            phoneUS: true
                        },
                        messageTextarea: {
                            required: true,
                            minlength: 100
                        }
                    },
                    highlight: function (element) {
                        $(element)
                            .closest('.form-label-group')
                                .removeClass('success')
                                .addClass('error');
                    },
                    success: function (element) {
                        element
                            .text('✓')
                            .addClass('valid')
                            .closest('.form-label-group')
                                .removeClass('error')
                                .addClass('success');
                    },
                    invalidHandler: function name() {
                        console.log('Form Invalid!')
                    },
                    submitHandler: function(form) {
                        console.log('Form Valid! Submitting form.')
                        $(View.contactForm.submitBtnSendingId).css('display', 'visible')
                        var name = $(View.contactForm.nameInputId).val();
                        var email = $(View.contactForm.emailInputId).val();
                        var message = $(View.contactForm.messageInputId).val();
                        var telephone = $(View.contactForm.telephoneInputId).val();
                        var reason = $(View.contactForm.reasonInputId + ' option:selected').text();
                        var data = {
                            name: name,
                            telephone: telephone,
                            email: email,
                            message: message,
                            reason: reason
                        }
                    
                        var contactFromAlert =  $(View.contactFromAlertsId)
                        var url = $(View.contactForm.formId).attr('target')
                        console.log('Submitting to:')
                        console.log(url)
                        console.log('Data:')
                        console.log(data)
                        $.ajax({
                            type: 'POST',
                            url : url,
                            dataType: 'json',
                            crossDomain: true,
                            contentType: 'application/json',
                            data: JSON.stringify(data),
                            success: function () {
                                console.log("Contact form successfully submitted!")
                                contactFromAlert
                                    .css('display', 'visible')
                                    .removeClass('alert-danger')
                                    .addClass('alert-success')
                                    .html('<i class="fas fa-circle-notch fa-spin"></i> Your message has been successfully sent! I will get back at my earliest convinience.')
                            },
                            error: function () {
                                console.log("Contact form errored!")
                                contactFromAlert
                                    .css('display', 'visible')
                                    .removeClass('alert-success')
                                    .addClass('alert-danger')
                                    .html('<i class="fas fa-circle-notch fa-spin"></i> Error sending your message! I have taken a note of this and will try to fix this ASAP.')
                            },
                            complete: function() {
                                $(View.contactForm.submitBtnSendingId).css('display', 'none')
                                $(View.contactForm.formId).trigger("reset")
                                $(View.contactForm.submitBtnId).removeAttr('disabled')
                                setTimeout(() => {
                                    contactFromAlert.css('display', 'none')
                                }, 4000);
                            }
                        });
                        return false;
                    }
                });
            })
        },
        changeReason: function changeReason(value) {
            console.log('In contact:changeReason(' + value + ')')
            $(View.contactForm.reasonInputId).val(value);
        },
        init: function init() {
            console.log('In contact:init()')
            Controller.initilizeContactFromSendBtn()
        }
    }
   
    return {
        init: Controller.init,
        changeReason: Controller.changeReason
    };
})(jQuery);