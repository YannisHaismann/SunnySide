$('.mobile-hamburger').on('click', function(){
    $('.top-site__nav').toggle();

    if($('.mobile-hamburger').css("opacity") == 0.5){
        $('.mobile-hamburger').css("opacity", 1);
    }else{
        $('.mobile-hamburger').css("opacity", 0.5);
    }
});