$(document).ready(function(){

    // Click id a
    var jump=function(e)
    {
        $(document).off("scroll");
        if (e){
           var url = $(this).attr("href");
           var id = url.substring(url.lastIndexOf('/') + 1);
           target = id
        }else{
           var target = location.hash;
        }

        if($(target).offset() != undefined){
            e.preventDefault();
            $('html, body').stop().animate({
                'scrollTop': $(target).offset().top
            });

            location.hash = target;
        }
    }

    $(document).on('click', 'body.home a[href*="#"]', function (e) {
        console.log(1)
        $(this).closest('nav').find('li').removeClass('active')
        $(this).closest('li').addClass('active')
        //Close menu mb
        $('.menu-mb__btn').removeClass('active')
        $('.nav__mobile').removeClass('active')
        $('body').removeClass('modal-open')
    });


    $('body.home a[href*="#"]').bind("click", jump);

    function isEmpty( el ){
          return !$.trim(el.html())
      }

    // new WOW().init();

    /*----Get Header Height ---*/
    function get_header_height() {
        var header_sticky=$("header").outerHeight()
        $('body').css("--header-height",header_sticky+'px')
    }

    setTimeout(function(){
        get_header_height()
    }, 500);

    $( window ).resize(function() {
      get_header_height()
    });


    /*----Back to top---*/
    var back_to_top=$(".back-to-top"),offset=220,duration=500;$(window).scroll(function(){$(this).scrollTop()>offset?back_to_top.addClass("active"):back_to_top.removeClass("active")}),$(document).on("click",".back-to-top",function(o){return o.preventDefault(),$("html, body").animate({scrollTop:0},duration),!1});

     //-------------------------------------------------
    // Menu
    //-------------------------------------------------
    $.fn.dnmenu = function( options ) {

        let thiz = this
        let menu = $(this).attr('data-id')
        let menu_id = '#'+menu

        // Default options
        var settings = $.extend({
            name: 'Menu'
        }, options );

        // get ScrollBar Width
        function getScrollBarWidth () {
            var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
                widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
            $outer.remove();
            return 100 - widthWithScroll;
        };
        let ScrollBarWidth = getScrollBarWidth() + 'px';

        // Create wrap
        // Button click
        thiz.click(function(e){
            e.preventDefault()
            if(thiz.hasClass('active')){
                // $('.dnmenu-backdrop').remove()
                $('body').removeClass('modal-open').css("padding-right","")
                $(menu_id).removeClass('active')
                $(thiz).removeClass('active')

            } else {
                // $('<div class="dnmenu-backdrop">').appendTo('body')
                // $('body').addClass('modal-open').css("padding-right",ScrollBarWidth)
                $(menu_id).addClass('active')
                $(thiz).addClass('active')

            }
        });
        // Apply options
        return;
    };

    $('.menu-mb__btn').dnmenu()


    //check home
    if($('body').hasClass( "home" )){

    }
});


