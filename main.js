var resizeTimeout;
window.addEventListener('resize', function(event) {
    if(window.innerWidth < 420 && window.innerWidth > 370){
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function(){
            window.location.reload();
        }, 1000);
    }
});

$('.mobile-hamburger').on('click', function(){
    $('.top-content').toggle();

    if($('.mobile-hamburger').css("opacity") == 0.5){
        $('.mobile-hamburger').css("opacity", 1);
        $('.top-site__nav').css('display', "none");
    }else{
        $('.top-site__nav').css('display', "flex");
        $('.mobile-hamburger').css("opacity", 0.5);
    }

});