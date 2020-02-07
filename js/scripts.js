function fixedHeader(){
    try {
        const headerDiv = document.getElementById("header-wrap");
        const navBar = document.getElementById('nav-bar');
        if(window.pageYOffset  >= 35 && window.innerWidth >= 768){
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
    $('.navbar-collapse').delay(0).animate({top: '-100%'}, 1000);
}

function mobOpenMainMenu(){
    $('.navbar-collapse').delay(0).animate({top: '0'}, 1000);
}

$(window).on('scroll', function(){
    fixedHeader();
});

$(document).ready(function () {
    fixedHeightParagraph();
    fixedHeightParagraph();
    initiateAnimation();
    try {
        $('.datepicker').datepicker();
    }
    catch(err) {
        // NO DATE PICKER IN PAGE
    }
});