$(document).ready(function () {

    $('.header-top__mobile-menu-btn').click(function () {
       $('.header-top__menu').toggle('open-menu');
       $('.header-top__mobile-menu-btn').toggleClass('btn-open');
    });


    $(window).scroll(function () {
        var offset = this.pageYOffset;
        var distance = $('.footer__hand-phone').offset().top;
        $('.project-item').each(function () {
            if(offset + 600 > $(this)[0].offsetTop ){
                $(this).addClass('project-item--animate');
            }

        });

        if (offset > distance - 300  ) {
            $('.footer__hand-phone').addClass('show');
        }
    });


    // $(window).mousemove(function(e) {
    //     var mauseX = e.pageX;
    // });

    // $(window).mousemove(function(e) {
    //     var mauseX = e.pageX;
    //     var mauseY = e.pageY;
    //
    //     hoverT(mauseX, mauseY);
    // });
    //
    //
    // function hoverT (mauseX, mauseY) {
    //     $('.triangle__item').each(function (i) {
    //         $(this).hover(function (){
    //             var t = $(this);
    //
    //             // console.log(mauseX);
    //
    //             var tyx = t.offset();
    //             tx =  Math.floor(tyx.left);
    //             ty =  Math.floor(tyx.top);
    //
    //             console.log(tx);
    //             console.log(ty);
    //             // console.log(mauseY, mauseX);
    //
    //             if (tyx.left < mauseX)
    //             {
    //                 console.log('+');
    //             }
    //             else if (tyx.left > mauseX)
    //             {
    //                 console.log('-');
    //             }
    //             //
    //             $(this).animate().stop(true);
    //             // makeNewPosition(pos);
    //             // animateTriangle(t);
    //         });
    //     })
    // }

    let one =  $('.triangle__item--one');
    let two = $('.triangle__item--two');
    let three = $('.triangle__item--three');
    let four = $('.triangle__item--four');
    let five = $('.triangle__item--five');


    $('.triangle__item').each(function (e) {

        let mauseXold = 0;
        let mauseX = 0;
        let mauseYold = 0;
        let mauseY = 0;

        setInterval(function () {
            $(window).mousemove( function (x) {
                mauseX = x.pageX;
                mauseY = x.pageY;
            });
            mauseXold = mauseX;
            mauseYold = mauseY;
        }, 200);

        let positionXold = $(this).offset().left;
        let positionYold = $(this).offset().top;

        $(this).hover(
        function moveRight() {

            let positionX;
            let positionY;

            $(this).animate().stop(true);
            if (mauseX > mauseXold && mauseY < mauseYold ) {
                positionX = $(this).offset().left + 200;
                positionY = $(this).offset().top - 200;
                $(this).animate( { left : positionX, top : positionY}, 1500 );
                // $(this).animate( { left : +50, top : -50}, 1500 );
                // $(this).addClass('ttBR');
            }
            if (mauseX > mauseXold && mauseY > mauseYold ) {
                positionX = $(this).offset().left + 200;
                positionY = $(this).offset().top + 200;
                $(this).animate( { left : positionX, top : positionY}, 1500 );
                // $(this).animate( { left : +50, top : +50}, 1500 );
                // $(this).addClass('ttTR');

            }
            if (mauseX < mauseXold && mauseY < mauseYold ) {
                positionX = $(this).offset().left - 200;
                positionY = $(this).offset().top - 200;
                $(this).animate( { left : positionX, top : positionY}, 1500 );
                // $(this).animate( { left : -50, top : -50}, 1500 );
                // $(this).addClass('ttBL');
            }
            if (mauseX < mauseXold && mauseY > mauseYold ) {
                positionX = $(this).offset().left - 200;
                positionY = $(this).offset().top + 200;
                $(this).animate( { left : positionX, top : positionY}, 1500 );
                // $(this).animate( { left : -50, top : +50}, 1500 );
                // $(this).addClass('ttTL');
            }
            console.log($(this));
        },
        function () {

            $(this).animate( { left : positionXold, top : positionYold}, 1500 );

            // $(this).removeClass('ttTL');
            // $(this).removeClass('ttBL');
            // $(this).removeClass('ttTR');
            // $(this).removeClass('ttBR');
            animationStart($(this));
        })
    });

    function animationStart(e) {
        animateTri(e);
    }

    animationStart(one);
    animationStart(two);
    animationStart(three);
    animationStart(four);
    animationStart(five);

    $(window).scroll();
});

function animateTri(e) {
    let newPos = newPosition();
    let nowPositionElement = e.offset();
    let moveSpeed = calcElementSpeed([nowPositionElement.top, nowPositionElement.left], newPos);

    e.animate({ top: newPos[0], left: newPos[1] }, moveSpeed, function(){
        animateTri(e);
    });
}
function newPosition() {

    let h = $('.triangle__inner').height() - 250;
    let w = $(window).width() - 50;

    let nextHeightY = Math.floor(Math.random()* h);
    let nextWidthX = Math.floor(Math.random()* w);

    return [nextHeightY, nextWidthX];
}
function calcElementSpeed(prev, next) {

    let x = Math.abs(prev[1] - next[1]);
    let y = Math.abs(prev[0] - next[0]);

    let moveSpeed = 5000;

    return moveSpeed;
}



