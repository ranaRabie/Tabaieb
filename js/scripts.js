function fixedHeader(){
    try {
        const headerDiv = document.getElementById("header-wrap");
        const navBar = document.getElementById('nav-bar');
        if(window.pageYOffset  >= 35){
            headerDiv.classList.add('header-fixed');
            navBar.classList.remove('navbar-dark');
            navBar.classList.add('navbar-light');
        }
        else{
            headerDiv.classList.remove('header-fixed');
            navBar.classList.remove('navbar-light');
            navBar.classList.add('navbar-dark');
        }
    }
    catch(err) {
        return false;
    }
}

function fixedHeightParagraph(){
    let minimized_elements = $('.fix-paragraph-height p');
    minimized_elements.each(function(){
        let t = $(this).text();
        if(t.length < 70) return;

        $(this).html(
            t.slice(0,170)+'<span>... </span>'+
            '<span style="display:none;">'+ t.slice(170,t.length)+'</span>'
        );

    });
};

function initiateAnimation(){
    AOS.init({
        easing: 'ease-in-out-sine',
        duration: 1500
    });
}

function mobCloseMainMenu(){
    // $('.navbar-collapse').delay(0).animate({left: '-300px'}, 1000);
    $('.navbar-collapse').fadeOut();
    $('.navbar-collapse').removeClass('active-nav');
}

function mobOpenMainMenu(){
    // $('.navbar-collapse').delay(0).animate({left: '0'}, 1000);
    $('.navbar-collapse').fadeIn();
    $('.navbar-collapse').addClass('active-nav');
}

$(window).on('scroll', function(){
    fixedHeader();
});

function splittedBlksHeightHandling(){
    if($(window).height() < 768){
        let H = $('#h-why .features-blk').outerHeight(true);
        $('#h-why .features-bg').innerHeight(H);
    }
}


function toggleFullscreen(elem) {
    elem = elem || document.documentElement;
    if (!document.fullscreenElement && !document.mozFullScreenElement &&
      !document.webkitFullscreenElement && !document.msFullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
}

$(window).resize(function(){
    splittedBlksHeightHandling();
});
$(document).ready(function () {
    let rtlCheck = false;
    if($('body').hasClass('rtl')){
        rtlCheck = true;
    }
    fixedHeightParagraph();
    fixedHeightParagraph();
    initiateAnimation();

    setTimeout(function(){
        splittedBlksHeightHandling();
    }, 300);

    if($('.doc-aval-times')){
        $('.doc-aval-times .owl-carousel').owlCarousel({
            rtl: rtlCheck,
            items:3,
            loop:false,
            margin:10,
            autoplay:false,
            nav: true,
            responsive:{
                0:{
                    items: 2
                },
                576:{
                    items: 3
                },
                768:{
                    items: 5
                },
                992:{
                    items: 2,
                },
                1200:{
                    items: 3,
                }
            }
        });
    }

    let docStatusText;
    $('.prof-doc-stat input').change(function(){
        if($(this).is(":checked")){
            $('.prof-doc-stat input').each(function(){
                $(this).prop('checked', true);
            });
        }else{
            $('.prof-doc-stat input').each(function(){
                $(this).prop('checked', false);
            });
        }
        if($('.prof-doc-stat').hasClass('active')){
            $('.prof-doc-stat').removeClass('active');
            if($('body').hasClass('rtl')){
                docStatusText = 'غير فعال';
            }else{
                docStatusText = 'not active';
            }
        }else{
            $('.prof-doc-stat').addClass('active');
            if($('body').hasClass('rtl')){
                docStatusText = 'فعال';
            }else{
                docStatusText = 'active';
            }
            
        }
        $('.doc-stat').text(docStatusText);
    });
    
    $('.nav-item-wz-sub > a').click(function(){
        $('.nav-item-wz-sub').not($(this).closest('.nav-item-wz-sub')).find('ul').slideUp('slow');
        $(this).closest('.nav-item-wz-sub').find('ul').slideToggle('slow');
    });

    $('.login-btn').click(function(){
        $('#registerModal').modal('hide');
        $('#loginModal').modal('show');
    });
    $('#register-btn').click(function(){
        $('#loginModal').modal('hide');
        $('#registerModal').modal('show');
    });

    $('.msg-send-upload input').change(function(){
        let inputVal = $(this).val();
        inputVal = inputVal.split('\\');
        inputVal = inputVal[2];
        $('.uploads').append('<span class="text-light">'+inputVal+'</span>');
    });


    $('.inbox-chat-item').click(function(){
        if($(document).innerWidth() < 768){
            $('.inbox-chats').hide();
            $('.inbox-msgs').show();
        }
    });
    $('.back-to-chats').click(function(){
        if($(document).innerWidth() < 768){
            $('.inbox-msgs').hide();
            $('.inbox-chats').show();
        }
    });

    $('.up-field').change(function(){
        let fieldVal = $(this).val();
        fieldVal = fieldVal.split('\\');
        fieldVal = fieldVal[2];
        let uploadHTML = '<span class="d-block">'+fieldVal+'</span>'
        $(this).closest('.up-field-container').find('.uploads').append(uploadHTML);
    });

    $('#toggle-fs').click(function() {
        let fsBlk = document.getElementById('call-container');
        toggleFullscreen(fsBlk);
        $('#call-container').toggleClass('fs');
    });
    $('#hide-chat').click(function(){
        $('#call-container').addClass('hidden-chat');
    });
    $('#toggle-chat').click(function(){
        $('#call-container').toggleClass('hidden-chat');
    });

    try{
        $('.timepicker').wickedpicker();
    }catch(err){

    }
    
    try {
        $('.datepicker').datepicker();
    }
    catch(err) {
        // NO DATE PICKER IN PAGE
    }
});
