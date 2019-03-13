// Can also be included with a regular script tag
$(document).ready(function() {
  // navbar
  $('.navbar-toggler').click(function() {
    $('.navbar').toggleClass('navbar-open') 
  })

  var $timeline_block = $('.timeline-block');
  var $timeline_block_alt = $('.timeline-block-alt');

  //hide timeline blocks which are outside the viewport
  $timeline_block.each(function(){
    if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
      $(this).find('.timeline-img-container, .timeline-content').addClass('is-hidden');
    }
  });

  $timeline_block_alt.each(function(){
    if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
      $(this).find('.timeline-img-container-alt').addClass('is-hidden');
    }
  });

  // on scolling, show/animate timeline blocks when enter the viewport
  $(window).on('scroll', function(){
    $timeline_block.each(function(){
      if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.timeline-img-container').hasClass('is-hidden') ) {
        $(this).find('.timeline-img-container, .timeline-content').removeClass('is-hidden').addClass('bounce-in');
      }
    });
    $timeline_block_alt.each(function(){
      if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.timeline-img-container-alt').hasClass('is-hidden') ) {
        $(this).find('.timeline-img-container-alt').removeClass('is-hidden').addClass('bounce-in');
      }
    });
  });

  
  // scroll animation
  $('a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  // typing animations
  var options = {
    strings: ["Welcome to my website!", "I am still in the process of building this website."],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
  }

  var typed = new Typed(".typed", options);
  
  //Enable tooltip everywhere
  $('[data-toggle="tooltip"]').tooltip()

  $('#timeline-btn-all').click(function() {
    $('#timeline-main .btn-group .btn').removeClass('btn-primary').addClass('btn-light')
    $(this).removeClass('btn-light').addClass('btn-primary')

    $timeline_block.each(function(){
      $(this).removeClass('timeline-hide');
    });

    $timeline_block_alt.each(function(){
      $(this).removeClass('timeline-hide');
    });
  });
  $('#timeline-btn-work').click(function() {
    $('#timeline-main .btn-group .btn').removeClass('btn-primary').addClass('btn-light')
    $(this).removeClass('btn-light').addClass('btn-primary')

    // unhide everything
    $timeline_block.each(function(){
      $(this).removeClass('timeline-hide');
    });

    $timeline_block_alt.each(function(){
      $(this).removeClass('timeline-hide');
    });

    // hide everything thing but the work
    $timeline_block.each(function(){
      if(!$(this).hasClass('work')) {
        $(this).addClass('timeline-hide');
      }
    });

    $timeline_block_alt.each(function(){
      if(!$(this).hasClass('work')) {
        $(this).addClass('timeline-hide');
      }
    });
  });
  $('#timeline-btn-education').click(function() {
    $('#timeline-main .btn-group .btn').removeClass('btn-primary').addClass('btn-light')
    $(this).removeClass('btn-light').addClass('btn-primary')

    // unhide everything
    $timeline_block.each(function(){
      $(this).removeClass('timeline-hide');
    });

    $timeline_block_alt.each(function(){
      $(this).removeClass('timeline-hide');
    });

    // hide everything thing but the work
    $timeline_block.each(function(){
      if(!$(this).hasClass('education')) {
        $(this).addClass('timeline-hide');
      }
    });

    $timeline_block_alt.each(function(){
      if(!$(this).hasClass('education')) {
        $(this).addClass('timeline-hide');
      }
    });
  });

  var $skills_blocks = $('.unused')
  $skills_blocks.each(function(){
    $(this).hide()
  });

  $('#skills-btn-all').click(function() {
    $('#skills-main .btn-group .btn').removeClass('btn-light').addClass('btn-primary')
    $(this).removeClass('btn-primary').addClass('btn-light')

    $skills_blocks.each(function(){
      $(this).show()
    });
  });

  $('#skills-btn-current').click(function() {
    $('#skills-main .btn-group .btn').removeClass('btn-light').addClass('btn-primary')
    $(this).removeClass('btn-primary').addClass('btn-light')

    $skills_blocks.each(function(){
      $(this).hide()
    });
  });

  //https://ellisonleao.github.io/sharer.js
  var url = window.location.href.split('#')[0] + '/assets/pdf/ameyrupji_resume.pdf';
  var title = 'Check out Amey Rupji\'s resume at:';
  var subject = 'Check out Amey Rupji\'s - Resume';
  var to = ""

  $('#share-email-btn').attr('data-url', url).attr('data-title', title).attr('data-subject', subject).attr('data-to', to).attr('data-sharer', 'email');
  $(document).on('click','.sharer.btn',function(e){
    e.preventDefault();
    return false;
   });

  // get the latest release 
  // https://api.github.com/repos/ameyrupji/ameyrupji.com/releases/latest
  $.ajax({url: "https://api.github.com/repos/ameyrupji/ameyrupji.com/releases/latest", success: function(result){
    var release_number = result['tag_name'] 
    $("#release-number").html(release_number);
  }});

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
     };

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
});