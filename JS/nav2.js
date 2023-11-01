$(document).ready(function() {
    redimensionar();
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

    function redimensionar () {
        var imagen = $("#slider1");
        var altura_imagen = imagen.css("height");
        var carrusel = $(".carrusel");

        carrusel.css("height", altura_imagen);
    }

    $(window).resize(function () {
        comprobar();
        redimensionar();
    });
});