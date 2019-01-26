var hellopreloader = document.getElementById("hellopreloader_preload");
var body = document.querySelector('wrapper');

function fadeOutnojquery(el) {
    el.style.opacity = 1;
    var interhellopreloader = setInterval(function () {
        el.style.opacity = el.style.opacity - 0.05;
        if (el.style.opacity <= 0.05) {
            clearInterval(interhellopreloader);
            hellopreloader.style.display = "none";
        }
    }, 16);
}
window.onload = function () {
    setTimeout(function () {
        fadeOutnojquery(hellopreloader);
    }, 2000);
    body.opacity('1');
};
$(document).ready(function () {
    var link = $('.pushy a');
    var header = $('.header');
    var menu = $('.menu-btn');
    var flag = false;

    //scroll

    link.on('click', function (e) {
        e.preventDefault();

        var href = $(this).attr('href');
        var target = $(href).offset().top - 50;
        $('html, body').animate({
            scrollTop: target
        }, 1000)
    })

    //backtotop

    jQuery("#backtotop").click(function () {
        jQuery("body,html").animate({
            scrollTop: 0
        }, 2000);
    });
    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 150) {
            jQuery("#backtotop").addClass("visible");
        } else {
            jQuery("#backtotop").removeClass("visible");
        }
    });
    //menuFixed
    function menuFixed() {
        if (scrollY >= header.innerHeight() && !flag) {
            menu.addClass('fix').css('opacity', 0).animate({
                opacity: '1'
            }, 500);
            header
            flag = true;
        } else if (scrollY <= header.innerHeight() && flag) {
            menu.animate({
                opacity: '0'
            }, 500, function () {
                menu.removeClass('fix').removeAttr('style');
            })
            header.removeClass('fix').removeAttr()
            flag = false;
        }
    }
    $(window).on('scroll', menuFixed);
    menuFixed();

    //wow//
    new WOW().init();
});

// jQuery(document).ready(function ($) {
//     $.iMissYou({
//         title: "Вернись! Сделай заказ!",
//         favicon: {
//             enabled: true,
//             src: 'angry.ico'
//         }
//     });
// }); 