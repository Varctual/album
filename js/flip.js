// this is function
// function flipIt() {
//     $('.card').toggleClass('flipped');
// }
// $('.card').click(flipIt);
// 

// This also works
// $('.card').on('click', function() {
//   $(this).toggleClass('flipped');
// });

$(document).ready(function(){


    $('.card').on('click', function() {
        $('.card').toggleClass('flipped');
    });
    $('#flipButton').on('click', function() {
        $('.card').toggleClass('flipped');
    });




    // For verical flip
    $('.cardV').on('click', function() {
        $('.cardV').toggleClass('flipped');
    });
    $('#flipButtonV').on('click', function() {
        $('.cardV').toggleClass('flipped');
    });


    // Works but it is not a good solution
    // $(window).scroll(function(){
    //     $(".fader").css("opacity", 1 - $(window).scrollTop() / 1500);
    // });


    // Good solution uses math > (height - scrollTop) / height > gives value set which is linear form 1 to 0.
    // $(window).scroll(function () {
    //     var scrollTop = $(window).scrollTop();
    //     var height = $(window).height();

    //     $('.test, .slogan').css({
    //         'opacity': ((height - scrollTop) / height)
    //     }); 
    // });

    // Similiar to above solution also uses math change the number 1100 to adjust to your need
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        $('.fader, .slogan').stop().animate(
            {opacity: (( 1140-scroll )/100)+0.1},
            "slow"
        );
    });

    // For toggle
    document.querySelector("#myCard").classList.toggle("flip");

});

