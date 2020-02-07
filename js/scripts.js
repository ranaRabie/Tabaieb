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
$(window).resize(function(){
    console.log('resize');
    splittedBlksHeightHandling();
});
$(document).ready(function () {
    fixedHeightParagraph();
    fixedHeightParagraph();
    initiateAnimation();

    setTimeout(function(){
        splittedBlksHeightHandling();
    }, 300);
    
    
    
    try {
        $('.datepicker').datepicker();
    }
    catch(err) {
        // NO DATE PICKER IN PAGE
    }
});