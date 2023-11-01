$(document).ready(function() {
    let nav = $("#nav")
    let isAlturaOriginal = true;
    let btn_HamburguesaUWU = $("#btn-menu");
    let nav_celular = $(".nav-celular")

    btn_HamburguesaUWU.click(function () {
        if (isAlturaOriginal) {
            nav.addClass("expandido");
        } else {
            nav.removeClass("expandido");
        }

        isAlturaOriginal = !isAlturaOriginal;
    });

    function comprobar () {
        let display = nav_celular.css("display");

        if (display == "none" && isAlturaOriginal == false) {
            nav.removeClass("expandido")
            isAlturaOriginal = !isAlturaOriginal;
        }
    }

    $(window).resize(function () {
        comprobar();
    });
});