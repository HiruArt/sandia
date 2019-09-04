$(document).ready(function () {

    $('.header-top__mobile-menu-btn').click(function () {
       $('.header-top__menu').toggle('open-menu');
       $('.header-top__mobile-menu-btn').toggleClass('btn-open');
    });


    $(window).scroll(function () {
        var offset = this.pageYOffset;
        var distance = $('.footer__hand-phone').offset().top;
        $('.project-item').each(function () {
            // console.log($(this));
            if(offset + 600 > $(this)[0].offsetTop ){
                $(this).addClass('project-item--animate');
            }

        });
        // if(this.pageYOffset + 600 > top){
        //     $('.project__list').addClass('project__list--animate');
        // }

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




    var one =  $('.triangle__item--one');
    var two = $('.triangle__item--two');
    var three = $('.triangle__item--three');
    var four = $('.triangle__item--four');
    var five = $('.triangle__item--five');

    animateTriangle(one);
    animateTriangle(two);
    animateTriangle(three);
    animateTriangle(four);
    animateTriangle(five);

    $(window).scroll();
});


function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)


    // var h = $(window).height() - 50;
    // var w = $(window).width() - 50;


    var h = $('.triangle__inner').height() - 250;
    var w = $(window).width() - 50;

    var nw, nh;

    // nh = Math.floor(Math.random() * h);
    // nw = Math.floor(Math.random() * w);
    // if (pos) {
    //     nh = Math.floor(Math.random() * h);
    //     nw = 1;
    // }
    // else {
        nh = Math.floor(Math.random() * h);
        nw = Math.floor(Math.random() * w);
    // }

    return [nh,nw];

}

function animateTriangle(e){
    var newq = makeNewPosition();
    var oldq = e.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    // $('.triangle__item--one').animate({ top: newq[0], left: newq[1] }, speed, function(){
    //     animateDiv();
    // });
    // $('.triangle__item--two').animate({ top: newq[0], left: newq[1] }, speed, function(){
    //     animateDiv();
    // });
    // $('.triangle__item--three').animate({ top: newq[0], left: newq[1] }, speed, function(){
    //     animateDiv();
    // });
    e.animate({ top: newq[0], left: newq[1] }, speed, function(){
        animateTriangle(e);
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}
