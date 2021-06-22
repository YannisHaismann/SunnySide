/**
 * Actualisation de la page entre 370 et 420pixels
 */
var resizeTimeout;
window.addEventListener('resize', function(event) {
    if(window.innerWidth < 420 && window.innerWidth > 370){
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function(){
            window.location.reload();
        }, 1000);
    }
});

/**
 * PHONE NAV BAR
 */
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
    var $img        = jQuery(this);
    var imgID       = $img.attr('id');
    var imgClass    = $img.attr('class');
    var imgURL      = $img.attr('src');

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

/**
 * -- FR -/- EN -- V.
 */
var contentJSON = "content.json";

readJsonFile(contentJSON).then(function (reponse){
    let content = JSON.parse(reponse);

    if(document.documentElement.lang.toUpperCase() == 'FR'){
        changeLanguage("FR", content);
        $('.lang').attr('id', "FR");
    }

    $('.lang').on('click', () => {
        if($('.lang').attr('id') == 'FR'){
            $('.lang').attr('id', "EN");
            changeLanguage("EN", content);
        }else{
            $('.lang').attr('id', "FR");
            changeLanguage("FR", content);
        }
    });
});

changeLanguage("FR", content);

function changeLanguage(lang, content){
    let about               = $('#about');
    let services            = $('#services');
    let projects            = $('#projects');
    let contact             = $('#contact');
    let title               = $('#title');
    let midContentOne       = [$('#midContentOneH3'), $('#midContentOneP'), $('#midContentOneA > span')];
    let midContentTwo       = [$('#midContentTwoH3'), $('#midContentTwoP'), $('#midContentTwoA > span')];
    let midContentThree     = [$('#midContentThreeH3'), $('#midContentThreeP')];
    let midContentFour      = [$('#midContentFourH3'), $('#midContentFourP')];
    let testimonialsTitle   = $('#testimonialsTitle');
    let testiOne            = [$('#testiOneBlockQuote'), $('#testiOneAuthor'), $('#testiOneJob')];
    let testiTwo            = [$('#testiTwoBlockQuote'), $('#testiTwoAuthor'), $('#testiTwoJob')];
    let testiThree          = [$('#testiThreeBlockQuote'), $('#testiThreeAuthor'), $('#testiThreeJob')];
    let footer              = [$('#footer-about'), $('#footer-services'), $('#footer-projects')];

    about.text(content[lang]['top-nav']['about']);
    services.text(content[lang]['top-nav']['services']);
    projects.text(content[lang]['top-nav']['projects']);
    contact.text(content[lang]['top-nav']['contact']);
    title.text(content[lang]['top-content']['h2']);

    midContentOne[0].text(content[lang]['mid-content']['one']['h3']);
    midContentOne[1].text(content[lang]['mid-content']['one']['p']);
    midContentOne[2].text(content[lang]['mid-content']['one']['a']);
    midContentTwo[0].text(content[lang]['mid-content']['two']['h3']);
    midContentTwo[1].text(content[lang]['mid-content']['two']['p']);
    midContentTwo[2].text(content[lang]['mid-content']['two']['a']);
    midContentThree[0].text(content[lang]['mid-content']['three']['h3']);
    midContentThree[1].text(content[lang]['mid-content']['three']['p']);
    midContentFour[0].text(content[lang]['mid-content']['four']['h3']);
    midContentFour[1].text(content[lang]['mid-content']['four']['p']);

    testimonialsTitle.text(content[lang]['testimonials']['title']);
    testiOne[0].text(content[lang]['testimonials']['one']['blockquote']);
    testiOne[1].text(content[lang]['testimonials']['one']['author']);
    testiTwo[2].text(content[lang]['testimonials']['two']['job']);
    testiTwo[0].text(content[lang]['testimonials']['two']['blockquote']);
    testiThree[1].text(content[lang]['testimonials']['three']['author']);
    testiThree[2].text(content[lang]['testimonials']['three']['job']);

    footer[0].text(content[lang]['top-nav']['about']);
    footer[1].text(content[lang]['top-nav']['services']);
    footer[2].text(content[lang]['top-nav']['projects']);

}

function readJsonFile(file){
    return new Promise((resolve, reject) => {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function(){
            if(rawFile.readyState === 4){
                if(rawFile.status === 200 || rawFile.status === 0){
                    resolve(rawFile.responseText);
                }else{
                    reject(rawFile);
                }
            }
        }
        rawFile.send();
    })
}