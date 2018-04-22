// Init Tabs
$( function() {
    $( "#tabs" ).tabs();
} );

$('.trending-carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});

// Switch product items view
$('.grid-thumbs').on('click', function(){
    // Find cards and remove class row-card
    $('.all-items-container .card').removeClass('row-card');
    $('.all-items-container .col-4').removeClass('col-12');
    // $('.all-items-container .card').removeClass('card-text-info');
});

$('.grid-list').on('click', function(){
    // Find cards and add class row-card
    $('.all-items-container .card').addClass('row-card');
    $('.all-items-container .col-4').addClass('col-12');
    // $('.all-items-container .card').addClass('card-text-info');

});
