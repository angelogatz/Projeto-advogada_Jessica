window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition * .4 + 'px)';
});

/*---------------- srcoll reveal parallax ------------------*/


window.addEventListener('load', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

/*---------------- srcoll reveal social ------------------*/

window.addEventListener('load', reveal_social);

function reveal_social(){
    var reveals = document.querySelectorAll('.reveal_social');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', reveal_content);

function reveal_content(){
    var reveals = document.querySelectorAll('.reveal_content');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}


/*-------------------------------------------------------------------------*/


window.addEventListener('scroll', reveal_painel);

function reveal_painel(){
    var reveals = document.querySelectorAll('.reveal_painel');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}


/*--------------------------------------------------------------------------*/



let swiper = new Swiper('.portfolio__container', {
    cssMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: 'swiper-pagination'
    },
    slidesPerView: 1,
    autoplay: true,
    mousewheel: true,
    keyboard: true,
});

