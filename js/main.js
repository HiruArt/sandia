$(document).ready(function () {

    $('.header-top__mobile-menu-btn').click(function () {
       $('.header-top__menu').toggle('open-menu');
       $('.header-top__mobile-menu-btn').toggleClass('btn-open');
    });


    $(window).scroll(function () {
        var offset = this.pageYOffset;
        var distance = $('.footer__hand-phone').offset().top;
        $('.project-item').each(function () {
            if(offset - 300 > $(this)[0].offsetTop ){
                $(this).addClass('project-item--animate');
            }

        });

        if (offset > distance - 300  ) {
            $('.footer__hand-phone').addClass('show');
        }
    });


    $(".header-top__menu-item").on("click",".header-top__menu-link", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });





    var one =  $('.triangle__item--one');
    var two = $('.triangle__item--two');
    var three = $('.triangle__item--three');
    var four = $('.triangle__item--four');
    var five = $('.triangle__item--five');


if($(window).width() > 1150 ){


    var flagHover = false;
    $('.triangle__item').mousemove(function (e) {
        if(flagHover == true || $(this).hasClass('triangle__item--four') || $(this).hasClass('triangle__item--five')){
            return;
        }
        flagHover = true;
        setTimeout(function () {
            flagHover = false;
        }, 1000);
        $(this).animate().stop();
        var e = e || window.event,
        x_letter = e.offsetX==undefined?e.layerX:e.offsetX,
        y_letter = e.offsetY==undefined?e.layerY:e.offsetY,
        nextCoordX,
        nextCoordY;
        var positionXold = $(this).offset().left;
        var positionYold = $(this).offset().top;
        var that = $(this);



        if(x_letter > $(this).width() / 2){
            nextCoordX = (positionXold + (-x_letter/2)) + 100;
            nextCoordX = positionXold - (($(this).width() - x_letter) * 2);

        } else {
            nextCoordX = (positionXold + x_letter) + 100;
        }

        if(y_letter > $(this).height() / 2){
            console.log('21312');
            nextCoordY = positionYold - (($(this).height() - y_letter) * 2);
        } else {
            nextCoordY = (y_letter + positionYold) + 100;
        }

        console.log('--');
        console.log(positionYold);
        console.log(nextCoordY);
        console.log(y_letter);

        $(this).animate( { left : nextCoordX, top : nextCoordY}, {
                duration: 3000,
                specialEasing: {
                    left: "linear",
                    top: "linear"
                }
            }
        );


    });

    $('.triangle__item').mouseout(function (e) {
        animationStart($(this));
    });



    function animationStart(e) {
        animateTri(e);
    }

    animationStart(one);
    animationStart(two);
    animationStart(three);
    animationStart(four);
    animationStart(five);
}
    $(window).scroll();
});

function animateTri(e) {
    var newPos = newPosition(e);
    var nowPositionElement = e.offset();
    var moveSpeed = calcElementSpeed([nowPositionElement.top, nowPositionElement.left], newPos);

    e.animate({ top: newPos[0], left: newPos[1] }, moveSpeed, function(){
        animateTri(e);
    });
}
function newPosition(el) {

    var h = $('.triangle__inner').height() -450;
    var w = $(window).width() - 250;

    var left = el.offset().left;
    var leftOrRight = (w/2) - left < 0 ? false : true;




    var nextHeightY = Math.floor((Math.random() )* h);

    if($(el).data('top')== '1'){
        nextHeightY = nextHeightY - 200;
    } else {
        nextHeightY = nextHeightY + 300;
    }


    if(leftOrRight == false){
        var nextWidthX = Math.floor( (w/2) + (Math.random() * 1000) );

        if((nextWidthX - left) > 300 || (nextWidthX - left) < -300){

            nextWidthX = (nextWidthX / 2) + (w/2);
        }


        if(w - nextWidthX > 600){
            // alert(w - nextWidthX);
            nextWidthX = nextWidthX + 300;
            // alert(nextWidthX);
        }

    } else {
        var nextWidthX = Math.floor( (Math.random() * 1000) - 300);

        if((nextWidthX - left) > 300 || (nextWidthX - left) < -300){

            nextWidthX = (nextWidthX / 2);
        }

    }





    return [nextHeightY, nextWidthX];
}
function calcElementSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);



    var moveSpeed = Math.random() * (6000 - 4000) + 4000;
    // console.log(moveSpeed);

    return moveSpeed;
}



