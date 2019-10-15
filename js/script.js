$(document).ready(function(){

    $.ajax({
        url: 'js/data.js',
        type: "GET",
        success: function(res) {
            const result = JSON.parse(res);
            result.map( item => {
                console.log(item.First)
            })
        },
        error: function(err) {
            console.log(err)
        }
    })

    $(".channel-track + .icon-down").on('click', function() {
        $("html,body").animate({
            scrollTop: $('.wrapper').offset().top
        }, 600)
    })

    $(".new-videos-alert").on('click', function() {
        $(".new-videos").removeClass('hide')
        $(".new-videos").addClass('toggle');
    })

    $(".new-videos .close-list").on('click', function() {
        $(".new-videos").addClass('hide');
    })

})