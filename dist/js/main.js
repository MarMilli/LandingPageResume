$(document).ready(function () {
    $('.your-class').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="slick__btnPrev" type="button"></button>',
        nextArrow: '<button class="slick__btnNext" type="button"></button>',
        arrows: true,
        responsive: [
            {
                breakpoint: 1189,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 625,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });

    /*Анимация label в формах*/

    function testLabelActive(field){
        var label = field.parent('.formBlock').find(".label"),
            valueField = field.val().length;

        if(valueField > 0)
        {
            label.addClass("label_active");
        }
    }
    function labelActive(field){
        var label = field.parent('.formBlock').find(".label");
        label.addClass("label_active");
    }/*end function labelActive*/

    function labelNoActive(field){
        var label = field.parent('.formBlock').find(".label");
        filling = field.val().length;

        if(filling < 1)
        {
            label.removeClass("label_active");
        }
    }/*end function labelNoActive*/

    $(".field").focusin(function(){
        labelActive($(this));
    });/*end $(".field").focusin*/

    $(".field").focusout(function(){
        labelNoActive($(this));
    });/*end $(".field").focusout*/
    $(".field").each(function(){
        testLabelActive($(this));
    });/*end $(".field").each*/

    //функция плавной прокрутки страницы до якоря
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });

    var  toggle = false; // переключатель
    //функция открытия выпадающего меню
    function openMenuMainBurger(){
        if (toggle == false)
            $('.bgModalWindow').show(); //затемняем фон
        else $('.bgModalWindow').hide();
            $('.dropdownMenuButton').toggleClass('close'); //меняем иконку бургера на крестик
            $('.menuMain').toggleClass('menuMainBurger'); // открываем меню
            $('.menuMain>div').toggleClass('menuMain__items', toggle).toggleClass('menuMainBurger__items');
            toggle = !toggle;
        };
    //вызов функции при клике на кнопку
    $(function(){
        $('.dropdownMenuButton').click(function(){
            openMenuMainBurger();
        });
    });
    //закрытие меню при клике на любой области вне меню 
    $(document).click( function(event){
      if (toggle == true) {
              if( $(event.target).closest(".menuMain").length ) return;
              openMenuMainBurger();
              console.log('dfsdfsdfsf');
              event.stopPropagation();
             }
    });

});
