$('.map-hover').on('click', function() {
    $(this).find('.contact-map').css({'display': 'block'});
    $(this).find('.map-close').css({'display': 'block'})
});

$('.map-close').on('click', function() {
    $('.contact-map').slideUp();
    $(this).slideUp();
});