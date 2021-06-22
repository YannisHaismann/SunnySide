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

/**
 * Replace all SVG images with inline SVG
 */
jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});